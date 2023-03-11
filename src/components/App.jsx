import { Component } from 'react';
import { AppHeader, AppSubeader } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <AppHeader>Phonebook</AppHeader>
        <ContactForm></ContactForm>
        <AppSubeader>Contacts</AppSubeader>
        <ContactList></ContactList>
      </div>
    );
  }
}
