import { useEffect, useState } from 'react';
import exportedFunctions from './services/poke';
import PokemonList from './components/PokemonList';
import Filter from './components/Filter';
import Loading from './components/Loading';
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

  useEffect(() => {
    setLoading(true);
    exportedFunctions.getAll(region).then((res) => {
      setPokemons(res);
      setLoading(false);
    });
  }, [region]);

  return (
    <div>
      <Filter setRegion={setRegion} setType={setType} region={region} type={type} />
      {loading ?
        <Loading /> :
        <PokemonList type={type} pokemons={pokemons} />
      }
    </div>
  );
}

export default App;
