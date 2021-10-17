import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// mozhna bez userReducer (delete import to usersReducer)
// import { usersReducer } from './contact-app/usersSlice';
import { contactsApi } from './contact-app/contactsSlice';
import contactReducer from './contact-app/contact-reducer';

export const store = configureStore({
  reducer: {
    // delete string (users: usersReducer)
    // users: usersReducer,
    contacts: contactReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
