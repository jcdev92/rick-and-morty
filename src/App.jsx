import "./App.css";
import React, { useState, useEffect } from "react";
import LocationById from "./components/LocationById";
import CardResident from "./components/CardResident";
import Pagination from "./components/Pagination";
import locationEffect from "./effects/locationEffect";

function App() {
  const [searchInfo, setSearchInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationId = e.target.search.value;
    setSearchInfo(locationId);
  };

  const location = locationEffect(searchInfo);

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
