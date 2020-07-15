"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextGroup = exports.Mask = exports.MainBanner = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 10;\n  left: 12px;\n  bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: ", ";\n  justify-content: flex-end;\n  h2 {\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: bold;\n    font-size: 20px;\n    text-transform: uppercase;\n    color: #0c809c;\n    padding: 24px 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    width: calc(100% - 24px - 40px);\n    margin: 0;\n    margin-bottom: 8px;\n  }\n  h3 {\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: bold;\n    font-size: 18px;\n    color: #0c809c;\n    padding: 12px 18px;\n    background-color: rgba(255, 255, 255, 0.8);\n    width: calc(100% - 24px - 36px);\n    margin: 0;\n  }\n  @media(min-width: 700px){\n    left: ", ";\n    right: ", ";\n    h2 {\n      width: max-content;\n      font-size: 36px;\n    }\n    h3 {\n      width: max-content;\n      font-size: 20px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.6);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 50vw;\n  max-height: 400px;\n  min-height: 350px;\n  background-image: ", ";\n  background-size: cover;\n  background-position: ", ";\n  position: relative;\n  @media(min-width: 700px){\n    background-position: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainBanner = _styledComponents["default"].div(_templateObject(), function (props) {
  return "url(\"".concat(props.img, "\")");
}, function (props) {
  return props.bgPosSmall || "center";
}, function (props) {
  return props.bgPos || "center";
});

exports.MainBanner = MainBanner;

var Mask = _styledComponents["default"].div(_templateObject2());

exports.Mask = Mask;

var TextGroup = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.textLeft ? "flex-start" : "flex-end";
}, function (props) {
  return props.textLeft ? "30px" : "initial";
}, function (props) {
  return props.textLeft ? "initial" : "30px";
});

exports.TextGroup = TextGroup;