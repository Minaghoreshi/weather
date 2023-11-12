import React from "react";
import styles from "./CurrentWeather.module.css";
export function CurrentWeather() {
  return (
    <div className={styles.currentweather__wrapper}>
      <div className={styles.date}>
        <span>Tuesday</span>
        <span>20 Jun 2022</span>
        <span>Biarritz, FR</span>
      </div>
      <div className={styles.currentweather__details}>
        <span></span>
        <span>29 °C</span>
        <span>Sunny</span>
      </div>
    </div>
  );
}
