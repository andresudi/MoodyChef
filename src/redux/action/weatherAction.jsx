import axios from "axios";

const API_KEY = "1dd4e8e82c7762d41d80dc7da8134120";

export const getWeather = (city) => {
  return dispatch => {
    dispatch({ type: "GET_WEATHER_REQUEST" });
    axios({
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    })
      .then(result => {
        console.log("===>",result.data);
        dispatch({ type: "GET_WEATHER_SUCCESS", payload: result.data });
        dispatch({ type: "GET_WEATHER_ERROR", payload: '' });
      })
      .catch(err => {
        dispatch({ type: "GET_WEATHER_ERROR", payload: err.response });
        dispatch({ type: "GET_WEATHER_SUCCESS", payload: err.response });
        console.log(err);
      });
  };
}
