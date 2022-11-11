import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from 'services/contactsApi';

export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async () => {
        const response = await fetchContacts();
        return response;
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async contact => {
            const response = await addContacts(contact);
            return response;
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async id => {
            const response = await deleteContacts(id);
            return response;
       
    }
);

export const changeFilter = createAction('contacts/filter');
