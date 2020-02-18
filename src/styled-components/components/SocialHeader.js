import styled from 'styled-components';
export const SocialHeader = styled.div`
  width: 100%;
  height: 69px;
  background-color: #002c3c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media(min-width: 700px){
    height: 36px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LinkSquare = styled.div`
  width: 30px;
  height: 36px;
  background-color: #00394e;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5px;
  i {
    font-size: 12px;
    line-height: 12px;
  }
`;
export const LinkWrap = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
