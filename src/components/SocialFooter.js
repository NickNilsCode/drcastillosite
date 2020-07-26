import React, { Component } from 'react';
import { SocialFooter, LinkSquare, LinkWrap } from '../styled-components/components/SocialFooter';
import { H6 } from '../styled-components/global';

class SocialFooterComponent extends Component {
  render(){
    return (
      <SocialFooter>
        <H6>
          <span style={{fontWeight: "bold"}}>Luis Castillo</span> - Professional Dental Corporation. All rights reserved 2016.
        </H6>
        <LinkWrap>
          <a href="https://www.facebook.com/luiscastillodentalcorp/">
            <LinkSquare>
              <i className="fab fa-facebook-f"></i>
            </LinkSquare>
          </a>
          <a href="https://in.pinterest.com/karincastillo38/boards/">
            <LinkSquare>
              <i className="fab fa-pinterest"></i>
            </LinkSquare>
          </a>
          <a href="https://www.instagram.com/castillosmilecare/">
            <LinkSquare>
              <i className="fa fa-instagram"></i>
            </LinkSquare>
          </a>
        </LinkWrap>
      </SocialFooter>
    );
  }
}

export default SocialFooterComponent;
