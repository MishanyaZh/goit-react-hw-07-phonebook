import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Filter.module.css';
import ContactList from '../ContactList/ContactList';

const Filter = () => {
  const [filter, setFilter] = useState('');

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div>
      <label htmlFor={filter.id} className={css.filter}>
        <p className={css.filterName}>Find contacts by name</p>
        <input
          id={uuidv4()}
          className={css.input}
          value={filter}
          onChange={onChangeFilter}
          type="text"
          name="filter"
          placeholder="find"
          autoComplete="off"
        />
      </label>

      <ContactList filter={filter} />
    </div>
  );
};
export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
