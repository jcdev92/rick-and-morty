import React, {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {
    const resident = useFetch(url)

    console.log(resident)

  return (
    <div>
      <header>
          <img src={resident?.image} alt={`image of ${resident?.name}`}/>
          <div>
            <div className="circle"></div>
            <span>{resident?.status}</span>
          </div>
      </header>
      <div>
          <h3>{resident?.name}</h3>
          <ul>
            <li>Species: {resident?.species}</li>
            <li>Origin: {resident?.origin.name}</li>
            <li>Episodes where appear: {resident?.episode.length}</li>
          </ul>
      </div>
    </div>
  )
}

export default CardResident