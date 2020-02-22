import styled from 'styled-components';
export const FooterCard = styled.div`
  width: calc(100% - 140px);
  padding: 60px 70px;
  background-color: #51bbe5;
  color: #fff;
  min-height: calc(283px - 120px);
  &:nth-child(2){
    background-color: #3cadda;
  }
  &:nth-child(3){
    background-color: #2ca4d3;
  }
  h1 {
    color: #FFF;
  }
  hr {
    width: 50px;
    border: 2px solid #fff;
    margin: 20px 0;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    font-size: 17px;
    color: #FFF;
    line-height: 25px;
  }
  @media(min-width: 1000px){
    width: calc(calc(100%/3) - 140px);
    height: calc(350px - 120px);
  }
  @media(min-width: 1290px){
    width: calc(calc(100%/3) - 140px);
    height: calc(286px - 120px);
  }
`;
