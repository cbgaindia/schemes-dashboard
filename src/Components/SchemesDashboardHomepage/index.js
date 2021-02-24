import React, {useState, useRef, useEffect} from "react";
import SchemesCard from "../SchemesCard";

import schemesData from "../../Data/schemes.json";
import schemeLogos from "../../Data/schemesLogos"

import RightCaret from "../../Images/arrow/right.svg"
import LeftCaret from "../../Images/arrow/left.svg"

import "./index.css";

const radioButtons = [
  { title: "All", val: "all"},
  { title: "Agriculture and Allied Activities ", val: "Agriculture and Allied Activities" },
  { title: "Drinking Water & Sanitation", val: "Drinking Water & Sanitation" },
  { title: "Education", val: "Education" },
  { title: "Environment and Forests", val: "Environment and Forests" },
  { title: "Food, Civil Supplies and Co-operation", val: "Food, Civil Supplies and Co-operation" },
  { title: "Drinking Water & Sanitation", val: "Drinking Water & Sanitation" },
  { title: "Education", val: "Education" },
  { title: "Environment and Forests", val: "Environment and Forests" },
  { title: "Food, Civil Supplies and Co-operation", val: "Food, Civil Supplies and Co-operation" },
];

const SchemesDashboardHomepage = (props) => {
  const [schemeType, setSchemeType] = useState("all")
  const [showLeftScrollButton, setShowLeftScrollButton] = useState(false)
  const [showRightScrollButton, setShowRightScrollButton] = useState(true)
  const [schemes, setSchemes] = useState([])

  const toolbarScrollRef = useRef(null)

  useEffect(() => {
    console.log('testing scheme slugs', props.schemeSlugs)
    let schemes = Object.keys(schemesData).map((scheme, index) => (
      {
      title: schemesData[scheme].metadata.name, 
      link: `/scheme/${schemesData[scheme].metadata.slug}/${schemesData[scheme].data['indicator_01'].slug}`, 
      class: "mt-4", 
      img: schemeLogos[scheme]
      }
      ))
      schemes.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
    setSchemes(schemes)
  }, [])

  const handleChangeSchemesType = (e) => {
    setSchemeType(e.target.value)
  }

  const handleScrollOnClick = (dir) => {
    if(dir === 'left'){
      toolbarScrollRef.current.scrollLeft -= 200;
    }
    else{
      toolbarScrollRef.current.scrollLeft += 200;
    }
  }

  const handleFilterOptionScroll = (e) => {
    if(e.target.scrollLeft < 30){
      setShowLeftScrollButton(false)
      setShowRightScrollButton(true)
    }
    else{
      if((e.target.scrollLeft + e.target.clientWidth) > e.target.scrollWidth - 30 ){
        setShowRightScrollButton(false)
      }
      else{
        setShowRightScrollButton(true)
      }
      setShowLeftScrollButton(true)
    }

  }
  return (
    <div className="layout-wrapper pt-5">
      <h1 className="page-heading text-dark pl-3 mb-2">Schemes Dashboards</h1>
      <div className="horizontal-seperator mt-3 mb-1"></div>
      {/* <div className="radio-toolbar-container mt-3">
        {
          showLeftScrollButton
          ?
          <button className="scroll-button left" onClick={() => handleScrollOnClick('left')}><img src={RightCaret} /></button>
          : null
        }
        <div class="radio-toolbar d-flex tab-horizontal-scroll" onScroll={handleFilterOptionScroll} ref={toolbarScrollRef}>
          {radioButtons.map((radio) => (
            <>
              <input
                type="radio"
                id={radio.val}
                name="radios"
                value={radio.val}
                onChange={handleChangeSchemesType}
                checked={radio.val === schemeType}
              />
              <label className={radio.class} htmlFor={radio.val}>
                {radio.title}
              </label>
            </>
          ))}
        </div>
        {
          showRightScrollButton 
          ?
          <button className="scroll-button right" onClick={() => handleScrollOnClick('right')}><img src={RightCaret} /></button>
          : null
        }
      </div> */}
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
