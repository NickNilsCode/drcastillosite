import styled from 'styled-components';
export const MemberDetails = styled.div`
  width: calc(100% - 32px);
  max-width: 720px;
  margin: auto;
  background-color: #fff;
  color: #000;
  padding: 16px;
  @media(min-width: 900px){
    max-width: 1140px;
  }
`;

export const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 50px;
  @media(min-width: 900px){
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  max-width: 1140px;
  @media(min-width: 900px){
    width: calc(30% - 12px);
    margin-right: 12px;
  }
`;

export const ImageBlock = styled.div`
  width: 100%;
  max-width: 1140px;
  text-align: left;
  position: relative;
  img {
    width: 100%;
  }
`;

export const NameBlock = styled.div`
  width: calc(100% - 24px);
  padding: 12px;
  color: #fff;
  max-width: 1140px;
  text-align: left;
  background-color: #27b1d2;
  position: absolute;
  bottom: -50px;
  left: 0;
  border-radius: 4px;
  z-index: 1;
  overflow: hidden;
  h2, p {
    color: #fff;
    margin: 0;
    z-index: 5;
    max-width: 70%;
  }
  @media(min-width: 900px){
    width: 350px;
    left: 90%;
    top: 16px;
    height: max-content;
  }
`;

export const Poly = styled.div`
  width: 30%;
  height: 100%;
  z-index: 3;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #0a7088;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 20% 0);
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 20% 0);
`;

export const RightSide = styled.div`
  width: 100%;
  max-width: 1140px;
  text-align: left;
  margin-top: 100px;
  @media(min-width: 900px){
    width: calc(70% - 12px);
    margin-left: 12px;
  }
`;
