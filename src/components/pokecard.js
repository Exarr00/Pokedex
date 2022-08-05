import './css/pokecard.css';
import * as imgtypes from '../services/imgtypes';

const pokecard = ({ pokemon }) => {
  return (
    <div className='card'>
      <div>{pokemon.name}</div>
      {pokemon.types.map(typing => (
        <div key={typing.type.name} className='imgsss'>
          <p>{typing.type.name}</p>
          <img src={imgtypes[typing.type.name]} alt="" />
        </div>
      ))}
    </div>
  );
};

export default pokecard;
