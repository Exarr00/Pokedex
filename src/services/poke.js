import axios from 'axios';
const baseurl = 'https://pokeapi.co/api/v2/pokemon';

const getAll = async (val) => {
  const response = await axios.get(baseurl + `?limit=${val.limit}` + `&offset=${val.offset}`);
  return response.data;
};

const exportedFunctions = {
  getAll,
};

export default exportedFunctions;
