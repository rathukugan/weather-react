import './App.css';
import React, { useState } from "react";
import Search from './components/Search.js'
import WeatherDisplay from './components/WeatherDisplay.js'

//{process.env.REACT_APP_API_URL}
//{process.env.REACT_APP_API_KEY}
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
function App() {
  const[lat, setLat] = useState("");
  const[lon, setLon] = useState("");
  const[city, setCity] = useState("");

  return (
    <div className="App">
      <h1>Weather</h1>
      <Search></Search>
      <WeatherDisplay></WeatherDisplay>
    </div>
  );
}

export default App;
