import React, { Component } from 'react';
import { MainBanner, TextGroup, Mask } from '../styled-components/components/MainBanner';

class MainBannerComponent extends Component {
  render(){
    const { img, title, text, textLeft, mask } = this.props;
    return (
      <MainBanner {...this.props}>
        {
          (title || text) && (
            <TextGroup {...this.props}>
              { title && <h1>{title}</h1> }
              { text && <h3>{text}</h3>}
            </TextGroup>
          )
        }
        { mask && <Mask/> }
      </MainBanner>
    );
  }
}

export default MainBannerComponent;
