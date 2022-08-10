import PropTypes from 'prop-types';

const ModalStats = ({ stat, statNum, type }) => {
  return (
    <tr className="stat-container">
      <td className='stat-name'>{stat}:</td>
      <td className="stat-bar-container">
        <div className={`stat-bar ${type}`} style={{ width: `${statNum}%` }}></div>
        <div>{statNum}</div>
      </td>
    </tr>
  );
};

ModalStats.propTypes = {
  stat: PropTypes.string.isRequired,
  statNum: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default ModalStats;