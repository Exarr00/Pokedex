import PropTypes from 'prop-types';
import './css/pokecard.css';
import * as imgtypes from '../services/imgtypes';

const PokeCard = ({ pokemon, handleModal }) => {
  return (
    <div className='card' onClick={() => handleModal(pokemon)}>
      <img src={pokemon.sprites.front_default} alt="img failed to load" className='sprite' />
      <h3>{pokemon.name}</h3>
      <p>No.{pokemon.id}</p>
      <div className='types'>
        {pokemon.types.map(typing => (
          <div key={typing.type.name} className={`typing ${typing.type.name}`}>
            <img src={imgtypes[typing.type.name]} alt="" />
            {typing.type.name}
          </div>
        ))}
      </div>
    </div>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  handleModal: PropTypes.func.isRequired
};

export default PokeCard;
