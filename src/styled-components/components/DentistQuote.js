import styled from 'styled-components';
export const DentistQuote = styled.div`
  width: calc(100% - 30px);
  max-width: calc(1140px - 30px);
  padding: 15px;
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
