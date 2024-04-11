import React, { useEffect, useState } from 'react'

export const Home = () => {
  const key = `e14525355dc9d7b5d3830f9791e69ee4`;
  const [cityInfo, setCityInfo] = useState({});
  const [icon, setIcon] = useState('');
  
  useEffect(() => {
    fetchData();
      // eslint-disable-next-line
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`);
      const result = await response.json();
      setCityInfo(result);
      console.log(cityInfo)
    } catch (err) {
      console.log(`Error fetching data: ${err}`);
    }
  }

  return (
    <>
    <section className='max-w-[80%] mx-auto'>
      <div className='flex justify-between'>
        <span>Current Weather</span>
        <span>!switchs</span>
      </div>
      <div>
        <h2>{cityInfo.city?.name}</h2>
      </div>
    </section>
    <section className='max-w-[80%] mx-auto'>Homee</section>
    </>
  )
}
