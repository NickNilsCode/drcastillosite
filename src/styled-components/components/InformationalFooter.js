import styled from 'styled-components';
export const InformationalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media(min-width: 1000px){
    flex-direction: row;
  }
`;
