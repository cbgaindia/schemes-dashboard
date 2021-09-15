import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Seo from 'components/seo/seo';
import { dataTransform } from 'lib/api';
import SchemeIntroduction from 'components/schemeIntroduction/schemeIntroduction';
import domtoimage from 'dom-to-image';
import DatavizViewControls from 'components/datavizViewControls/datavizViewControls';
import IndicatorSelector from 'components/indicatorSelector/indicatorSelector';
import SchemeDetailsView from 'components/schemeDetailsView/schemeDetailsView';
import RelatedSchemes from 'components/relatedSchemes/relatedSchemes';

const stateCodes = {
  1: 'Andhra Pradesh',
  2: 'Arunachal Pradesh',
  3: 'Assam',
  4: 'Bihar',
  5: 'Chhattisgarh',
  6: 'Goa',
  7: 'Gujarat',
  8: 'Haryana',
  9: 'Himachal Pradesh',
  10: 'Jharkhand',
  11: 'Karnataka',
  12: 'Kerala',
  13: 'Madhya Pradesh',
  14: 'Maharashtra',
  15: 'Manipur',
  16: 'Meghalaya',
  17: 'Mizoram',
  18: 'Nagaland',
  19: 'Odisha',
  20: 'Punjab',
  21: 'Rajasthan',
  22: 'Sikkim',
  23: 'Tamil Nadu',
  24: 'Telangana',
  25: 'Tripura',
  26: 'Uttar Pradesh',
  27: 'Uttarakhand',
  28: 'West Bengal',
  29: 'Andaman & Nicobar',
  30: 'Chandigarh',
  31: 'Dadra and Nagar Haveli',
  32: 'Daman and Diu',
  33: 'Delhi',
  34: 'Jammu & Kashmir ',
  35: 'Ladakh ',
  36: 'Lakshadweep',
  37: 'Puducherry',
};

const Scheme = ({ scheme }) => {
  const [showViz, setShowViz] = useState(true);
  const [activeViz, setActiveViz] = useState('map');
  const [activeIndicator, setActiveIndicator] = useState('');
  const [activeYear, setActiveYear] = useState('2019-20');
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    // Setting current indicator
    let currentIndicator = Object.keys(scheme.data).find(
      (indicator) => scheme.data[indicator].slug === router.query.indicator
    );
    if (currentIndicator === undefined) currentIndicator = 'indicator_01';
    setActiveIndicator(currentIndicator);
    setLoading(false);
  }, [router]);

  const handleChangeViz = (type) => {
    setShowViz(true);
    setActiveViz(type);
  };

  const handleToggleShowViz = (status) => {
    setShowViz(status);
  };
  const setYearChange = (year) => {
    setActiveYear(year);
  };
  const seo = {
    title: scheme.metadata.name,
  };

  const filterElements = (node) => {
    try {
      return (
        node.getAttribute('id') !== 'hide-this-button' &&
        node.getAttribute('class') !== 'statetooltip' &&
        node.getAttribute('class') !== 'tcontainer' &&
        node.getAttribute('class') !== 'select-container' &&
        node.nodeType != 8 &&
        node.getAttribute('class') != 'see-details-text'
      );
    } catch (err) {
      return true;
    }
  };

  const handleDownloadReportImage = () => {
    domtoimage
      .toPng(document.getElementById('report-container'), {
        filter: filterElements,
      })
      .then((dataURL) => {
        const link = document.createElement('a');
        link.download = 'Visualization Report.png';
        link.href = dataURL;
        link.click();
      });
  };

  return (
    <>
      {!loading && (
        <main className="wrapper scheme">
          <Seo seo={seo} />
          <SchemeIntroduction
            data={scheme.metadata}
            handleDownloadReportImage={handleDownloadReportImage}
            showViz={showViz}
          />
          <span className="horizontal-seperator" />

          <div className="scheme__container">
            <DatavizViewControls
              view={activeViz}
              handleChangeViz={handleChangeViz}
            />

            <IndicatorSelector
              schemeData={scheme}
              activeIndicator={activeIndicator}
              currentSlug={router.query.scheme}
            />
            <SchemeDetailsView
              showViz={showViz}
              activeViz={activeViz}
              handleToggleShowViz={handleToggleShowViz}
              schemeData={scheme}
              activeIndicator={activeIndicator}
              activeYear={activeYear}
              stateCodes={stateCodes}
              setYearChange={setYearChange}
            />
          </div>

          <RelatedSchemes scheme={scheme} />
        </main>
      )}
    </>
  );
};

export async function getStaticPaths() {
  const data = await fetch(
    'https://openbudgetsindia.org/api/3/action/package_search?fq=schemeType:"Centrally Sponsored Scheme"+organization:state-wise-schemes-data&rows=50'
  );
  const schemes = await data.json();
  return {
    paths: schemes.result.results.map((scheme) => ({
      params: {
        scheme: scheme.name,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const scheme = await dataTransform(params.scheme);

  return {
    props: { scheme },
    revalidate: 1,
  };
}

export default Scheme;
