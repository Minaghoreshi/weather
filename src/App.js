import "./App.css";
import { CurrentWeather, WeatherDetails, Search } from "./Components";
import { WeatherProvider } from "./weather-context/weatherContext";

function App() {
  return (
    <div className="app">
      <WeatherProvider>
        <Search />
        <div className="app_main">
          <CurrentWeather />
          <WeatherDetails />
        </div>
      </WeatherProvider>
    </div>
  );
}

export default App;
