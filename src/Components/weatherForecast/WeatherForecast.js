import React, { useContext, useEffect, useState } from "react";
import { fetchWeatherData } from "../../api/weather-api";
import { WeatherContext } from "../../weather-context/weatherContext";
import styles from "./WeatherForecast.module.css";

const apiKey = `6108e90940f04f92ab8192419231311`;
export function WeatherForecast() {
  const { state, dispatch } = useContext(WeatherContext);
  const [selectedDay, setSelectedDay] = useState(0);
  useEffect(() => {
    fetchWeatherData(dispatch, state.location, apiKey);
  }, []);
  let forecastData;
  if (state.weatherData) {
    forecastData = state.weatherData.forecast.forecastday;
  }

  return (
    <div className={styles.forecast__wrapper}>
      {forecastData
        ? forecastData.map((day, index) => {
            const weekday = new Date(day.date).toLocaleString("en-US", {
              weekday: "short",
            });
            return (
              <div
                onClick={() => {
                  setSelectedDay(index);
                }}
                className={
                  index === selectedDay
                    ? styles.forecast__current__cart
                    : styles.forecast__cart
                }
                key={index}
              >
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
