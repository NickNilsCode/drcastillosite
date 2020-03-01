import styled from 'styled-components';
export const ScheduleBanner = styled.div`
  width: 100%
  padding: 40px 0;
  color: #fff;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px){
    padding: 80px 0;
  }
`;

export const Container = styled.div`
  max-width: 1140px;
  padding: 12px;
  width: calc(100% - 24px);
  flex-direction: column;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px){
    justify-content: space-between;
    flex-direction: row;
  }
`;
