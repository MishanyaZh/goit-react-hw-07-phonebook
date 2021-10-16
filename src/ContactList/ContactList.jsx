import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem.jsx';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
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
