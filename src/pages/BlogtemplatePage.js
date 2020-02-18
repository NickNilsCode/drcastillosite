import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BlogtemplateWrapper, BlogtemplateContent } from '../styled-components/pages/blogtemplate';

class Blogtemplate extends Component {
    render(){
      return (
          <BlogtemplateWrapper>
              <Header/>
              <BlogtemplateContent>
                blogtemplate page
              </BlogtemplateContent>
              <Footer/>
          </BlogtemplateWrapper>
      );
    }
}

export default Blogtemplate;
