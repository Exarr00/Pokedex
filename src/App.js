import { useEffect, useState } from 'react';
import exportedFunctions from './services/poke';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    exportedFunctions.getAll().then((res) => {
      setPokemons(res.results);
    });
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <h1 key={pokemon.name}>{pokemon.name}</h1>
      ))}
    </div>
  );
}

export default App;
