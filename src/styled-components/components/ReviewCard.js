import styled from 'styled-components';
export const ReviewCard = styled.div`
  width: ${props => (100/props.count) + "%"};
`;

export const GiantQuotes = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 80px;
  line-height: 50px;
  color: #000;
  opacity: 0.5;
  text-align: center;
  margin-bottom: 24px;
`;
export const ReviewP = styled.p`
  width: calc(100% - 48px);
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 17px;
  line-height: 28px;
  color: #000;
  text-align: center;
`;
