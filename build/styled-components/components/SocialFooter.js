"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWrap = exports.LinkSquare = exports.SocialFooter = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 53px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  @media(min-width: 700px){\n    width: 250px;\n    justify-content: flex-end;\n    margin-right: 16px;\n  }\n  @media(min-width: 900px){\n    width: 475px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 45px;\n  height: 50px;\n  background-color: #00394e;\n  border-bottom: #00394e 3px solid;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.5px;\n  i {\n    font-size: 12px;\n    line-height: 12px;\n  }\n  &:hover {\n    background-color: #fff;\n    color: #e3262e\n    border-bottom: #e3262e 3px solid;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 48px);\n  padding: 0 24px;\n  min-height: 106px;\n  background-color: #002c3c;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  @media(min-width: 700px){\n    min-height: 53px;\n    flex-direction: row;\n    justify-content: center;\n    h6 {\n      width: 700px;\n      min-height: 33px;\n      margin-left: 16px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n    }\n  }\n  @media(min-width: 900px){\n    h6 {\n      width: 475px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SocialFooter = _styledComponents["default"].div(_templateObject());

exports.SocialFooter = SocialFooter;

var LinkSquare = _styledComponents["default"].div(_templateObject2());

exports.LinkSquare = LinkSquare;

var LinkWrap = _styledComponents["default"].div(_templateObject3());

exports.LinkWrap = LinkWrap;