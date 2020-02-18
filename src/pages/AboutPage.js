import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AboutWrapper, AboutContent } from '../styled-components/pages/about';

class About extends Component {
  render(){
    return (
      <AboutWrapper>
        <Header/>
        <AboutContent>
          about page
        </AboutContent>
        <Footer/>
      </AboutWrapper>
    );
  }
}

export default About;
