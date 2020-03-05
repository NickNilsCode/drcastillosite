import styled from 'styled-components';
export const Header = styled.header`
  width: 100%;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: -69px;
  z-index: 100;
  background-color: #fff;
  @media(min-width: 700px){
    top: -36px;
  }
`;
