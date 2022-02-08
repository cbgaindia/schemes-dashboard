import React from 'react';
import dynamic from 'next/dynamic';
import IndicatorDefinition from 'components/views/indicatorDefinitions';
import GraphComponent from 'components/views/graphComponent';
import Table from 'components/state/views/table';
import SimpleBarLineChartViz from "components/viz/SimpleBarLineChart";
import { barLineTransformer } from "transformers/BarLineTransformer";


const SchemesDetailsView = (props) => {
  const Choropleth = React.useMemo(
    () =>
      dynamic(() => import('components/views/choropleth'), {
        loading: () => <p>Map is loading</p>,
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
                  {props.activeViz === 'bar' || props.activeViz === 'line'
                    ? ` ${schemeName} | ${props.activeIndicator} | ${props.activeEstimate} `
                    : ` ${schemeName} | ${props.activeIndicator}` }
                </p>
              </div>
              <div className="details__header--viz-show text-end">
                {/*<button
                  onClick={() => props.handleToggleShowViz(false)}
                  id="hide-this-button"
                  type="button"
                >
                  View Editorial Notes
                </button>*/}
                <p>Unit : {props.schemeData.data[0]['Unit'] || "In Crores"}</p>
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
            {props.showViz && props.activeViz === 'bar' ? (
	       <figure>
                  
                <SimpleBarLineChartViz
		  color="#00ABB7"
		  dataset={barLineTransformer(props.schemeData.data, props.activeIndicator, props.activeEstimate )}
		  type="bar"
		  smooth
		  showSymbol
		  Title={
		    `${props.activeIndicator} - ${props.activeEstimate}`
		  }
		  subTitle=""
		  unit="Cr"
	      />

            </figure>
            ) : null}
            {props.showViz && props.activeViz === 'line' ? (
	       <figure>
                  
                <SimpleBarLineChartViz
		  color="#00ABB7"
		  dataset={barLineTransformer(props.schemeData.data, props.activeIndicator, props.activeEstimate )}
		  type="line"
		  smooth
		  showSymbol
		  Title={
		    `${props.activeIndicator} - ${props.activeEstimate}`
		  }
		  subTitle=""
		  unit="Cr"
	      />

            </figure>
            ) : null}
            {props.showViz && props.activeViz === 'table' ? (
              <Table
                schemeData={props.schemeData.data.filter((item) => item["Scheme"] == props.activeIndicator)} 
              />
            ) : null}
          </div>
        </div>
        <div className="details__info">
          {dataSource && (
            <p>
              Data Source:{' '}
              <span className="text-dark dont-break-out">{dataSource}</span>
            </p>
          )}

          {props.showViz && (
            <button
              className="details__download"
              onClick={props.handleDownloadReportImage}
              disabled={!props.showViz}
              type="button"
            >
              Download {props.activeViz == 'table' ? 'CSV' : 'Visualisation'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M16.59 9H15V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H7.41a1 1 0 0 0-.71 1.71l4.59 4.59a1 1 0 0 0 1.41 0l4.59-4.59a1 1 0 0 0-.7-1.71ZM5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1 1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemesDetailsView;
