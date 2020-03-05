import styled from 'styled-components';
export const AboutExperience = styled.div`
  width: calc(100% - 30px);
  max-width: calc(1140px - 30px);
  padding: 50px 15px;
  margin: auto;
  background-color: #fff;
  color: #696969;
`;


export const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media(min-width: 900px){
    flex-direction: row;
  }
`;
export const LeftSide = styled.div`
  width: 100%;
  max-width: 1140px;
  text-align: left;
  @media(min-width: 900px){
    width: calc(50% - 12px);
    margin-right: 12px;
  }
`;
export const RightSide = styled.div`
  width: 100%;

  max-width: 1140px;
  img {
    width: 100%;
  }
  @media(min-width: 900px){
    width: calc(50% - 12px);
    margin-left: 12px;
  }
`;
