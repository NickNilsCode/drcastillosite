"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexWrap = exports.ServicesList = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 50px;\n  @media (min-width: 700px){\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 30px);\n  max-width: calc(1140px - 30px);\n  padding: 100px 15px;\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ServicesList = _styledComponents["default"].div(_templateObject());

exports.ServicesList = ServicesList;

var FlexWrap = _styledComponents["default"].div(_templateObject2());

exports.FlexWrap = FlexWrap;