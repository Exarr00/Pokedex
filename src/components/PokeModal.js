import { useState, useEffect } from 'react';
import exportedFunctions from '../services/poke';
import PropTypes from 'prop-types';
import { gradient } from '../services/gradient';
import './css/pokemodal.css';

const PokeModal = ({ handleCloseModal, handleModal, modalPokemon }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    handleColor();
    exportedFunctions.getEvo(modalPokemon.id).then(data => {
      console.log(data);
    });
  }, []);

  const handleColor = () => {
    const typing = modalPokemon.types.map((type) => {
      return type;
    });
    let bgColor;
    if (typing.length === 2) {
      bgColor = gradient(typing[0].type.name, typing[1].type.name);
    } else {
      bgColor = gradient(typing[0].type.name, typing[0].type.name);
    }
    setTypes(bgColor);
  };

  const background = {
    background: `linear-gradient(${types[0]}, ${types[1]}), url(${'../imgs/bg.png'})`
  };

  return (
    <div className='pokeModal-container' onClick={handleCloseModal}>
      <div
        className='pokeModal'
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={background}
      >
        <div>
          <p>{modalPokemon.name}</p>
          <p>{modalPokemon.stats[0]['base_stat']}</p>
        </div>
        <img
          src={modalPokemon.sprites.other['official-artwork']['front_default']}
          alt='img failed to load'
        />
        <div id="num">{modalPokemon.id}</div>
        <div id="types">
          {types[0] !== types[1] ?
            <div>
              <p>{types[0]}</p>
              <p>{types[1]}</p>
            </div> :
            <div>
              <p>{types[0]}</p>
            </div>
          }
        </div>
        <div id="physical-info">
          <p>Height: {modalPokemon.height} </p>
          <p>Weight: {modalPokemon.weight} </p>
        </div>
        <div id='abilities'>
          {modalPokemon.abilities.map(abilityList => (
            <p key={abilityList.ability.name}>{abilityList.ability.name}</p>
          ))}
        </div>
        <div id="stats">
          <p>Atk {modalPokemon.stats[1]['base_stat']}</p>
          <p>DEF {modalPokemon.stats[2]['base_stat']}</p>
          <p>SP-Atk {modalPokemon.stats[3]['base_stat']}</p>
          <p>SP-Def {modalPokemon.stats[4]['base_stat']}</p>
          <p>SPD {modalPokemon.stats[5]['base_stat']}</p>
        </div>
        <div id="evo"></div>
        <div onClick={handleModal}></div>
      </div>
    </div>
  );
};

PokeModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
  modalPokemon: PropTypes.object.isRequired,
};
export default PokeModal;
