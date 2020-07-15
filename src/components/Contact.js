import React, { Component } from 'react';
import { ContactForm, Map } from './';
import { Contact, ContactForms } from '../styled-components/components/Contact';
import { Description, H2BannerTitle, HashMark } from '../styled-components/global';

class ContactComponent extends Component {
  render(){
    return (
      <Contact>
        <Description className="description">
          <HashMark id="contact" />
          <H2BannerTitle>Contact</H2BannerTitle>
          <hr className="line"/>
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
