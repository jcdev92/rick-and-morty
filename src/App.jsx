import "./App.css";
import React, { useState, useEffect } from "react";
import LocationCard from "./components/LocationCard";
import CardResident from "./components/CardResident";
import locationEffect from "./effects/locationEffect";

function App() {
  const [searchInfo, setSearchInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.search.value;
    setSearchInfo(input);
  };

  let location = locationEffect(searchInfo);

  const handleAllLocations = () => {
    setSearchInfo("");
  };

  

  return (
    <div className="App">
      <header className="Header">
        <img
          className="Header_img1"
          src="https://i.ibb.co/r0Pr8fS/rick-morty.png"
          alt="Rick and Morty"
        />
        <img
          className="Header_img2"
          src="https://i.ibb.co/J7sTYD0/header-title.png"
          alt="Rick and Morty"
        />
      </header>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            id="search"
            type="text"
            placeholder="Search by location ID or Name"
          />
          <button type="submit">Search</button>
        </form>
        <button className="all-locations" onClick={handleAllLocations}>
          all locations
        </button>
        <LocationCard location={location} />
        <div className="card__container">
          {location?.residents
            ? location?.residents.map((url) => (
                <CardResident key={url} url={url} />
              ))
            : location?.results[0].residents.map((url) => (
                <CardResident key={url} url={url} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
