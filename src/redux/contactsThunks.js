import { createAsyncThunk } from "@reduxjs/toolkit"
import { addContactsRequest, deleteContactsRequest, getContactsRequest } from "services/api/contactsApi";


export const fetchContactsThunk = createAsyncThunk("contacts/fetchContactsThunk",
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await getContactsRequest();
            console.log(`контакти з запиту fetchContactsThunk :`,contacts);
            return contacts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });
export const addContactThunk = createAsyncThunk("contacts/addContactThunk",
    async (formData, { rejectWithValue }) => {
        try {
            const newContact = await addContactsRequest(formData);
            console.log('newContact: ', newContact);
            return newContact;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

export const deleteContactThunk = createAsyncThunk("contacts/deleteContactThunk",
    async (contactId, { rejectWithValue }) => {
        try {
            const delContact = await deleteContactsRequest(contactId);
            console.log('delContact: ', delContact);              
            return delContact;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

