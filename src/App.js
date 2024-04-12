import { useState, useEffect } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { Home } from './pages/Home';
import { NavBar } from './pages/NavBar';

function App() {
  const [searchValue, setSearchValue] = useState('Bogota');
  const [cityInfo, setCityInfo] = useState({});
  const [weather, setWeather] = useState([]);
  const key = `e14525355dc9d7b5d3830f9791e69ee4`;

  const setInputValue = (value) => setSearchValue(value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=${key}`);
        const data = await response.json();
        if (data.length > 0) {
          const latAndLong = { lat: data[0].lat, lon: data[0].lon };
          console.log("Coordinates:", latAndLong);
          await getCityInfo(latAndLong);
        } else {
          console.log("No data found");
        }
      } catch (error) {
        console.log("Error fetching:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [searchValue]);

  const getCityInfo = async (latAndLong) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latAndLong.lat ? latAndLong.lat : 4.610}&lon=${latAndLong.lon ? latAndLong.lon : -74.082}&units=metric&appid=${key}`);
      const data = await response.json();
      setCityInfo(data);
      setWeather(data.list);
      console.log(cityInfo);
    } catch (error) {
      console.log("Error fetching city info:", error);
    }
  };

  useEffect(() => {
    console.log(`Esta es tu data`,cityInfo)
  }, [cityInfo])

  return (
    <>
      <NavBar />
      <SearchBar setValue={setInputValue}/>
      <Home 
        searchValue={cityInfo}
        cityInfo={cityInfo}
        weather={weather}
      />
    </>
  );
}

export default App;
