import "./App.css";
// import { AppMain } from "./Components/appMain/AppMain";
import { WeatherProvider } from "./weather-context/weatherContext";
import { AppMain } from "./Components";
function App() {
  return (
    <WeatherProvider>
      <AppMain />
    </WeatherProvider>
  );
}

export default App;
