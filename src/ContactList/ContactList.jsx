import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { useDeleteContactMutation } from '../redux/contact-app/contactsSlice';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const contactDelete = (contactId, name) => {
    deleteContact(contactId);
    toast.success(`${name} delete with Contacts!`);
  };

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactsItem}>
          <span>{name}:</span>
          <span>{number}</span>
          <span>
            <button
              disabled={isDeleting}
              onClick={() => contactDelete(id, name)}
              className={css.listButton}
              type="button"
            >
              {isDeleting && (
                <Loader type="Rings" color="#00BFFF" height={20} width={20} />
              )}
              delete
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
