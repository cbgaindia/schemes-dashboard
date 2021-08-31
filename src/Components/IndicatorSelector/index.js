import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import IndicatorRadioButton from '../IndicatorRadioButton';

import './index.css';

const IndicatorSelector = (props) => {
  const indicators = props.schemeData && Object.keys(props.schemeData.data);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedData, setSearchedData] = useState(indicators);

  useEffect(() => {
    const filteredData = indicators.filter((indicator) => {
      const name = props.schemeData.data[indicator].name.toLowerCase();
      return name.includes(searchTerm);
    });
    setSearchedData(filteredData);
  }, [searchTerm]);

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="indicator-sidebar-wrapper">
      <SearchBar handleChangeSearchTerm={handleChangeSearchTerm} />
      <div className="p-2 indicator-radio-button-list">
        {searchedData.map((indicator, index) => (
          <IndicatorRadioButton
            checked={indicator === props.activeIndicator}
            key={index}
            indicatorName={indicator}
            schemeSlug={props.currentSlug}
            indicatorData={props.schemeData.data}
            handleIndicatorChange={props.handleIndicatorChange}
          />
        ))}
      </div>
    </div>
  );
};

export default IndicatorSelector;
