import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GallerytemplateWrapper, GallerytemplateContent } from '../styled-components/gallerytemplate';

class Gallerytemplate extends Component {
    render(){
      return (
          <GallerytemplateWrapper>
              <Header/>
              <GallerytemplateContent>
                gallerytemplate page
              </GallerytemplateContent>
              <Footer/>
          </GallerytemplateWrapper>
      );
    }
}

export default Gallerytemplate;
