"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuLink = exports.LinkWrap = exports.DesktopHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  color: #343434;\n  text-decoration: none;\n  a {\n    width: max-content;\n    text-align: center;\n  }\n  h3 {\n    display: inline-block;\n    margin: 0 8px;\n    width: max-content;\n    text-align: center;\n  }\n  &:hover {\n    color: #27b1d2;\n  }\n  .thisPage {\n    color: #27b1d2;\n  }\n  .shiftRight {\n    margin-left: 24px;\n    width: calc(100% - 24px);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  height: 75px;\n  width: 100%;\n  max-width: 1140px;\n  margin: auto;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 100px;\n    margin-bottom: 12px;\n  }\n  @media(min-width: 700px){\n    display: flex;\n  }\n  @media(min-width: 800px){\n    flex-direction: row;\n    justify-content: space-between;\n    img {\n      margin-bottom: 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DesktopHeader = _styledComponents["default"].div(_templateObject());

exports.DesktopHeader = DesktopHeader;

var LinkWrap = _styledComponents["default"].div(_templateObject2());

exports.LinkWrap = LinkWrap;

var MenuLink = _styledComponents["default"].a(_templateObject3());

exports.MenuLink = MenuLink;