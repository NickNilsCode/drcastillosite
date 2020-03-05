import React, { Component } from 'react';
import { Header, Footer, MainBanner, NewPatientInfo, AboutExperience, ServicesList, ScheduleBanner, ReviewBanner, Contact } from '../components';
import { PatientinfoWrapper, PatientinfoContent } from '../styled-components/pages/patientinfo';

class Patientinfo extends Component {
    render(){
      return (
          <PatientinfoWrapper>
              <Header/>
              <PatientinfoContent>
                <MainBanner
                  img="/images/banner6.jpg"
                  mask="true"
                />
                <NewPatientInfo/>
                <AboutExperience/>
                <ServicesList/>
                <ScheduleBanner/>
                <ReviewBanner/>
                <Contact/>
              </PatientinfoContent>
              <Footer/>
          </PatientinfoWrapper>
      );
    }
}

export default Patientinfo;
