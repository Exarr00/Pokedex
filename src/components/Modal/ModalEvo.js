import PropTypes from 'prop-types';

const ModalEvo = ({ evoLine }) => {
  return (
    <div>
      {!!evoLine.species && (
        <div className='evoLine'>
          <p>{evoLine.species.name}</p>
          {evoLine['evolves_to'][0] && <p>--&gt;</p>}
          <div className='evoLine-second-group'>
            {evoLine['evolves_to'].map((poke) => {
              return (
                <div key={poke.species.name} className='evoLine-second'>
                  <p>{poke.species.name}</p>
                  {poke['evolves_to'][0] && <p>--&gt;</p>}
                  <div className='evoline-third-group'>
                    {poke['evolves_to'].map((final) => {
                      return (
                        <div key={final.species.name} className='evoLine-third'>
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
    </div>
  );
};

ModalEvo.propTypes = {
  evoLine: PropTypes.object.isRequired,
};

export default ModalEvo;
