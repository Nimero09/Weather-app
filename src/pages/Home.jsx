import Icons from '../components/Icons';
import { BiUpArrowAlt, BiDownArrowAlt, BiSolidDroplet, BiWind, BiLeftTopArrowCircle  } from "react-icons/bi";
import DayOfTheWeek from '../components/DayOfTheWeek';
import { useState } from 'react';

export const Home = ({cityInfo, weather}) => {
  const day = new Date();
  const [toogle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toogle);
    console.log(toogle);
  }

  return (
    <>
      <section className='max-w-[70%] mx-auto card my-10 md:py-7 md:px-5'>
        <div className='flex justify-between md:mb-5'>
          <h3 className='text-xl font-semibold'>Current Weather</h3>
          <label className="inline-flex items-center cursor-pointer">
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-3">C&deg;</span>
            <input onChange={handleToggle} type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">F&deg;</span>
          </label>
        </div>
        <div className='flex items-center md:flex-col md:gap-5'>
          <section className='flex-1'>
            <h2 className='text-blue-900 font-bold'>{cityInfo?.name === 'La Merced' ? 'Bogotá' : cityInfo?.name}, {cityInfo?.sys?.country}</h2>
            <div className='flex items-center md:flex-col'>
              <img className='w-36' src={Icons(cityInfo?.weather?.[0]?.main)} alt="Weather-icon" />
              <span className='md:p-0 text-[100px] text-blue-900'>{toogle !== true ? Math.round(cityInfo?.main?.temp) : Math.round(9/5 * cityInfo?.main?.temp) + 32}&deg;</span>
            </div>
            <span className='md:mb-5 block text-2xl semibold text-gray-400'>{cityInfo?.weather?.[0]?.main}</span>
          </section>
          <section className='flex flex-1 flex-col gap-5 text-xl text-gray-500'>
            <span className='text-2xl semibold text-gray-800'>Feels like {Math.round(cityInfo?.main?.feels_like)}&deg;C</span>
            <div className='flex gap-4'>
              <section className='flex items-center'>
                <BiUpArrowAlt />
                <span>{Math.ceil(cityInfo?.main?.temp_max)}&deg;C</span>
              </section>
              <section className='flex items-center'>
                <BiDownArrowAlt />
                <span>{Math.floor(cityInfo?.main?.temp_min)}&deg;C</span>
              </section>
            </div>
            <div className='flex items-center gap-4'>
              <BiSolidDroplet />
              <span>Humidity: {cityInfo?.main?.humidity}%</span>
            </div>
            <div className='flex items-center gap-4'>
              <BiWind />
              <span>Wind: {cityInfo?.wind?.speed}m/s</span>
            </div>
            <div className='flex items-center gap-4'>
              <BiLeftTopArrowCircle />
              <span>Pressure: {cityInfo?.main?.pressure}hPa</span>
            </div>
          </section>
        </div>
      </section>
      <section className='max-w-[70%] mx-auto card my-10 md:py-7 md:px-5'>
        <h3 className='text-xl font-semibold mb-5 md:text-center'>Extended Forecast</h3>
        <div className='flex justify-between md:flex-col md:gap-5'>
          {weather.filter((x,i) => i % 8 === 0).map((x,i) => (
            <section key={i} className={`flex flex-col items-center md:pb-5 ${i === weather.filter((x,i) => i % 8 === 0).length - 1 ? '' : 'md:border-solid md:border-gray-300 md:border-b-2'}`}>
              <h5 className='text-2xl text-blue-900 font-bold text-center'>{DayOfTheWeek((day.getDay()+i)% 7)}</h5>
              <img className='w-24' src={Icons(x.weather[0].main)} alt="Weather-icon" />
              <span className='text-2xl font-semibold text-gray-600 text-center block mb-2'>{x.weather[0].main}</span>
              <span className='text-xl text-blue-900 font-semibold text-center block'>{toogle !== true ? Math.round(x.main.temp_min) : Math.round(9/5 * x.main.temp_min) + 32}&deg;/{toogle !== true ? Math.round(x.main.temp_max) : Math.round(9/5 * x.main.temp_max) + 32}&deg;</span>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
