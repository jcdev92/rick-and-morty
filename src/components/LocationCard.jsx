import React from "react";

const LocationCard = ({ location, setUrl }) => {
  const handleClick = () => {
    setUrl(location?.url);
  };
  return (
    <article
      className={setUrl ? "location" : "locationStatic"}
      onClick={setUrl && handleClick}
    >
      <h1>Location: </h1>
      <h3>{location?.name ? location?.name : location?.results?.name}</h3>
      <ul className="location__list">
        <li>
          <span>Dimension:</span> <br></br>{" "}
          {location?.dimension
            ? location?.dimension
            : location?.results?.dimension}
        </li>
        <li>
          <span>Type: </span> <br></br>{" "}
          {location?.type ? location?.type : location?.results?.type}
        </li>
        <li>
          <span>Residents: </span> <br></br>{" "}
          {location?.residents
            ? location?.residents.length
            : location?.results?.residents?.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationCard;
