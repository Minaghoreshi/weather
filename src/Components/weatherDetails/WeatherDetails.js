import React from "react";
import styles from "./WeatherDetails.module.css";
import { WeatherForecast } from "../weatherForecast/WeatherForecast";
export function WeatherDetails() {
  return (
    <div className={styles.weatherDetails__wrapper}>
      <div className={styles.details__wrapper}>
        <div>
          <span>PRECIPITATION</span>
          <span>0%</span>
        </div>

        <div>
          <span>WIND</span>
          <span>3 km/h</span>
        </div>

        <div>
          <span>HUMIDITY</span>
          <span>42%</span>{" "}
        </div>
      </div>
      <WeatherForecast />
    </div>
  );
}
