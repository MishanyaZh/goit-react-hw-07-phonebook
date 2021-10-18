import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
// mozhna bez userReducer (delete import to usersReducer)
// import { usersReducer } from './contact-app/usersSlice';
import { contactsApi } from './contact-app/contactsSlice';
// import contactReducer from './contact-app/contact-reducer';
import { filter } from './contact-app/contact-reducer';

const contacts = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter,
});

export const store = configureStore({
  reducer: contacts,
  // reducer: {[contactsApi.reducerPath]: contactsApi.reducer,
  // },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
