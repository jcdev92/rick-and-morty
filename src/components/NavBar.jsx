import React from "react";
import Search from "./Search";

const NavBar = ({ setSearchInfo }) => {
  const handleAllLocations = () => {
    setSearchInfo("");
  };
  return (
    <div className="nav-bar">
      <Search setSearchInfo={setSearchInfo} />
      <button className="all-locations" onClick={handleAllLocations}>
        <i class="fa-solid fa-globe"></i>
      </button>
    </div>
  );
};

export default NavBar;
