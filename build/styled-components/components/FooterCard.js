"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 140px);\n  padding: 60px 70px;\n  background-color: #51bbe5;\n  color: #fff;\n  min-height: calc(283px - 120px);\n  &:nth-child(2){\n    background-color: #3cadda;\n  }\n  &:nth-child(3){\n    background-color: #2ca4d3;\n  }\n  h1 {\n    color: #FFF;\n  }\n  hr {\n    width: 50px;\n    border: 2px solid #fff;\n    margin: 20px 0;\n  }\n  p {\n    font-family: \"Roboto\", sans-serif;\n    font-weight: normal;\n    font-size: 17px;\n    color: #FFF;\n    line-height: 25px;\n  }\n  @media(min-width: 1000px){\n    width: calc(calc(100%/3) - 140px);\n    height: calc(350px - 120px);\n  }\n  @media(min-width: 1290px){\n    width: calc(calc(100%/3) - 140px);\n    height: calc(286px - 120px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterCard = _styledComponents["default"].div(_templateObject());

exports.FooterCard = FooterCard;