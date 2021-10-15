import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { useDeleteContactMutation } from '../redux/contact-app/contactsSlice';
// import { getVisibleContacts } from '../redux/contact-app/contact-selector';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  // const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  // old
  // const visibleContacts = (items, filter) => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return items.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  //   const deleteContact = (contactId, name) => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId),
  //   );
  //   toast.success(`${name} delete with Contacts!`);
  // };

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactsItem}>
          <span>{name}:</span>
          <span>{number}</span>
          <span>
            <button
              onClick={() => deleteContact(id)}
              className={css.listButton}
              type="button"
            >
              {isDeleting ? (
                <Loader type="Rings" color="#00BFFF" height={50} width={50} />
              ) : (
                'delete'
              )}
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};