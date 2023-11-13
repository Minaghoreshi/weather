import React, { useContext, useEffect, useState } from "react";
import styles from "./CurrentWeather.module.css";
import { WeatherContext } from "../../weather-context/weatherContext";
import { fetchWeatherData } from "../../api/weather-api";
import axios from "axios";
import { weatherDetails } from "./actions";
const apiKey = `6108e90940f04f92ab8192419231311`;

export function CurrentWeather() {
  const { state, dispatch } = useContext(WeatherContext);
  useEffect(() => {
    fetchWeatherData(dispatch, state.location, apiKey);
  }, []);

  let result;
  useEffect(() => {});
  if (state.weatherData) {
    result = weatherDetails(
      state.weatherData.location,
      state.weatherData.current
    );
  }

  return (
    <div className={styles.currentweather__wrapper}>
      <div className={styles.date}>
        <span>{result ? result.day : ""}</span>
        <span>{result ? result.date : ""}</span>
        <span>
          {result ? result.city : ""}, {result ? result.country : ""}
        </span>
      </div>
      <div className={styles.currentweather__details}>
        <img src={result ? result.icon : ""} alt="weather icon" />
        <span>{result ? result.temp : ""} °C</span>
        <span>{result ? result.mood : ""}</span>
      </div>
    </div>
  );
}
