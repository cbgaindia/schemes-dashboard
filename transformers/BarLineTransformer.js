export function barLineTransformer(mainData, indicator, estimatetype) {

  let data = mainData;
  if (indicator) {
    if (data.length > 0) {
      data = data.filter((item) => item["Scheme"] == indicator);
    }
  }

  if (estimatetype) {
    if (data.length > 0) {
      data = data.filter((item) => item["Estimate"] == estimatetype);
    }
  }

  var final_data = [];
  let fiscalData = [];
  let valueData = [];

  for (var i = 0; i < data.length; i++) {
    fiscalData.push(data[i]["Fiscal Year"]);
    valueData.push(
      data[i]["Value"] === ''
        ? 0
        : data[i]["Value"]
    );
  }

  final_data.push(fiscalData);
  final_data.push(valueData);
  final_data.push(["Fiscal Year", "Value (In Crores)"]);

 
  return final_data;
}
