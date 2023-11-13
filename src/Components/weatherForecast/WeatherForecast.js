import React, { useContext, useEffect } from "react";
import styles from "./WeatherForecast.module.css";
import { WeatherContext } from "../../weather-context/weatherContext";
import { fetchWeatherData } from "../../api/weather-api";

import { LuSunMedium } from "react-icons/lu";
const apiKey = `6108e90940f04f92ab8192419231311`;
export function WeatherForecast() {
  const { state, dispatch } = useContext(WeatherContext);
  useEffect(() => {
    fetchWeatherData(dispatch, state.location, apiKey);
  }, []);
  let forecastData;
  if (state.weatherData) {
    forecastData = state.weatherData.forecast.forecastday;
    console.log(forecastData);
  }

  return (
    <div className={styles.forecast__wrapper}>
      {forecastData
        ? forecastData.map((day, index) => (
            <div className={styles.forecast__cart} key={index}>
              <LuSunMedium className={styles.forecast__cart__icon} />
              <span>Tue</span>
              <span>30 °C</span>
            </div>
          ))
        : ""}
    </div>
  );
}
