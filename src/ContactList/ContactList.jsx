import { useSelector } from 'react-redux';
import {
  getFilterFromState,
  getVisibleContacts,
} from '../redux/contacts-app/contacts-selectors';
import { useFetchContactsQuery } from '../redux/contacts-app/contacts-operations';
import ContactItem from '../ContactItem/ContactItem.jsx';
import Loader from 'react-loader-spinner';
import css from './ContactList.module.css';

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilterFromState);

  const filteredContacts = getVisibleContacts({ data, filter });

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
