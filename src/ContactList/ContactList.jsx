import PropTypes, { number } from 'prop-types';
import { useFetchContactsQuery } from '../redux/contact-app/contactsSlice';
import ContactItem from '../ContactItem/ContactItem.jsx';
import css from './ContactList.module.css';

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();

  // const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className={css.contactsList}>
      {data.map(contacts => (
        <ContactItem key={contacts.id} {...contacts} />
        // <li key={id} className={css.contactsItem}>
        //   <span>{name}:</span>
        //   <span>{number}</span>
        //   <span>
        //     <button
        //       disabled={isDeleting}
        //       onClick={() => contactDelete(id, name)}
        //       className={css.listButton}
        //       type="button"
        //     >
        //       {isDeleting && (
        //         <Loader type="Rings" color="#00BFFF" height={20} width={20} />
        //       )}
        //       delete
        //     </button>
        //   </span>
        // </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
