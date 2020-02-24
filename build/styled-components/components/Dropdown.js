"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #7ad8ee;\n  -moz-border-radius: 0px;\n  -webkit-border-radius: 0px;\n  border-radius: 0px;\n  border: none;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  font-size: 13px;\n  font-style: italic;\n  color: #FFF;\n  width: 100%;\n  display: block;\n  height: 34px;\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  margin: 12px 0;\n\n\n  &::placeholder {\n    color: #fff;\n    opacity: 1;\n  }\n  &:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color: #fff;\n  }\n\n  &::-ms-input-placeholder { /* Microsoft Edge */\n    color: #fff;\n  }\n  option {\n    height: 22px;\n    padding: 6px 0;\n    &.greyOption {\n      color: rgba(0, 0, 0, 0.247);\n    }\n  }\n  &:focus {\n    height: max-content;\n    position: absolute;\n    width: calc(100% - 48px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Dropdown = _styledComponents["default"].select(_templateObject());

exports.Dropdown = Dropdown;