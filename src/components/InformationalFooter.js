import React, { Component } from 'react';
import { FooterCard } from './';
import { InformationalFooter } from '../styled-components/components/InformationalFooter';

class InformationalFooterComponent extends Component {
  render(){
    return (
      <InformationalFooter>
        <FooterCard title="COME TO OUR OFFICE">
          <p>
            Luis Castillo Professional Dental Corp.<br/>
            5359 N Fresno St # 110<br/>
            Fresno, CA 93710<br/>
          </p>
        </FooterCard>
        <FooterCard title="OFFICE HOURS">
          <p>
            Monday to Friday: 8:00am - 5:30pm<br/>
            Saturday: By Appointment<br/>
            Sunday: Closed
          </p>
        </FooterCard>
        <FooterCard title="CONTACT US">
          <p>
            <i className="fas fa-envelope i-margin"></i>dentalsmiles222@gmail.com<br/>
            <i className="fas fa-phone-alt i-margin"></i>(559) 221- 0302
          </p>
        </FooterCard>
      </InformationalFooter>
    );
  }
}

export default InformationalFooterComponent;
