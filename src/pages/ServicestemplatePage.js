import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ServicestemplateWrapper, ServicestemplateContent } from '../styled-components/servicestemplate';

class Servicestemplate extends Component {
    render(){
      return (
          <ServicestemplateWrapper>
              <Header/>
              <ServicestemplateContent>
                servicestemplate page
              </ServicestemplateContent>
              <Footer/>
          </ServicestemplateWrapper>
      );
    }
}

export default Servicestemplate;
