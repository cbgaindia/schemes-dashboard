import React, { useState, useEffect } from 'react';
import SearchBar from 'components/searchBar/searchBar';
import SchemeRadioButton from 'components/state/schemeRadioButton/schemeRadioButton';

const IndicatorSelector = (props) => {
  // generate indicators
  const indicators = [
    ...new Set(props.schemeData.data.map((item) => item.Scheme || null)),
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchedData, setSearchedData] = useState(indicators);

  useEffect(() => {
    const filteredData = indicators.filter((indicator) => {
      const name = indicator.toLowerCase();
      return name.includes(searchTerm);
    });
    setSearchedData(filteredData);
  }, [searchTerm, props]);

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  
  console.log(searchedData);

  return (
    <div className="indicator">
      <SearchBar handleChangeSearchTerm={handleChangeSearchTerm} />
      <fieldset className="indicator__wrapper">
        <legend className="screen-reader-text">Select Indicator</legend>
        {searchedData.map((indicator, index) => {
            return (
              <SchemeRadioButton
                checked={indicator === props.activeIndicator}
                key={index}
                indicatorName={indicator}
                schemeSlug={props.currentSlug}
                indicatorData={props.schemeData.data}
              />
            );
        })}
      </fieldset>
    </div>
  );
};

export default IndicatorSelector;
