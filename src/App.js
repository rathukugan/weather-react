import './App.css';
import Search from './components/search.js'

//{process.env.REACT_APP_API_URL}
//{process.env.REACT_APP_API_KEY}
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <Search></Search>
    </div>
  );
}

export default App;
