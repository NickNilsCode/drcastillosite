"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewP = exports.GiantQuotes = exports.ReviewCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 48px);\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 24px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 28px;\n  color: #000;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  font-size: 80px;\n  line-height: 50px;\n  color: #000;\n  opacity: 0.5;\n  text-align: center;\n  margin-bottom: 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ReviewCard = _styledComponents["default"].div(_templateObject(), function (props) {
  return 100 / props.count + "%";
});

exports.ReviewCard = ReviewCard;

var GiantQuotes = _styledComponents["default"].div(_templateObject2());

exports.GiantQuotes = GiantQuotes;

var ReviewP = _styledComponents["default"].p(_templateObject3());

exports.ReviewP = ReviewP;