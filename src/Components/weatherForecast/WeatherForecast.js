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
        ? forecastData.map((day, index) => {
            const weekday = new Date(day.date).toLocaleString("en-US", {
              weekday: "short",
            });
            console.log(weekday);
            return (
              <div
                className={
                  index === 0
                    ? styles.forecast__current__cart
                    : styles.forecast__cart
                }
                key={index}
              >
                {/* <LuSunMedium className={styles.forecast__cart__icon} /> */}
                <img src={day.day.condition.icon} alt="daymood" />
                <span>{weekday}</span>
                <span>{day.day.avgtemp_c} °C</span>
              </div>
            );
          })
        : ""}
    </div>
  );
}
