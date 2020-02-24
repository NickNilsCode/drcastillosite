import React, { Component } from 'react';
import { Header, Footer, CarouselBanner, ConsultationForm, DentistQuote } from '../components';
import { HomeWrapper, HomeContent } from '../styled-components/pages/home';
import { ToothBackground } from '../styled-components/global';

class Home extends Component {
    render(){
      return (
          <HomeWrapper>
              <Header/>
              <HomeContent>
                <CarouselBanner/>
                <ToothBackground>
                  <ConsultationForm/>
                  <DentistQuote/>
                </ToothBackground>
              </HomeContent>
              <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
