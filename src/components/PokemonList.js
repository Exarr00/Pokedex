import PropTypes from 'prop-types';
import PokeCard from './PokeCard';
import './css/pokelist.css';

const PokemonList = ({ type, pokemons, search }) => {
  const getFiltered = () => {
    if (type === 'all' && !search) return pokemons;
    let filteredList = pokemons.filter((element) => {
      return element.name.includes(search);
    });
    if (type !== 'all') {
      filteredList = filteredList.filter((pokemon) => {
        return pokemon.types.some((typing) => {
          return typing.type.name == type;
        });
      });
    }
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
  pokemons: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
};

export default PokemonList;
