import { useState, useEffect } from "react";
import axios from "axios";

const locationEffect = (searchInfo) => {
  const [location, setLocation] = useState();

  const randomLocation = Math.floor(Math.random() * 126);

  useEffect(() => {
    let selectedLocation;
    searchInfo === ""
      ? (selectedLocation = randomLocation)
      : (selectedLocation = searchInfo);
    const URL = `https://rickandmortyapi.com/api/location/${selectedLocation}`;
    axios
      .get(URL)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchInfo]);

  return location;
};

export default locationEffect;
