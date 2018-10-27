import React, { Component } from "react";
import Weather from "./Weather";
import { connect } from "react-redux";
import { getWeather } from "../redux/action/weatherAction";

const mapDispatchToProps = dispatch => {
  return {
    getWeather: city => {
      dispatch(getWeather(city));
    }
  };
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: ""
    };
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="row">
            <div className="col-md-5 title-container" />
            <div className="col-md-7 form-container">
              <h3 className="title-container__subtitle">
                Check weather first before you cook!
              </h3>
              <input
                type="text"
                onChange={e => this.setState({ cityName: e.target.value })}
                name="city"
                placeholder="City..."
              />
              <button
                onClick={() => this.props.getWeather(this.state.cityName)}
              >
                Get Weather
              </button>
              <Weather dataWeather={this.props.weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Form);
