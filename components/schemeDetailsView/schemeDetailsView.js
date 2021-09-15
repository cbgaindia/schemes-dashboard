import React from 'react';
import dynamic from 'next/dynamic';
import IndicatorDefinition from 'components/views/indicatorDefinitions';
import GraphComponent from 'components/views/graphComponent';
import Table from 'components/views/table';

const SchemesDetailsView = (props) => {
  const Choropleth = React.useMemo(
    () =>
      dynamic(() => import('components/views/choropleth'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const indicatorName =
    props.schemeData.data[props.activeIndicator] &&
    props.schemeData.data[props.activeIndicator].name;
  const schemeName = props.schemeData.metadata.name;
  const { activeYear } = props;
  const unit =
    props.schemeData.data[props.activeIndicator] &&
    props.schemeData.data[props.activeIndicator].unit;
  const dataSource = props.schemeData.metadata.source;
  return (
    <div className="schemes__details">
      <div id={props.showViz ? 'report-container' : ''}>
        <div className="details__header">
          {!props.showViz ? (
            <>
              <p className="details__title">Editorial Notes</p>
              <button
                onClick={() => props.handleToggleShowViz(true)}
                type="button"
              >
                Back to Visualisation
              </button>
            </>
          ) : (
            <>
              <div className="details__header--viz-show">
                <h3>{indicatorName}</h3>
                <p>
                  {props.activeViz === 'map'
                    ? `${activeYear} | ${schemeName}`
                    : schemeName}
                </p>
              </div>
              <div className="details__header--viz-show text-end">
                <button
                  onClick={() => props.handleToggleShowViz(false)}
                  id="hide-this-button"
                  type="button"
                >
                  View Editorial Notes
                </button>
                <p>Unit : {unit}</p>
              </div>
            </>
          )}
        </div>
        <div className="pt-2 pb-2">
          <div
            id="vis-container"
            className={
              props.showViz
                ? 'details__visualisation'
                : 'details__visualisation additional-details'
            }
          >
            {!props.showViz ? (
              <IndicatorDefinition
                indicatorData={props.schemeData.data}
                schemeData={props.schemeData.metadata}
              />
            ) : null}
            {/* {props.showViz && props.activeViz === 'map' ? (
              <Choropleth
                budgetAttr="A"
                unit={props.schemeData.data[props.activeIndicator].unit}
                stateCodes={props.stateCodes}
                schemeData={props.schemeData.data[props.activeIndicator]}
                setYearChange={props.setYearChange}
              />
            ) : null} */}
            {props.showViz && props.activeViz === 'bar' ? (
              <GraphComponent
                budgetAttr="A"
                stateCodes={props.stateCodes}
                schemeData={
                  props.schemeData.data[props.activeIndicator].fiscal_year
                }
              />
            ) : null}
            {props.showViz && props.activeViz === 'table' ? (
              <Table
                stateCodes={props.stateCodes}
                schemeData={props.schemeData.data[props.activeIndicator]}
              />
            ) : null}
          </div>
        </div>
        <div className="details__info">
          <p className="m-0">
            Data Source: <span className="text-dark">{dataSource}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchemesDetailsView;
