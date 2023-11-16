import React, { useContext } from "react";
import { Search } from "../search";
import { CurrentWeather } from "../currentWeather";
import { WeatherDetails } from "../weatherDetails";
import { WeatherContext } from "../../weather-context/weatherContext";
import styles from "./AppMain.module.css";
import Notfound from "../../assets/notfound.png";
export function AppMain() {
  const { state } = useContext(WeatherContext);
  console.log(state);
  const notFoundElement = (
    <img className={styles.notfound__image} src={Notfound} alt="404" />
  );
  // if (state.error) {
  //   return <img className={styles.notfound__image} src={Notfound} alt="404" />;
  // }
  return (
    <div className={styles.app__main__wrapper}>
      {" "}
      <Search />
      <div className={styles.app_main}>
        {state.error ? (
          notFoundElement
        ) : (
          <>
            {" "}
            <CurrentWeather />
            <WeatherDetails />
          </>
        )}
      </div>
    </div>
  );
}
