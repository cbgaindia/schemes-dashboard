import { read, utils as xlsxUtil } from 'xlsx';
import SchemesData from 'utils/schemesData';

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
  return null;
}

export async function fetchQuery(query, value) {
  const queryRes = await fetch(
    `https://openbudgetsindia.org/api/3/action/package_search?fq=${query}:"${value}"+organization:state-wise-schemes-data&rows=50`
  ).then((res) => res.json());

  return queryRes.result.results;
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
  let slug;
  let url;
  await fetchQuery('slug', id).then((data) => {
    data[0].resources.forEach((file) => {
      if (file.url.includes('.xlsx')) url = file.url;
    });

    name = data[0].extras[0].value;
    type = data[0].extras[1].value;
    slug = data[0].name || '';
  });

  await fetchSheets(url).then((res) => {
    const dataParse = res[0];
    const metaParse = res[1];
    let metaObj = {};

    if (type == "Centrally Sponsored Scheme") {

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
	      slug,
	      indicators: [],
	    };  

	    // Tabular Data
	    for (let i = 3; i < dataParse[0].length; i += 1) {
	      const fiscal_year = {};

	      for (let j = 1; j < dataParse.length; j += 1) {
		if (dataParse[j][2]) {
		  fiscal_year[dataParse[j][2].trim()] = {
		    ...fiscal_year[dataParse[j][2].trim()],
		    [dataParse[j][1]]:
		      Math.round((dataParse[j][i] + Number.EPSILON) * 100) / 100 || '',
		  };
		}
	      }

	      const indicatorSlug =
		generateSlug(metaObj[`indicator-${i - 2}-name`]) || '';

	      obj.metadata.indicators.push(indicatorSlug);

	      obj.data = {
		...obj.data,
		[`indicator_0${i - 2}`]: {
		  fiscal_year,
		  name: metaObj[`indicator-${i - 2}-name`] || '',
		  description: metaObj[`indicator-${i - 2}-description`] || '',
		  note: metaObj[`indicator-${i - 2}-note`] || '',
		  slug: indicatorSlug,
		  unit: metaObj[`indicator-${i - 2}-unit`] || '',
		},
	      };
	    }
      }
      else {

	    obj.metadata = {
	      name: name || '',
	      type: type || '',
	      slug,
	    }; 

            const state_data = []
	    for (let j = 1; j < dataParse.length; j += 1) {
		if (dataParse[j][0]) {
                           let temp_data = {}
		           temp_data[dataParse[0][0].trim()] = dataParse[j][0].trim() ;
			   temp_data[dataParse[0][1].trim()] = dataParse[j][1].trim() ;
			   temp_data[dataParse[0][2].trim()] = dataParse[j][2].trim() ;
			   temp_data[dataParse[0][3].trim()] = dataParse[j][3].trim() ;
			   temp_data[dataParse[0][4].trim()] =  Math.round((dataParse[j][4] + Number.EPSILON) * 100) / 100 || '';
                           state_data.push(temp_data);
	         }
            }
            console.log(state_data);
            obj.data = state_data;
     }

  });
  return obj;
}

export async function fetchNews(query) {
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
          title: news[2] || '',
          text: news[3] || '',
          img: news[4] || '',
          accessed_on: news[5] || '',
          class: news[6] || '',
          link: news[7] || '',
        };

        if (result[news[0]]) {
          result[news[0]][result[news[0]].length] = resultArr;
        } else {
          result[news[0]] = [resultArr];
        }
      }
    });
  });

  const recentDevelopmentsArray = [];

  if (result[query])
    result[query].sort(
      (a, b) => new Date(b.accessed_on) - new Date(a.accessed_on)
    );

  if (result[query]) {
    while (result[query].length) {
      recentDevelopmentsArray.push(result[query].splice(0, 2));
    }
  }
  return recentDevelopmentsArray;
}

export async function fetchRelated(name, type) {
  const otherSchemes = [];
  await fetchQuery('schemeType', type).then((res) => {
    const similar = res
      .filter((scheme) => scheme.extras[0].value != name)
      .splice(0, 4);

    similar.forEach((scheme) => {
      otherSchemes.push({
        title: scheme.extras[0].value || 'Scheme Name not defined',
        link: `/scheme/${scheme.extras[2].value || '#'}`,
        icon: SchemesData[scheme.extras[2].value].logo || '',
      });
    });
  });
  return otherSchemes;
}
