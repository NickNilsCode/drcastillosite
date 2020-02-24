import styled from 'styled-components';
export const Dropdown = styled.select`
  background-color: #7ad8ee;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 13px;
  font-style: italic;
  color: #FFF;
  width: 100%;
  display: block;
  height: 34px;
  padding: 6px 12px;
  line-height: 1.42857143;
  margin: 12px 0;


  &::placeholder {
    color: #fff;
    opacity: 1;
  }
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #fff;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: #fff;
  }
  option {
    height: 22px;
    padding: 6px 0;
    &.greyOption {
      color: rgba(0, 0, 0, 0.247);
    }
  }
  &:focus {
    height: max-content;
    position: absolute;
    width: calc(100% - 48px);
  }
`;
