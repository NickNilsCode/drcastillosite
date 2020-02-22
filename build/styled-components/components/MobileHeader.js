"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuLink = exports.SlidingMenu = exports.VisibleContent = exports.MobileHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  color: #343434;\n  text-decoration: none;\n  h3 {\n    margin: 24px 0;\n  }\n  &:hover {\n    color: #27b1d2;\n  }\n  .thisPage {\n    color: #27b1d2;\n  }\n  .shiftRight {\n    margin-left: 24px;\n    width: calc(100% - 24px);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 48px);\n  background-color: #fff;\n  position: absolute;\n  top: 73px;\n  padding: 0 24px 12px;\n  left: 0;\n  @media(min-width: 700px){\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 73px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  img {\n    width: 100px;\n  }\n  i {\n    font-size: 26px;\n  }\n  i:hover {\n    cursor: pointer;\n  }\n  @media(min-width: 700px){\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 48px);\n  padding: 0 24px;\n  position: relative;\n  @media(min-width: 700px){\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MobileHeader = _styledComponents["default"].div(_templateObject());

exports.MobileHeader = MobileHeader;

var VisibleContent = _styledComponents["default"].div(_templateObject2());

exports.VisibleContent = VisibleContent;

var SlidingMenu = _styledComponents["default"].div(_templateObject3());

exports.SlidingMenu = SlidingMenu;

var MenuLink = _styledComponents["default"].a(_templateObject4());

exports.MenuLink = MenuLink;