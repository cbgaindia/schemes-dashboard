import React from 'react';

const IndicatorDefinitionView = (props) => {
  const indicators = Object.keys(props.indicatorData);
  return (
    <div className="scheme__notes">
      <div className="notes__notice">
        <div className="notes__decoration" />
        <p className="page-introduction-text">{props.schemeData.description}</p>
      </div>
      {indicators.map((indicator) => (
        <div className="mt-3 pb-2 notes__section" key={indicator}>
          <h2 className="page-introduction-text">
            <span className="notes__indicator">
              {props.indicatorData[indicator].name}
            </span>{' '}
            ({props.indicatorData[indicator].unit})
          </h2>
          <p className="page-introduction-text notes__text">
            {props.indicatorData[indicator].description}
          </p>
          <p className="page-introduction-text notes__note">
            Note: {props.indicatorData[indicator].note}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IndicatorDefinitionView;
