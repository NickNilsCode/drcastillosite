import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DrcastilloWrapper, DrcastilloContent } from '../styled-components/drcastillo';

class Drcastillo extends Component {
    render(){
      return (
          <DrcastilloWrapper>
              <Header/>
              <DrcastilloContent>
                drcastillo page
              </DrcastilloContent>
              <Footer/>
          </DrcastilloWrapper>
      );
    }
}

export default Drcastillo;
