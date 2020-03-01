import React, { Component } from 'react';
import { Header, Footer, MainBanner, SingleService, RelatedContent, MoreProcedures, ConsultationForm, DentistQuote } from '../components';
import { ServicestemplateWrapper, ServicestemplateContent } from '../styled-components/pages/servicestemplate';

class Servicestemplate extends Component {
    render(){
      return (
          <ServicestemplateWrapper>
              <Header/>
              <ServicestemplateContent>
                <MainBanner/>
                <SingleService/>
                <RelatedContent/>
                <MoreProcedures/>
                <ConsultationForm/>
                <DentistQuote/>
              </ServicestemplateContent>
              <Footer/>
          </ServicestemplateWrapper>
      );
    }
}

export default Servicestemplate;
