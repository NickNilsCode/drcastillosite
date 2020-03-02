"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.Input = exports.ContactWrap = exports.ContactForm = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff;\n  -moz-border-radius: 0px;\n  -webkit-border-radius: 0px;\n  border-radius: 0px;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  font-size: 15px;\n  font-style: italic;\n  color: #000;\n  width: calc(100% - 24px);\n  max-width: 500px;\n  display: block;\n  height: 120px;\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  margin: 12px 0;\n  &::placeholder {\n    color: #b3b3b3;\n    opacity: 1;\n  }\n  &:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color: #b3b3b3;\n  }\n\n  &::-ms-input-placeholder { /* Microsoft Edge */\n    color: #b3b3b3;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff;\n  -moz-border-radius: 0px;\n  -webkit-border-radius: 0px;\n  border-radius: 0px;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  font-size: 15px;\n  font-style: italic;\n  color: #000;\n  width: calc(100% - 24px);\n  max-width: 500px;\n  display: block;\n  height: 34px;\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  margin: 12px 0;\n  &::placeholder {\n    color: #b3b3b3;\n    opacity: 1;\n  }\n  &:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color: #b3b3b3;\n  }\n\n  &::-ms-input-placeholder { /* Microsoft Edge */\n    color: #b3b3b3;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 24px);\n  padding: 48px 12px;\n  max-width: calc(500px - 24px);\n  margin: auto;\n  @media(min-width: 700px){\n    width: 70%;\n    text-align: left;\n    margin: 0 48px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: block;\n  height: max-content;\n  z-index: 2;\n  background-image: url('/images/parallax-01.jpg');\n  background-size: cover;\n  background-position: center;\n  background-color: #fff;\n\n  @media (min-width: 700px){\n    position: absolute;\n    height: 500px;\n    top: 0;\n    left: 0;\n    -webkit-clip-path: polygon(0 0, calc(500%/5.5) 0, 100% 50%, calc(500%/5.5) 100%, 0 100%);\n    clip-path: polygon(0 0, calc(500%/5.5) 0, 100% 50%, calc(500%/5.5) 100%, 0 100%);\n    width: 55%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContactForm = _styledComponents["default"].form(_templateObject());

exports.ContactForm = ContactForm;

var ContactWrap = _styledComponents["default"].div(_templateObject2());

exports.ContactWrap = ContactWrap;

var Input = _styledComponents["default"].input(_templateObject3());

exports.Input = Input;

var TextArea = _styledComponents["default"].textarea(_templateObject4());

exports.TextArea = TextArea;