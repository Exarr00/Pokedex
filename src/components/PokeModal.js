import { useState, useEffect } from 'react';
import exportedFunctions from '../services/poke';
import PropTypes from 'prop-types';
import { gradient } from '../services/gradient';
import bg from '../components/imgs/bg.png';
import './css/pokemodal.css';

const PokeModal = ({ handleCloseModal, handleModal, modalPokemon }) => {
  const [types, setTypes] = useState([]);
  const [evoLine, setEvoLine] = useState({});
  const [prev, setPrev] = useState({});
  const [next, setNext] = useState({});

  useEffect(() => {
    handleColor();
    exportedFunctions.getEvo(modalPokemon.id).then(data => {
      console.log(data);
      setEvoLine(data);
      console.log(evoLine);
    });
    exportedFunctions.getPrevNext(modalPokemon.id).then(data => {
      setPrev(data.prev);
      setNext(data.next);
    });
  }, [modalPokemon]);

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
    background: `linear-gradient(${types[0]}99, ${types[1]}99), url(${bg})`,
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
        <div className='innerModal'>
          <header className='modalHeader'>
            <div onClick={() => handleModal(prev)}>
              {prev.id} {prev.name}
            </div>
            <div>
              {modalPokemon.id} {modalPokemon.name}
            </div>
            <div onClick={() => handleModal(next)}>
              {next.id} {next.name}
            </div>
          </header>
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
            <p>{modalPokemon.stats[0]['base_stat']}</p>
            <p>Atk {modalPokemon.stats[1]['base_stat']}</p>
            <p>DEF {modalPokemon.stats[2]['base_stat']}</p>
            <p>SP-Atk {modalPokemon.stats[3]['base_stat']}</p>
            <p>SP-Def {modalPokemon.stats[4]['base_stat']}</p>
            <p>SPD {modalPokemon.stats[5]['base_stat']}</p>
          </div>
          {!!evoLine.species && (
            <div className='evoLine'>
              <p>{evoLine.species.name}</p>
              <p>--&gt;</p>
              <div className='evoLine-second-group'>
                {evoLine['evolves_to'].map((poke) => {
                  return (
                    <div key={poke.species.name} className="evoLine-second">
                      <p>{poke.species.name}</p>
                      <p>--&gt;</p>
                      <div className='evoline-third-group'>
                        {poke['evolves_to'].map((final) => {
                          return (
                            <div key={final.species.name} className="evoLine-third">
                              <p>{final.species.name}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div onClick={handleModal}></div>
        </div>
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
