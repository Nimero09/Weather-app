import Icons from '../components/Icons';
import { BiUpArrowAlt, BiDownArrowAlt, BiSolidDroplet, BiWind, BiLeftTopArrowCircle  } from "react-icons/bi";
import DayOfTheWeek from '../components/DayOfTheWeek';


export const Home = ({cityInfo, weather}) => {
  const day = new Date();
  
  return (
    <>
      <section className='max-w-[70%] mx-auto card my-10'>
        <div className='flex justify-between'>
          <h3 className='text-xl font-semibold'>Current Weather</h3>
          <span>!switchs!</span>
        </div>
        <div className='flex items-center'>
          <section className='flex-1'>
            <h2 className='text-blue-900 font-bold'>{cityInfo?.name === 'La Merced' ? 'Bogotá' : cityInfo?.name}, {cityInfo.sys?.country}</h2>
            <div className='flex items-center'>
              <img className='w-36' src={Icons(cityInfo?.weather[0].main)} alt="Weather-icon" />
              <span className='text-[100px] text-blue-900'>{Math.round(cityInfo?.main.temp)}&deg;</span>
            </div>
            <span className='text-2xl semibold text-gray-400'>{cityInfo?.weather[0].description}</span>
          </section>
          <section className='flex flex-1 flex-col gap-5 text-xl text-gray-500'>
            <span className='text-2xl semibold text-gray-800'>Feels like {Math.round(cityInfo?.main.feels_like)}&deg;C</span>
            <div className='flex gap-4'>
              <section className='flex items-center'>
                <BiUpArrowAlt />
                <span>{Math.ceil(cityInfo?.main.temp_max)}&deg;C</span>
              </section>
              <section className='flex items-center'>
                <BiDownArrowAlt />
                <span>{Math.floor(cityInfo?.main.temp_min)}&deg;C</span>
              </section>
            </div>
            <div className='flex items-center gap-4'>
              <BiSolidDroplet />
              <span>Humidity: {cityInfo?.main.humidity}%</span>
            </div>
            <div className='flex items-center gap-4'>
              <BiWind />
              <span>Wind: {cityInfo?.wind.speed}m/s</span>
            </div>
            <div className='flex items-center gap-4'>
              <BiLeftTopArrowCircle />
              <span>Pressure: {cityInfo?.main.pressure}hPa</span>
            </div>
          </section>
        </div>
      </section>
      <section className='max-w-[70%] mx-auto card'>
        <h3 className='text-xl font-semibold mb-5'>Extended Forecast</h3>
        <div className='flex justify-between'>
          {weather.filter((x,i) => i % 8 === 0).map((x,i) => (
            <section key={i}>
              <h5 className='text-2xl text-blue-900 font-bold text-center'>{DayOfTheWeek((day.getDay()+i)% 7)}</h5>
              <img className='w-36' src={Icons(x.weather[0].main)} alt="Weather-icon" />
              <span className='text-2xl font-semibold text-gray-600 text-center block mb-2'>{x.weather[0].main}</span>
              <span className='text-xl text-blue-900 font-semibold text-center block'>{x.main.temp_min}&deg;/{x.main.temp_max}&deg;</span>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
