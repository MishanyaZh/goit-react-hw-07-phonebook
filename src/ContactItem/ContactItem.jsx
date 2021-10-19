import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../redux/contacts-app/contacts-operations';
import Loader from 'react-loader-spinner';
import toast from 'react-hot-toast';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const contactDelete = (contactId, name) => {
    deleteContact(contactId);
    toast.success(`${name} delete with Contacts!`);
  };

  return (
    <li key={id} className={css.contactsItem}>
      <span>{name}:</span>
      <span>{number}</span>
      <span>
        <button
          onClick={() => contactDelete(id, name)}
          className={css.listButton}
          type="button"
        >
          {isDeleting ? (
            <Loader type="Rings" color="#00BFFF" height={20} width={20} />
          ) : (
            'delete'
          )}
        </button>
      </span>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
