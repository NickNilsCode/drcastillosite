"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.ScheduleBanner = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1140px;\n  padding: 12px;\n  width: calc(100% - 24px);\n  flex-direction: column;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (min-width: 1000px){\n    justify-content: space-between;\n    flex-direction: row;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%\n  padding: 40px 0;\n  color: #fff;\n  background-color: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (min-width: 1000px){\n    padding: 80px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScheduleBanner = _styledComponents["default"].div(_templateObject());

exports.ScheduleBanner = ScheduleBanner;

var Container = _styledComponents["default"].div(_templateObject2());

exports.Container = Container;