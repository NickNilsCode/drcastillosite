import styled from 'styled-components';

export const ReviewBanner = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Stars = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StarImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 8px;
  border-radius: 50%;
  height: ${props => props.selected ? "80px" : "50px"};
  width: ${props => props.selected ? "80px" : "50px"};
  transition: height 1s, width 1s, border 1s, opacity 1s;
  opacity: ${props => props.selected ? 1 : 0.6};
  border: ${props => props.selected ? "rgba(0, 0, 0, 0.15) 5px solid" : "none"};
`;
