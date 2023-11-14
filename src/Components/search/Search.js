import React, { useContext, useRef } from "react";
import styles from "./Search.module.css";
import { WeatherContext } from "../../weather-context/weatherContext";
import { handleSearch } from "../../actions/actions";
export function Search() {
  const { state, dispatch } = useContext(WeatherContext);
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: "SET_LOCATION", payload: event.target.value });
    }
  };
  return (
    <input name="city" onKeyDown={handleSearch} placeholder="Search City" />
  );
}
