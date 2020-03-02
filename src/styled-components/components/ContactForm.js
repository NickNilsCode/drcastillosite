import styled from 'styled-components';
export const ContactForm = styled.form`
  width: 100%;
  display: block;
  height: max-content;
  z-index: 2;
  background-image: url('/images/parallax-01.jpg');
  background-size: cover;
  background-position: center;
  background-color: #fff;

  @media (min-width: 700px){
    position: absolute;
    height: 500px;
    top: 0;
    left: 0;
    -webkit-clip-path: polygon(0 0, calc(500%/5.5) 0, 100% 50%, calc(500%/5.5) 100%, 0 100%);
    clip-path: polygon(0 0, calc(500%/5.5) 0, 100% 50%, calc(500%/5.5) 100%, 0 100%);
    width: 55%;
  }
`;

export const ContactWrap = styled.div`
  width: calc(100% - 24px);
  padding: 48px 12px;
  max-width: calc(500px - 24px);
  margin: auto;
  @media(min-width: 700px){
    width: 70%;
    text-align: left;
    margin: 0 48px;
  }
`;

export const Input = styled.input`
  background-color: #fff;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 15px;
  font-style: italic;
  color: #000;
  width: calc(100% - 24px);
  max-width: 500px;
  display: block;
  height: 34px;
  padding: 6px 12px;
  line-height: 1.42857143;
  margin: 12px 0;
  &::placeholder {
    color: #b3b3b3;
    opacity: 1;
  }
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #b3b3b3;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: #b3b3b3;
  }
`;

export const TextArea = styled.textarea`
  background-color: #fff;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 15px;
  font-style: italic;
  color: #000;
  width: calc(100% - 24px);
  max-width: 500px;
  display: block;
  height: 120px;
  padding: 6px 12px;
  line-height: 1.42857143;
  margin: 12px 0;
  &::placeholder {
    color: #b3b3b3;
    opacity: 1;
  }
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #b3b3b3;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: #b3b3b3;
  }
`;
