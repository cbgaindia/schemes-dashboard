import { read, utils as xlsxUtil } from 'xlsx';

export async function fetchAPI(path) {
  const response = await fetch(
    `https://openbudgetsindia.org/api/3/action/package_show?id=${path}`
  );
  const data = await response.json();
  return data;
}

export function generateSlug(slug) {
  if (slug) {
    const temp = slug.toLowerCase().replace(/\W/g, '-'); // lower case and replace space & special chars witn '-'
    return temp.replace(/-+/g, '-').replace(/-$/, ''); // remove multiple '-' and remove '-' from end of string
  }
  return slug;
}

async function fetchQuery(query, value) {
  let result = {};
  await fetch(
    `https://openbudgetsindia.org/api/3/action/package_search?fq=${query}:"${value}"+organization:state-wise-schemes-data`
  )
    .then((res) => res.json())
    .then((obj) => {
      result = obj.result.results;
    });
  return result;
}

export async function fetchSheets(link) {
  const result = [];
  await fetch(link)
    .then((res) => {
      if (!res.ok) throw new Error('fetch failed');
      return res.arrayBuffer();
    })
    .then((ab) => {
      const file = new Uint8Array(ab);
      const workbook = read(file, { type: 'array' });

      workbook.SheetNames.forEach((bookName) => {
        const data = workbook.Sheets[bookName];

        const dataParse = xlsxUtil.sheet_to_json(data, {
          header: 1,
          blankrows: false,
        });
        result.push(dataParse);
      });
    });
  return result;
}

export async function dataTransform(id) {
  const obj = {};
  let name;
  let type;
  let url;
  await fetch(`https://openbudgetsindia.org/api/3/action/package_show?id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data.result.resources.forEach((file) => {
        if (file.url.includes('.xlsx')) url = file.url;
      });

      name = data.result.extras[0].value;
      type = data.result.extras[1].value;
    });

  await fetchSheets(url).then((res) => {
    const dataParse = res[0];
    const metaParse = res[1];
    let metaObj = {};

    // Meta Data
    metaParse.forEach((val) => {
      if (val[0]) {
        metaObj = {
          ...metaObj,
          [generateSlug(val[0])]: val[1],
        };
      }
    });

    obj.metadata = {
      description: metaObj['scheme-description'] || '',
      name: name || '',
      frequency: metaObj.frequency || '',
      source: metaObj['data-source'] || '',
      type: type || '',
      note: metaObj['note:'] || '',
    };

    // Tabular Data
    for (let i = 3; i < dataParse[0].length; i += 1) {
      const fiscal_year = {};

      for (let j = 1; j < dataParse.length; j += 1) {
        if (dataParse[j][2]) {
          fiscal_year[dataParse[j][2]] = {
            ...fiscal_year[dataParse[j][2]],
            [dataParse[j][1]]:
              Math.round((dataParse[j][i] + Number.EPSILON) * 100) / 100 || '',
          };
        }
      }

      obj.data = {
        ...obj.data,
        [`indicator_0${i - 2}`]: {
          fiscal_year,
          name: metaObj[`indicator-${i - 2}-name`] || '',
          description: metaObj[`indicator-${i - 2}-description`] || '',
          note: metaObj[`indicator-${i - 2}-note`] || '',
          slug: generateSlug(metaObj[`indicator-${i - 2}-name`]) || '',
          unit: metaObj[`indicator-${i - 2}-unit`] || '',
        },
      };
    }
  });
  return obj;
}

export async function fetchNews() {
  const result = {};
  let link;
  await fetchQuery('schemeType', 'news').then((newsLink) => {
    link = newsLink[0].resources[0].url;
  });
  await fetchSheets(link).then((res) => {
    const allNews = res[0];

    allNews.forEach((news, index) => {
      if (!index == 0) {
        const resultArr = {
          title: news[2],
          text: news[3],
          img: news[4] || '',
          accessed_on: news[5],
          class: news[6] || '',
          link: news[7],
        };

        if (result[news[0]]) {
          result[news[0]][result[news[0]].length] = resultArr;
        } else {
          result[news[0]] = [resultArr];
        }
      }
    });
  });
  return result;
}

export async function fetchRelated(name, type, data) {
  const newObj = {}; // flatten main data file
  Object.keys(data).forEach((elm) => {
    newObj[data[elm].name] = {
      dataId: data[elm].dataId,
      icon: data[elm].logo,
    };
  });

  const otherSchemes = [];
  await fetchQuery('schemeType', type).then((res) => {
    const similar = res
      .filter((scheme) => scheme.extras[0].value != name)
      .splice(0, 4);

    similar.forEach((scheme) => {
      otherSchemes.push({
        title: scheme.extras[0].value,
        link: `/scheme/${newObj[scheme.extras[0].value].dataId}`,
        icon: newObj[scheme.extras[0].value].icon,
      });
    });
  });
  return otherSchemes;
}
