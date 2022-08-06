import { useEffect, useState } from 'react';
import exportedFunctions from './services/poke';
import PokemonList from './components/PokemonList';
import Filter from './components/Filter';
import Loading from './components/Loading';
import Pokeball from './components/Pokeball';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [region, setRegion] = useState({
    index: 0,
    name: 'Kanto',
    offset: 0,
    limit: 151,
  });
  const [type, setType] = useState('all');
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    exportedFunctions.getAll(region).then((res) => {
      setPokemons(res);
      setLoading(false);
    });
  }, [region]);

  return (
    <div>
      <Pokeball />
      <Filter
        setSearch={setSearch}
        setRegion={setRegion}
        setType={setType}
        search={search}
        region={region}
        type={type}
      />
      {loading ? (
        <Loading />
      ) : (
        <PokemonList type={type} pokemons={pokemons} search={search} />
      )}
    </div>
  );
}

export default App;
