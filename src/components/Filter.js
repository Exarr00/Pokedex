import filters from '../services/filters';
import PropTypes from 'prop-types';

const Filter = ({ setRegion, setType, region, type }) => {
  const regionSelect = (e) => {
    const name = filters.regions[e.target.value].name;
    const offset = filters.regions[e.target.value].offset;
    const limit = filters.regions[e.target.value].limit;
    setRegion({ id: e.target.value, name, offset, limit });
  };
  return (
    <div>
      <select onChange={regionSelect} value={region.index}>
        {filters.regions.map((region, index) => (
          <option key={region.name} value={index}>{region.name}</option>
        ))}
      </select>
      <select onChange={(e) => setType(e.target.value)} value={type}>
        {filters.types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  setRegion: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  region: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default Filter;