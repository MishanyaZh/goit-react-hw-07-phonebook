import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getValue } from '../redux/contact-app/contact-selector';
import contactActions from '../redux/contact-app/contact-actions';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getValue);
  const onChange = e => dispatch(contactActions.changeFilter(e.target.value));

  return (
    <label htmlFor={value.id} className={css.filter}>
      <p className={css.filterName}>Find contacts by name</p>
      <input
        id={uuidv4()}
        className={css.input}
        value={value}
        onChange={onChange}
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
