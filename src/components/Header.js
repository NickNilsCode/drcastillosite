import React, { Component } from 'react';
import { SocialHeader, NavHeader } from './';
import { Header } from '../styled-components/components/Header';

class HeaderComponent extends Component {
  render(){
    return (
      <Header>
        <SocialHeader/>
        <NavHeader/>
      </Header>
    );
  }
}

export default HeaderComponent;
