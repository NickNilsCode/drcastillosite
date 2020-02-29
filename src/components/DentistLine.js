import React, { Component } from 'react';
import { DentistLine, Hr } from '../styled-components/components/DentistLine';

class DentistLineComponent extends Component {
  render(){
    return (
      <DentistLine>
        <Hr/>
        <img src="/images/dentistlogo.png"/>
        <Hr/>
      </DentistLine>
    );
  }
}

export default DentistLineComponent;
