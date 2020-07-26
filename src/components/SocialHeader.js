import React, { Component } from 'react';
import { SocialHeader, LinkSquare, LinkWrap } from '../styled-components/components/SocialHeader';
import { H6 } from '../styled-components/global';


class SocialHeaderComponent extends Component {
  render(){
    return (
      <SocialHeader>
        <H6>
          <i className="fas fa-phone-alt i-margin"></i>
          <span>Call for free consultation: (559) 221-0302</span>
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
          {
          // <a href="">
          //   <LinkSquare>
          //     <i className="fab fa-youtube"></i>
          //   </LinkSquare>
          // </a>
          }
          <a href="https://www.instagram.com/castillosmilecare/">
            <LinkSquare>
              <i className="fa fa-instagram"></i>
            </LinkSquare>
          </a>
        </LinkWrap>
      </SocialHeader>
    );
  }
}

export default SocialHeaderComponent;
