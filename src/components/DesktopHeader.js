import React, { Component, Fragment } from 'react';
import { DesktopHeader, MenuLink, LinkWrap } from '../styled-components/components/DesktopHeader';
import menuOptions from '../data/menuOptions';
import { H3 } from '../styled-components/global';

class DesktopHeaderComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      thisPath: ""
    }
  }
  setHash = () => {
    let val = window.location.hash ? "/" + window.location.hash : window.location.pathname;
    this.setState({
      thisPath: val
    })
  }
  componentDidMount(){
    this.setHash();
  }
  render(){
    const { thisPath } = this.state;
    return (
      <DesktopHeader>
        <a href="/" style={{margin: "0 12px"}}><img src="/images/dentistlogo.png"/></a>
        <LinkWrap>
        {
          menuOptions.map((a,i) => {

            const thisPage = thisPath == a.link ? "thisPage" : "";
            return (
              <Fragment key={i}>
                { a.link != '/' && <span>&#183;</span>}
                <MenuLink href={a.link}>
                  <H3 className={thisPage} onClick={this.setHash}>{a.label}</H3>
                </MenuLink>
              </Fragment>
            )
          })
        }
        </LinkWrap>
      </DesktopHeader>
    );
  }
}

export default DesktopHeaderComponent;
