import PropTypes from 'prop-types';

const ModalHeader = ({ prev, next, modalPokemon, handleModal }) => {
  return (
    <header className='modalHeader'>
      <div className='prev' onClick={() => handleModal(prev)}>
        <h3>&lt;#{prev.id}</h3>
        <img src={prev.sprites['front_default']} alt='' />
      </div>
      <div className='main'>
        <h3>{modalPokemon.name}</h3>
        <h3 id='num'>#{modalPokemon.id}</h3>
      </div>
      <div className='next' onClick={() => handleModal(next)}>
        <img src={next.sprites['front_default']} alt='' />
        <h3>#{next.id}&gt;</h3>
      </div>
    </header>
  );
};

ModalHeader.propTypes = {
  prev: PropTypes.object.isRequired,
  next: PropTypes.object.isRequired,
  modalPokemon: PropTypes.object.isRequired,
  handleModal: PropTypes.func.isRequired
};

export default ModalHeader;
