import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },

    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlise.actions;
export const contactReducer = contactsSlise.reducer;
