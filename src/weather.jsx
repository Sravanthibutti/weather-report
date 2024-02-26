// src/weather.jsx
import React from 'react';
import './weather.css'; // Import your styles

const weather = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>; // You might want to show a loading message while data is being fetched
  }

  return (
    <div className="weather">
      <div className="header">
        <p>{weatherData.name}</p>
      </div>

      <div className="info">
        <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p>{weatherData.weather[0].main}</p>
      </div>

      <div className="details">
        <p>Temperature: {weatherData.main.temp} &deg;C</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="sun-info">
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    </div>
  );
};

export default weather;
