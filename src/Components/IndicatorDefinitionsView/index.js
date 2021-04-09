import React from "react";
import InfoIcon from "../../Images/info-icon.svg";

import "./index.css";

const IndicatorDefinitionView = (props) => {
  let indicators = Object.keys(props.indicatorData)
  return (
    <div className="indicator-definitions-view-container">
      <div className="scheme-introduction-container mb-1">
        <div className="left-block-decoration"></div>
        <img src={InfoIcon} className="ml-3 mr-3 mt-2" />
        <p className="page-introduction-text">
          {props.schemeData.description}
        </p>
      </div>
      {indicators.map((indicator, index) => {
         return ( 
          <div className="mt-3 pb-2 border-bottom-light" key={indicator}>
            <h2 className="page-introduction-text mb-1">
              <span className="text-bold text-black">{props.indicatorData[indicator].name}</span>{" "}
              ({props.indicatorData[indicator].unit})
            </h2>
            <p className="page-introduction-text mt-2 mb-1">
              {props.indicatorData[indicator].description}
            </p>
            <p className="page-introduction-text text-black fs-12 mb-1 mt-2">
              Note: {props.indicatorData[indicator].note}
            </p>
          </div>
         )
      })} 
    </div>
  );
};

export default IndicatorDefinitionView;
