import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gradient } from '../services/gradient';
import './css/pokemodal.css';

const PokeModal = ({ handleCloseModal, handleModal, modalPokemon }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    handleColor();
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

  return (
    <div className='pokeModal-container' onClick={handleCloseModal}>
      <div
        className='pokeModal'
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ background: `linear-gradient(${types[0]}, ${types[1]})` }}
      >
        <div>{modalPokemon.name}</div>
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
