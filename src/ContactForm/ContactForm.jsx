import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../redux/contact-app/contactsSlice';
import toast from 'react-hot-toast';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data, isFetching } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    formSubmitHandler({ name, number });
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const formSubmitHandler = ({ name, number }) => {
    const newContact = {
      name,
      number,
    };
    const doubleContact = data.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase()),
    );
    if (doubleContact && doubleContact.name.length === name.length) {
      return toast.error(`${name} is already in contacts`);
    } else {
      createContact(newContact);
      toast.success(`${name} add to Contacts`, { icon: '👏' });
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label id={name}>
        <p className={css.formNameNumber}>Name</p>
        <input
          className={css.input}
          value={name}
          onChange={handleChangeName}
          type="text"
          name="name"
          placeholder="add name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label id={name}>
        <p className={css.formNameNumber}>Number</p>
        <input
          className={css.input}
          value={number}
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          placeholder="add number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func,
  handleChange: PropTypes.string,
};
