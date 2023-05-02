import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Seo from 'components/seo/seo';
import {
  dataTransform,
  fetchRelated,
  fetchNews,
  fetchQuery,
  generateSlug,
} from 'utils/api';
import { export_table_to_csv } from 'utils/download-table';
import SchemeIntroduction from 'components/schemeIntroduction/schemeIntroduction';
import domtoimage from 'dom-to-image';
import DatavizViewControls from 'components/state/datavizViewControls/datavizViewControls';
// import IndicatorSelector from 'components/indicatorSelector/indicatorSelector';
// import RelatedSchemes from 'components/relatedSchemes/relatedSchemes';
import SchemeNews from 'components/schemeNews/schemeNews';

import SchemeSelector from 'components/state/schemeSelector/schemeSelector';
import SchemeDetailsView from 'components/state/schemeDetailsView/schemeDetailsView';
import RelatedStates from 'components/state/relatedStates/relatedStates';

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
  34: 'Jammu & Kashmir',
  35: 'Ladakh',
  36: 'Lakshadweep',
  37: 'Puducherry',
};

const Scheme = ({ scheme, related, news }) => {
  const [showViz, setShowViz] = useState(true);
  const [activeViz, setActiveViz] = useState('bar');
  const [activeIndicator, setActiveIndicator] = useState('');
  const [activeEstimate, setActiveEstimate] = useState('Budget Estimates');
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    // generate indicators
    const indicators = [
      ...new Set(scheme.data.map((item) => item.Scheme || null)),
    ];

    // Setting current indicator
    let currentIndicator = indicators.find(
      (indicator) => generateSlug(indicator) === router.query.scheme
    );
    if (currentIndicator === undefined) currentIndicator = indicators[0];
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
  const setEstimateChange = (estimate) => {
    setActiveEstimate(estimate);
  };
  const seo = {
    title: scheme.metadata.name,
    description: scheme.metadata.description,
    url: `https://schemes.openbudgetsindia.org/scheme/${router.query.scheme}`,
  };

  const filterElements = (node) => {
    try {
      return (
        node.getAttribute('id') !== 'hide-this-button' &&
        node.getAttribute('class') !== 'statetooltip' &&
        node.getAttribute('class') !== 'tcontainer' &&
        node.getAttribute('class') !== 'select-container' &&
        node.getAttribute('class') !== 'details__download' &&
        node.nodeType != 8 &&
        node.getAttribute('class') != 'see-details-text'
      );
    } catch (err) {
      return true;
    }
  };

  const handleDownloadReportImage = () => {
    if (activeViz === 'table') export_table_to_csv('table.csv');
    else
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
      <div className="skiptarget">
        <span id="maincontent">-</span>
      </div>

      <main id="main" className="wrapper scheme" tabIndex="-1">
        <div>
          <Seo seo={seo} />
          {!loading && (
            <>
              <SchemeIntroduction data={scheme.metadata} />
              <span className="horizontal-seperator" />

              <div className="scheme__container">
                <DatavizViewControls
                  view={activeViz}
                  handleChangeViz={handleChangeViz}
                  activeEstimate={activeEstimate}
                  setEstimateChange={setEstimateChange}
                  activeViz={activeViz}
                />
                {activeIndicator && (
                  <>
                    <SchemeSelector
                      schemeData={scheme}
                      activeIndicator={activeIndicator}
                      currentSlug={router.query.state}
                    />

                    <SchemeDetailsView
                      handleDownloadReportImage={handleDownloadReportImage}
                      showViz={showViz}
                      activeViz={activeViz}
                      handleToggleShowViz={handleToggleShowViz}
                      schemeData={scheme}
                      activeIndicator={activeIndicator}
                      activeEstimate={activeEstimate}
                      stateCodes={stateCodes}
                      setEstimateChange={setEstimateChange}
                    />
                  </>
                )}
              </div>

              <SchemeNews newsData={news} />

              <RelatedStates related={related} />
            </>
          )}
        </div>
      </main>
    </>
  );
};

// export async function getStaticPaths() {
//   const data = await fetchQuery('schemeType', 'State Sponsored Scheme');
//   return {
//     paths: data.map((state) => ({
//       params: {
//         state: state.extras[2].value,
//       },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const scheme = await dataTransform(params.state);
//   const related = await fetchRelated(
//     scheme.metadata.name,
//     scheme.metadata.type
//   );
//   const news = await fetchNews(params.state);

//   return {
//     props: { scheme, related, news },
//     revalidate: 1,
//   };
// }

// Moved to server side rendering from ISR as changes in recent developments were not getting updated
export async function getServerSideProps(context) {
  const scheme = await dataTransform(context.query.state);
  const related = await fetchRelated(
    scheme.metadata.name,
    scheme.metadata.type
  );
  const news = await fetchNews(context.query.state);

  return {
    props: { scheme, related, news },
  };
}

export default Scheme;
