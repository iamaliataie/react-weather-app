import './App.css';
import WeatherApp from './Components/WeatherApp/WeatherApp';

import clear from './Components/Assets/clear.png'
import cloud from './Components/Assets/cloud.png'
import drizzle from './Components/Assets/drizzle.png'
import humidity from './Components/Assets/humidity.png'
import rain from './Components/Assets/rain.png'
import search from './Components/Assets/search.png'
import snow from './Components/Assets/snow.png'
import wind from './Components/Assets/wind.png'


function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;
