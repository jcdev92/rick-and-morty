import getTypes from "../helper/getTypes";

const getUrl = (searchInfo) => {
  let url = "";
  let param = searchInfo;
  const typesOfLocations = getTypes();

  // switch url depending on the searchInfo

  if (searchInfo === "") {
    url = `https://rickandmortyapi.com/api/location`;
  } else if (typesOfLocations.includes(searchInfo)) {
    url = `https://rickandmortyapi.com/api/location/?type=${param}`;
  } else if (isNaN(searchInfo)) {
    url = `https://rickandmortyapi.com/api/location/?name=${param}`;
  } else if (!isNaN(searchInfo)) {
    url = `https://rickandmortyapi.com/api/location/${param}`;
  }

  return url;
};

export default getUrl;
