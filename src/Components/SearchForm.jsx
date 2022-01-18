import React from 'react'
import '../Styles/SearchForm.css'

const SearchForm = () => {
    return (
        <section className='top-banner'>
            <form>
                <input type="text" placeholder="Search for a city" autofocus />
                <button className='buttonSubmit' type="submit">SUBMIT</button>
                <span class="msg"></span>
            </form>
        </section>
    )
}

export default SearchForm
