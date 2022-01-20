import React from 'react'


const DisplayWeather = (props) => {

    return (
        <div className='flexbox-container'>
            <div className='flexbox-item-1'>
                <span className='effect'>
                <h3 className='text'>City Name: {props.cityName} </h3>
                <h3 className='text'>Temperature: {props.cityData.main.temp -  273.15}°C, Feels like: {Math.round(props.cityData.main.feels_like - 273.15)}°C</h3>
                <h3 className='text'>Minimum temperature: {Math.round(props.cityData.main.temp_min - 273.15)}°C, Maximum temperature: {Math.round(props.cityData.main.temp_max - 273.15)}°C</h3>
                <h3 className='text'>Weather: {props.cityData.weather[0].main}, {props.cityData.weather[0].description}</h3>
                <h3 className='text'>Location of weather station: {props.cityData.name}</h3>
                <div className='icons'>
                     <img src={`http://openweathermap.org/img/wn/${props.cityData.weather[0].icon}@2x.png`}></img>
                </div>      
                </span>
            </div>
            <div className='flexbox-item-2'>
                <img className='cityPic' src={props.CityPicture.photos[0].image.web}></img>
            </div>       
        </div>
    )
}

export default DisplayWeather
