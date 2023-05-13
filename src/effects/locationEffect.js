import { useState } from "react";
import useFetch from "../hooks/useFetch";

const locationEffect = (searchInfo) => {
  let [location, setLocation] = useState();

  const randomLocation = Math.floor(Math.random() * 126);

  let param;
  let url;

  // if searchInfo is empty, it will return a random location from the API, otherwise it will return the location that matches the searchInfo
  searchInfo === "" ? (param = randomLocation) : (param = searchInfo);

  // if thes search info is a number it will return the location that matches the id location, otherwise if is a word it will return the location that matches the name of the location

  const typesOfLocations = [
    "planet",
    "microverse",
    "tv",
    "resort",
    "space station",
    "spacecraft",
    "dream",
    "dimension",
    "unknown",
    "menagerie",
    "box",
    "arcade",
    "daycare",
    "dwarf planet (Celestial Dwarf)",
    "teenyverse",
  ];

  // switch url depending on the searchInfo

  if (typesOfLocations.includes(searchInfo)) {
    url = `https://rickandmortyapi.com/api/location/?type=${param}`;
  } else if (isNaN(searchInfo)) {
    url = `https://rickandmortyapi.com/api/location/?name=${param}`;
  } else if (searchInfo === "") {
    url = `https://rickandmortyapi.com/api/location`;
  } else {
    url = `https://rickandmortyapi.com/api/location/${param}`;
  }

  console.log(url);

  location = useFetch(url, searchInfo);

  return location;
};

export default locationEffect;
