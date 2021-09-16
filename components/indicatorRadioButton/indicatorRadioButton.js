import React from 'react';
import Link from 'next/link';

const IndicatorRadioButton = (props) => (
  <div className="indicator__option" key={`indicator_${props.index}`}>
    <Link
      href={{
        pathname: `/scheme/${props.schemeSlug}`,
        query: {
          indicator: props.indicatorData[props.indicatorName]
            ? props.indicatorData[props.indicatorName].slug
            : '',
        },
      }}
    >
      <a>
        <input
          type="radio"
          id={props.indicatorName}
          name="indicator-group"
          className="indicator__radio"
          value={props.indicatorName}
          checked={props.checked}
          readOnly
        />
        <label htmlFor={props.indicatorName}>
          {props.indicatorData[props.indicatorName].name}
        </label>
      </a>
    </Link>
    {props.checked ? (
      <p className="indicator__text">
        {props.indicatorData[props.indicatorName].description}
      </p>
    ) : null}
  </div>
);

export default IndicatorRadioButton;
