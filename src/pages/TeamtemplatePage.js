import React, { Component } from 'react';
import { Header, Footer, MainBanner, MemberDetails, ConsultationForm, DentistQuote } from '../components';
import { TeamtemplateWrapper, TeamtemplateContent } from '../styled-components/pages/teamtemplate';

class Teamtemplate extends Component {
    render(){
      return (
          <TeamtemplateWrapper>
              <Header/>
              <TeamtemplateContent>
                <MainBanner/>
                <MemberDetails/>
                <ConsultationForm/>
                <DentistQuote/>
              </TeamtemplateContent>
              <Footer/>
          </TeamtemplateWrapper>
      );
    }
}

export default Teamtemplate;
