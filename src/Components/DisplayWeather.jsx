import React from 'react'

const DisplayWeather = (props) => {

    console.log(props.cityData)

    return (
        <div className='flexbox-container'>
            <div className='flexbox-item-1'>
                <span className='effect'>
                <h3 className='text'>City Name: {props.cityName} </h3>
                <h3 className='text'>Temperature: {props.cityData.main.temp}, Feels like: {props.cityData.main.feels_like}</h3>
                <h3 className='text'>Minimum temperature: {props.cityData.main.temp_min}, Maximum temperature: {props.cityData.main.temp_max}</h3>
                <h3 className='text'>Weather: {props.cityData.weather[0].main}, {props.cityData.weather[0].description}</h3>
                <h3 className='text'>Location of weather station: {props.cityData.name}</h3>
                </span>
            </div>
        </div>
    )
}

export default DisplayWeather
