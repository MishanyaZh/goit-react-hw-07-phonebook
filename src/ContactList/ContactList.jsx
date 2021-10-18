import { getFilterFromState } from '../redux/contact-app/contact-selector';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../redux/contact-app/contactsSlice';
import ContactItem from '../ContactItem/ContactItem.jsx';
import Loader from 'react-loader-spinner';
import css from './ContactList.module.css';

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilterFromState);

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
        <div className={css.box}>
          <Loader
            type="Rings"
            color="#00BFFF"
            height={100}
            width={100}
            position="center"
          />
        </div>
      )}
      {data &&
        filteredContacts.map(contacts => (
          <ContactItem key={contacts.id} {...contacts} />
        ))}
    </ul>
  );
};

export default ContactList;
