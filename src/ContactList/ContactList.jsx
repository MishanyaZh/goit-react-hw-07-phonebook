import PropTypes from 'prop-types';
import { useFetchContactsQuery } from '../redux/contact-app/contactsSlice';
import ContactItem from '../ContactItem/ContactItem.jsx';
import Loader from 'react-loader-spinner';
import css from './ContactList.module.css';

const ContactList = ({ filter }) => {
  const { data, isFetching } = useFetchContactsQuery();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (data) {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    }
  };

  const filteredContacts = getVisibleContacts();

  return (
    <ul className={css.contactsList}>
      {isFetching && (
        <Loader
          type="Rings"
          color="#00BFFF"
          height={100}
          width={100}
          position="center"
        />
      )}
      {data &&
        filteredContacts.map(contacts => (
          <ContactItem key={contacts.id} {...contacts} />
        ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filter: PropTypes.string,
  // data: PropTypes.array,
  // onDeleteContact: PropTypes.func,
};
