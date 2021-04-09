import React from "react";
import "./index.css";

const Dropdown = (props) => {
  console.log('estin', props.showViz)
  return (
    <div className="scheme-download-dropdown-container">
      <div
        className="scheme-dropdown-item first"
        onClick={props.handleDownloadReportImage}
        disabled={!props.showViz}
      >
        Download Visualisation
      </div>
        <a href="https://openbudgetsindia.org/organization/state-wise-schemes-data" target="_blank" className="scheme-dropdown-item second">
          Go to Dataset
        </a>
    </div>
  );
};

export default Dropdown;
