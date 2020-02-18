import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GalleryWrapper, GalleryContent } from '../styled-components/pages/gallery';

class Gallery extends Component {
    render(){
      return (
          <GalleryWrapper>
              <Header/>
              <GalleryContent>
                gallery page
              </GalleryContent>
              <Footer/>
          </GalleryWrapper>
      );
    }
}

export default Gallery;
