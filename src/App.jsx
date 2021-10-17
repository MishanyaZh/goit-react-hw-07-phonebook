// import { useState } from 'react';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from './redux/contact-app/contactsSlice';

import toast, { Toaster } from 'react-hot-toast';
import Loader from 'react-loader-spinner';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Section from './containers/Section/Section';
import MContainer from './containers/MainContainer/MainContainer';

const App = () => {
  // const [filter, setFilter] = useState('');

  const { data, isFetching } = useFetchContactsQuery();
  // const [createContact] = useCreateContactMutation();

  // const formSubmitHandler = ({ name, number }) => {
  //   const newContact = {
  //     name,
  //     number,
  //   };
  //   const doubleContact = data.find(contact =>
  //     contact.name.toLowerCase().includes(name.toLowerCase()),
  //   );
  //   if (doubleContact && doubleContact.name.length === name.length) {
  //     return toast.error(`${name} is already in contacts`);
  //   } else {
  //     createContact(newContact);
  //     toast.success(`${name} add to Contacts`, { icon: '👏' });
  //   }
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   if (data) {
  //     return data.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter),
  //     );
  //   }
  // };

  // const filteredContacts = getVisibleContacts();

  return (
    <MContainer title="Phonebook">
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter
        // onChangeFilter={changeFilter} value={filter}
        />

        {data && (
          <ContactList
          // contacts={filteredContacts}
          />
        )}
        {isFetching && (
          <Loader
            type="Rings"
            color="#00BFFF"
            height={100}
            width={100}
            position="center"
          />
        )}
      </Section>
      <Toaster position="top-center" reverseOrder={false} />
    </MContainer>
  );
};

export default App;
