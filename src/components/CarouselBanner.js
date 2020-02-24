import React, { Component } from 'react';
import { MainBanner } from './';
import { CarouselBanner } from '../styled-components/components/CarouselBanner';

class CarouselBannerComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFirst: true
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        showFirst: !this.state.showFirst
      })
    }, 6000)
  }
  render(){
    return (
      <CarouselBanner>
        {
          this.state.showFirst ?
          <MainBanner
            img="/images/front-header.jpg"
            title="TRANSFORMING FRESNO SMILES"
            text="GENTLE - FRIENDLY - EASY"
            bgPos="right"
            bgPosSmall="right"
            textLeft={true}
          /> :
          <MainBanner
            img="/images/heroimage.jpg"
            title="ACHIEVE A FLAWLESS SMILE"
            text="Personalized Care in a Comfortable Environment"
            bgPos="right"
            bgPosSmall="30%"
            textLeft={false}
          />
        }
      </CarouselBanner>
    );
  }
}

export default CarouselBannerComponent;
