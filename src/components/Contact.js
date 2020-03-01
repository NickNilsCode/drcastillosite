import React, { Component } from 'react';
import { ContactForm, Map } from './';
import { Contact } from '../styled-components/components/Contact';

class ContactComponent extends Component {
  render(){
    return (
      <Contact>
        <ContactForm/>
        <Map/>
      </Contact>
    );
  }
}

export default ContactComponent;
