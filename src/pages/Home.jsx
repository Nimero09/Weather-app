import React, { useEffect, useState } from 'react'
import Icons from '../components/Icons';
import { BiUpArrowAlt, BiDownArrowAlt, BiSolidDroplet, BiWind, BiLeftTopArrowCircle  } from "react-icons/bi";


export const Home = () => {
  const key = `e14525355dc9d7b5d3830f9791e69ee4`;
  const [cityInfo, setCityInfo] = useState({});
  const weather = cityInfo.list;
  
  useEffect(() => {
    fetchData();
      // eslint-disable-next-line
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=4.610&lon=-74.082&units=metric&appid=${key}`);
      const result = await response.json();
      setCityInfo(result);
    } catch (err) {
      console.log(`Error fetching data: ${err}`);
    }
  }

  return (
    <>
    <section className='max-w-[80%] mx-auto'>
      <div className='flex justify-between'>
        <span>Current Weather</span>
        <span>!switchs!</span>
      </div>
      <div className='flex justify-between items-center'>
        <section>
          <h2>{cityInfo.city?.name}</h2>
          <div className='flex items-center'>
            <img className='w-36' src={Icons(weather[0]?.weather[0].main)} alt="Weather-icon" />
            <span>{Math.round(weather[0]?.main.temp)}&deg;C</span>
          </div>
          <span>{weather[0]?.weather[0].description}</span>
        </section>
        <section>
          <span>Feels like {Math.round(weather[0]?.main.feels_like)}&deg;C</span>
          <div className='flex'>
            <section>
              <BiUpArrowAlt />
              <span>{Math.ceil(weather[0]?.main.temp_max)}&deg;C</span>
            </section>
            <section>
              <BiDownArrowAlt />
              <span>{Math.floor(weather[0]?.main.temp_min)}&deg;C</span>
            </section>
          </div>
          <div>
            <BiSolidDroplet />
            <span>Humidity: {weather[0]?.main.humidity}%</span>
          </div>
          <div>
            <BiWind />
            <span>Wind: {weather[0]?.wind.speed}m/s</span>
          </div>
          <div>
            <BiLeftTopArrowCircle />
            <span>Pressure: {weather[0]?.main.humidity}hPa</span>
          </div>
        </section>
      </div>
    </section>
    <section className='max-w-[80%] mx-auto'>My a sweet sHome</section>
    </>
  )
}
