import { useEffect, useState } from 'react';
import exportedFunctions from './services/poke';
import PokemonList from './components/PokemonList';
import Filter from './components/Filter';
import Loading from './components/Loading';
import Pokeball from './components/Pokeball';
import PokeModal from './components/Modal/PokeModal';
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
  const [showModal, setShowModal] = useState(false);
  const [modalPokemon, setModalPokemon] = useState({});

  useEffect(() => {
    setLoading(true);
    exportedFunctions.getAll(region).then((res) => {
      setPokemons(res);
      setLoading(false);
    });
  }, [region]);

  const handleModal = (pokemon) => {
    setShowModal(true);
    setModalPokemon(pokemon);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      {showModal && (
        <PokeModal
          handleCloseModal={handleCloseModal}
          handleModal={handleModal}
          modalPokemon={modalPokemon}
        />
      )}
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
        <PokemonList
          type={type}
          pokemons={pokemons}
          search={search}
          handleModal={handleModal}
        />
      )}
    </div>
  );
}

export default App;
