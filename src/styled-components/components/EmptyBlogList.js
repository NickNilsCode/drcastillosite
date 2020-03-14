import styled from 'styled-components';

export const BlogList = styled.div`
  width: calc(100% - 30px);
  max-width: calc(1140px - 30px);
  padding: 100px 15px;
  margin: auto;
`;


export const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  @media (min-width: 700px){
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
