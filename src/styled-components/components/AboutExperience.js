import styled from 'styled-components';
export const AboutExperience = styled.div`
  width: 100%;
  max-width: calc(1140px - 30px);
  padding: 100px 15px;
  margin: auto;
  background-color: #fff;
  color: #696969;
`;

export const Description = styled.div`
  width: 100%;
  margin-bottom: 24px;
  hr {
    width: 330px;
    border: 1px solid #27b1d2;
    margin: 0;
  }
`;

export const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftSide = styled.div`
  width: calc(50% - 12px);
  margin-right: 12px;
  max-width: 1140px;
  text-align: left;
`;
export const RightSide = styled.div`
  width: calc(50% - 12px);
  margin-left: 12px;
  max-width: 1140px;
  img {
    width: 100%;
  }
`;
