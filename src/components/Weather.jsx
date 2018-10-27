import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getWeather } from '../redux/action/weatherAction'

const mapStateToProps = (state) => {
  return {
    data: state.weatherReducer.data,
    isLoading: state.weatherReducer.isLoading,
    errorMessage: state.weatherReducer.errorMessage
  }
}

class Weather extends Component {
  render() {
    return (
      <div>
          { 
            this.props.data.name && 
            <p className="weather__key">Location: <span className="weather__value"> {this.props.data.name} </span></p> 
          }
          {
            this.props.data.main && 
            this.props.data.main.temp ?
            <p className="weather__key">Temperature: <span className="weather__value"> {this.props.data.main.temp} ˚C</span></p> 
            : null
          }
          { 
            this.props.data.main && 
            this.props.data.main.humidity ?
            <p className="weather__key">Humidity: <span className="weather__value"> {this.props.data.main.humidity} (g/m³)</span></p> 
            : null
          }
          { 
            this.props.data.weather && 
            this.props.data.weather[0].description ?
            <p className="weather__key">Description: <span className="weather__value"> {this.props.data.weather[0].description} </span></p>
            : null 
          }
          { 
            this.props.errorMessage.data && 
            this.props.errorMessage.data.message ?
            <p className="weather__key"> {this.props.errorMessage.data.message} </p> 
            : null
          }
      </div>
    )
  }
}

export default connect(mapStateToProps, null) (Weather)