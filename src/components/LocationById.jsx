import React from 'react'

const LocationById = ({location}) => {
  return (
    <article className='location'>
        <h1>Location</h1>
        <h3>{location?.name}</h3>
        <ul className='location__list'>
            <li><span>Dimension:</span> <br></br> {location?.dimension}</li>
            <li><span>Type: </span> <br></br> {location?.type}</li>
            <li><span>Residents: </span> <br></br> {location?.residents.length}</li>
        </ul>
    </article>
    
  )
}

export default LocationById