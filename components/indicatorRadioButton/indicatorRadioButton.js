import React from 'react';
import { useRouter } from 'next/router';

const IndicatorRadioButton = (props) => {
  const router = useRouter();
  const handleClick = (e) => {
    router.push(
      {
        pathname: `/scheme/${props.schemeSlug}`,
        query: {
          indicator: props.indicatorData[props.indicatorName]
            ? props.indicatorData[props.indicatorName].slug
            : '',
        },
      },
      {
        pathname: `/scheme/${props.schemeSlug}`,
        query: {
          indicator: props.indicatorData[props.indicatorName]
            ? props.indicatorData[props.indicatorName].slug
            : '',
        },
      },
      { shallow: true }
    );
  };
  return (
    <React.Fragment key={`indicator_${props.index}`}>
      <input
        tabIndex="0"
        type="radio"
        id={props.indicatorName}
        name="indicator-group"
        className="indicator__radio"
        value={props.indicatorName}
        checked={props.checked}
        onClick={handleClick}
        readOnly
      />
      <label htmlFor={props.indicatorName}>
        {props.indicatorData[props.indicatorName].name}
      </label>
      {props.checked ? (
        <p className="indicator__text">
          {props.indicatorData[props.indicatorName].description}
        </p>
      ) : null}
    </React.Fragment>
  );
};

export default IndicatorRadioButton;
