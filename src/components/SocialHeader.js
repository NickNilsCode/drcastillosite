import React, { Component } from 'react';
import { SocialHeader, LinkSquare, LinkWrap } from '../styled-components/components/SocialHeader';
import { H6 } from '../styled-components/global';


class SocialHeaderComponent extends Component {
  render(){
    return (
      <SocialHeader>
        <H6>
          <i className="fas fa-phone-alt"></i>
          <span style={{marginLeft: '5px'}}>Call for free consultation: 0800 123 45 678</span>
        </H6>
        <LinkWrap>
          <LinkSquare>
            <i className="fab fa-facebook-f"></i>
          </LinkSquare>
          <LinkSquare>
            <i className="fab fa-google-plus-g"></i>
          </LinkSquare>
          <LinkSquare>
            <i className="fab fa-pinterest"></i>
          </LinkSquare>
          <LinkSquare>
            <i className="fab fa-youtube"></i>
          </LinkSquare>
          <LinkSquare>
            <i className="fas fa-rss"></i>
          </LinkSquare>
        </LinkWrap>
      </SocialHeader>
    );
  }
}

export default SocialHeaderComponent;
