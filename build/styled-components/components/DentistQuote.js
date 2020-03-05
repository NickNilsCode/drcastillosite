"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DentistName = exports.RightSide = exports.LeftSide = exports.DentistQuote = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  font-style: italic;\n  font-size: 13px;\n  color: #969696;\n  padding-top: 7px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 40%;\n  max-width: 1140px;\n  img {\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(60% - 24px);\n  margin-right: 24px;\n  max-width: 1140px;\n  text-align: left;\n  padding-bottom: 15px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 30px);\n  max-width: calc(1140px - 30px);\n  padding: 15px;\n  padding-bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  margin: auto;\n"]);

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