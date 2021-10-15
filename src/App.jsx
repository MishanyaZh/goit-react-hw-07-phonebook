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

  return (
    <MContainer title="Phonebook">
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        {data && <ContactList contacts={data} />}
        {isFetching && (
          <Loader type="Rings" color="#00BFFF" height={200} width={200} />
        )}
      </Section>
      <Toaster position="top-center" reverseOrder={false} />
    </MContainer>
  );
};

export default App;
