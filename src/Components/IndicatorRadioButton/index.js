import React from "react";

import "./index.css";

const IndicatorRadioButton = (props) => {
  return (
    <div className="mt-3 mb-1">
      <div className="">
        <input
          type="radio"
          id={props.indicatorName}
          name="indicator-group"
          className="indicator-radio-button-input"
          value={props.indicatorName}
          checked={props.checked}
          onClick={props.handleIndicatorChange}
        />
        <label htmlFor={props.indicatorName}>{props.indicatorData[props.indicatorName].name}</label>
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
