import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import Select from "react-select";
// import 'react-select/dist/react-select.css';
import {
  Hint,
  HorizontalGridLines,
  MarkSeries,
  VerticalGridLines,
  XAxis,
  FlexibleXYPlot,
  XYPlot,
  VerticalBarSeries,
  DiscreteColorLegend,
  DynamicHints,
  YAxis,
} from "react-vis";

import "../../../node_modules/react-vis/dist/style.css";

const { LEFT, RIGHT, TOP, BOTTOM_EDGE, RIGHT_EDGE, TOP_EDGE } = Hint.ALIGN;

class GraphComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [],
      budgetAttr: "A",
      selectedFigures: null,
      stateOptions: null,
      hoverValue: null,
      indicatorUnit: null,
      notesText: null,
      vizActive: true,
      concordanceData: null,
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.getrecord_figures = this.getrecord_figures.bind(this);
    this.onBarHover = this.onBarHover.bind(this);
    this.outBarHover = this.outBarHover.bind(this);
    this.setBudgetAttr = this.setBudgetAttr.bind(this);
  }

  componentWillMount() {
    this.getrecord_figures();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("inside component updated");
    if (this.state.budgetAttr != this.props.budgetAttr) {
      this.setState({ budgetAttr: this.props.budgetAttr });
    }

    if (
      prevState.value != this.state.value ||
      prevState.budgetAttr != this.props.budgetAttr ||
      prevProps.data != this.props.data ||
      prevProps.schemeData != this.props.schemeData
    ) {
      if (this.state.value.length != 0) {
        let stateArray = this.state.value.map((states) => states.value);
        // let selectedFigures = [];
        // for(let selectedState in stateArray){
        //   selectedFigures.push(this.props.data.record_figures.find(function(value, index) {
        //   if(value.grpby_name == stateArray[selectedState]){
        //     return value.grpby_name;
        //      }
        //    }
        //   ));
        // }

        let mungedFigures = [];
        stateArray.map((state) => {
          let tempState = {};
          tempState.name = this.props.stateCodes[state];
          tempState.figures = [];
          Object.keys(this.props.schemeData).map((financialYear) => {
            let tempFigure = {};
            tempFigure.x = financialYear;
            tempFigure.y = isNaN(
              parseFloat(this.props.schemeData[financialYear][state])
            )
              ? 0
              : parseFloat(this.props.schemeData[financialYear][state]);
            tempFigure.grpby_name = this.props.stateCodes[state];
            tempState.figures.push(tempFigure);
          });
          mungedFigures.push(tempState);
        });
        // selectedFigures.map(function(value, index){
        //   let tempState = {};
        //   tempState.name = value.grpby_name;
        //   tempState.figures = [];
        //   value.figures[currentState.budgetAttr].map(function(figure, index){
        //     let tempFigure = {};
        //     tempFigure.x = Object.keys(figure)[0];
        //     tempFigure.y = parseFloat(figure[Object.keys(figure)[0]]);
        //     tempFigure.grpby_name = value.grpby_name;
        //     tempState.figures.push(tempFigure);
        //   });
        //   mungedFigures.push(tempState);
        // });
        if (this.state.value[0] == null && prevState.value != null) {
          this.setState({ selectedFigures: null });
        } else {
          this.setState({ selectedFigures: mungedFigures });
        }
      }
    }
  }
  setBudgetAttr() {
    this.setState({ budgetAttr: this.props.budgetAttr });
  }

  getrecord_figures() {
    let statesData = [];
    statesData = Object.keys(this.props.stateCodes).map((state) => {
      let temp = {};
      temp.value = state;
      temp.label = this.props.stateCodes[state];
      return temp;
    });
    // for(let state in this.props.data.record_figures){
    //   let temp = {};
    //   temp.value = this.props.data.record_figures[state].grpby_name;
    //   temp.label = this.props.data.record_figures[state].grpby_name;
    //   statesData.push(temp);
    // }
    this.setState({ stateOptions: statesData });
  }

  onBarHover(d, info) {
    this.setState({ hoverValue: d });
  }

  outBarHover(d, info) {
    this.setState({ hoverValue: null });
  }

  handleSelectChange(value) {
    if (value === null) {
      this.setState({ value: [] });
    } else {
      this.setState({ value });
    }
  }

  handleNoOptionsMessage = () => {
    return this.state.value.length > 14
      ? "Oops! Only 15 states can be selected at a time."
      : "No results found";
  };
  render() {
    let accessthis = this;
    const attributeKey = {
      BE: " Budget Estimates",
      RE: "Revised Estimates",
      A: "Actuals",
    };
    const color = [
      "#19165C",
      "#FFC2E2",
      "#38663A",
      "#FFD873",
      "#0F5C66",
      "#6E67EB",
      "#EB67AD",
      "#7FE984",
      "#CCA43D",
      "#3DCCC3",
      "#CFCCFF",
      "#672448",
      "#C2FFC5",
      "#664E0F",
      "#73FFFF"
    ];
    const items =
      this.state.selectedFigures &&
      this.state.selectedFigures.map((value, index) => ({
        title: value.name,
        color: color[index],
      }));
    return (
      <div className="vis-wrapper" id="report-container">
        <div className="">
          <div className="">
            <Select
              isMulti={true}
              simpleValue
              value={this.state.value}
              placeholder="Select States"
              noOptionsMessage={this.handleNoOptionsMessage}
              options={
                this.state.value.length < 15
                  ? this.state.stateOptions
                  : this.state.value
              }
              onChange={this.handleSelectChange}
            />
          </div>

          {this.state.value[0] != null && this.state.selectedFigures != null ? (
            <div className="hide-scrollbar d-flex flex-nowrap overflow-auto pl-3 mt-4">
              {items.map((legend, index) => {
                return (
                  <div className="d-flex mr-4" key={index}>
                    <div
                      className="legend-square"
                      style={{ backgroundColor: legend.color }}
                    ></div>
                    <p className="page-introduction-text text-black text-nowrap ml-2">
                      {legend.title}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}
          <div className="mt-2">
            {this.state.value[0] != null &&
            this.state.selectedFigures != null ? (
              <div id="chart" style={{ backgroundColor: "white" }}>
                <XYPlot
                  width={650}
                  height={350}
                  xType="ordinal"
                  margin={{ top: 20, left: 70, right: 10, bottom: 40 }}
                >
                  <HorizontalGridLines />

                  <VerticalGridLines />
                  {this.state.selectedFigures.map(function (state, index) {
                    return (
                      <VerticalBarSeries
                        color={color[index]}
                        onValueMouseOver={accessthis.onBarHover}
                        onValueMouseOut={accessthis.outBarHover}
                        data={state.figures}
                        key={state.name}
                      />
                    );
                  })}

                  <XAxis title="Fiscal Years" />
                  <YAxis title="Indicator" />

                  {this.state.hoverValue ? (
                    <Hint value={this.state.hoverValue}>
                      <div className="rv-hint__content">
                        <div>
                          <span className="rv-hint__title">
                            {" "}
                            {this.state.hoverValue.grpby_name}
                          </span>
                          <br />
                          <span className="rv-hint__title">Fiscal Year : </span>
                          <span className="rv-hint__value">
                            {this.state.hoverValue.x}
                          </span>
                        </div>
                        <div>
                          <span className="rv-hint__title">Figure : </span>
                          <span className="rv-hint__value">
                            {this.state.hoverValue.y}
                          </span>
                        </div>
                      </div>
                    </Hint>
                  ) : null}
                </XYPlot>
              </div>
            ) : (
              <div className="select-placeholder">
                <div className="jumbotron">
                  <h2 className="text-center">
                    Select states to generate Visualization
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// GraphComponent.propTypes = {
//    data: React.PropTypes.object,
//    budgetAttr:React.PropTypes.string
// };

export default GraphComponent;
