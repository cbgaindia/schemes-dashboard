import React from "react";
import "./vizStyles.css";

const Table = (props) => {
  let financialYears = Object.keys(props.schemeData.fiscal_year).reverse();
  let indicatorName = props.schemeData.name;
console.log('testing table', props.schemeData)
  return (
    <div className="table-wrapper">
      <table className="scheme-table">
        <thead>
          <tr>
            <th className="column-freeze">State/UT</th>
            {/* <th></th> */}
            {financialYears.map((year) => (
              <th key={year}>
                {indicatorName} {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.stateCodes).map((state, index) => {
            return (
              <tr key={index}>
                <td className="column-freeze">{props.stateCodes[state]}</td>
                {/* <td></td> */}
                {financialYears.map((year) => (
                  <td key={year} className={`${parseInt(props.schemeData.fiscal_year[year][state]) < 0 ? "text-danger" : ""}`}>{props.schemeData.fiscal_year[year][state]}</td>
                ))}
              </tr>
            );
          })}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
