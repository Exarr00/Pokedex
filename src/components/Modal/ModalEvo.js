import PropTypes from 'prop-types';
import exportedFunctions from '../../services/poke';

const ModalEvo = ({ evoLine, handleModal, modalPokemon, handleScroll }) => {
  const getId = (url) => {
    const lastSlash = url.lastIndexOf('/');
    const firstSlash = url.lastIndexOf('/', lastSlash - 1);
    const id = url.slice(firstSlash + 1, lastSlash);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  const getEvo = async (pokemon) => {
    if (pokemon === modalPokemon) {
      handleScroll();
      return;
    }
    const response = await exportedFunctions.getSingle(pokemon);
    handleModal(response);
  };

  return (
    <div className='evoLine-container'>
      <h4><b>Evolution Line:</b></h4>
      {!!evoLine.species && (
        <div className='evoLine'>
          <div className='evo'>
            <img src={getId(evoLine.species.url)} alt="" onClick={() => getEvo(evoLine.species.name)} />
            <p>{evoLine.species.name}</p>
            {evoLine['evolves_to'][0] && <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" /></svg>}
          </div>
          <div className='evoLine-second-container'>
            <div className='evoLine-second-group'>
              {evoLine['evolves_to'].map((poke) => {
                return (
                  <div className={'evoLine-secondLine'} key={poke.species.name} >
                    <div className='evoLine-second evo'>
                      <p className='trigger'>{poke['evolution_details'][0].trigger.name}</p>
                      <img src={getId(poke.species.url)} alt="" onClick={() => getEvo(poke.species.name)} />
                      <p>{poke.species.name}</p>
                      {poke['evolves_to'][0] && <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" /></svg>}
                    </div>
                    <div className='evoLine-third-group'>
                      {poke['evolves_to'].map((final) => {
                        return (
                          <div key={final.species.name} className='evoLine-third evo'>
                            <p className='trigger'>{final['evolution_details'][0].trigger.name}</p>
                            <img src={getId(final.species.url)} alt="" onClick={() => getEvo(final.species.name)} />
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
        </div>
      )}
    </div>
  );
};

ModalEvo.propTypes = {
  evoLine: PropTypes.object.isRequired,
  handleModal: PropTypes.func.isRequired,
  modalPokemon: PropTypes.string.isRequired,
  handleScroll: PropTypes.func.isRequired
};

export default ModalEvo;
