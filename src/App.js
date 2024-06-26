import { useState, useEffect } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { Home } from './pages/Home';
import { NavBar } from './pages/NavBar';

function App() {
  const [searchValue, setSearchValue] = useState('Bogota');
  const [cityInfo, setCityInfo] = useState({});
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState([false]);
  const key = `e14525355dc9d7b5d3830f9791e69ee4`;

  const setInputValue = (value) => setSearchValue(value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=${key}`);
        const data = await response.json();
        if (data.length > 0) {
          setError(false);
          const latAndLong = { lat: data[0].lat, lon: data[0].lon };
          await getForecast(latAndLong);
          await getCityInfo(latAndLong);
        } else {
          console.log("No data found");
          setError(true);
        }
      } catch (error) {
        console.log("Error fetching:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [searchValue]);

  const getForecast = async (latAndLong) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latAndLong.lat ? latAndLong.lat : 4.610}&lon=${latAndLong.lon ? latAndLong.lon : -74.082}&units=metric&appid=${key}`);
      const data = await response.json();
      setWeather(data.list);
    } catch (error) {
      console.log("Error fetching forecast:", error);
    }
  };

  const getCityInfo = async (latAndLong) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latAndLong.lat ? latAndLong.lat : 4.610}&lon=${latAndLong.lon ? latAndLong.lon : -74.082}&units=metric&appid=${key}`);
      const data = await response.json();
      setCityInfo(data);
    } catch (error){
      console.log(`Error fetching city info`, error)
    }
  }

  return (
    <>
      <NavBar />
      <SearchBar 
        setValue={setInputValue}
        error={error}
      />
      <Home 
        cityInfo={cityInfo}
        weather={weather}
      />
    </>
  );
}

export default App;
