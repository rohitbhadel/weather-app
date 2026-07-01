import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="app">
      <h1>🌦 Weather App</h1>

      <SearchBar setWeather={setWeather} />

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;