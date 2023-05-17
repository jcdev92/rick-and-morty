// getting the types of the locations
const url = "https://rickandmortyapi.com/api/location";
let data = await fetch(url).then((response) => response.json());

const getTypes = () => {
  const types = [];
  data &&
    data.results?.forEach((location) => {
      if (!types.includes(location.type)) {
        types.push(location.type.toLowerCase());
      }
    });
  console.log(types);
  return types;
};

export default getTypes;
