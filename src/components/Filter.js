import filters from '../services/filters';
import PropTypes from 'prop-types';
import './css/filter.css';

const Filter = ({ setSearch, search, setRegion, setType, region, type }) => {
  const regionSelect = (e) => {
    const name = filters.regions[e.target.value].name;
    const offset = filters.regions[e.target.value].offset;
    const limit = filters.regions[e.target.value].limit;
    setSearch('');
    setRegion({ id: e.target.value, name, offset, limit });
  };

  const searchPoke = (val) => {
    let lowerVal = val.toLowerCase();
    setSearch(lowerVal);
  };

  const capitalize = (val) => {
    return val && val[0].toUpperCase() + val.slice(1);
  };

  return (
    <div className='filter-container'>
      <div className='filter-options'>
        <div className='poke-region'>
          <select onChange={regionSelect} value={region.index}>
            {filters.regions.map((region, index) => (
              <option key={region.name} value={index}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
        <div className='poke-type'>
          <select onChange={(e) => setType(e.target.value)} value={type}>
            {filters.types.map((type) => (
              <option key={type} value={type}>
                {capitalize(type)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='poke-search'>
        <input
          className='search-input'
          type='text'
          placeholder='Search Pokemon'
          value={search}
          onChange={(e) => searchPoke(e.target.value)}
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setRegion: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  search: PropTypes.string,
  region: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default Filter;
