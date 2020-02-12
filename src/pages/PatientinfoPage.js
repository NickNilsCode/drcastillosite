import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PatientinfoWrapper, PatientinfoContent } from '../styled-components/patientinfo';

class Patientinfo extends Component {
    render(){
      return (
          <PatientinfoWrapper>
              <Header/>
              <PatientinfoContent>
                patientinfo page
              </PatientinfoContent>
              <Footer/>
          </PatientinfoWrapper>
      );
    }
}

export default Patientinfo;
