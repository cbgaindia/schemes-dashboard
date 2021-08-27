import { read, utils as xlsxUtil } from 'xlsx'

export function generateSlug(slug){
  const temp = slug.toLowerCase().replace(/\W/g, '-') // lower case and replace space and special chars witn '-'
  return temp.replace(/-+/g, '-').replace(/-$/, '') // remove multiple '-' and remove '-' from end of string
}

export async function dataTransform(id) {
  let obj = {}
  let url = ''
  await fetch(id)
    .then((res) => res.json())
    .then(data => {
      if (data.result.resources[1] && data.result.resources[1].url.includes('.xlsx')) {
        url = data.result.resources[1].url
      }
      else {
        url = data.result.resources[0].url
      }
    })

  await fetch(url).then(function (res) {
    if (!res.ok) throw new Error("fetch failed");
    return res.arrayBuffer();
  }).then(function (ab) {

    var file = new Uint8Array(ab);
    var workbook = read(file, { type: "array" });

    const dataName = workbook.SheetNames[0];
    const data = workbook.Sheets[dataName];

    const metaName = workbook.SheetNames[1];
    const meta = workbook.Sheets[metaName];

    const dataParse = xlsxUtil.sheet_to_json(data, { header: 1 });
    const metaParse = xlsxUtil.sheet_to_json(meta, { header: 1 });

    let metaObj = {}

    // Meta Data
    metaParse.forEach(val => {
      if (val[0]) {
        metaObj = {
          ...metaObj,
          [val[0].replace(/^\s+|\s+$/g, '')]: val[1] // regex is to remove white space from start/end of keys
        }
      }
    })

    const urlArr = url.split('/')

    obj.metadata = {
      description: metaObj["Scheme Description"],
      name: metaObj["Name of the Scheme"],
      frequency: metaObj["Frequency"],
      slug: urlArr[urlArr.length - 1].split('.')[0],
      source: metaObj["Data Source"],
      type: metaObj["Type of Scheme"],
      note: metaObj["Note"]
    }

    // Tabular Data
    for (let i = 3; i < dataParse[0].length; i++) {
      let fiscal_year = {}

      for (let j = 1; j < dataParse.length; j++) {
        if (dataParse[j][2]) {
          fiscal_year[dataParse[j][2]] = {
            ...fiscal_year[dataParse[j][2]],
            [dataParse[j][1]]: dataParse[j][i]
          };
        }
      }

      obj.data = {
        ...obj.data,
        [`indicator_0${i - 2}`]: {
          fiscal_year,
          name: metaObj[`Indicator ${i - 2} - Name`],
          description: metaObj[`Indicator ${i - 2} - Description`],
          note: metaObj[`Indicator ${i - 2} - Note`],
          slug: generateSlug(metaObj[`Indicator ${i - 2} - Name`]),
          unit: metaObj[`Indicator ${i - 2} - Unit`],
        }
      }
    }
  })
  return obj
}