import PropTypes from 'prop-types';

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
    <div>
      {getFiltered().map((pokemon) => (
        <h1 key={pokemon.name}>{pokemon.name} {pokemon.type}</h1>
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  type: PropTypes.string.isRequired,
  pokemons: PropTypes.array.isRequired
};

export default PokemonList;
