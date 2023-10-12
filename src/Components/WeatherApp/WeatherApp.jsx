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
  return (
    <div className='container'>
        <div className="topbar">
            <input type="text" placeholder='search city'/>
            <img src={search} alt="" />
        </div>
    </div>
  )
}

export default WeatherApp