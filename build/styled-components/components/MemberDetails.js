"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightSide = exports.Poly = exports.NameBlock = exports.ImageBlock = exports.LeftSide = exports.FlexWrap = exports.MemberDetails = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1140px;\n  text-align: left;\n  margin-top: 100px;\n  @media(min-width: 900px){\n    width: calc(70% - 12px);\n    margin-left: 12px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 30%;\n  height: 100%;\n  z-index: 3;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: #0a7088;\n  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 20% 0);\n  clip-path: polygon(100% 0, 100% 100%, 0 100%, 20% 0);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 24px);\n  padding: 12px;\n  color: #fff;\n  max-width: 1140px;\n  text-align: left;\n  background-color: #27b1d2;\n  position: absolute;\n  bottom: -50px;\n  left: 0;\n  border-radius: 4px;\n  z-index: 1;\n  overflow: hidden;\n  h2, p {\n    color: #fff;\n    margin: 0;\n    z-index: 5;\n    max-width: 70%;\n  }\n  @media(min-width: 900px){\n    width: 350px;\n    left: 90%;\n    top: 16px;\n    height: max-content;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1140px;\n  text-align: left;\n  position: relative;\n  img {\n    width: 100%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1140px;\n  @media(min-width: 900px){\n    width: calc(30% - 12px);\n    margin-right: 12px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  margin-bottom: 50px;\n  @media(min-width: 900px){\n    flex-direction: row;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  max-width: 720px;\n  margin: auto;\n  background-color: #fff;\n  color: #000;\n  padding: 16px;\n  @media(min-width: 900px){\n    max-width: 1140px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MemberDetails = _styledComponents["default"].div(_templateObject());

exports.MemberDetails = MemberDetails;

var FlexWrap = _styledComponents["default"].div(_templateObject2());

exports.FlexWrap = FlexWrap;

var LeftSide = _styledComponents["default"].div(_templateObject3());

exports.LeftSide = LeftSide;

var ImageBlock = _styledComponents["default"].div(_templateObject4());

exports.ImageBlock = ImageBlock;

var NameBlock = _styledComponents["default"].div(_templateObject5());

exports.NameBlock = NameBlock;

var Poly = _styledComponents["default"].div(_templateObject6());

exports.Poly = Poly;

var RightSide = _styledComponents["default"].div(_templateObject7());

exports.RightSide = RightSide;