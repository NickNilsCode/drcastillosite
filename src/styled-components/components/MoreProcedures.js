import styled from 'styled-components';
export const MoreProcedures = styled.div`
  width: calc(100% - 32px);
  min-height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #8d8d8d;
  color: #000;
  padding: 16px;
  align-items: center;
`;

export const ProcedureCard = styled.div`
  width: calc(100vw - 32px);
  height: calc(100vw - 32px);
  margin: 24px 12px;
  display: flex;
  position: relative;
  border: 1px solid transparent;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media(min-width: 700px){
    max-width: 346px;
    max-height: 346px;
  }
  &:hover {
    transition: border 1s;
    border: 1px solid #27b1d2;
  }
`;

export const ProcedureButton = styled.div`
  position: absolute;
  bottom: -24px;
  width: 90%;
  left: 12px;
  right: 12px;
  button {
    width: 100%;
  }
`;
