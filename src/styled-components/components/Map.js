import styled from 'styled-components';
export const Map = styled.div`
  width: 100%;
  height: 500px;

  iframe {
    border: none;
  }
  @media (min-width: 700px){
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
  }
`;
