import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ setSearchInfo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.search.value;
    if (input === "") {
      alert("Please enter a location ID or Name");
      return;
    }
    setSearchInfo(input);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        id="search"
        type="text"
        placeholder="Search locations by ID, types or name"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button type="submit" className="search-btn">
        <BsSearch />
      </button>
    </form>
  );
};

export default Search;
