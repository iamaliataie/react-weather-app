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

  return (
    <div className='container'>
        <div className="topbar">
            <input type="text" placeholder='search city'/>
            <img src={search} alt="" className='search-icon'/>
        </div>
        <div className="weather-image">
            <img src={cloud} alt="" />
        </div>
        <div className="weather-temp">24c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">18 km/h</div>
                    <div className="text">Wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp