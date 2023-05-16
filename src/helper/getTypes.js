import useFetch from "../hooks/useFetch";
// getting the types of the locations

const url = "https://rickandmortyapi.com/api/location";

const getTypes = () => {
  const data = useFetch(url);
  const types = [];
  data &&
    data.results.forEach((location) => {
      if (!types.includes(location.type)) {
        types.push(location.type.toLowerCase());
      }
    });
  return types;
};

export default getTypes;
