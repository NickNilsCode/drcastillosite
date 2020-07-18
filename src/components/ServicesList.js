import React, { Component } from 'react';
import { DentistLine, ServiceCard } from './'
import { ServicesList } from '../styled-components/components/ServicesList';
import { Para, H2BannerTitle, Description, HashMark, FlexWrap } from '../styled-components/global';
import servicesList from '../data/servicesList';

class ServicesListComponent extends Component {
  render(){
    return (
      <ServicesList>
        <Description>
          <HashMark id="services" />
          <H2BannerTitle>Services</H2BannerTitle>
          <hr className="line"/>
          <Para>We provide comprehensive care to our patients. You will get a thorough understanding of your dental issues and what can be done to help you be in optimal dental health.</Para>
        </Description>
        <FlexWrap>
          {
            servicesList.map((a,i) => {
              return (
                <ServiceCard
                  key={i}
                  num={i+1}
                  link={a.link}
                  img={a.img}
                  title={a.cardTitle}
                  blurb={a.cardBlurb}
                />
              )
            })
          }
        </FlexWrap>
        <DentistLine/>
      </ServicesList>
    );
  }
}

export default ServicesListComponent;
