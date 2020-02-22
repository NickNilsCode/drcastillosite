import styled from 'styled-components';
export const MobileHeader = styled.div`
  width: calc(100% - 48px);
  padding: 0 24px;
  position: relative;
  @media(min-width: 700px){
    display: none;
  }
`;

export const VisibleContent = styled.div`
  width: 100%;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100px;
  }
  i {
    font-size: 26px;
  }
  i:hover {
    cursor: pointer;
  }
  @media(min-width: 700px){
    display: none;
  }
`;
export const SlidingMenu = styled.div`
  width: calc(100% - 48px);
  background-color: #fff;
  position: absolute;
  top: 73px;
  padding: 0 24px 12px;
  left: 0;
  @media(min-width: 700px){
    display: none;
  }
`;
export const MenuLink = styled.a`
  width: 100%;
  color: #343434;
  text-decoration: none;
  h3 {
    margin: 24px 0;
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
