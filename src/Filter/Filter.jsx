// import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/contact-app/contact-actions';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor="filter" className={css.filter}>
        <p className={css.filterName}>Find contacts by name</p>
        <input
          id="filter"
          // id={uuidv4()}
          className={css.input}
          // value={filter}
          onChange={onChangeFilter}
          type="text"
          name="filter"
          placeholder="find"
          autoComplete="off"
        />
      </label>
    </div>
  );
};
export default Filter;
