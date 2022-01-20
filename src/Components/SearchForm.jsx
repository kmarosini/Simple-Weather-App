import React, {useEffect, useState} from 'react'
import '../Styles/SearchForm.css'
import DisplayWeather from './DisplayWeather';

const SearchForm = () => {

    const [cityName, setCityName] = useState('');
    const [data,setData] = useState(null);
    const [picture, setPicture] = useState('');
    
    function submitHandler(e) {
        e.preventDefault();
        setCityName(e.target.firstElementChild.value)      
    }


    useEffect(()=>{
        if (cityName.length > 0) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7a0bd8dfb816d361f219cea97c0ae797`)
            .then(response => response.json())
            .then(json => setData(json))
            fetch(`https://api.teleport.org/api/urban_areas/slug:${cityName.toLowerCase()}/images/`)
            .then(response => response.json())
            .then(json => setPicture(json))
        }  
    }, [cityName])

    return (
        <section className='top-banner'>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Search for a city" autoFocus />
                <button className='buttonSubmit' type="submit">SUBMIT</button>
                <span className="msg"></span>
            </form>
            {data && <DisplayWeather cityName={cityName} cityData={data} CityPicture={picture} />}
        </section>
    )
}

export default SearchForm
