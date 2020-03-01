import React, { Component } from 'react';
import { ServiceCard, CardImg, NumDiamond } from '../styled-components/components/ServiceCard';
import { Para, H2 } from '../styled-components/global';

class ServiceCardComponent extends Component {
  render(){
    const { link, img, title, blurb, num } = this.props;
    return (
      <ServiceCard href={link}>
        <CardImg style={{backgroundImage: `url(${img})`}}>
          <NumDiamond>
            <span>{"0" + num}</span>
          </NumDiamond>
        </CardImg>
        <H2>{title}</H2>
        <Para>{blurb}</Para>
      </ServiceCard>
    );
  }
}

export default ServiceCardComponent;
