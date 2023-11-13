import React, { useContext } from "react";
import styles from "./WeatherDetails.module.css";
import { WeatherForecast } from "../weatherForecast/WeatherForecast";
import { WeatherContext } from "../../weather-context/weatherContext";
import { weatherDetails } from "../currentWeather/actions";
export function WeatherDetails() {
  const { state } = useContext(WeatherContext);
  let result;
  if (state.weatherData) {
    result = weatherDetails(
      state.weatherData.location,
      state.weatherData.current
    );
  }
  return (
    <div className={styles.weatherDetails__wrapper}>
      <div className={styles.details__wrapper}>
        <div>
          <span>PRECIPITATION</span>
          <span>{result ? result.precipitation : ""}%</span>
        </div>

        <div>
          <span>WIND</span>
          <span>{result ? result.wind : ""} km/h</span>
        </div>

        <div>
          <span>HUMIDITY</span>
          <span>{result ? result.humidity : ""} %</span>{" "}
        </div>
      </div>
      <WeatherForecast />
    </div>
  );
}
