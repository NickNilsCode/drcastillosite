import styled from 'styled-components';

  export const ServicestemplateWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

  export const ServicestemplateContent = styled.div`
    width: 100%;
    min-height: 300px;
    text-align: center;
  `;

  export const ServicesDescription = styled.div`
    width: calc(100% - 96px);
    padding: 48px;
    margin: auto;
    position: relative;
    margin-bottom: 24px;
    max-width: 900px;
    .line {
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
