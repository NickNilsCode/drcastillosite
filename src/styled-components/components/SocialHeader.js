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
    justify-content: center;
    h6 {
      width: 570px;
      margin-left: 16px;
      justify-content: flex-start;
    }
  }
`;

export const LinkSquare = styled.div`
  width: 30px;
  height: 33px;
  background-color: #00394e;
  border-bottom: #00394e 3px solid;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5px;
  i {
    font-size: 12px;
    line-height: 12px;
  }
  &:hover {
    background-color: #fff;
    color: #e3262e
    border-bottom: #e3262e 3px solid;
  }
`;
export const LinkWrap = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 700px){
    width: 570px;
    justify-content: flex-end;
    margin-right: 16px;
  }
`;
