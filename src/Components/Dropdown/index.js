import React from 'react';
import './index.css';

const Dropdown = (props) => (
  <div className="scheme-download-dropdown-container">
    <button
      className="scheme-dropdown-item first"
      onClick={props.handleDownloadReportImage}
      disabled={!props.showViz}
      type="button"
    >
      Download Visualisation
    </button>
    <a
      href="https://openbudgetsindia.org/organization/state-wise-schemes-data"
      target="_blank"
      className="scheme-dropdown-item second"
      rel="noreferrer"
    >
      Go to Dataset
    </a>
  </div>
);

export default Dropdown;
