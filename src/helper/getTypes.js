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

  // erase repeated types
  const repeatedTypes = types.filter((type, index) => {
    return types.indexOf(type) === index;
  });
  console.log(repeatedTypes);
  return repeatedTypes;
};

export default getTypes;
