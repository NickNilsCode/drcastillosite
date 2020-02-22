import React, { Component, Fragment } from 'react';
import { MobileHeader, VisibleContent, SlidingMenu, MenuLink } from '../styled-components/components/MobileHeader';
import menuOptions from '../data/menuOptions';
import { H3 } from '../styled-components/global';

class MobileHeaderComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false,
      thisPath: ""
    }
  }
  menuChange = () => {
    this.setState({showMenu: !this.state.showMenu})
  }
  componentDidMount(){
    this.setState({
      thisPath: window.location.pathname
    })
  }
  render(){
    const { showMenu, thisPath } = this.state;
    return (
      <MobileHeader>
        <VisibleContent>
          <a href="/"><img src="/images/dentistlogo.png"/></a>
          <i className="fas fa-bars" onClick={this.menuChange}></i>
        </VisibleContent>
        {
          showMenu &&
          <SlidingMenu>
            {
              menuOptions.map((a,i) => {
                const thisPage = thisPath == a.link ? "thisPage" : "";
                return (
                  <Fragment>
                    <MenuLink key={i} href={a.link}>
                      <H3 className={thisPage}>{a.label}</H3>
                    </MenuLink>
                    {
                      a.dropdown &&
                      a.dropdown.map((b, ind) => {
                        const thisPage2 = thisPath == a.link ? "thisPage" : "";
                        return (
                          <MenuLink  key={ind} href={b.link}>
                            <H3 className={`shiftRight ${thisPage2}`}>{b.label}</H3>
                          </MenuLink>
                        )
                      })
                    }
                  </Fragment>
                )
              })
            }
          </SlidingMenu>
        }
      </MobileHeader>
    );
  }
}

export default MobileHeaderComponent;
