import React, { Component } from 'react';
import { MainBanner, TextGroup } from '../styled-components/components/MainBanner';

class MainBannerComponent extends Component {
  render(){
    const { img, title, text, textLeft } = this.props;
    return (
      <MainBanner {...this.props}>
        <TextGroup {...this.props}>
          <h1>{title}</h1>
          <h3>{text}</h3>
        </TextGroup>
      </MainBanner>
    );
  }
}

export default MainBannerComponent;
