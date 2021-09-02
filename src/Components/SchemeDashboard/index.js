import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import domtoimage from 'dom-to-image';
import { Helmet } from 'react-helmet';
import Loader from 'react-loader-spinner';

import ReactPlaceholder from 'react-placeholder';
import {
  TextBlock,
  MediaBlock,
  TextRow,
  RectShape,
  RoundShape,
} from 'react-placeholder/lib/placeholders';
import SchemeIntroduction from '../SchemeIntroduction';
import DatavizViewControls from '../DatavizViewControls';
import IndicatorSelector from '../IndicatorSelector';
import SchemeDetailsView from '../SchemeDetailsView';
import NewsCard from '../NewsCard';
import SchemeCard from '../SchemesCard';

import { receipts_data as data } from '../../Data/receipts_data';

import { ReactComponent as LeftArrow } from '../../Images/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../Images/right-arrow.svg';
import { dataTransform, fetchRelated, fetchNews } from '../../utils/helpers';
import SchemesData from '../../Data/schemesData';
import 'react-placeholder/lib/reactPlaceholder.css';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css';

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

const SchemeDashboard = () => {
  const { scheme_slug, indicator_slug } = useParams();
  const currentScheme = `scheme_${scheme_slug}`;
  const { slug: currentSlug, dataId } = SchemesData[currentScheme];

  const [activeNewsPage, setActiveNewsPage] = useState(1);
  const [showSwipeButton, setShowSwipeButton] = useState(true);
  const [showViz, setShowViz] = useState(true);
  const [activeViz, setActiveViz] = useState('map');
  const [schemeData, setSchemeData] = useState({});
  const [relatedSchemes, setRelatedSchemes] = useState([]);
  const [activeIndicator, setActiveIndicator] = useState('');
  const [activeYear, setActiveYear] = useState('2019-20');
  const [recentDevelopments, setRecentDevelopmentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsReady, setNewsReady] = useState(false);

  useEffect(() => {
    if (!schemeData.data) {
      dataTransform(dataId).then((obj) => {
        setSchemeData(obj);

        // Setting current indicator
        let currentIndicator = Object.keys(obj.data).find(
          (indicator) => obj.data[indicator].slug === indicator_slug
        );
        if (currentIndicator === undefined) currentIndicator = 'indicator_01';
        setActiveIndicator(currentIndicator);
        setLoading(false);

        // Fetch news section
        fetchNews('news').then((recentDevelopmentsData) => {
          const recentDevelopmentsArray = [];
          while (recentDevelopmentsData[currentScheme].length) {
            recentDevelopmentsArray.push(
              recentDevelopmentsData[currentScheme].splice(0, 2)
            );
          }
          setRecentDevelopmentsData(recentDevelopmentsArray);
          setNewsReady(true);
        });

        // Fetch related Schemes
        fetchRelated(obj.metadata.name, obj.metadata.type, SchemesData).then(
          (res) => {
            setRelatedSchemes(res);
          }
        );
      });
    }
  }, []);

  const handleChangeViz = (type) => {
    setShowViz(true);
    setActiveViz(type);
  };

  const handleToggleShowViz = (status) => {
    setShowViz(status);
  };

  const handleChangeNewsPage = (index) => {
    setActiveNewsPage(index);
  };

  const handleHideSwipeButton = () => {
    setShowSwipeButton(false);
  };

  const handleIndicatorChange = (indicator) => {
    setActiveIndicator(indicator);
  };
  const setYearChange = (year) => {
    setActiveYear(year);
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

  const awesomePlaceholder = (
    <div className="my-awesome-placeholder">
      <RectShape color="blue" style={{ width: 30, height: 80 }} />
      <TextBlock rows={7} color="yellow" />
    </div>
  );

  return (
    <>
      {!loading ? (
        <>
          <Helmet>
            <title>
              {schemeData.metadata.name} State-wise Budget & Expenditure | Open
              Budgets India
            </title>
            <meta
              name="title"
              content={`${schemeData.metadata.name} State-wise Budget & Expenditure | Open Budgets India`}
            />
            <meta
              property="og:url"
              content={`https://schemes.openbudgetsindia.org/scheme/${schemeData.metadata.slug}/${schemeData.data[activeIndicator].slug}`}
            />
            <meta
              property="og:title"
              content={`${schemeData.metadata.name} State-wise Budget & Expenditure | Open Budgets India`}
            />
            <meta
              property="twitter:url"
              content={`https://schemes.openbudgetsindia.org/scheme/${schemeData.metadata.slug}/${schemeData.data[activeIndicator].slug}`}
            />
            <meta
              property="twitter:title"
              content={`${schemeData.metadata.name} State-wise Budget & Expenditure | Open Budgets India`}
            />
          </Helmet>

          <SchemeIntroduction
            data={schemeData.metadata}
            handleDownloadReportImage={handleDownloadReportImage}
            showViz={showViz}
          />
          <div className="mt-3 mb-3 layout-wrapper">
            <div className="horizontal-seperator mb-3" />
            <DatavizViewControls
              view={activeViz}
              handleChangeViz={handleChangeViz}
            />
            <div className="scheme-details-view-wrapper mt-3 ">
              <IndicatorSelector
                schemeData={schemeData}
                activeIndicator={activeIndicator}
                handleIndicatorChange={handleIndicatorChange}
                currentSlug={currentSlug}
              />
              <SchemeDetailsView
                showViz={showViz}
                activeViz={activeViz}
                handleToggleShowViz={handleToggleShowViz}
                record={data[0]}
                schemeData={schemeData}
                activeIndicator={activeIndicator}
                activeYear={activeYear}
                stateCodes={stateCodes}
                setYearChange={setYearChange}
              />
            </div>
          </div>

          <div className="mt-5 mb-3 layout-wrapper">
            <div className="d-flex justify-content-between">
              <h2 className="section-heading text-dark ml-3">
                Recent Developments
              </h2>
              <div className="section-controls d-flex mr-3">
                <button
                  className="arrow-btn mr-1"
                  disabled={activeNewsPage === 1}
                  onClick={() => handleChangeNewsPage(activeNewsPage - 1)}
                  type="button"
                >
                  <LeftArrow
                    fill="#0D1018"
                    fillOpacity={activeNewsPage === 1 ? 0.4 : 0.87}
                  />
                </button>
                <p className="mr-2 ml-2 page-introduction-text">
                  {activeNewsPage}/{recentDevelopments.length}
                </p>
                <button
                  className="arrow-btn ml-1"
                  disabled={activeNewsPage === recentDevelopments.length}
                  onClick={() => handleChangeNewsPage(activeNewsPage + 1)}
                  type="button"
                >
                  <RightArrow
                    fill="#0D1018"
                    fillOpacity={
                      activeNewsPage === recentDevelopments.length ? 0.4 : 0.87
                    }
                  />
                </button>
              </div>
            </div>
            <div className="case-studies-cards-container mt-3">
              {recentDevelopments[activeNewsPage - 1] ? (
                recentDevelopments[activeNewsPage - 1].map((news, index) => (
                  <NewsCard data={news} cardindex={index} key={index} />
                ))
              ) : (
                <ReactPlaceholder
                  type="text"
                  rows={6}
                  ready={recentDevelopments.length > 0}
                  delay={1000}
                  style={{ width: '360px' }}
                />
              )}
            </div>
          </div>

          <div className="related-scheme-section mt-5 layout-wrapper">
            <div className="d-flex justify-content-between">
              <h2 className="section-heading text-dark ml-3">Other Schemes</h2>
              <a href="/" className="mr-3">
                View All Schemes
              </a>
            </div>
            <div
              className="p-relative align-items-center mt-3 tab-horizontal-scroll justify-content-between"
              onScroll={handleHideSwipeButton}
            >
              {showSwipeButton ? (
                <button className="swipe-right-button" type="button">
                  <span>Swipe</span>{' '}
                  <RightArrow fill="#0D1018" fillOpacity={0.87} />
                </button>
              ) : null}
              {relatedSchemes.length > 0 ? (
                relatedSchemes.map((scheme, index) => (
                  <SchemeCard scheme={scheme} key={index} />
                ))
              ) : (
                <ReactPlaceholder
                  type="media"
                  rows={5}
                  ready={relatedSchemes.length > 0}
                  delay={1000}
                  style={{ width: '320px' }}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="loader">
          <Loader
            type="ThreeDots"
            color="#0F1525"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      )}
    </>
  );
};

export default SchemeDashboard;
