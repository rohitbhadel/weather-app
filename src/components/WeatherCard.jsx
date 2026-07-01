import "../styles/WeatherCard.css";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">

      <h2>
        📍 {weather.city}, {weather.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="Weather Icon"
      />

      <h1>{weather.temperature}°C</h1>

      <p><strong>{weather.description}</strong></p>

      <p>💧 Humidity: {weather.humidity}%</p>

      <p>💨 Wind: {weather.wind} m/s</p>

    </div>
  );
}

export default WeatherCard;