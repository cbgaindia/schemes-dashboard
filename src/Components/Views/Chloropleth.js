import React, { Component } from "react";

import { TopojsonData } from "../../Data/StatesTopojson";
import { statesTopojson } from "../../Data/IndiaStates";
// import { statesTopojson } from "../../Data/IndiaStates (1)";
import { MapContainer, TileLayer, FeatureGroup, GeoJSON } from "react-leaflet";
// import 'bootstrap/dist/css/bootstrap.css';
import * as topojson from "topojson-client";

let config = {};

config.params = {
  center: [23.59, 81.96],
  zoomControl: true,
  zoom: 4,
  maxZoom: 5,
  minZoom: 4,
  scrollwheel: false,
  legends: true,
  infoControl: true,
  attributionControl: true,
  dragging: false,
};

config.tileLayer = {
  uri:
    "https://api.mapbox.com/styles/v1/suchismitanaik/cj1nivbus001x2sqqlhmct7du/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VjaGlzbWl0YW5haWsiLCJhIjoiY2lqMmZ5N2N5MDAwZnVna25hcjE2b2Q1eCJ9.IYx8Zoc0yNPcp7Snd7yW2A",
  params: {
    minZoom: 4,
    attribution:
      '  © <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    id: "",
    accessToken: "",
  },
};

config.geojson = {
  weight: "1",
  color: "#183152",
  fill: true,
};

export default class Choropleth extends Component {
  constructor() {
    super();
    this.state = {
      budgetAttr: "BE",
      selectedYear: null,
      selectedFigure: null,
      hoverstate: null,
      hoverFigure: null,
      bandFigures: null,
    };

    this.computeBands = this.computeBands.bind(this);
    this.mungeData = this.mungeData.bind(this);
    this.getYearList = this.getYearList.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.getstyle = this.getstyle.bind(this);
    this.onEachFeature = this.onEachFeature.bind(this);
    this.highlightFeature = this.highlightFeature.bind(this);
    this.resetHighlight = this.resetHighlight.bind(this);
    this.setToolTipContent = this.setToolTipContent.bind(this);
    this.getBandNum = this.getBandNum.bind(this);
    this.fillColor = this.fillColor.bind(this);

    this.geojson = React.createRef(null);
  }

  componentDidMount() {
    let MappedFigures = this.mungeData();
    this.setState({ selectedFigure: MappedFigures });
    let defaultYear = this.getYearList(this.props.schemeData)[
      this.getYearList(this.props.schemeData).length - 1
    ];
    this.props.setYearChange(defaultYear);
    this.setState({
      budgetAttr: this.props.budgetAttr,
      selectedYear: defaultYear,
    });
    this.computeBands(MappedFigures, defaultYear);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.schemeData != this.props.schemeData) {
      let MappedFigures = this.mungeData();
      let yearList = this.getYearList(this.props.schemeData);
      let flag = 0;
      for (let year in yearList) {
        if (this.state.selectedYear == yearList[year]) {
          flag = 1;
          break;
        }
      }

      if (flag == 0) {
        this.computeBands(MappedFigures, yearList[yearList.length - 1]);
        this.setState({ selectedYear: yearList[yearList.length - 1] });
        this.props.setYearChange(yearList[yearList.length - 1]);
      } else {
        this.computeBands(MappedFigures, this.state.selectedYear);
      }
      this.setState({ selectedFigure: MappedFigures });
    }
    if(prevState.selectedFigure != this.state.selectedFigure || prevState.selectedYear != this.state.selectedYear){
      if (this.geojson.current) {
        this.geojson.current.clearLayers().addData(this.state.selectedFigure);
      }
    }
  }

  computeBands(tempData, year) {
    let data = tempData;
    let currentState = this.state;
    let max = Math.max.apply(
      null,
      data.features.map(function (state, index) {
        if (
          state.properties[year] != null &&
          !isNaN(parseFloat(state.properties[year]))
        ) {
          return parseFloat(state.properties[year]);
        } else {
          return null;
        }
      })
    );
    max = max + max * 0.1;

    let min = Math.min.apply(
      null,
      data.features.map(function (state, index) {
        if (
          state.properties[year] != null &&
          !isNaN(parseFloat(state.properties[year]))
        ) {
          return parseFloat(state.properties[year]);
        } else {
          return null;
        }
      })
    );
    min = min - Math.abs(min * 0.1);
    
    max = isNaN(parseFloat(max)) ? 0 : max;
    min = isNaN(parseFloat(min)) ? 0 : min;

    let retvalue = {}
    if((min + (max-min)) === 0){
      retvalue = {
        "20%": [0, 0, 1],
        "40%": [0, 0, 2],
        "60%": [0, 0, 3],
        "80%": [0, 0, 4],
        "100%": [0, 0, 5],
      }
    }
    else{
      retvalue = {
        "20%": [min, min + (20 * (max - min)) / 100, 1],
        "40%": [
          min + (20 * (max - min)) / 100,
          min + (40 * (max - min)) / 100,
          2,
        ],
        "60%": [
          min + (40 * (max - min)) / 100,
          min + (60 * (max - min)) / 100,
          3,
        ],
        "80%": [
          min + (60 * (max - min)) / 100,
          min + (80 * (max - min)) / 100,
          4,
        ],
        "100%": [
          min + (80 * (max - min)) / 100,
          min + (100 * (max - min)) / 100,
          5,
        ],
      };
    }
    this.setState({ bandFigures: retvalue });
  }

  mungeData() {
    let GeoJSONData = new topojson.feature(
      TopojsonData,
      TopojsonData.objects.india_state_boundaries
    );
    let newGeoJsonData = new topojson.feature(
      statesTopojson,
      statesTopojson.objects.IndiaStates
    );
    let record = this.props.data.record_figures;
    let budgetAttr = this.props.budgetAttr;
    let MappedFigures = new Array();

    MappedFigures = newGeoJsonData.features.map((state, index) => {
      for (let variable in state.properties) {
        if (variable !== "ST_NM") {
          delete state.properties[variable];
        }
      }
      const stateCode = Object.keys(this.props.stateCodes).find(
        (code) => this.props.stateCodes[code] === state.properties.ST_NM
      );
      if (stateCode !== null) {
        let fiscalYears = Object.keys(this.props.schemeData.fiscal_year);
        fiscalYears.map((year) => {
          let valueToSet = this.props.schemeData.fiscal_year[year][stateCode];
          valueToSet =
            valueToSet === "NA" || valueToSet === undefined ? null : valueToSet;
          state.properties[year] = valueToSet;
        });
      }
      return state;
    });
    // MappedFigures = GeoJSONData.features.map(function (state, index) {
    //   let temp = record.find(function (x) {
    //     if (x.grpby_name == state.properties.NAME_1) {
    //       return x;
    //     } else {
    //       return false;
    //     }
    //   });
    //   for (let variable in state.properties) {
    //     if (variable != "HASC_1" && variable != "NAME_1") {
    //       delete state.properties[variable];
    //     }
    //   }
    //   if (temp != null) {
    //     let tempFigure = temp.figures[budgetAttr];

    //     for (let fiscalFigure in tempFigure) {
    //       let tempYear = Object.keys(tempFigure[fiscalFigure])[0];
    //       state.properties[tempYear] = parseFloat(
    //         tempFigure[fiscalFigure][tempYear]
    //       );
    //     }
    //   }
    //   return state;
    // });
    return { type: "FeatureCollection", features: MappedFigures };
  }

  getBandNum(figure) {
    if (figure != null) {
      let bandFigures = this.state.bandFigures;
      let bandKeys = Object.keys(bandFigures);
      for (let band in bandKeys) {
        if (
          figure >= bandFigures[bandKeys[band]][0] &&
          figure <= bandFigures[bandKeys[band]][1]
        ) {
          return bandFigures[bandKeys[band]][2];
        }
      }
    } else {
      return 0;
    }
  }

  fillColor(band) {
    if (band === 0 || band == null) {
      return "#858585";
    }
    if (band === 1) {
      return "#D3D1FF";
    }
    if (band === 2) {
      return "#CEA8FF";
    }
    if (band === 3) {
      return "#AB71F5";
    }
    if (band === 4) {
      return "#7C46C2";
    }
    if (band === 5) {
      return "#441E75";
    }
  }

  getstyle(feature) {
    let selectedYear = this.state.selectedYear;
    // console.log('tesitn get styles', feature.properties.ST_NM, feature.properties[selectedYear])
    return {
      fillColor: this.fillColor(
        this.getBandNum(feature.properties[selectedYear])
      ),
      weight: 1.3,
      opacity: 1,
      color: "grey",
      dashArray: 0,
      fillOpacity: 0.8,
    };
  }

  handleYearChange(e) {
    this.computeBands(this.state.selectedFigure, e.target.value);
    this.setState({ selectedYear: e.target.value });
    this.props.setYearChange(e.target.value);
  }

  getYearList(data) {
    let yearList = [];
    yearList = Object.keys(data.fiscal_year);
    // for (let key in data.record_figures[0].figures[this.props.budgetAttr]) {
    //   yearList.push(
    //     Object.keys(
    //       data.record_figures[0].figures[this.props.budgetAttr][key]
    //     )[0]
    //   );
    // }
    return yearList;
  }

  highlightFeature(e) {
    let layer = e.target;
    this.setToolTipContent(e.target);
    layer.setStyle({
      weight: 2,
      color: "#000",
      fillOpacity: 0.9,
    });
  }

  resetHighlight(e) {
    this.geojson.current.resetStyle(e.target);
    this.resetTooltipContent();
  }

  onEachFeature(component, feature, layer) {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
    });
  }

  setToolTipContent(values) {
    this.setState({
      // hoverstate: values.feature.properties.NAME_1,
      hoverstate: values.feature.properties.ST_NM,
      hoverFigure: values.feature.properties[this.state.selectedYear],
    });
  }

  resetTooltipContent() {
    this.setState({ hoverstate: null, hoverFigure: null });
  }

  showConcordanceData() {
    this.setState({ vizActive: this.state.vizActive ? false : true });
  }

  render() {
    return (
      <div className="vis-wrapper">
        <MapContainer
          center={config.params.center}
          zoom={config.params.zoom}
          zoomControl={config.params.zoomControl}
          dragging={config.params.dragging}
        >
          <TileLayer
            url={config.tileLayer.uri}
            maxZoom={config.params.maxZoom}
            minZoom={config.params.minZoom}
            attribution={config.tileLayer.params.attribution}
          />

          <div className="tcontainer">
            <YearSelector
              handleYearChange={this.handleYearChange}
              // fiscalYears={this.getYearList(this.props.data)}
              fiscalYears={this.getYearList(this.props.schemeData)}
              selectedYear={this.state.selectedYear}
            />
          </div>

          <div className="statetooltip">
            <StateToolTip
              statetooltip={this.state.hoverstate}
              allocations={this.state.hoverFigure}
              unit={this.props.unit}
            />
          </div>
          <FeatureGroup>
            {this.state.selectedFigure && (
              <GeoJSON
                data={this.state.selectedFigure}
                weight={config.geojson.weight}
                style={(feature) => this.getstyle(feature)}
                // valueProperty={(feature) => feature.properties.NAME_1}
                valueProperty={(feature) => feature.properties.ST_NM}
                onEachFeature={this.onEachFeature.bind(null, this)}
                ref={this.geojson}
              />
            )}
          </FeatureGroup>

          <div className="legendcontainer">
            <div className="legend-scale">
              {this.state.bandFigures ? (
                <ul className="legend-labels">
                  <LegendStep
                    bgColor="#D3D1FF"
                    band="20%"
                    range={this.state.bandFigures["20%"]}
                  />
                  <LegendStep
                    bgColor="#CEA8FF"
                    band="40%"
                    range={this.state.bandFigures["40%"]}
                  />
                  <LegendStep
                    bgColor="#AB71F5"
                    band="60%"
                    range={this.state.bandFigures["60%"]}
                  />
                  <LegendStep
                    bgColor="#7C46C2"
                    band="80%"
                    range={this.state.bandFigures["80%"]}
                  />
                  <LegendStep
                    bgColor="#441E75"
                    band="100%"
                    range={this.state.bandFigures["100%"]}
                  />
                  <li>
                    <span
                      className="legendspanside"
                      style={{ background: "#858585" }}
                    >
                      Data Unavailable
                    </span>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <div className="license-text">
            License -{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
            >
              CC-BY 4.0
            </a>{" "}
            |{" "}
            <a href="https://openbudgetsindia.org" target="_blank">
              Open Budgets India
            </a>
          </div>
        </MapContainer>
      </div>
    );
  }
}

// Choropleth.propTypes = {
//    data: PropTypes.object,
//    budgetAttr:PropTypes.string,
//    selectedSector:PropTypes.string,
//    selectedIndicator:PropTypes.string,
//    sectorName:PropTypes.string,
//    setYearChange:PropTypes.func,
//    unit:PropTypes.string
// };

class YearSelector extends Component {
  render() {
    let props = this.props;
    return (
      <div className="btn-group " role="group" aria-label="...">
        {this.props.fiscalYears.map(function (item, index) {
          return (
            <button
              type="button"
              key={item}
              value={item}
              className={
                props.selectedYear === item
                  ? "btn btn-light focus shadow-none"
                  : "btn btn-light shadow-none"
              }
              onClick={props.handleYearChange}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}

// YearSelector.propTypes = {
//    fiscalYears: PropTypes.array
// };

class StateToolTip extends React.Component {
  render() {
    if (this.props.statetooltip == null) {
      return (
        <div className="statetoolPanelHeading">
          Please select a state from the map
        </div>
      );
    }
    return (
      <div>
        <div className="statetoolPanelHeading">
          <span className="glyphicon glyphicon-map-marker"></span>&nbsp;
          {this.props.statetooltip}
        </div>
        <div>
          <AllocationDetails
            allocations={this.props.allocations}
            unit={this.props.unit}
          />
        </div>
      </div>
    );
  }
}

// StateToolTip.propTypes = {
//    statetooltip: PropTypes.string,
//    allocations: PropTypes.number,
//    unit:PropTypes.string
// };

class AllocationDetails extends React.Component {
  render() {
    if (
      this.props.allocations == null ||
      isNaN(parseFloat(this.props.allocations))
    ) {
      return <span>Data unavailable</span>;
    }
    return (
      <span>
        {" "}
        {this.props.allocations}{" "}
        {this.props.unit == "Percentage" ? "%" : this.props.unit}
      </span>
    );
  }
}

// AllocationDetails.propTypes = {
//    allocations: PropTypes.number,
//    unit:PropTypes.string
// };

class LegendStep extends React.Component {
  render() {
    return (
      <li>
        <span
          className="legendspanside"
          style={{ background: this.props.bgColor }}
        >
          {this.props.range[0].toFixed(2)} - {this.props.range[1].toFixed(2)}
        </span>
      </li>
    );
  }
}

// LegendStep.propTypes = {
//    bgColor: PropTypes.string,
//    range:PropTypes.array
// };
