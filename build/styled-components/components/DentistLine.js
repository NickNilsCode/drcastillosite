"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hr = exports.DentistLine = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 30%;\n  border: 1px solid #dddddd;\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1140px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 50px;\n  img {\n    width: 100px;\n    margin: 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DentistLine = _styledComponents["default"].div(_templateObject());

exports.DentistLine = DentistLine;

var Hr = _styledComponents["default"].hr(_templateObject2());

exports.Hr = Hr;