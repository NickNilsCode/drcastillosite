import React, { Component } from 'react';
import { FooterCard } from './';
import { InformationalFooter } from '../styled-components/components/InformationalFooter';

class InformationalFooterComponent extends Component {
  render(){
    return (
      <InformationalFooter>
        <FooterCard/>
        <FooterCard/>
        <FooterCard/>
      </InformationalFooter>
    );
  }
}

export default InformationalFooterComponent;
