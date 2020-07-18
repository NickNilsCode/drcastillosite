"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServicesDescription = exports.ServicestemplateContent = exports.ServicestemplateWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: calc(100% - 96px);\n    padding: 48px;\n    margin: auto;\n    position: relative;\n    margin-bottom: 24px;\n    max-width: 900px;\n    .line {\n      width: 330px;\n      border: 1px solid #27b1d2;\n      margin: 0;\n    }\n    h3 {\n      text-align: left;\n      margin-bottom: 0;\n    }\n    p {\n      margin-top: 0;\n    }\n  "]);

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

var ServicestemplateWrapper = _styledComponents["default"].div(_templateObject());

exports.ServicestemplateWrapper = ServicestemplateWrapper;

var ServicestemplateContent = _styledComponents["default"].div(_templateObject2());

exports.ServicestemplateContent = ServicestemplateContent;

var ServicesDescription = _styledComponents["default"].div(_templateObject3());

exports.ServicesDescription = ServicesDescription;