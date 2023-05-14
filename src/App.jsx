import "./App.css";
import React, { useState } from "react";
import LocationCard from "./components/LocationCard";
import locationEffect from "./effects/locationEffect";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const [searchInfo, setSearchInfo] = useState("");
  let locations = locationEffect(searchInfo);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <NavBar setSearchInfo={setSearchInfo} />
        {locations?.info?.count >= 120 ? (
          locations?.results.map((location) => (
            <div key={location.url} className="card__container">
              <LocationCard location={location} />
            </div>
          ))
        ) : (
          <div className="card__container">
            <LocationCard location={locations} />
            <CardContainer location={locations} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
