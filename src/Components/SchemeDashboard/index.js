import React, { useState } from "react";

import SchemeIntroduction from "../SchemeIntroduction";
import DatavizViewControls from "../DatavizViewControls";
import IndicatorSelector from "../IndicatorSelector";
import SchemeDetailsView from "../SchemeDetailsView";
import NewsCard from "../NewsCard";
import SchemeCard from "../SchemesCard";

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

const relatedSchemes = [
  { title: "National Health Mission", link: "", class: "", img: "" },
  { title: "National Health Mission", link: "", class: "ml-4", img: "" },
  { title: "National Health Mission", link: "", class: "ml-4", img: "" },
  { title: "National Health Mission", link: "", class: "ml-4", img: "" },
];

const SchemeDashboard = () => {
  const [activeNewsPage, setActiveNewsPage] = useState(1);
  const [showSwipeButton, setShowSwipeButton] = useState(true);

  const handleChangeNewsPage = (index) => {
    setActiveNewsPage(index);
    console.log("inside button click", index, activeNewsPage, newsData[index]);
  };

  const handleHideSwipeButton = () => {
    setShowSwipeButton(false);
  };

  return (
    <>
      <SchemeIntroduction />
      <div className="mt-3 mb-3 layout-wrapper">
        <div className="horizontal-seperator mb-3"></div>
        <DatavizViewControls />
        <div className="scheme-details-view-wrapper mt-3 ">
          <IndicatorSelector />
          <SchemeDetailsView />
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
          <a href="" target="_blank" className="mr-3">
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
