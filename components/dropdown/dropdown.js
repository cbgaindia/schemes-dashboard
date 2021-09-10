import React from 'react';

const Dropdown = (props) => (
  <div className="download-dropdown">
    <button
      className="download-dropdown__item download-dropdown__button"
      onClick={props.handleDownloadReportImage}
      disabled={!props.showViz}
      type="button"
    >
      Download Visualisation
    </button>
    <a
      href="https://openbudgetsindia.org/organization/state-wise-schemes-data"
      className="download-dropdown__item download-dropdown__link"
      rel="noreferrer"
    >
      Go to Dataset
    </a>
  </div>
);

export default Dropdown;
