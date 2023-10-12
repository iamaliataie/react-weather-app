import { React, useState} from 'react'
import './WeatherApp.css'

import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import search from '../Assets/search.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'

const WeatherApp = () => {

    const api_key = 'dc51408f4d141a51ba856de26b7551d6'

    const [wIcon, setWeatherIcon] = useState(clear_icon)
    
    const searchButton = async ()=> {
        const input = document.getElementById('search')
        if (input === '') return 0;
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${api_key}`
        
        const data = await (await fetch(url)).json()

        console.log(data);

        const temp = document.getElementById('temp')
        const city = document.getElementById('city')
        const humidity = document.getElementById('humidity')
        const wind = document.getElementById('wind')
        
        temp.innerHTML = data.main.temp
        city.innerHTML = data.name
        humidity.innerHTML = data.main.humidity + '%'
        wind.innerHTML = data.wind.speed + ' ' + 'km/h'

        if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n'){setWeatherIcon(clear_icon)}
        else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n'){setWeatherIcon(cloud_icon)}
        else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){setWeatherIcon(drizzle_icon)}
        else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){setWeatherIcon(drizzle_icon)}
        else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n'){setWeatherIcon(rain_icon)}
        else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n'){setWeatherIcon(rain_icon)}
        else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){setWeatherIcon(snow_icon)}
        else setWeatherIcon(clear_icon)

    }


  return (
    <div className='bg-blue-500 py-6'>
        <div className="flex items-center justify-between w-[350px] mx-auto space-x-2">
            <input type="text"
            className="flex-1 p-1 py-2 rounded-md text-lg outline-none"
            placeholder='search city' id='search'/>
            <img src={search} alt="" className='bg-white p-3 rounded-md' onClick={()=>searchButton()}/>
        </div>
        <div className="flex justify-center">
            <img src={wIcon} alt="" />
        </div>
        <div className="text-9xl text-white" id='temp'>24c</div>
        <div className="text-6xl text-white" id='city'>London</div>
        <div className="flex items-center justify-between text-white w-[360px] mx-auto px-4 mt-8">
            <div className="flex items-center justify-start space-x-2">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="">
                    <div className="text-[30px]" id='humidity'>64%</div>
                    <div className="text-[20px]">Humidity</div>
                </div>
            </div>
            <div className="flex items-center justify-start space-x-2">
                <img src={wind_icon} alt="" className="icon" />
                <div className="">
                    <div className="text-[30px]" id='wind'>18 km/h</div>
                    <div className="text-[20px]">Wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp