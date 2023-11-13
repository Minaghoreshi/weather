import axios from "axios";

export const fetchWeatherData = async (dispatch, city, apiKey) => {
  try {
    const res =
      await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=no&alerts=no
    `);
    const weatherData = await res.data;
    dispatch({ type: "GET", payload: weatherData });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.massage });
  }
};
