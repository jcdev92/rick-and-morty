import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationById from "./components/LocationById";
import CardResident from "./components/CardResident";
import Pagination from "./components/Pagination";

function App() {
  const [location, setLocation] = useState();
  const [searchInfo, setSearchInfo] = useState("");
  const randomLocation = Math.floor(Math.random() * 126);

  useEffect(() => {
    let selectedLocation;
    searchInfo === ""
      ? (selectedLocation = randomLocation)
      : (selectedLocation = searchInfo);
    const URL = `https://rickandmortyapi.com/api/location/${selectedLocation}`;
    console.log(URL);
    axios
      .get(URL)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationId = e.target.search.value;
    setSearchInfo(locationId);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = location?.residents.slice(firstPostIndex, lastPostIndex);
  const totalPosts = location?.residents.length;

  return (
    <div className="App">
      <header className="Heeader">
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
          <input id="search" type="text" placeholder="Search by location ID" />
          <button type="submit">Search</button>
        </form>
        <LocationById location={location} />
        <div className="card__container">
          {currentPosts?.map((url) => {
            return <CardResident key={url} url={url} />;
          })}
        </div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={totalPosts}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
