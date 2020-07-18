import React, { Component } from 'react';
import { BlueBanner } from '../styled-components/components/BlueBanner';

class BlueBannerComponent extends Component {
  render(){
    const { title } = this.props;
    return (
      <BlueBanner {...this.props}>
        <h2>{title}</h2>
      </BlueBanner>
    );
  }
}

export default BlueBannerComponent;
