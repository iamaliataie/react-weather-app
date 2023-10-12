import React from 'react'
import './WeatherApp.css'

import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import drizzle from '../Assets/drizzle.png'
import humidity from '../Assets/humidity.png'
import rain from '../Assets/rain.png'
import search from '../Assets/search.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'

const WeatherApp = () => {

    const api_key = 'dc51408f4d141a51ba856de26b7551d6'

    const input = document.getElementById('search')
    const temp = document.getElementById('temp')
    const city = document.getElementById('city')
    const humidity = document.getElementById('humidity')
    const wind = document.getElementById('wind')

    const searchButton = async ()=> {
        console.log(input);
        if (input.value === '') return

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${api_key}`

        const data = await (await fetch(url)).json()
        
        temp.innerHTML = data.main.temp
        city.innerHTML = data.name
        humidity.innerHTML = data.main.humidity + '%'
        wind.innerHTML = data.wind.speed + ' ' + 'km/h'
    }


  return (
    <div className='container'>
        <div className="topbar">
            <input type="text" placeholder='search city' id='search'/>
            <img src={search} alt="" className='search-icon' onClick={()=>searchButton()}/>
        </div>
        <div className="weather-image">
            <img src={cloud} alt="" />
        </div>
        <div className="weather-temp" id='temp'>24c</div>
        <div className="weather-location" id='city'>London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent" id='humidity'>64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent" id='wind'>18 km/h</div>
                    <div className="text">Wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp