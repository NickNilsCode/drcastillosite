"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightSide = exports.LeftSide = exports.FlexWrap = exports.Description = exports.AboutExperience = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: calc(50% - 12px);\n  margin-left: 12px;\n  max-width: 1140px;\n  img {\n    width: 100%;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: calc(50% - 12px);\n  margin-right: 12px;\n  max-width: 1140px;\n  text-align: left;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 24px;\n  hr {\n    width: 330px;\n    border: 1px solid #27b1d2;\n    margin: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: calc(1140px - 30px);\n  padding: 100px 15px;\n  margin: auto;\n  background-color: #fff;\n  color: #696969;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AboutExperience = _styledComponents["default"].div(_templateObject());

exports.AboutExperience = AboutExperience;

var Description = _styledComponents["default"].div(_templateObject2());

exports.Description = Description;

var FlexWrap = _styledComponents["default"].div(_templateObject3());

exports.FlexWrap = FlexWrap;

var LeftSide = _styledComponents["default"].div(_templateObject4());

exports.LeftSide = LeftSide;

var RightSide = _styledComponents["default"].div(_templateObject5());

exports.RightSide = RightSide;