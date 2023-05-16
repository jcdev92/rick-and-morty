// getting the types of the locations

const getTypes = (data) => {
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
