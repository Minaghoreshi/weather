import { createContext, useReducer } from "react";
import { weatherReducer } from "../weather-reducer/weatherReducer";

const initialState = {
  weatherData: null,
  error: null,
};

export const WeatherContext = createContext();
export const WeatherProvider = (props) => {
  const [satet, dispatch] = useReducer(weatherReducer, initialState);
  return (
    <WeatherContext.Provider
      value={{
        satet,
        dispatch,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
