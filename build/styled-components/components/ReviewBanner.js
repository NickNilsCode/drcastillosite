"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarImg = exports.Stars = exports.ReviewBanner = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  margin: 8px;\n  border-radius: 50%;\n  height: ", ";\n  width: ", ";\n  transition: height 1s, width 1s, border 1s, opacity 1s;\n  opacity: ", ";\n  border: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ReviewBanner = _styledComponents["default"].div(_templateObject());

exports.ReviewBanner = ReviewBanner;

var Stars = _styledComponents["default"].div(_templateObject2());

exports.Stars = Stars;

var StarImg = _styledComponents["default"].img(_templateObject3(), function (props) {
  return props.selected ? "80px" : "50px";
}, function (props) {
  return props.selected ? "80px" : "50px";
}, function (props) {
  return props.selected ? 1 : 0.6;
}, function (props) {
  return props.selected ? "rgba(0, 0, 0, 0.15) 5px solid" : "none";
});

exports.StarImg = StarImg;