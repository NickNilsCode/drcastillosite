import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TeamWrapper, TeamContent } from '../styled-components/pages/team';

class Team extends Component {
    render(){
      return (
          <TeamWrapper>
              <Header/>
              <TeamContent>
                <MainBanner/>
                <MembersList/>
                <ConsultationForm/>
                <DentistQuote
                  name="DR. LUIS CASTILLO"
                  blurb="We are proud to have the opportunity to give you the smile of your dreams."
                  link="/"
                  img="/images/layer-01.png"
                />
              </TeamContent>
              <Footer/>
          </TeamWrapper>
      );
    }
}

export default Team;
