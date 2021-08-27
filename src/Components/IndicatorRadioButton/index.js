import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const IndicatorRadioButton = (props) => {
  return (
    <div className="mt-3 mb-1">
      
        <div className="">
        <Link
        to={`${
          "/scheme/" +
          props.schemeSlug +
          "/" +
          props.indicatorData[props.indicatorName].slug 
        }`}
        onClick={() => props.handleIndicatorChange(props.indicatorName)}
      >
          <input
            type="radio"
            id={props.indicatorName}
            name="indicator-group"
            className="indicator-radio-button-input"
            value={props.indicatorName}
            checked={props.checked}
          />
          <label htmlFor={props.indicatorName}>
            {props.indicatorData[props.indicatorName].name}
          </label>
          </Link>
        </div>
        {props.checked ? (
          <p className="radio-button-text">
            {props.indicatorData[props.indicatorName].description}
          </p>
        ) : null}
    </div>
  );
};

export default IndicatorRadioButton;
