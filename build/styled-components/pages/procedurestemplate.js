"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexWrapProcedure = exports.ProcedureH2 = exports.ProcedureH1 = exports.FlexDiv = exports.ProcedurestemplateContent = exports.ProcedurestemplateWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    max-width: 1100px;\n    margin: auto;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    margin-bottom: 50px;\n    @media (min-width: 700px){\n      flex-direction: row;\n      flex-wrap: wrap;\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 18px;\n    letter-spacing: 4px;\n    color: #000;\n    margin: 12px 0;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 18px;\n    letter-spacing: 4px;\n    color: #000;\n    margin: 12px 0;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: calc(100% - 48px);\n    padding: 24px;\n    text-align: left;\n    .partline {\n      width: 50px;\n      margin-left: 0;\n    }\n    @media(min-width: 700px){\n      width: calc(50% - 48px);\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    min-height: 300px;\n    text-align: center;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    min-height: 100vh;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProcedurestemplateWrapper = _styledComponents["default"].div(_templateObject());

exports.ProcedurestemplateWrapper = ProcedurestemplateWrapper;

var ProcedurestemplateContent = _styledComponents["default"].div(_templateObject2());

exports.ProcedurestemplateContent = ProcedurestemplateContent;

var FlexDiv = _styledComponents["default"].div(_templateObject3());

exports.FlexDiv = FlexDiv;

var ProcedureH1 = _styledComponents["default"].h1(_templateObject4());

exports.ProcedureH1 = ProcedureH1;

var ProcedureH2 = _styledComponents["default"].h2(_templateObject5());

exports.ProcedureH2 = ProcedureH2;

var FlexWrapProcedure = _styledComponents["default"].div(_templateObject6());

exports.FlexWrapProcedure = FlexWrapProcedure;