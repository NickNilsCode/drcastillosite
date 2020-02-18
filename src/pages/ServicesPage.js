import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ServicesWrapper, ServicesContent } from '../styled-components/pages/services';

class Services extends Component {
    render(){
      return (
          <ServicesWrapper>
              <Header/>
              <ServicesContent>
                services page
              </ServicesContent>
              <Footer/>
          </ServicesWrapper>
      );
    }
}

export default Services;
