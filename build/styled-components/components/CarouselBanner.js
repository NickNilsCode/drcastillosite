"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageH1 = exports.CarouselBanner = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CarouselBanner = _styledComponents["default"].div(_templateObject());

exports.CarouselBanner = CarouselBanner;

var PageH1 = _styledComponents["default"].h1(_templateObject2());

exports.PageH1 = PageH1;