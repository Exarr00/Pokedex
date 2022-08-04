import { useEffect, useState } from 'react';
import exportedFunctions from './services/poke';
import filters from './services/filters';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState({
    name: 'Kanto',
    offset: 0,
    limit: 151,
    type: 'all'
  });
  const [region, setRegion] = useState('dsfasd');

  useEffect(() => {
    exportedFunctions.getAll(filter).then((res) => {
      setPokemons(res.results);
    });
  }, []);

  useEffect(() => {
    exportedFunctions.getAll(filter).then((res) => {
      setPokemons(res.results);
    });
  }, [filter]);

  const regionSelect = (e) => {
    const name = filters.regions[e.target.value].name;
    const offset = filters.regions[e.target.value].offset;
    const limit = filters.regions[e.target.value].limit;
    setFilter({ ...filter, name, offset, limit });
  };

  const regionSelects = (e) => {
    setRegion(e.target.value);
  };


  return (
    <div>
      <div>
        <select onChange={regionSelect}>
          {filters.regions.map((region, index) => (
            <option key={region.name} value={index}>{region.name}</option>
          ))}
        </select>
        <select onChange={regionSelects} value={region}>
          {filters.regions.map((region) => (
            <option key={region.name} value={region.name}>{region.name}</option>
          ))}
        </select>
      </div>
      {pokemons.map((pokemon) => (
        <h1 key={pokemon.name}>{pokemon.name}</h1>
      ))}
    </div>
  );
}

export default App;
