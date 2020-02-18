"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H6 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: normal;\n  font-style: italic;\n  color: #FFF;\n  margin: 0;\n  padding: 10px 0;\n  line-height: 13px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-font-smoothing: antialiased;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H6 = _styledComponents["default"].h6(_templateObject());

exports.H6 = H6;