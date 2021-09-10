import React, { useState } from 'react';
import Seo from 'components/seo/seo';
import { dataTransform } from 'lib/api';
import SchemeIntroduction from 'components/schemeIntroduction/schemeIntroduction';
import domtoimage from 'dom-to-image';

const Scheme = ({ scheme }) => {
  const [showViz, setShowViz] = useState(true);
  const [activeViz, setActiveViz] = useState('map');

  const handleChangeViz = (type) => {
    setShowViz(true);
    setActiveViz(type);
  };

  const handleToggleShowViz = (status) => {
    setShowViz(status);
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
      <Seo seo={seo} />
      <SchemeIntroduction
        data={scheme.metadata}
        handleDownloadReportImage={handleDownloadReportImage}
        showViz={showViz}
      />
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
