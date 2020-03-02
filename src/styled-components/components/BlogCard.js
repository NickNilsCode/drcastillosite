import styled from 'styled-components';

export const BlogCard = styled.div`
  width: calc(100vw - 32px);
  height: calc(100vw - 32px);
  display: flex;
  position: relative;
  background-size: cover;
  background-position: center;
  justify-content: center;
  overflow: hidden;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 16px;
  p {
    text-align: center;
  }
  @media(min-width: 700px){
    max-width: 346px;
    max-height: 346px;
    margin: 12px;
  }
  &:hover {
    .textBox {
      top: 0;
      transition: top 1s, background-color 1s;
      background-color: rgba(255, 255, 255, 0.9);
      & p, & h6, & a h2 {
        color: #696969;
        transition: color 1s;
      }
      & h2 {
        color: #000;
        transition: color 1s;
      }
    }
  }
`;


export const TextBox = styled.div`
  width: calc(100% - 24px);
  height: calc(100% - 24px);
  text-align: left;
  & p, & h2, & h6 {
    color: #fff;
    text-align: left;
  }
  & h6 {
    padding: 0;
    padding-bottom: 50px;
  }
  padding: 12px;
  position: absolute;
  top: calc(100% - 100px);
  left: 0;
  background-color: rgba(39, 177, 210, 0.9);
`;
