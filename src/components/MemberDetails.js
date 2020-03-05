import React, { Component } from 'react';
import { DentistLine } from './'
import { MemberDetails, FlexWrap, LeftSide, RightSide, NameBlock, ImageBlock, Poly } from '../styled-components/components/MemberDetails';
import { Description, Para, H2 } from '../styled-components/global';

class MemberDetailsComponent extends Component {
  getDescription = (blurb) => {
    return blurb.map((a,index) => {
      let b = a.split("*");
      if(b.length == 1) return <Para key={index}>{a}</Para>
      else {
        return (
          <Para key={index}>{
            b.map((c, i) => {
              if(i%2 != 0) return <span style={{fontWeight: "bold"}} key={i} >{c}</span>
              else return c;
            })
          }</Para>
        )
      }
    })
  }
  render(){
    const { img, name, position, blurb } = this.props.member;
    return (
      <MemberDetails>
        <FlexWrap>
          <LeftSide>
            <ImageBlock>
              <img src={img}/>
              <NameBlock>
                <H2>{name}</H2>
                <Para>{position}</Para>
                <Poly/>
              </NameBlock>
            </ImageBlock>
          </LeftSide>
          <RightSide>
            <Description>
              { this.getDescription(blurb) }
            </Description>
          </RightSide>
        </FlexWrap>
        <DentistLine/>
      </MemberDetails>
    );
  }
}

export default MemberDetailsComponent;
