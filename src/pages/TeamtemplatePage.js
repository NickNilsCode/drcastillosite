import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TeamtemplateWrapper, TeamtemplateContent } from '../styled-components/teamtemplate';

class Teamtemplate extends Component {
    render(){
      return (
          <TeamtemplateWrapper>
              <Header/>
              <TeamtemplateContent>
                teamtemplate page
              </TeamtemplateContent>
              <Footer/>
          </TeamtemplateWrapper>
      );
    }
}

export default Teamtemplate;
