import React, { Component } from 'react';
import { NavHeader } from '../styled-components/components/NavHeader';
import { MobileHeader, DesktopHeader } from './'

class NavHeaderComponent extends Component {
  render(){
    return (
      <NavHeader>
        <MobileHeader/>
        <DesktopHeader/>
      </NavHeader>
    );
  }
}

export default NavHeaderComponent;
