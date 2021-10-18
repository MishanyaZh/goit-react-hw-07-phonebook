import { Toaster } from 'react-hot-toast';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './containers/Section/Section';
import MContainer from './containers/MainContainer/MainContainer';

const App = () => {
  return (
    <MContainer title="Phonebook">
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <Toaster position="top-center" reverseOrder={false} />
    </MContainer>
  );
};

export default App;
