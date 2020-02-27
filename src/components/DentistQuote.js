import React, { Component } from 'react';
import { DentistQuote, DentistName, DentistMessage, LeftSide, RightSide, Button } from '../styled-components/components/DentistQuote';
import { H2 } from '../styled-components/global';

class DentistQuoteComponent extends Component {
  render(){
    const { title, name, blurb, link, img } = this.props;
    return (
      <DentistQuote>
        <LeftSide>
          <H2>{title}</H2>
          <DentistName>with {name}</DentistName>
          <DentistMessage>{blurb}</DentistMessage>
          <a href={link}><Button>Learn More</Button></a>
        </LeftSide>
        <RightSide>
          <img src={img} />
        </RightSide>
      </DentistQuote>
    );
  }
}

export default DentistQuoteComponent;
