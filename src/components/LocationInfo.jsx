import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article>
        <h1>Location Info</h1>
        <h3>{location?.name}</h3>
        <ul>
            <li><span>Dimension:</span> {location?.dimension}</li>
            <li><span>Type: </span> {location?.type}</li>
            <li><span>Residents: </span> {location?.residents.length}</li>
        </ul>
    </article>
    
  )
}

export default LocationInfo