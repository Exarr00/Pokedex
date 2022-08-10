import PropTypes from 'prop-types';
import ModalStats from './ModalStats';

const ModalInfo = ({ modalPokemon, species }) => {
  return (
    <>
      <div className='flavor'>
        {(species.flavor_text_entries[0].flavor_text).split('\f').join('')}
      </div>
      <div className='general-info'>
        <div className='modal-types'>
          Types:
          {modalPokemon.types.map((eachType) => (
            <div key={eachType.type.name} className={`typing ${eachType.type.name}`}>{eachType.type.name}</div>
          ))}
        </div>
        <div id='physical-info'>
          Physical:
          <div>Height: {modalPokemon.height} </div>
          <div>Weight: {modalPokemon.weight} </div>
        </div>
        <div id="catch-rate">
          Catch Rate: <div>{species.capture_rate}</div>
        </div>
        <div id='habitat'>
          Habitat: <div>{species.habitat ? species.habitat.name : 'NONE'}</div>
        </div>
      </div>
      <div id='abilities'>
        {modalPokemon.abilities.map((abilityList) => (
          <p key={abilityList.ability.name}>{abilityList.ability.name}</p>
        ))}
      </div>
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
    </>
  );
};

ModalInfo.propTypes = {
  modalPokemon: PropTypes.object.isRequired,
  species: PropTypes.object.isRequired
};

export default ModalInfo;
