import React from "react";
import styles from "./WeatherForecast.module.css";
import { LuSunMedium } from "react-icons/lu";
export function WeatherForecast() {
  return (
    <div className={styles.forecast__wrapper}>
      <div className={styles.forecast__cart}>
        <LuSunMedium className={styles.forecast__cart__icon} />
        <span>Tue</span>
        <span>30 °C</span>
      </div>{" "}
      <div className={styles.forecast__cart}>
        <LuSunMedium className={styles.forecast__cart__icon} />
        <span>Tue</span>
        <span>30 °C</span>
      </div>{" "}
      <div className={styles.forecast__cart}>
        <LuSunMedium className={styles.forecast__cart__icon} />
        <span>Tue</span>
        <span>30 °C</span>
      </div>
    </div>
  );
}
