"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.DentistMessage = exports.DentistName = exports.RightSide = exports.LeftSide = exports.DentistQuote = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  background-color: transparent;\n  color: #27b1d2;\n  border: #27b1d2 2px solid;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  padding: 15px 30px;\n  text-decoration: none;\n  margin-right: 15px;\n  margin-top: 35px;\n  margin-bottom: 20px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  font-size: 29px;\n  color: #000;\n  line-height: 42px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  font-style: italic;\n  font-size: 13px;\n  color: #969696;\n  padding-top: 7px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 40%;\n  max-width: 970px;\n  img {\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(60% - 24px);\n  margin-right: 24px;\n  max-width: 970px;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 970px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DentistQuote = _styledComponents["default"].div(_templateObject());

exports.DentistQuote = DentistQuote;

var LeftSide = _styledComponents["default"].div(_templateObject2());

exports.LeftSide = LeftSide;

var RightSide = _styledComponents["default"].div(_templateObject3());

exports.RightSide = RightSide;

var DentistName = _styledComponents["default"].div(_templateObject4());

exports.DentistName = DentistName;

var DentistMessage = _styledComponents["default"].div(_templateObject5());

exports.DentistMessage = DentistMessage;

var Button = _styledComponents["default"].button(_templateObject6());

exports.Button = Button;