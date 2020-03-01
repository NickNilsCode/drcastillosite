import React, { Component } from 'react';
import { ScheduleBanner, Container } from '../styled-components/components/ScheduleBanner';
import { LargeMessage, Button } from '../styled-components/global';

class ScheduleBannerComponent extends Component {
  render(){
    return (
      <ScheduleBanner>
        <Container>
          <LargeMessage style={{
            color: '#FFF',
            maxWidth: 'calc(100% - 200px)'
          }}>What are you waiting for? Make an appointment today!</LargeMessage>
          <Button
            color1="#27b1d2"
            color2="#fff"
            color3="#27b1d2"
          >Schedule Now ></Button>
        </Container>
      </ScheduleBanner>
    );
  }
}

export default ScheduleBannerComponent;
