import React from 'react';
import Link from 'next/link';

const IndicatorRadioButton = (props) => (
  <>

      <a key={`indicator_${props.index}`}>
        <label className="indicator__label" htmlFor={props.indicatorName}>
          {props.indicatorName}
          <input
            type="radio"
            id={props.indicatorName}
            name="indicator-group"
            className="indicator__radio"
            value={props.indicatorName}
            checked={props.checked}
            readOnly
            tabIndex="-1"
          />
          <span className="indicator__span" />
        </label>
      </a>

    {props.checked ? (
      <p className="indicator__text">
        {props.indicatorData[props.indicatorName].description}
      </p>
    ) : null}
  </>
);
export default IndicatorRadioButton;
