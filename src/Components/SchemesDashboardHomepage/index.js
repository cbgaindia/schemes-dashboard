import React from "react";
import SchemesCard from "../SchemesCard";

import "./index.css"

const schemes = [
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
  { title: "National Health Mission", link: "", class: "mt-4", img: "" },
];

const SchemesDashboardHomepage = () => {
  return (
    <div className="home-layout-wrapper mt-5">
      <h1 className="page-heading text-dark pl-3 mb-2">Schemes</h1>
      <div className="horizontal-seperator mt-3"></div>
      <div className="radio-buttons-container"></div>
      <div className="schemes-list-container">
        {/* <div className="row"> */}
        {schemes.map((scheme, index) => {
            return (
              // <div className="col-md-3 mr-3">
                <SchemesCard scheme={scheme} key={index} />
              // </div>
            );
          })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SchemesDashboardHomepage;
