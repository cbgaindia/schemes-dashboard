import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import domtoimage from "dom-to-image";

import SchemeIntroduction from "../SchemeIntroduction";
import DatavizViewControls from "../DatavizViewControls";
import IndicatorSelector from "../IndicatorSelector";
import SchemeDetailsView from "../SchemeDetailsView";
import NewsCard from "../NewsCard";
import SchemeCard from "../SchemesCard";

import { receipts_data as data } from "../../Data/receipts_data";
import schemesData from "../../Data/schemes.json";
import { recentDevelopmentsData } from "../../Data/schemeNews";
import schemeLogos from "../../Data/schemesLogos"

import { ReactComponent as LeftArrow } from "../../Images/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../Images/right-arrow.svg";

import "./index.css";

const newsData = [
  [
    { title: "", text: "", link: "", img: "", class: "" },
    { title: "", text: "", link: "", img: "", class: "ml-4" },
  ],
  [
    { title: "#0D1018", text: "0.4", link: "0.87", img: "", class: "" },
    { title: "", text: "", link: "", img: "", class: "ml-4" },
  ],
  [
    { title: "", text: "", link: "", img: "", class: "" },
    { title: "", text: "", link: "", img: "", class: "ml-4" },
  ],
  [
    { title: "", text: "", link: "", img: "", class: "" },
    { title: "", text: "", link: "", img: "", class: "ml-4" },
  ],
  [
    { title: "", text: "", link: "", img: "", class: "" },
    { title: "", text: "", link: "", img: "", class: "ml-4" },
  ],
];

// const relatedSchemes = [
//   { title: "National Health Mission", link: "", class: "", img: "" },
//   { title: "National Health Mission", link: "", class: "ml-4", img: "" },
//   { title: "National Health Mission", link: "", class: "ml-4", img: "" },
//   { title: "National Health Mission", link: "", class: "ml-4", img: "" },
// ];

const stateCodes = {
  1: "Andhra Pradesh",
  2: "Arunachal Pradesh",
  3: "Assam",
  4: "Bihar",
  5: "Chhattisgarh",
  6: "Goa",
  7: "Gujarat",
  8: "Haryana",
  9: "Himachal Pradesh",
  10: "Jharkhand",
  11: "Karnataka",
  12: "Kerala",
  13: "Madhya Pradesh",
  14: "Maharashtra",
  15: "Manipur",
  16: "Meghalaya",
  17: "Mizoram",
  18: "Nagaland",
  19: "Odisha",
  20: "Punjab",
  21: "Rajasthan",
  22: "Sikkim",
  23: "Tamil Nadu",
  24: "Telangana",
  25: "Tripura",
  26: "Uttar Pradesh",
  27: "Uttarakhand",
  28: "West Bengal",
  29: "Andaman & Nicobar",
  30: "Chandigarh",
  31: "Dadra and Nagar Haveli",
  32: "Daman and Diu",
  33: "Delhi",
  34: "Jammu & Kashmir ",
  35: "Ladakh ",
  36: "Lakshadweep",
  37: "Puducherry",
};

const SchemeDashboard = (props) => {
  const { scheme_slug, indicator_slug } = useParams();
  const reverseSchemeSlugs = {};
  Object.keys(schemesData).forEach((scheme) => {
    reverseSchemeSlugs[schemesData[scheme].metadata.slug] = scheme;
  });
  const indicator = Object.keys(
    schemesData[reverseSchemeSlugs[scheme_slug]].data
  ).find(
    (indicator) =>
      schemesData[reverseSchemeSlugs[scheme_slug]].data[indicator].slug ===
      indicator_slug
  );

  const [activeNewsPage, setActiveNewsPage] = useState(1);
  const [showSwipeButton, setShowSwipeButton] = useState(true);
  const [showViz, setShowViz] = useState(true);
  const [activeViz, setActiveViz] = useState("map");
  const [schemeData, setSchemeData] = useState(
    schemesData[reverseSchemeSlugs[scheme_slug]]
  );
  const [relatedSchemes, setRelatedSchemes] = useState([]);
  const [activeIndicator, setActiveIndicator] = useState(indicator);
  const [activeYear, setActiveYear] = useState("2019-20");
  const [recentDevelopments, setRecentDevelopmentsData] = useState([]);

  useEffect(() => {
    // Setting Related Schemes Data
    let allSchemes = Object.keys(schemesData)
      .filter(
        (scheme) =>
          schemesData[scheme].metadata.slug !== scheme_slug &&
          schemesData[scheme].metadata.type === schemeData.metadata.type
      )
      .slice(0, 4);
    const relatedSchemes = allSchemes.map((scheme, index) => ({
      title: schemesData[scheme].metadata.name,
      link: `/scheme/${schemesData[scheme].metadata.slug}/${schemesData[scheme].data[activeIndicator].slug}`,
      class: `${index === 0 ? "" : "ml-4"}`,
      img: schemeLogos[scheme],
    }));
    setRelatedSchemes(relatedSchemes);

    // Setting Recent Developments Data
    const recentDevelopmentsArray = [];
    while (
      recentDevelopmentsData[reverseSchemeSlugs[scheme_slug]].metadata.news
        .length
    ) {
      recentDevelopmentsArray.push(
        recentDevelopmentsData[
          reverseSchemeSlugs[scheme_slug]
        ].metadata.news.splice(0, 2)
      );
    }
    setRecentDevelopmentsData(recentDevelopmentsArray);
    console.log("testing recent dvelopments", recentDevelopmentsArray);
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
        return (node.getAttribute("class") !== 'statetooltip' && node.getAttribute("class")!== "tcontainer" && node.getAttribute("class")!== "select-container" && node.nodeType !=8 && node.getAttribute("class") !="see-details-text");
      }
      catch(err) {
        return true;
      }		
    
  }

  const handleDownloadReportImage = () => {
    domtoimage
      .toPng(document.getElementById("report-container"), { filter: filterElements })
      .then((dataURL) => {
        var link = document.createElement('a');
        link.download = 'Visualization Report.png';
        link.href = dataURL;
        link.click();
      })
      .catch(function (error) {
        console.log('inside errror', error)
      });
  };

  return (
    <>
      <SchemeIntroduction data={schemeData.metadata} handleDownloadReportImage={handleDownloadReportImage}/>
      <div className="mt-3 mb-3 layout-wrapper">
        <div className="horizontal-seperator mb-3"></div>
        <DatavizViewControls
          view={activeViz}
          handleChangeViz={handleChangeViz}
        />
        <div className="scheme-details-view-wrapper mt-3 ">
          <IndicatorSelector
            schemeData={schemeData}
            activeIndicator={activeIndicator}
            handleIndicatorChange={handleIndicatorChange}
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
        <div class="case-studies-cards-container mt-3">
          {recentDevelopments[activeNewsPage - 1] &&
            recentDevelopments[activeNewsPage - 1].map((news, index) => (
              <NewsCard data={news} key={index} />
            ))}
        </div>
      </div>
      <div className="related-scheme-section mt-5 layout-wrapper">
        <div className="d-flex justify-content-between">
          <h2 className="section-heading text-dark ml-3">Other Schemes</h2>
          <a href="/" target="_blank" className="mr-3">
            View All Schemes
          </a>
        </div>
        <div
          className="p-relative d-flex align-items-center mt-3 tab-horizontal-scroll"
          onScroll={handleHideSwipeButton}
        >
          {showSwipeButton ? (
            <button className="swipe-right-button">
              <span>Swipe</span>{" "}
              <RightArrow fill="#0D1018" fillOpacity={0.87}></RightArrow>
            </button>
          ) : null}
          {relatedSchemes.map((scheme, index) => (
            <SchemeCard scheme={scheme} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SchemeDashboard;
