import PropTypes from 'prop-types';

const ModalHeader = ({ prev, next, modalPokemon, handleModal }) => {
  return (
    <header className='modalHeader'>
      <div className='prev' onClick={() => handleModal(prev)}>
        <p>&lt;#{prev.id}</p>
        <img src={prev.sprites['front_default']} alt='' />
      </div>
      <div className='main'>
        <div>{modalPokemon.name}</div>
        <div id='num'>#{modalPokemon.id}</div>
      </div>
      <div className='next' onClick={() => handleModal(next)}>
        <img src={next.sprites['front_default']} alt='' />
        <p>#{next.id}&gt;</p>
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
