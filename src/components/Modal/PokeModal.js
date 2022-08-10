import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalHeader from './ModalHeader';
import ModalInfo from './ModalInfo';
import ModalEvo from './ModalEvo';
import exportedFunctions from '../../services/poke';
import { gradient } from '../../services/gradient';
import bg from '../../components/imgs/bg.png';
import '../css/pokemodal.css';

const PokeModal = ({ handleCloseModal, handleModal, modalPokemon }) => {
  const [types, setTypes] = useState([]);
  const [evoLine, setEvoLine] = useState({});
  const [prev, setPrev] = useState({});
  const [next, setNext] = useState({});
  const [loading, setLoading] = useState(true);
  const [species, setSpecies] = useState({});

  useEffect(() => {
    console.log(loading);
    setLoading(true);
    handleColor();
    exportedFunctions.getEvo(modalPokemon.id).then((data) => {
      console.log(data);
      setEvoLine(data);
      console.log(evoLine);
    });
    exportedFunctions.getSpecies(modalPokemon.id).then(data => {
      setSpecies(data);
    });
    exportedFunctions.getPrevNext(modalPokemon.id).then((data) => {
      setPrev(data.prev);
      setNext(data.next);
      setLoading(false);
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

        {loading ? (<div className='innerModal'>loadin...</div>) : (<div className='innerModal'>
          <ModalHeader
            prev={prev}
            next={next}
            modalPokemon={modalPokemon}
            handleModal={handleModal}
          />
          <img
            src={
              modalPokemon.sprites.other['official-artwork']['front_default']
            }
            alt='img failed to load'
          />
          <ModalInfo modalPokemon={modalPokemon} species={species} />
          <ModalEvo evoLine={evoLine}></ModalEvo>
        </div>)
        }
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
