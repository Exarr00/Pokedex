import PropTypes from 'prop-types';
import ModalStats from './ModalStats';
import * as imgtypes from '../../services/imgtypes';

const ModalInfo = ({ modalPokemon, species, abilities }) => {
  const getFlavor = (entries) => {
    const match = entries.find(flavor => flavor.language.name === 'en');
    return match.flavor_text.split('\f').join('');
  };

  const getEffect = (entries) => {
    if (entries.length === 0) return '<--Currently no info-->';
    const match = entries.find(effect => effect.language.name === 'en');
    return match.effect.split('\f').join('');
  };

  return (
    <>
      <h3 className='flavor'>
        {getFlavor(species.flavor_text_entries)}
      </h3>
      <div className='general-info'>
        <div className='modal-types'>
          <h4><b>Types:</b></h4>
          {modalPokemon.types.map((eachType) => (
            <div key={eachType.type.name} className={`typing ${eachType.type.name}`}>
              <img src={imgtypes[eachType.type.name]} alt="" />
              {eachType.type.name}
            </div>
          ))}
        </div>
        <div id='physical-info'>
          <h4><b>Physical:</b></h4>
          <div>Height: {modalPokemon.height} </div>
          <div>Weight: {modalPokemon.weight} </div>
        </div>
        <div id="catch-rate">
          <h4><b>Catch Rate:</b></h4> <div>{species.capture_rate}</div>
        </div>
        <div id='habitat'>
          <h4><b>Habitat:</b></h4> <div>{species.habitat ? species.habitat.name : 'NONE'}</div>
        </div>
      </div>
      <div>
        <h3><b>Base Stats:</b></h3>
        <table id='stats'>
          <tbody>
            <ModalStats stat={'Hp'} statNum={modalPokemon.stats[0]['base_stat']} type={modalPokemon.types[0].type.name} />
            <ModalStats stat={'Atk'} statNum={modalPokemon.stats[1]['base_stat']} type={modalPokemon.types[0].type.name} />
            <ModalStats stat={'Def'} statNum={modalPokemon.stats[2]['base_stat']} type={modalPokemon.types[0].type.name} />
            <ModalStats stat={'Sp-Atk'} statNum={modalPokemon.stats[3]['base_stat']} type={modalPokemon.types[0].type.name} />
            <ModalStats stat={'Sp-Def'} statNum={modalPokemon.stats[4]['base_stat']} type={modalPokemon.types[0].type.name} />
            <ModalStats stat={'Spd'} statNum={modalPokemon.stats[5]['base_stat']} type={modalPokemon.types[0].type.name} />
          </tbody>
        </table>
      </div>
      <div className='abilities'>
        <h4><b>Abilities:</b></h4>
        {abilities.map((abilityList) => (
          <div key={abilityList.name}>
            <p>{abilityList.name}</p>
            <div className='effect'>{getEffect(abilityList.entries)}</div>
          </div>
        ))}
      </div>

    </>
  );
};

ModalInfo.propTypes = {
  modalPokemon: PropTypes.object.isRequired,
  species: PropTypes.object.isRequired,
  abilities: PropTypes.array.isRequired
};

export default ModalInfo;
