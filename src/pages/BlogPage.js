import React, { Component } from 'react';
import { Header, Footer, MainBanner, NewPatientInfo, AboutExperience, ServicesList, ScheduleBanner, ReviewBanner, Contact, BlogList } from '../components';
import { BlogWrapper, BlogContent } from '../styled-components/pages/blog';

class Blog extends Component {
    render(){
      return (
          <BlogWrapper>
              <Header/>
              <BlogContent>
                <MainBanner/>
                <BlogList/>
                <ScheduleBanner/>
              </BlogContent>
              <Footer/>
          </BlogWrapper>
      );
    }
}

export default Blog;
