import styled from 'styled-components';

  export const ProcedurestemplateWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

  export const ProcedurestemplateContent = styled.div`
    width: 100%;
    min-height: 300px;
    text-align: center;
  `;

  export const FlexDiv = styled.div`
    width: calc(100% - 48px);
    padding: 24px;
    text-align: left;
    .partline {
      width: 50px;
      margin-left: 0;
    }
    @media(min-width: 700px){
      width: calc(50% - 48px);
    }
  `;

  export const ProcedureH2 = styled.h2`
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    letter-spacing: 4px;
    color: #000;
    margin: 12px 0;
  `;
  export const FlexWrapProcedure = styled.div`
    width: 100%;
    display: flex;
    max-width: 1100px;
    margin: auto;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 50px;
    @media (min-width: 700px){
      flex-direction: row;
      flex-wrap: wrap;
    }
  `;
