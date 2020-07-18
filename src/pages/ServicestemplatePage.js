import React, { Component } from 'react';
import { Header, Footer, MainBanner, SingleService, RelatedContent, MoreProcedures, ConsultationForm, DentistQuote } from '../components';
import { ServicestemplateWrapper, ServicestemplateContent, ServicesDescription } from '../styled-components/pages/servicestemplate';
import { Para, H2BannerTitle, GreyBackground, Html } from '../styled-components/global';
import servicesList from '../data/servicesList';

class Servicestemplate extends Component {
    render(){
      const { serviceId } = this.props.data;
      const data = servicesList.find(a => a.service == serviceId);
      return (
          <ServicestemplateWrapper>
              <Header/>
              <ServicestemplateContent>
                <MainBanner
                  img={data.banner}
                  mask="true"
                />
                <GreyBackground>
                  <ServicesDescription>
                    <H2BannerTitle>{data.title}</H2BannerTitle>
                    <hr className="line"/>
                    <Html dangerouslySetInnerHTML={{__html: data.blurb}} style={{textAlign: "left"}}/>
                  </ServicesDescription>
                </GreyBackground>
                <MoreProcedures title="More Procedures" currentPage={data.service}/>
                <ConsultationForm/>
                <DentistQuote
                  title="DR. LUIS CASTILLO"
                  name="FOUNDER OF CASTILLO PROFESSIONAL DENTAL CORPORATION"
                  blurb="We are proud to have the opportunity to give you the smile of your dreams."
                  link="/"
                  img="/images/layer-01.png"
                />
              </ServicestemplateContent>
              <Footer/>
          </ServicestemplateWrapper>
      );
    }
}

export default Servicestemplate;
