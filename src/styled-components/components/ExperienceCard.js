import styled from 'styled-components';
export const ExperienceCard = styled.a`
  width: 100%;
  min-height: 100px;
  background-color: #fff;
  color: #000;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    h3 {
      color: #27b1d2;
    }
    .circleDiv {
      background-color: #27b1d2;
      path {
        fill: #fff;
      }
    }
  }
`;

export const CircleDiv = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: #27b1d2 2px solid;
  max-width: 970px;
  text-align: left;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const LeftSide = styled.div`
  width: 144px
  margin-right: 24px;
  max-width: 970px;
  text-align: left;
`;
export const RightSide = styled.div`
  width: calc(100% - 144px);
  max-width: 970px;
  h3 {
    color: #696969;
    font-size: 14px;
  }
`;
