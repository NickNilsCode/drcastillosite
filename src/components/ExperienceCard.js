import React, { Component } from 'react';
import { ExperienceCard, LeftSide, RightSide, CircleDiv } from '../styled-components/components/ExperienceCard';
import { H3, Para } from '../styled-components/global';

class ExperienceCardComponent extends Component {
  render(){
    const { link, Icon, title, blurb } = this.props;
    return (
      <ExperienceCard href={link}>
        <LeftSide>
          <CircleDiv className="circleDiv">
            <Icon/>
          </CircleDiv>
        </LeftSide>
        <RightSide>
          <H3>{title}</H3>
          <Para style={{fontSize: '13px'}}>{blurb}</Para>
        </RightSide>
      </ExperienceCard>
    );
  }
}

export default ExperienceCardComponent;
