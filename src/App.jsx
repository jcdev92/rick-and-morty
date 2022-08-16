import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'



function App() {
  const [location, setLocation] = useState()
  const [searchInfo, setSearchInfo] = useState('')
  const randomLocation = Math.floor(Math.random() * 126)
  
  useEffect(() => {
    let selectedLocation
    searchInfo === '' ? selectedLocation = randomLocation : selectedLocation = searchInfo
    const URL = `https://rickandmortyapi.com/api/location/${selectedLocation}`
    axios.get(URL)
        .then((res) => {setLocation(res.data)})
        .catch((err) => {console.log(err)})
    }, [searchInfo])


  
  const handleSubmit = e => {
    e.preventDefault()
    setSearchInfo(e.target.search.value)
  }


  return (  
    <div className="App">
        <header className="Heeader">
          <img className='Header_img1' src="rick&morty.png" alt="Rick and Morty"/>
          <img className='Header_img2' src="header_title.png" alt="Rick and Morty"/>
        </header>
        <div className="container">
          <form onSubmit={handleSubmit}>
              <input id="search" type="text" placeholder="Search by location ID" />
              <button type="submit">Search</button>
          </form>
          <LocationInfo location={location}/>
          <div className='card__container'>
            {
              location?.residents.map(url => (
                <CardResident key={url} url={url}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default App
