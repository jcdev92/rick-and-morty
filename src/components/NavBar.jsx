import React from "react";
import Search from "./Search";
import { IoLocationSharp } from "react-icons/io5";

const NavBar = ({ setSearchInfo }) => {
  const handleAllLocations = () => {
    setSearchInfo("");
  };
  return (
    <div className="nav-bar">
      <Search setSearchInfo={setSearchInfo} />
      <button className="all_btn" onClick={handleAllLocations}>
        <IoLocationSharp />
      </button>
    </div>
  );
};

export default NavBar;
