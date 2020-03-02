"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pill = exports.PillBox = exports.ConsultationInput = exports.ConsultationForm = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: #ffffff80;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 8px;\n  height: initial;\n  padding: 2px 2px;\n  margin: 2px 2px;\n  overflow-x: scroll;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 8px);\n  text-align: left;\n  height: max-content;\n  height: max-content;\n  overflow-x: scroll;\n  position: absolute;\n  top: 4px;\n  left: 4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #7ad8ee;\n  -moz-border-radius: 0px;\n  -webkit-border-radius: 0px;\n  border-radius: 0px;\n  border: none;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  font-size: 13px;\n  font-style: italic;\n  color: #FFF;\n  width: 100%;\n  display: block;\n  height: 34px;\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  margin: 12px 0;\n  &::placeholder {\n    color: #fff;\n    opacity: 1;\n  }\n  &:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color: #fff;\n  }\n\n  &::-ms-input-placeholder { /* Microsoft Edge */\n    color: #fff;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  @media(min-width: 1000px){\n    flex-direction: row;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ConsultationForm = _styledComponents["default"].form(_templateObject());

exports.ConsultationForm = ConsultationForm;

var ConsultationInput = _styledComponents["default"].input(_templateObject2()); // export const ConsultationSubmit = styled.button`
//   background: transparent;
//   border: #FFF 1px solid;
//   color: #FFF;
//   padding: 10px 20px;
//   -moz-border-radius: 5px;
//   -webkit-border-radius: 5px;
//   border-radius: 5px;
//   font-family: "Montserrat", sans-serif;
//   font-size: 12px;
//   font-weight: normal;
//   text-transform: uppercase;
// `;


exports.ConsultationInput = ConsultationInput;

var PillBox = _styledComponents["default"].div(_templateObject3());

exports.PillBox = PillBox;

var Pill = _styledComponents["default"].span(_templateObject4());

exports.Pill = Pill;