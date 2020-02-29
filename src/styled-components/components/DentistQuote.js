import styled from 'styled-components';
export const DentistQuote = styled.div`
  width: 100%;
  max-width: calc(1140px - 30px);
  padding: 15px;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const LeftSide = styled.div`
  width: calc(60% - 24px);
  margin-right: 24px;
  max-width: 1140px;
  text-align: left;
`;
export const RightSide = styled.div`
  width: 40%;
  max-width: 1140px;
  img {
    width: 100%;
  }
`;

export const DentistName = styled.div`
  display: block;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 13px;
  color: #969696;
  padding-top: 7px;
`;

export const DentistMessage = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 29px;
  color: #000;
  line-height: 42px;
`;

export const Button = styled.button`
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 700;
  background-color: transparent;
  color: #27b1d2;
  border: #27b1d2 2px solid;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  padding: 15px 30px;
  text-decoration: none;
  margin-right: 15px;
  margin-top: 35px;
  margin-bottom: 20px;
`;
