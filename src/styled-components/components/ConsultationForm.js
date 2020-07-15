import styled from 'styled-components';
export const ConsultationForm = styled.form`
  width: 100%;
  padding-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media(min-width: 1000px){
    flex-direction: row;
  }
`;

export const ConsultationInput = styled.input`
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
`;


export const PillBox = styled.div`
  width: calc(100% - 8px);
  text-align: left;
  height: max-content;
  height: max-content;
  overflow-x: scroll;
  position: absolute;
  top: 4px;
  left: 4px;
`;

export const Pill = styled.span`
  background-color: #ffffff80;
  border-radius: 4px;
  display: inline-block;
  font-size: 12px;
  height: initial;
  padding: 2px 2px;
  margin: 2px 2px;
  overflow-x: scroll;
`;
