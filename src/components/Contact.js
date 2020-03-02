import React, { Component } from 'react';
import { ContactForm, Map } from './';
import { Contact, ContactForms } from '../styled-components/components/Contact';
import { Description, H2BannerTitle } from '../styled-components/global';

class ContactComponent extends Component {
  render(){
    return (
      <Contact id="contact">
        <Description className="description">
          <H2BannerTitle>Contact</H2BannerTitle>
          <hr/>
        </Description>
        <ContactForms>
          <ContactForm/>
          <Map/>
        </ContactForms>
      </Contact>
    );
  }
}

export default ContactComponent;
