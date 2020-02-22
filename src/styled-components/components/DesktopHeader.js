import styled from 'styled-components';
export const DesktopHeader = styled.div`
  display: none;
  height: 75px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    margin-bottom: 12px;
  }
  @media(min-width: 700px){
    display: flex;
  }
  @media(min-width: 800px){
    flex-direction: row;
    img {
      margin-bottom: 0;
    }
  }
`;

export const LinkWrap = styled.div`

`;

export const MenuLink = styled.a`
  width: 100%;
  color: #343434;
  text-decoration: none;
  a {
    width: max-content;
    text-align: center;
  }
  h3 {
    display: inline-block;
    margin: 0 12px;
    width: max-content;
    text-align: center;
  }
  &:hover {
    color: #27b1d2;
  }
  .thisPage {
    color: #27b1d2;
  }
  .shiftRight {
    margin-left: 24px;
    width: calc(100% - 24px);
  }
`;
