import React, { useContext } from "react";
import { WeatherContext } from "../../weather-context/weatherContext";
import styles from "./Search.module.css";
export function Search() {
  const { dispatch } = useContext(WeatherContext);
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: "SET_LOCATION", payload: event.target.value });
    }
  };
  return (
    <input
      className={styles.search__input}
      name="city"
      onKeyDown={handleSearch}
      placeholder="Search City"
    />
  );
}
