// getting the types of the locations


const getTypes = (data) => {
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
