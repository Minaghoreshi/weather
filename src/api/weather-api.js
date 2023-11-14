import axios from "axios";

export const fetchWeatherData = async (dispatch, city, apiKey) => {
  axios
    .get(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=no&alerts=no`
    )
    .then((res) => dispatch({ type: "GET", payload: res.data }))
    .catch((error) => {
      dispatch({ type: "ERROR", payload: error.message });
    });
};
