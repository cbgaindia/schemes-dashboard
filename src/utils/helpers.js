import { read, utils as xlsxUtil } from 'xlsx';

export function generateSlug(slug) {
  const temp = slug.toLowerCase().replace(/\W/g, '-'); // lower case and replace space & special chars witn '-'
  return temp.replace(/-+/g, '-').replace(/-$/, ''); // remove multiple '-' and remove '-' from end of string
}

export async function dataTransform(id) {
  const obj = {};
  let name = '';
  let type = '';
  let url = '';
  await fetch(id)
    .then((res) => res.json())
    .then((data) => {
      if (
        data.result.resources[1] &&
        data.result.resources[1].url.includes('.xlsx')
      ) {
        url = data.result.resources[1].url;
      } else {
        url = data.result.resources[0].url;
      }
      name = data.result.extras[0].value;
      type = data.result.extras[1].value;
    });

  await fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error('fetch failed');
      return res.arrayBuffer();
    })
    .then((ab) => {
      const file = new Uint8Array(ab);
      const workbook = read(file, { type: 'array' });

      const dataName = workbook.SheetNames[0];
      const data = workbook.Sheets[dataName];

      const metaName = workbook.SheetNames[1];
      const meta = workbook.Sheets[metaName];

      const dataParse = xlsxUtil.sheet_to_json(data, { header: 1 });
      const metaParse = xlsxUtil.sheet_to_json(meta, { header: 1 });

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
        description: metaObj['scheme-description'],
        name,
        frequency: metaObj.frequency,
        source: metaObj['data-source'],
        type,
        note: metaObj['note:'],
      };

      // Tabular Data
      for (let i = 3; i < dataParse[0].length; i += 1) {
        const fiscal_year = {};

        for (let j = 1; j < dataParse.length; j += 1) {
          if (dataParse[j][2]) {
            fiscal_year[dataParse[j][2]] = {
              ...fiscal_year[dataParse[j][2]],
              [dataParse[j][1]]: dataParse[j][i],
            };
          }
        }

        obj.data = {
          ...obj.data,
          [`indicator_0${i - 2}`]: {
            fiscal_year,
            name: metaObj[`indicator-${i - 2}-name`],
            description: metaObj[`indicator-${i - 2}-description`],
            note: metaObj[`indicator-${i - 2}-note`],
            slug: generateSlug(metaObj[`indicator-${i - 2}-name`]),
            unit: metaObj[`indicator-${i - 2}-unit`],
          },
        };
      }
    });
  return obj;
}

function findLink(data) {
  const newObj = {};
  Object.keys(data).forEach((elm) => {
    newObj[data[elm].name] = {
      slug: data[elm].slug,
      logo: data[elm].logo,
    };
  });
  return newObj;
}

export async function fetchRelated(name, type, data) {
  const newObj = findLink(data);
  const otherSchemes = [];
  await fetch(
    `https://openbudgetsindia.org/api/3/action/package_search?fq=schemeType:"${type}"+organization:state-wise-schemes-data&rows=10`
  )
    .then((res) => res.json())
    .then((tags) => {
      const similar = tags.result.results
        .filter((scheme) => scheme.extras[0].value != name)
        .splice(0, 4);

      similar.forEach((scheme) => {
        otherSchemes.push({
          title: scheme.extras[0].value,
          link: `/scheme/${newObj[scheme.extras[0].value].slug}`,
          img: newObj[scheme.extras[0].value].logo,
        });
      });
    });
  return otherSchemes;
}
