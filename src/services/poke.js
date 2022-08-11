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

const getSingle = async (name) => {
  console.log(baseurl + '/' + name);
  const response = await axios.get(baseurl + '/' + name);
  return response.data;
};

const getEvo = async (id) => {
  const response = await axios.get(baseurl + '-species/' + id);
  const evoRes = await axios.get(response.data['evolution_chain'].url);
  let evoData = evoRes.data.chain;
  return evoData;
};

const getSpecies = async (id) => {
  const response = await axios.get(baseurl + '-species/' + id);
  return response.data;
};

const getPrevNext = async (id) => {
  const prevId = id === 1 ? 898 : id - 1;
  const nextId = id === 898 ? 1 : id + 1;
  const prevRes = await axios.get(baseurl + '/' + prevId);
  const nextRes = await axios.get(baseurl + '/' + nextId);
  return {
    prev: prevRes.data,
    next: nextRes.data,
  };
};

const getAbilities = async (abilities) => {
  const allAbilities = [];
  await Promise.all(
    abilities.map((ability) => {
      console.log(ability);
      return axios.get(ability.ability.url).then((result) => {
        console.log(result);
        allAbilities.push({
          name: ability.ability.name,
          entries: result.data.effect_entries,
        });
      });
    })
  );
  return allAbilities;
};

const exportedFunctions = {
  getAll,
  getEvo,
  getSingle,
  getPrevNext,
  getSpecies,
  getAbilities,
};

export default exportedFunctions;
