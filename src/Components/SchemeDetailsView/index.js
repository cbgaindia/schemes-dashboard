import React from "react";
import IndicatorDefinitionView from "../IndicatorDefinitionsView";
import Chloropleth from "../Views/Chloropleth";
import GraphComponent from "../Views/GraphComponent";
import Table from "../Views/Table";

import "./index.css";
const SchemesDetailsView = (props) => {
  const indicatorName = props.schemeData.data[props.activeIndicator] && props.schemeData.data[props.activeIndicator].name;
  const schemeName = props.schemeData.metadata.name;
  const activeYear = props.activeYear;
  const unit = props.schemeData.data[props.activeIndicator] && props.schemeData.data[props.activeIndicator].unit;
  const dataSource = props.schemeData.metadata.source;
  return (
    <div className="schemes-details-view-wrapper">
      <div className="introduction-container">
        {!props.showViz ? (
          <>
            <div className="d-flex flex-column">
              <h2 className="m-0">Editorial Notes</h2>
            </div>
            <div className="d-flex flex-column align-items-end">
              <button onClick={() => props.handleToggleShowViz(true)}>
                Back to Visualisation
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex flex-column">
              <h2 className="m-0">{indicatorName}</h2>
              <p className="m-0 mt-1">
                {activeYear} | {schemeName}
              </p>
            </div>
            <div className="d-flex flex-column align-items-end">
              <button onClick={() => props.handleToggleShowViz(false)}>
                View Editorial Notes
              </button>
              <p className="m-0 mt-1">Unit : {unit}</p>
            </div>
          </>
        )}
      </div>
      <div className="pt-2 pb-2">
        <div
          id="vis-container"
          className={
            props.showViz
              ? "visualisation-container visualization-container"
              : "visualisation-container additional-details"
          }
          // style={
          //   props.showViz ? { overflowY: "hidden" } : { overflowY: "scroll" }
          // }
        >
          {!props.showViz ? (
            <IndicatorDefinitionView
              indicatorData={props.schemeData.data}
              schemeData={props.schemeData.metadata}
            />
          ) : null}
          {props.showViz && props.activeViz === "map" ? (
            <Chloropleth
              data={props.record}
              budgetAttr={"A"}
              unit={props.schemeData.data[props.activeIndicator].unit}
              stateCodes={props.stateCodes}
              schemeData={props.schemeData.data[props.activeIndicator]}
              setYearChange={props.setYearChange}
            />
          ) : null}
          {props.showViz && props.activeViz === "bar" ? (
            <GraphComponent
              data={props.record}
              budgetAttr={"A"}
              unit={props.record.unit}
              stateCodes={props.stateCodes}
              schemeData={props.schemeData.data[props.activeIndicator].fiscal_year}
            />
          ) : null}
          {props.showViz && props.activeViz === "table" ? (
            <Table
              stateCodes={props.stateCodes}
              schemeData={props.schemeData.data[props.activeIndicator]}
            />
          ) : null}
        </div>
      </div>
      <div className="data-source-info">
        <p className="m-0">
          Data Source: <span className="text-dark">{dataSource}</span>
        </p>
      </div>
    </div>
  );
};

export default SchemesDetailsView;
