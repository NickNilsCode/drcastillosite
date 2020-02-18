import React, { Component } from 'react';
import { InformationalFooter, SocialFooter } from './'
import { Footer } from '../styled-components/components/Footer';

class FooterComponent extends Component {
  render(){
    return (
      <Footer>
        <InformationalFooter/>
        <SocialFooter/>
      </Footer>
    );
  }
}

export default FooterComponent;
