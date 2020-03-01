"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumDiamond = exports.CardImg = exports.ServiceCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: -24px;\n  margin-top: -30px;\n  width: 60px;\n  height: 60px;\n  background-color: #0c8ead;\n  z-index: 2;\n  border: #FFF 2px solid;\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  span {\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 15px;\n    font-weight: 700;\n    color: #FFF;\n    -moz-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 200px;\n  height: 200px;\n  border-radius: 100px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  margin: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  min-height: 100px;\n  dislay: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  p {\n    text-align: center;\n  }\n  @media(min-width: 700px){\n    width: calc(50% - 30px);\n    margin: 15px;\n  }\n  @media(min-width: 1140px){\n    max-width: 247.5px;\n    margin: 15px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ServiceCard = _styledComponents["default"].a(_templateObject());

exports.ServiceCard = ServiceCard;

var CardImg = _styledComponents["default"].div(_templateObject2());

exports.CardImg = CardImg;

var NumDiamond = _styledComponents["default"].div(_templateObject3());

exports.NumDiamond = NumDiamond;