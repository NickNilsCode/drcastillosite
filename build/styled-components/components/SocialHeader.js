"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWrap = exports.LinkSquare = exports.SocialHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media(min-width: 700px){\n    width: 475px;\n    justify-content: flex-end;\n    margin-right: 16px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 30px;\n  height: 36px;\n  background-color: #00394e;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.5px;\n  i {\n    font-size: 12px;\n    line-height: 12px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 69px;\n  background-color: #002c3c;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  @media(min-width: 700px){\n    height: 36px;\n    flex-direction: row;\n    justify-content: center;\n    h6 {\n      width: 475px;\n      margin-left: 16px;\n      justify-content: flex-start;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SocialHeader = _styledComponents["default"].div(_templateObject());

exports.SocialHeader = SocialHeader;

var LinkSquare = _styledComponents["default"].div(_templateObject2());

exports.LinkSquare = LinkSquare;

var LinkWrap = _styledComponents["default"].div(_templateObject3());

exports.LinkWrap = LinkWrap;