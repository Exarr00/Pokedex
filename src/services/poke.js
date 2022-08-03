import axios from 'axios';
const baseurl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const getAll = async () => {
  const response = await axios.get(baseurl);
  return response.data;
};

const exportedFunctions = {
  getAll,
};

export default exportedFunctions;
