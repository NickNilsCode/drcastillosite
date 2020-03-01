"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBox = exports.BlogCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 24px);\n  height: calc(100% - 24px);\n  text-align: left;\n  & p, & h2, & h6 {\n    color: #fff;\n  }\n  padding: 12px;\n  position: absolute;\n  top: 75%;\n  left: 0;\n  background-color: rgba(39, 177, 210, 0.9);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100vw - 32px);\n  height: calc(100vw - 32px);\n  display: flex;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  justify-content: center;\n  overflow: hidden;\n  align-items: flex-start;\n  flex-direction: column;\n  margin-bottom: 16px;\n  p {\n    text-align: center;\n  }\n  @media(min-width: 700px){\n    max-width: 346px;\n    max-height: 346px;\n    margin: 12px;\n  }\n  &:hover {\n    .textBox {\n      top: 0;\n      transition: top 1s, background-color 1s;\n      background-color: rgba(255, 255, 255, 0.9);\n      & p, & h6, & a h2 {\n        color: #696969;\n        transition: color 1s;\n      }\n      & h2 {\n        color: #000;\n        transition: color 1s;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogCard = _styledComponents["default"].div(_templateObject());

exports.BlogCard = BlogCard;

var TextBox = _styledComponents["default"].div(_templateObject2());

exports.TextBox = TextBox;