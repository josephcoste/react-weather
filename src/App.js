import './App.css';
import { useState } from 'react'
import Forecast from './Forecast'
import CurrentWeather from './CurrentWeather';


function App() {

  const [city, setCity] = useState()
  const [weather, setWeather] = useState(undefined)
  const [forecast, setForecast] = useState(undefined)
  const [showCurrentWeather,setShowCurrentWeather] = useState(true)

  let next24Hours = forecast?.list.slice(0, 8); 

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  function getWeather() {
    const apiKey = 'b14439ea4882f273400c780e6eee2c6c';
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

    fetch(currentWeatherURL)
      .then(res => res.json())
      .then(data => setWeather(data))
      // .then (console.log(weather))
      
      fetch(forecastURL)
      .then(res => res.json())
      .then(res => setForecast(res))
      // .then (console.log(forecast))
   
  }

  return (
    <div>
     
      <div className='container'>
        <h1>Weather</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          getWeather()
        }}>
          <input type="text" onChange={handleChange} />
          <input type="submit" value="Search"/>
        </form>
       {weather&&<button onClick={() => setShowCurrentWeather(!showCurrentWeather)}>switch</button>}
        { showCurrentWeather?

        (weather !== undefined ? <CurrentWeather
        img = {`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
        temp = {Math.round(weather?.main.temp-273.15)}
        name = {weather?.name}
        description = {weather?.weather[0].description}

      />
      :(<div></div>)
      )
        
      :<div className='flexed'>
      {next24Hours?.map(temperature => <Forecast
          hours={new Date(temperature.dt * 1000).getHours()}
          img = {`https://openweathermap.org/img/wn/${forecast?.list[0].weather[0].icon}.png`}
          temp = {Math.round(forecast?.list[0].main.temp-273.15)}
          />
      )}   
      
      </div>
}
      
       
       
      </div>
    </div> 
  );
}

export default App;