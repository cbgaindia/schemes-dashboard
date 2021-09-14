import React, { useState, useEffect } from 'react';
import SearchBar from 'components/searchBar/searchBar';
import IndicatorRadioButton from 'components/indicatorRadioButton/indicatorRadioButton';

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
    <div className="indicator">
      <SearchBar handleChangeSearchTerm={handleChangeSearchTerm} />
      <div className="indicator__wrapper">
        {searchedData.map((indicator, index) => (
          <IndicatorRadioButton
            checked={indicator === props.activeIndicator}
            key={index}
            indicatorName={indicator}
            schemeSlug={props.currentSlug}
            indicatorData={props.schemeData.data}
          />
        ))}
      </div>
    </div>
  );
};

export default IndicatorSelector;
