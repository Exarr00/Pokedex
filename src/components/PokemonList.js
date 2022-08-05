import PropTypes from 'prop-types';
import PokeCard from './PokeCard';
import './css/pokelist.css';

const PokemonList = ({ type, pokemons }) => {
  const getFiltered = () => {
    if (type === 'all') return pokemons;
    const filteredList = pokemons.filter(pokemon => {
      return pokemon.types.some(typing => {
        return typing.type.name == type;
      });
    });
    return filteredList;
  };

  return (
    <div className='card-container'>
      {getFiltered().map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  type: PropTypes.string.isRequired,
  pokemons: PropTypes.array.isRequired
};

export default PokemonList;
