import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard';
import { AboutExperience, FlexWrap, LeftSide, RightSide } from '../styled-components/components/AboutExperience';
import { Para, H2BannerTitle, Description, HashMark } from '../styled-components/global';
import aboutExperience from '../data/aboutExperience';

class AboutExperienceComponent extends Component {
  render(){
    return (
      <AboutExperience>
        <Description>
          <HashMark id="about" />
          <H2BannerTitle>ABOUT OUR EXPERIENCE</H2BannerTitle>
          <hr/>
          <Para>By entrusting us with your dental needs and concerns, we will provide you with compassionate care tailored to your specific needs. As equal partners in achieving total dental wellness for you, we will develop an individualized dental plan to work together with our team of qualified, caring professionls to reach your goal.</Para>
        </Description>
        <FlexWrap>
          <LeftSide>
            {
              aboutExperience.map((a,i) => {
                return (
                  <ExperienceCard
                    key={i}
                    Icon={a.Icon}
                    link={a.link}
                    title={a.title}
                    blurb={a.blurb}
                  />
                )
              })
            }
          </LeftSide>
          <RightSide>
            <img src="/images/about_us.jpg" />
          </RightSide>
        </FlexWrap>
      </AboutExperience>
    );
  }
}

export default AboutExperienceComponent;
