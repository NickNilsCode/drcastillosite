import React, { Component } from 'react';
import { InformationalFooter, SocialFooter } from './';
import { FooterCard } from '../styled-components/components/FooterCard';
import { H1 } from '../styled-components/global';

class FooterCardComponent extends Component {
  render(){
    return (
      <FooterCard>
        <H1>{this.props.title}</H1>
        <hr/>
        {this.props.children}
      </FooterCard>
    );
  }
}

export default FooterCardComponent;
