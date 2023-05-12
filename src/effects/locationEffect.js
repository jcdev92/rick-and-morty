import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const locationEffect = (searchInfo) => {
  let [location, setLocation] = useState();

  const randomLocation = Math.floor(Math.random() * 126);

  let param;
  searchInfo === "" ? (param = randomLocation) : (param = searchInfo);
  let url = `https://rickandmortyapi.com/api/location/${param}`;

  location = useFetch(url, searchInfo);

  return location;
};

export default locationEffect;
