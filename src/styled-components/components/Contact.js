import styled from 'styled-components';
export const Contact = styled.div`
  width: 100%;
  .description {
    width: calc(100% - 30px);
    padding: 15px;
  }
`;
export const ContactForms = styled.div`
  width: 100%;
  position: relative;
  height: max-content;
  @media (min-width: 700px){
    height: 500px;
  }
`;
