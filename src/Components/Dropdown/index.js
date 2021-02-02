import React from "react"
import "./index.css"

const Dropdown = (props) => {
    return(
        <div className="scheme-download-dropdown-container">
            <div className="scheme-dropdown-item first" onClick={props.handleDownloadReportImage}>Download Report</div>
            <div className="scheme-dropdown-item second">Go to Dataset</div>
        </div>
    )
}

export default Dropdown;