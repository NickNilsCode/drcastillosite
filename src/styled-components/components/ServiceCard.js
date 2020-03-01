import styled from 'styled-components';
export const ServiceCard = styled.a`
  width: calc(100% - 32px);
  min-height: 100px;
  dislay: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  p {
    text-align: center;
  }
  @media(min-width: 700px){
    width: calc(50% - 30px);
    margin: 15px;
  }
  @media(min-width: 1140px){
    max-width: 247.5px;
    margin: 15px;
  }
`;

export const CardImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-size: cover;
  background-position: center;
  position: relative;
  margin: auto;
`;

export const NumDiamond = styled.div`
  position: absolute;
  top: 50%;
  left: -24px;
  margin-top: -30px;
  width: 60px;
  height: 60px;
  background-color: #0c8ead;
  z-index: 2;
  border: #FFF 2px solid;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #FFF;
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
