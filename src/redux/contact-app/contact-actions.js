import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const formSubmitHandler = createAction('contact/add', data => ({
  payload: {
    ...data,
    id: uuidv4(),
  },
}));

const deleteContact = createAction('contact/delete');

const changeFilter = createAction('contact/changeFilter');

export default { formSubmitHandler, deleteContact, changeFilter };
