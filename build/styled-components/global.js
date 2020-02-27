"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToothBackground = exports.H6 = exports.H5 = exports.H3 = exports.H2 = exports.H1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-image: url(\"/images/parallax-03.jpg\");\n  background-size: cover;\n  background-position: center;\n  @media(min-width: 700px){\n    background-image: url(\"/images/parallax-01.jpg\");\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: normal;\n  font-style: italic;\n  color: #FFF;\n  margin: 0;\n  padding: 10px 0;\n  line-height: 13px;\n  -webkit-font-smoothing: antialiased;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  color: #FFF;\n  margin: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 13px;\n  font-weight: bold;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  font-size: 17px;\n  color: #27b1d2;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  font-size: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents["default"].h1(_templateObject());

exports.H1 = H1;

var H2 = _styledComponents["default"].h2(_templateObject2());

exports.H2 = H2;

var H3 = _styledComponents["default"].h3(_templateObject3());

exports.H3 = H3;

var H5 = _styledComponents["default"].h6(_templateObject4());

exports.H5 = H5;

var H6 = _styledComponents["default"].h6(_templateObject5());

exports.H6 = H6;

var ToothBackground = _styledComponents["default"].div(_templateObject6());

exports.ToothBackground = ToothBackground;