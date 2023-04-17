import TextField from '@mui/material/TextField';

//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
function Search() {
    function handleCity(event) {
        console.log(event.target.value);
        var city = event.target.value;
        if (event.target.value == "Toronto") {
            fetch(`${process.env.REACT_APP_API_GEO_URL}/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                console.log(response.json());
            });
        }
    }

    return (
        <TextField id="city-search" label="City" variant="outlined" onChange={handleCity} />
    );
  }

  export default Search;