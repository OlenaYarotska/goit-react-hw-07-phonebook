import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { getContacts } from 'redux/contactsOperations';
import { getLoading, getError } from 'redux/selectors';
import { Section, Heading, ContactsSection } from './App.styled';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactForm from './Components/ContactForm/ContactForm';
import './App.css';

function App() {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]);

  if (error) {
  return toast.error('Something went wrong')
  };
  
  return (
    <>
      <Section>
      <Heading>Phonebook</Heading>
      <ContactForm/>
      <ContactsSection title="Contacts">Contacts</ContactsSection>
      {loading? <h1>Loading...</h1> : <Filter />} 
      <ContactList />
        <Toaster />
      </Section>
    </>
  );
}
export default App;

