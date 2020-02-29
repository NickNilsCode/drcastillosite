"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightSide = exports.LeftSide = exports.CircleDiv = exports.ExperienceCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 144px);\n  max-width: 970px;\n  h3 {\n    color: #696969;\n    font-size: 14px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 144px\n  margin-right: 24px;\n  max-width: 970px;\n  text-align: left;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 120px;\n  height: 120px;\n  border-radius: 60px;\n  border: #27b1d2 2px solid;\n  max-width: 970px;\n  text-align: left;\n  position: relative;\n  svg {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 100px;\n  background-color: #fff;\n  color: #000;\n  padding: 8px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    h3 {\n      color: #27b1d2;\n    }\n    .circleDiv {\n      background-color: #27b1d2;\n      path {\n        fill: #fff;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ExperienceCard = _styledComponents["default"].a(_templateObject());

exports.ExperienceCard = ExperienceCard;

var CircleDiv = _styledComponents["default"].div(_templateObject2());

exports.CircleDiv = CircleDiv;

var LeftSide = _styledComponents["default"].div(_templateObject3());

exports.LeftSide = LeftSide;

var RightSide = _styledComponents["default"].div(_templateObject4());

exports.RightSide = RightSide;