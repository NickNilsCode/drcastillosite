"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProcedureButton = exports.ProcedureCard = exports.MoreProcedures = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: -24px;\n  width: 90%;\n  left: 12px;\n  right: 12px;\n  button {\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100vw - 32px);\n  height: calc(100vw - 32px);\n  margin: 24px 12px;\n  display: flex;\n  position: relative;\n  border: 1px solid transparent;\n  background-size: cover;\n  background-position: center;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  @media(min-width: 700px){\n    max-width: 346px;\n    max-height: 346px;\n  }\n  &:hover {\n    transition: border 1s;\n    border: 1px solid #27b1d2;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  min-height: 100px;\n  background-color: #fff;\n  border-bottom: 1px solid #8d8d8d;\n  color: #000;\n  padding: 16px;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MoreProcedures = _styledComponents["default"].div(_templateObject());

exports.MoreProcedures = MoreProcedures;

var ProcedureCard = _styledComponents["default"].div(_templateObject2());

exports.ProcedureCard = ProcedureCard;

var ProcedureButton = _styledComponents["default"].div(_templateObject3());

exports.ProcedureButton = ProcedureButton;