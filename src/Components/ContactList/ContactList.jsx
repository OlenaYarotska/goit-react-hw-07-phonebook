import propTypes from 'prop-types';
import { ContactsList } from './ContactList.styled';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getPhonebookContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
 
  const contacts = useSelector(getPhonebookContacts);
  const filteredContacts = useSelector(getFilter);
  const contactNames = contacts.filter(contact => contact.name.toLowerCase().includes(filteredContacts.toLowerCase()));

  return (
      <ContactsList>
        {contactNames.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
          />
        ))}
      </ContactsList>
  )
};
      
export default ContactList;

ContactList.propTypes = {
  contactNames: propTypes.arrayOf(propTypes.object),
  contact: propTypes.string,
  id: propTypes.string,
};
