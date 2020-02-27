"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsultationCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 50px);\n  max-width: 700px;\n  margin: auto;\n  padding: 38px 25px 25px 25px;\n  background-color: #27b1d2;\n  color: #fff;\n  height: 133px;\n  position: relative;\n  &:nth-child(2){\n    background-color: #43c7e6;\n  }\n  &:nth-child(3){\n    background-color: #5ad4f1;\n  }\n  h1 {\n    color: #FFF;\n  }\n  p {\n    font-family: \"Roboto\", sans-serif;\n    font-weight: normal;\n    font-size: 17px;\n    color: #FFF;\n    line-height: 25px;\n  }\n  @media(min-width: 1020px){\n    width: calc(calc(100%/3) - 140px - 30px);\n    margin: 0 15px;\n    max-width: 253px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ConsultationCard = _styledComponents["default"].div(_templateObject());

exports.ConsultationCard = ConsultationCard;