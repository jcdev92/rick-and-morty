import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const CardResident = ({ url }) => {
  const resident = useFetch(url);

  return (
    <div className="card__resident">
      <header>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        <div>
          <div className="circle"></div>
          <h3>{resident?.name}</h3>
        </div>
      </header>
      <div className="resident">
        <ul>
          <li>
            <span>Species:</span> {resident?.species}
          </li>
          <li>
            <span>Origin:</span> {resident?.origin.name}
          </li>
          <li>
            <span>Episodes where appear:</span> {resident?.episode.length}
          </li>
          <li>
            <span>Status:</span> {resident?.status}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardResident;
