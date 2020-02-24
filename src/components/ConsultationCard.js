import React, { Component } from 'react';
import { ConsultationCard } from '../styled-components/components/ConsultationCard';
import { H5 } from '../styled-components/global';

class ConsultationCardComponent extends Component {
  render(){
    return (
      <ConsultationCard>
        <H5>{this.props.title}</H5>
        {this.props.children}
      </ConsultationCard>
    );
  }
}

export default ConsultationCardComponent;
