import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 20px;
`;

export const H3 = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: bold;
`;

export const H5 = styled.h6`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: normal;
  color: #FFF;
  margin: 0;
`;


export const H6 = styled.h6`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: normal;
  font-style: italic;
  color: #FFF;
  margin: 0;
  padding: 10px 0;
  line-height: 13px;
  -webkit-font-smoothing: antialiased;
`;

export const ToothBackground = styled.div`
  width: 100%;
  background-image: url("/images/parallax-03.jpg");
  background-size: cover;
  background-position: center;
  @media(min-width: 700px){
    background-image: url("/images/parallax-01.jpg");
  }
`;
