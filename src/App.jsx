import "./App.css";
import React, { useEffect, useState } from "react";
import locationEffect from "./effects/locationEffect";
import LocationCard from "./components/LocationCard";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";

function App() {
  const [searchInfo, setSearchInfo] = useState("");
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/location/");
  let locations = locationEffect(url, searchInfo);
  console.log(url);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <NavBar setSearchInfo={setSearchInfo} />
        {locations?.info?.count > 1 && (
          <>
            {locations.results?.map((location) => (
              <div key={location.url} className="card__container">
                <LocationCard location={location} />
              </div>
            ))}
            {locations.info?.pages > 1 && (
              <Pagination
                pages={locations.info.pages}
                next={locations.info.next}
                prev={locations.info.prev}
                setUrl={setUrl}
              />
            )}
          </>
        )}
        {locations?.info?.count === 1 && (
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
