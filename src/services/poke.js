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
  pokeArr.sort((a, b) => a.id - b.id);
  return pokeArr;
};

const getEvo = async (id) => {
  const response = await axios.get(baseurl + '-species/' + id);
  const evoRes = await axios.get(response.data['evolution_chain'].url);
  let evoChain = { 0: [], 1: [], 2: [] };
  let evoData = evoRes.data.chain;
  evoChain[0].push(evoData.species.name);
  for (let i = 0; i < evoData['evolves_to'].length; i++) {
    evoChain[1].push(evoData['evolves_to'][i].species.name);
    if (evoData['evolves_to'][i]['evolves_to'].length > 0) {
      for (let j = 0; j < evoData['evolves_to'][i]['evolves_to'].length; j++) {
        evoChain[2].push(
          evoData['evolves_to'][i]['evolves_to'][j].species.name
        );
      }
    }
  }
  return evoChain;
};

const exportedFunctions = {
  getAll,
  getEvo,
};

export default exportedFunctions;
