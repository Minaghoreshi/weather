import { createContext, useReducer } from "react";
import { weatherReducer } from "../weather-reducer/weatherReducer";

export const WeatherContext = createContext();
export const WeatherProvider = (props) => {
  const [state, dispatch] = useReducer(weatherReducer, {
    weatherData: null,
    error: null,
  });
  return (
    <WeatherContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
