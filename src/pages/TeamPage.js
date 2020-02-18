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
                team page
              </TeamContent>
              <Footer/>
          </TeamWrapper>
      );
    }
}

export default Team;
