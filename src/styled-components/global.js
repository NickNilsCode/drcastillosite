import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 20px;
`;

export const H2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #27b1d2;
`;

export const H2BannerTitle = styled.h2`
  display: table;
  position: relative;
  padding-left: 10px;
  padding-right: 50px;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  margin: 6px;
`;

export const Description = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  margin-bottom: 24px;
  max-width: 1140px;
  hr {
    width: 330px;
    border: 1px solid #27b1d2;
    margin: 0;
  }
  h3 {
    text-align: left;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
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

export const Para = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  text-align: left;
  font-size: 14px;
  line-height: 25px;
  color: #696969;
`;

export const LargeMessage = styled.p`
  font-family: "Roboto", sans-serif;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  margin: 8px 0;
  color: #000;
  line-height: 42px;
  @media (min-width: 1000px){
    font-size: 29px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 700;
  background-color: ${props => props.color1 ? props.color1 : "transparent"};
  color: ${props => props.color2 ? props.color2 : "#27b1d2"};
  border: ${props => props.color3 ? props.color3 + " 2px solid" : "#27b1d2 2px solid"};
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  padding: 15px 30px;
  text-decoration: none;
  transition: background-color 1s, color 1s;
  &:hover {
    background-color: ${props => props.color2 ? props.color2 : "#27b1d2"};
    color: ${props => props.color1 ? props.color1 : "#fff"};
    cursor: pointer;
  }
`;

export const ToothBackground = styled.div`
  width: 100%;
  background-image: url("/images/parallax-01.jpg");
  background-size: cover;
  background-position: center;
`;

export const GreyBackground = styled.div`
  width: 100%;
  background-color: #f5f5f5
`;

export const Parallax = styled.div`
  width: 100%;
  height: 500px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Slider = styled.div`
  width: ${props => (props.count * 100) + "%"};
  position: absolute;
  left: ${props => (props.index * -100) + "%"};
  top: 0;
  display: flex;
  flex-direction: row;
  transition: left 1s;
`;

export const HashMark = styled.hr`
  position: absolute;
  top: -80px;
  border-width: 0;
`;
