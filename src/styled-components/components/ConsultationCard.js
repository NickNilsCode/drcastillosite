import styled from 'styled-components';
export const ConsultationCard = styled.div`
  width: calc(100% - 50px);
  max-width: 700px;
  margin: auto;
  padding: 38px 25px 25px 25px;
  background-color: #27b1d2;
  color: #fff;
  height: 133px;
  position: relative;
  &:nth-child(2){
    background-color: #43c7e6;
  }
  &:nth-child(3){
    background-color: #5ad4f1;
  }
  h1 {
    color: #FFF;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    font-size: 17px;
    color: #FFF;
    line-height: 25px;
  }
  @media(min-width: 1020px){
    width: 300px;
    margin: 0 15px;
  }
`;
