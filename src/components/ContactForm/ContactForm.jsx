import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactFormTitle,
  ContactFormBody,
  ContactFormInput,
  ContactFormBtn,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    // const name = form.elements.input.value;
    const name = e.currentTarget.elements.name.value;
    this.props.onSubmit({ name });
    e.currentTarget.reset();
  };

  render() {
    return (
      <ContactFormBody onSubmit={this.handleSubmit}>
        <ContactFormTitle>Name</ContactFormTitle>
        <ContactFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ContactFormBtn type="submit">Add Contact</ContactFormBtn>
      </ContactFormBody>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
