import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import { getPhonebookContacts } from 'redux/selectors';
import { addContact } from '../../redux/contactsOperations';
import { FormWrapper, Form, Label, Input, Button } from './ContactForm.styled';


function ContactForm() {
  const dispatch = useDispatch();
  const items = useSelector(getPhonebookContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const reset = () => {
    setName('');
    setNumber('');
  };
  
  const dublicateNameCheck = items => {
    const normalizedContacts = items.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (normalizedContacts) {
      toast.error(`${name} is already in contacts.`);
      reset();
    }
  };

  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value)
    } else {
      setNumber(evt.target.value)
    }
  };
   

  const handleSubmit = evt => {
    evt.preventDefault();
    if (dublicateNameCheck(items)) {
      return;
    } else dispatch(addContact({ name, number, id: nanoid() }));
    toast.success(`${name} has been added to phonebook`);
    reset();
  };
  

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </FormWrapper>
  );
}
export default ContactForm;

