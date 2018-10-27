import React from 'react'
import Form from '../components/Form'
import axios from 'axios'
import { connect } from 'react-redux';
import { getWeather } from '../redux/action/weatherAction'

const API_KEY = '1dd4e8e82c7762d41d80dc7da8134120'

const mapStateToProps = (state) => {
  return {
    data: state.weatherReducer.data,
    isLoading: state.weatherReducer.isLoading,
    errorMessage: state.weatherReducer.errorMessage
  }
}

 const mapDispatchToProps = (dispatch) => {
  return({
    getWeather: (city) => {
      dispatch(getWeather(city))
    }
  })
}

class WeatherPage extends React.Component {

  render() {
    return (
      <div>
        <Form/>
      </div>
    )
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage); 