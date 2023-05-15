import React from "react";

const LocationCard = ({ location }) => {
  return (
    <article className="location">
      <h1>Location: </h1>
      <h3>{location?.name ? location?.name : location?.results[0].name}</h3>
      <ul className="location__list">
        <li>
          <span>Dimension:</span> <br></br>{" "}
          {location?.dimension
            ? location?.dimension
            : location?.results[0].dimension}
        </li>
        <li>
          <span>Type: </span> <br></br>{" "}
          {location?.type ? location?.type : location?.results[0].type}
        </li>
        <li>
          <span>Residents: </span> <br></br>{" "}
          {location?.residents
            ? location?.residents.length
            : location?.results[0].residents.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationCard;
