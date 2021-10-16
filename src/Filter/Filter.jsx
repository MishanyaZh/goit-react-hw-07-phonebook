import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onChangeFilter, value }) => {
  return (
    <label htmlFor={value.id} className={css.filter}>
      <p className={css.filterName}>Find contacts by name</p>
      <input
        id={uuidv4()}
        className={css.input}
        value={value}
        onChange={onChangeFilter}
        type="text"
        name="filter"
        placeholder="find"
        autoComplete="off"
      />
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
