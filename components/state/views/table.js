import React from 'react';

const Table = (props) => {
  const headers = ['Scheme', 'Fiscal Year', 'Estimate', 'Value'];  //Object.keys(props.schemeData[0]).slice(1,5);
  const indicatorName = props.schemeData.name;
  return (
    <div className="table-wrapper">
      <table className="scheme-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.schemeData.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td
                  key={header}
                >
                  {row[header]}
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
