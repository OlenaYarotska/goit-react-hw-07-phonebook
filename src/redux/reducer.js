import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact, changeFilter } from './contactsOperations';


const items = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) => state.filter(item => item.id !== action.payload.id),
});

const loading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,

});

const error = createReducer(null, {
  [getContacts.pending]: () => null,
  [getContacts.fulfilled]: () => null,
  [getContacts.rejected]: (_, action) => action.payload,

  [addContact.pending]: () => null,
  [addContact.fulfilled]: () => null,
  [addContact.rejected]: (_, action) => action.payload,

  [deleteContact.pending]: () => null,
  [deleteContact.fulfilled]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
 
});
const initialState = '';
const filter = createReducer(initialState, {
  [changeFilter]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items,
  loading,
  error,
  filter,
});
