import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFetchContactsQuery } from './redux/contact-app/contactsSlice';

import toast, { Toaster } from 'react-hot-toast';
import Loader from 'react-loader-spinner';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Section from './containers/Section/Section';
import MContainer from './containers/MainContainer/MainContainer';

const App = () => {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const { data, isFetching } = useFetchContactsQuery();
  // setContacts(data);
  console.log(data);

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const formSubmitHandler = ({ name, number }) => {
  //   const newContact = {
  //     name,
  //     number,
  //     id: uuidv4(),
  //   };

  //   setContacts(prevState => {
  //     const doubleContact = prevState.find(contact =>
  //       contact.name.toLowerCase().includes(name.toLowerCase()),
  //     );

  //     if (doubleContact && doubleContact.name.length === name.length) {
  //       toast.error(`${name} is already in contacts`);
  //       return [...prevState];
  //     } else {
  //       setContacts([newContact, ...prevState]);
  //       toast.success(`${name} add to Contacts`, { icon: '👏' });
  //     }
  //   });
  // };

  // const deleteContact = (contactId, name) => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId),
  //   );
  //   toast.success(`${name} delete with Contacts!`);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const filteredContacts = getVisibleContacts();

  return (
    <MContainer title="Phonebook">
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        {data && <ContactList contacts={data} />}
        {isFetching && (
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        )}
      </Section>
      <Toaster position="top-center" reverseOrder={false} />
    </MContainer>
  );
};

export default App;
