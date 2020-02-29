import React, { Component } from 'react';
import { DentistLine } from './'
import { ServicesList, Description, FlexWrap } from '../styled-components/components/ServicesList';
import { Para, H2BannerTitle } from '../styled-components/global';

class ServicesListComponent extends Component {
  render(){
    return (
      <ServicesList>
        <Description>
          <H2BannerTitle>Services</H2BannerTitle>
          <hr/>
          <Para>We provide comprehensive care to our patients. You will get a thorough understanding of your dental issues and what can be done to help you be in optimal dental health.</Para>
        </Description>
        <FlexWrap>

        </FlexWrap>
        <DentistLine/>
      </ServicesList>
    );
  }
}

export default ServicesListComponent;
