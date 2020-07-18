import React, { Component } from 'react';
import { MoreProcedures, ProcedureCard, ProcedureButton } from '../styled-components/components/MoreProcedures';
import { H2BannerTitle, Button, Description, FlexWrap } from '../styled-components/global';
import moreProceduresList from '../data/moreProceduresList';

class MoreProceduresComponent extends Component {
  render(){
    const { title, currentPage } = this.props;
    let count = 0;
    return (
      <MoreProcedures>
        <Description>
          <H2BannerTitle>{title}</H2BannerTitle>
          <hr className="line"/>
        </Description>
        <FlexWrap>
          {
            moreProceduresList.map((a,i) => {
              if(count < 6 && a.service != currentPage){
                count++;
                return (
                  <a key={i} href={a.link}>
                    <ProcedureCard style={{backgroundImage: `url(${a.cardImg})`}}>
                      <ProcedureButton>
                        <Button
                          color1="#27b1d2"
                          color2="#fff"
                          color3="#27b1d2"
                        >{a.cardTitle}</Button>
                      </ProcedureButton>
                    </ProcedureCard>
                  </a>
                )
              } else {
                return null
              }
            })
          }
        </FlexWrap>
      </MoreProcedures>
    );
  }
}

export default MoreProceduresComponent;
