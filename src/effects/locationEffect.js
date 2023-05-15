import useFetch from "../hooks/useFetch";
import getTypes from "../helper/getTypes";

const locationEffect = (url, searchInfo) => {
  let param = searchInfo;

  const typesOfLocations = getTypes();

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



  return useFetch(url, searchInfo);
};

export default locationEffect;
