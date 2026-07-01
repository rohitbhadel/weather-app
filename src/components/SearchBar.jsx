import { useState } from "react";
import "../styles/SearchBar.css";
import { getWeather } from "../services/weatherApi";

function SearchBar({ setWeather }) {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      const data = await getWeather(city);

      setWeather({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });

      setCity("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;