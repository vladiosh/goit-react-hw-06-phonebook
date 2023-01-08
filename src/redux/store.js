import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contact/addContact');
export const deleteContact = createAction('contact/deleteContact');
export const changeFilter = createAction('filter/changeFilter');

// console.log(addContact.toString());
// console.log(changeFilter.toString());

const contactsInitialState = [];
const filterInitialState = '';

const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [action.payload, ...state];
  },

  [deleteContact]: (state, action) => {
    return state.filter(({ id }) => id !== action.payload);
  },
});

const filterReducer = createReducer(filterInitialState, {
  [changeFilter]: (state, action) => {
    return action.payload;
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
