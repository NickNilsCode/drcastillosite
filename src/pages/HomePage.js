import React, { Component } from 'react';
import { Header, Footer, CarouselBanner, ConsultationForm, DentistQuote, AboutExperience, ServicesList, ScheduleBanner, ReviewBanner, BlogList, Contact } from '../components';
import { HomeWrapper, HomeContent } from '../styled-components/pages/home';
import { ToothBackground, GreyBackground } from '../styled-components/global';

class Home extends Component {
    componentDidMount(){
      if(window.location.pathname == "/about" && window.location.hash != "#about"){
        window.location.href = "/about#about";
      } else if(window.location.pathname == "/services" && window.location.hash != "#services"){
        window.location.href = "/services#services";
      }
    }
    render(){
      return (
          <HomeWrapper>
              <Header/>
              <HomeContent>
                <CarouselBanner/>
                <ToothBackground>
                  <ConsultationForm/>
                  <DentistQuote
                    title="TOTAL DENTAL WELLNESS"
                    name="DR. LUIS CASTILLO"
                    blurb="Give yourself the gift of a truly sensational and healthy smile. Start our Whole Health Dentistry Program."
                    link="/"
                    img="/images/layer-01.png"
                  />
                </ToothBackground>
                <AboutExperience/>
                <GreyBackground>
                  <ServicesList/>
                </GreyBackground>
                <ScheduleBanner/>
                <ReviewBanner/>
                <BlogList/>
                <Contact/>
              </HomeContent>
              <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
