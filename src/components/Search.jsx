import React from "react";

const Search = ({ setSearchInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.search.value;
    setSearchInfo(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Search by location ID or Name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
