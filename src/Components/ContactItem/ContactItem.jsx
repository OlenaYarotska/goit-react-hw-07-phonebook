import propTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { ContactName, ContactNumber, Button, Item } from './ContactItem.styled';


const ContactItem = ({ contact: { id, name, number }}) => {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
    toast.success(`${name} has been removed from your phonebook`)
  }
  return (
    <>
      <Item key={id}>
        <ContactName>{name}:</ContactName>
        <ContactNumber>{number}</ContactNumber> 
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </Item>
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
  id: propTypes.string,
};

