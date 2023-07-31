import {createAsyncThunk} from "@reduxjs/toolkit"
import { getContacts, postContact, removeContact } from "services/api/api"
import { registerRequest } from "services/api/userApi";

export const registerThunk = createAsyncThunk ("user/registerThunk",
async (formData, {rejectWithValue}) => {
  try {
    const data = await registerRequest(formData);
    console.log(data);
    return data;
  } catch ( error ) {
    return rejectWithValue(error.message);
  }
});
export const addContactThunk = createAsyncThunk ("contacts/addContact",
async (contact, {rejectWithValue}) => {
  try {
    const data = await postContact(contact);
    return data;
  } catch ( error ) {
    return rejectWithValue(error.message);
  }
});
export const deleteContactThunk = createAsyncThunk ("contacts/deleteContact",
async (contactId, {rejectWithValue}) => {
  try {
    const data = await removeContact(contactId);
    return data;
  } catch ( error ) {
    return rejectWithValue(error.message);
  }
});

// export const selectAllContacts = (state) => state.phonebook.contacts.items;
// export const selectIsLoadingStatus = (state) => state.phonebook.contacts.isLoading;
// export const selectErrorStatus = (state) => state.phonebook.contacts.error;
// export const selectFilter = (state) => state.phonebook.filter;


