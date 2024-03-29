import React from 'react';

const Table = (props) => {
  const financialYears = Object.keys(props.schemeData.fiscal_year).reverse();
  const indicatorName = props.schemeData.name;
  return (
    <div className="table-wrapper">
      <table className="scheme-table">
        <thead>
          <tr>
            <th>State/UT</th>
            {financialYears.map((year) => (
              <th key={year}>
                {indicatorName} {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.stateCodes).map((state, index) => (
            <tr key={index}>
              <td>{props.stateCodes[state]}</td>
              {financialYears.map((year) => (
                <td
                  key={year}
                  className={`${
                    parseInt(props.schemeData.fiscal_year[year][state], 10) < 0
                      ? 'text-danger'
                      : ''
                  }`}
                >
                  {props.schemeData.fiscal_year[year][state]}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
