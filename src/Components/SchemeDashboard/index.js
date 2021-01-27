import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SchemeIntroduction from "../SchemeIntroduction";
import DatavizViewControls from "../DatavizViewControls";
import IndicatorSelector from "../IndicatorSelector";
import SchemeDetailsView from "../SchemeDetailsView";
import NewsCard from "../NewsCard";
import SchemeCard from "../SchemesCard";

import { receipts_data as data } from "../../Data/receipts_data";
import schemesData from "../../Data/schemes (2).json";

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
  29: "Andaman and Nicobar Islands",
  30: "Chandigarh",
  31: "Dadra and Nagar Haveli",
  32: "Daman and Diu",
  33: "Delhi",
  34: "Jammu and Kashmir",
  35: "Ladakh",
  36: "Lakshadweep",
  37: "Puducherry",
}

const SchemeDashboard = (props) => {
  const { scheme_slug, indicator_slug } = useParams();
  let reverseSchemeSlugs = {} 
  Object.keys(schemesData).forEach((scheme) => {
    reverseSchemeSlugs[schemesData[scheme].metadata.slug] = scheme;
  });

  const [activeNewsPage, setActiveNewsPage] = useState(1);
  const [showSwipeButton, setShowSwipeButton] = useState(true);
  const [showViz, setShowViz] = useState(true);
  const [activeViz, setActiveViz] = useState("map");
  const [schemeData, setSchemeData] = useState(schemesData[reverseSchemeSlugs[scheme_slug]]);
  const [relatedSchemes, setRelatedSchemes] = useState([])
  const [activeIndicator, setActiveIndicator] = useState(indicator_slug);
  const [activeYear, setActiveYear] = useState("2019-20")
  console.log("testing slugs", indicator_slug, scheme_slug, reverseSchemeSlugs);

  useEffect(() => {
    console.log("testing slugs", indicator_slug, scheme_slug);

    let indicator_name = Object.keys(schemeData.data).find(indicator => schemeData.data[indicator].slug === indicator_slug)
    setActiveIndicator(indicator_name)


    let allSchemes = Object.keys(schemesData)
                    .filter(scheme => (schemesData[scheme] !== scheme_slug) && schemesData[scheme].metadata.type === schemeData.metadata.type)
                    .slice(0,4)
    const relatedSchemes = allSchemes.map((scheme, index) => (
      {
      title: schemesData[scheme].metadata.name, 
      link: `http://localhost:3000/scheme/${scheme}/indicator_01`, class: `${index === 0 ? "" : "ml-4"}`, img: ""}
      ))
      setRelatedSchemes(relatedSchemes)
    // console.log('testing all schemes', allSchemes, relatedSchemes)
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
    setActiveYear(year)
  }

  return (
    <>
      <SchemeIntroduction data={schemeData.metadata} />
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
          <h2 className="section-heading text-dark ml-3">News</h2>
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
              {activeNewsPage}/{newsData.length}
            </p>
            <button
              className="arrow-btn ml-1"
              disabled={activeNewsPage === newsData.length}
              onClick={() => handleChangeNewsPage(activeNewsPage + 1)}
            >
              <RightArrow
                fill="#0D1018"
                fillOpacity={activeNewsPage === newsData.length ? 0.4 : 0.87}
              />
            </button>
          </div>
        </div>
        <div class="case-studies-cards-container mt-3">
          {newsData[activeNewsPage - 1] &&
            newsData[activeNewsPage - 1].map((news, index) => (
              <NewsCard data={news} key={index} />
            ))}
        </div>
      </div>
      <div className="related-scheme-section mt-5 layout-wrapper">
        <div className="d-flex justify-content-between">
          <h2 className="section-heading text-dark ml-3">Related Schemes</h2>
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
