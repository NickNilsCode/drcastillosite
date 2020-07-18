"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogList = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 30px);\n  max-width: calc(1140px - 30px);\n  padding: 100px 15px;\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogList = _styledComponents["default"].div(_templateObject());

exports.BlogList = BlogList;