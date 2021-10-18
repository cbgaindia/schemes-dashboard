import React from 'react';
import Link from 'next/link';

const IndicatorRadioButton = (props) => (
  <>
    <Link
      href={{
        pathname: `/scheme/${props.schemeSlug}`,
        query: {
          indicator: props.indicatorData[props.indicatorName]
            ? props.indicatorData[props.indicatorName].slug
            : '',
        },
      }}
      scroll={false}
    >
      <a key={`indicator_${props.index}`}>
        <label className="indicator__label" htmlFor={props.indicatorName}>
          {props.indicatorData[props.indicatorName].name}
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
    </Link>
    {props.checked ? (
      <p className="indicator__text">
        {props.indicatorData[props.indicatorName].description}
      </p>
    ) : null}
  </>
);
export default IndicatorRadioButton;
