import React from 'react';
import Link from 'next/link';
import { dataTransform, fetchRelated, fetchNews, fetchQuery,  generateSlug } from 'utils/api';

const IndicatorRadioButton = (props) => (
  <>
    <Link
      href={{
        pathname: `/state/${props.stateSlug}`,
        query: {
          scheme: props.indicatorName
            ? generateSlug(props.indicatorName)
            : '',
        },
      }}
      scroll={false}
    >

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
    </Link>
    {props.checked ? (
      <p className="indicator__text">
        {props.indicatorData.filter((item) => item.Scheme == props.indicatorName)[0]['Scheme Description'] || ''}
      </p>
    ) : null}
  </>
);
export default IndicatorRadioButton;
