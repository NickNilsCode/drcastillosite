"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewPatientInfo = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 30px);\n  max-width: calc(1140px - 30px);\n  padding: 50px 15px 0;\n  margin: auto;\n  min-height: 100px;\n  background-color: #fff;\n  color: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NewPatientInfo = _styledComponents["default"].div(_templateObject());

exports.NewPatientInfo = NewPatientInfo;