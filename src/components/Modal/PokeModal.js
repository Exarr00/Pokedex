import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ModalHeader from './ModalHeader';
import ModalInfo from './ModalInfo';
import ModalEvo from './ModalEvo';
import Loading from '../Loading';
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
  const [abilities, setAbilities] = useState([]);

  const modal = useRef(null);

  useEffect(() => {
    setLoading(true);
    handleColor();
    const getData = async () => {
      const evoData = await exportedFunctions.getEvo(modalPokemon.id);
      const speciesData = await exportedFunctions.getSpecies(modalPokemon.id);
      const prevnextData = await exportedFunctions.getPrevNext(modalPokemon.id);
      const abilityData = await exportedFunctions.getAbilities(modalPokemon.abilities);
      setEvoLine(evoData);
      setSpecies(speciesData);
      setPrev(prevnextData.prev);
      setNext(prevnextData.next);
      setAbilities(abilityData);
      setLoading(false);
    };
    getData();
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

  const handleScroll = () => {
    modal.current.scrollTo(0, 0);
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

        {loading ? (<div className='innerModal'><Loading /></div>) : (<div className='innerModal' ref={modal}>
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
          <ModalInfo modalPokemon={modalPokemon} species={species} abilities={abilities} />
          <ModalEvo evoLine={evoLine} handleModal={handleModal} modalPokemon={modalPokemon.name} handleScroll={handleScroll}></ModalEvo>
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
