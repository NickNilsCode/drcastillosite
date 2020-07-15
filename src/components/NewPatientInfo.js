import React, { Component } from 'react';
import { NewPatientInfo } from '../styled-components/components/NewPatientInfo';
import { Description, H2BannerTitle, Para, H3 } from '../styled-components/global'

class NewPatientInfoComponent extends Component {
  render(){
    return (
      <NewPatientInfo>
        <Description>
          <H2BannerTitle>NEW PATIENT INFORMATION</H2BannerTitle>
          <hr className="line"/>
          <H3>Consultation & Diagnostics</H3>
          <Para>There have never been so many different possibilities as today to save severely damaged teeth and to replace lost teeth. But which treatment is the appropriate ? What are the costs? Dr. Castillo and his friendly team will help you make the right decision.</Para>
          <H3>"Crucial to the success of any treatment is the trust between patient and doctor, which is why we take the time to get to know our patients and listen to their questions, concerns and expectations."</H3>
          <Para>-Dr. Luis Castillo</Para>
          <Para>At our office we want to get to know you first, and your expectations before an extensive diagnosis is carried out and a treatment plan is established. We utilize the following technology to assure the desired outcome of your treatment:</Para>
          <Para>- Dental Magnifying Glasses for a precise diagnostic<br/>
          - Intraoral camera so that you, the patient is able to see what treatment is necessary<br/>
          - Digital x-rays - This kind of x-ray diagnostic gives us the immediate access with 90% less radiation</Para>
          <Para>"My valued team and I are here to help and serve you with any questions and concerns"</Para>
        </Description>
      </NewPatientInfo>
    );
  }
}

export default NewPatientInfoComponent;
