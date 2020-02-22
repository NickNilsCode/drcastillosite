import styled from 'styled-components';
export const SocialFooter = styled.div`
  width: calc(100% - 48px);
  padding: 0 24px;
  min-height: 106px;
  background-color: #002c3c;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media(min-width: 700px){
    min-height: 53px;
    flex-direction: row;
    justify-content: center;
    h6 {
      width: 700px;
      min-height: 33px;
      margin-left: 16px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
  @media(min-width: 900px){
    h6 {
      width: 475px;
    }
  }
`;

export const LinkSquare = styled.div`
  width: 45px;
  height: 50px;
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
  height: 53px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media(min-width: 700px){
    width: 250px;
    justify-content: flex-end;
    margin-right: 16px;
  }
  @media(min-width: 900px){
    width: 475px;
  }
`;
