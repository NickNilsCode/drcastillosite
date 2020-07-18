"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlueBanner = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 125px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #154254;\n  h2 {\n    letter-spacing: 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlueBanner = _styledComponents["default"].div(_templateObject());

exports.BlueBanner = BlueBanner;