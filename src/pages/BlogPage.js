import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BlogWrapper, BlogContent } from '../styled-components/blog';

class Blog extends Component {
    render(){
      return (
          <BlogWrapper>
              <Header/>
              <BlogContent>
                blog page
              </BlogContent>
              <Footer/>
          </BlogWrapper>
      );
    }
}

export default Blog;
