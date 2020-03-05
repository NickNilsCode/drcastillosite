import React, { Component } from 'react';
import { Header, Footer, MainBanner, MemberDetails, ConsultationForm, DentistQuote } from '../components';
import { TeamtemplateWrapper, TeamtemplateContent } from '../styled-components/pages/teamtemplate';
import { ToothBackground } from '../styled-components/global';
import teamList from '../data/teamList';

class Teamtemplate extends Component {
    render(){
      return (
          <TeamtemplateWrapper>
              <Header/>
              <TeamtemplateContent>
                <MemberDetails member={this.props.data.member}/>
                <ToothBackground>
                <ConsultationForm/>
                  <DentistQuote
                    title=""
                    name="DR. LUIS CASTILLO"
                    blurb="We are proud to have the opportunity to give you the smile of your dreams."
                    link="/"
                    img="/images/layer-01.png"
                  />
                </ToothBackground>
              </TeamtemplateContent>
              <Footer/>
          </TeamtemplateWrapper>
      );
    }
}

export default Teamtemplate;
