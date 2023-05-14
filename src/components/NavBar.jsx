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
        all locations
      </button>
    </div>
  );
};

export default NavBar;
