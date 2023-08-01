import WithOuthRedirect from 'HOC/WithOuthRedirect';
import Contact from 'components/Contact/Contact';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import { LoaderSpinner } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, fetchContactsThunk } from 'redux/contactsThunks';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);

  const contacts = useSelector(state => state.phonebook.contacts);
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const error = useSelector(state => state.phonebook.error);
  let filter = '';

  useEffect(() => {
    if (!userData) return;
    dispatch(fetchContactsThunk());
  }, [dispatch, userData]);

  const getFindedContacts = () => {
    if (!contacts || contacts.length === 0) return;
    if (!filter || filter.length === 0) return contacts;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  const changeFilter = event =>{
    console.log(event.target.value);
    const contactsToFilter=Object.values(contacts);
//    contactsToFilter.filter((contact) => {
//     contact.name.toLowerCase().includes(event.target.value.toLowerCase())})
    console.log(contactsToFilter());
    
  };

//   console.log(changeFilter);

  const handleDeleteContact = (contactId)=>{
    dispatch(deleteContactThunk(contactId))
  }

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  const showEmptyContactsMessage =
    Array.isArray(contacts) && contacts.length === 0 && !isLoading;


  return (
    <div>
      {showEmptyContactsMessage ? (
        <p>поки що немає збережених контактів</p>
      ) : (
        <p>Список збережених контактів :</p>
      )}
      <ContactForm contacts={contacts}></ContactForm>


      <Filter
        // value={filter}
        contacts={getFindedContacts()}
        onChange={changeFilter}
        onDeleteContact={handleDeleteContact}
      ></Filter>
      <ul>
        {showContacts &&
          contacts.map( ({name, number, id}) => {
            return (
              <li key={id}>
                <Contact onDeleteContact={handleDeleteContact} name={name} number={number} id={id}></Contact>
              </li>
            );
          })}
      </ul>
      {isLoading && <LoaderSpinner />}
      {error && <p> {error} </p>}
    </div>
  );
};

export default WithOuthRedirect (ContactsPage);
