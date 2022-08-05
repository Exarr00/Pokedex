import axios from 'axios';
const baseurl = 'https://pokeapi.co/api/v2/pokemon';

const getAll = async (val) => {
  const response = await axios.get(
    baseurl + `?limit=${val.limit}` + `&offset=${val.offset}`
  );
  return getIndividual(response.data.results);
};

const getIndividual = async (allPokes) => {
  const pokeArr = [];
  await Promise.all(
    allPokes.map((pokemon) => {
      return axios.get(baseurl + `/${pokemon.name}`).then((result) => {
        pokeArr.push(result.data);
      });
    })
  );
  pokeArr.sort((a,b) => a.id - b.id);
  return pokeArr;
};

const exportedFunctions = {
  getAll
};

export default exportedFunctions;
