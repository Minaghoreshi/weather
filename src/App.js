import "./App.css";
import { CurrentWeather, WeatherDetails, Search } from "./Components";
function App() {
  return (
    <div className="app">
      <Search />
      <div className="app_main">
        <CurrentWeather />
        <WeatherDetails />
      </div>
    </div>
  );
}

export default App;
