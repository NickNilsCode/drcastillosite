"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightSide = exports.LeftSide = exports.FlexWrap = exports.AboutExperience = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  max-width: 1140px;\n  img {\n    width: 100%;\n  }\n  @media(min-width: 700px){\n    width: calc(50% - 12px);\n    margin-left: 12px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1140px;\n  text-align: left;\n  @media(min-width: 700px){\n    width: calc(50% - 12px);\n    margin-right: 12px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  @media(min-width: 700px){\n    flex-direction: row;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 30px);\n  max-width: calc(1140px - 30px);\n  padding: 100px 15px;\n  margin: auto;\n  background-color: #fff;\n  color: #696969;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AboutExperience = _styledComponents["default"].div(_templateObject());

exports.AboutExperience = AboutExperience;

var FlexWrap = _styledComponents["default"].div(_templateObject2());

exports.FlexWrap = FlexWrap;

var LeftSide = _styledComponents["default"].div(_templateObject3());

exports.LeftSide = LeftSide;

var RightSide = _styledComponents["default"].div(_templateObject4());

exports.RightSide = RightSide;