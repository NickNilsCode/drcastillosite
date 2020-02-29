"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ToothSVG = _styledComponents["default"].svg(_templateObject());

var Tooth =
/*#__PURE__*/
function (_Component) {
  _inherits(Tooth, _Component);

  function Tooth() {
    _classCallCheck(this, Tooth);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooth).apply(this, arguments));
  }

  _createClass(Tooth, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(ToothSVG, {
        "aria-hidden": "true",
        viewBox: "0 0 448 512"
      }, _react["default"].createElement("path", {
        fill: "#27b1d2",
        d: "M443.94 96.25c-11.03-45.28-47.12-82.08-92.02-93.73-27.93-7.22-57.56 1.12-89.08 24.34-12.58 9.24-44.2 24.48-77.59.06l-.4-.28c-.06-.04-.13-.04-.19-.08C153.32 3.6 123.92-4.66 96.05 2.54c-44.87 11.64-80.99 48.44-92 93.72-9.61 39.48-1.97 78.7 21.5 110.44 20.51 27.73 32.06 61.84 36.29 107.34 3.62 38.69 9.25 89.61 20.93 140.31l7.81 33.97c3.22 13.95 15.4 23.69 29.65 23.69 14.03 0 26.18-9.55 29.53-23.16l34.5-138.44c4.56-18.33 20.9-31.14 39.74-31.14s35.18 12.81 39.74 31.16l34.5 138.41a30.348 30.348 0 0 0 29.53 23.17c14.25 0 26.43-9.73 29.65-23.69l7.81-33.97c11.69-50.72 17.31-101.64 20.93-140.31 4.28-45.56 15.81-79.66 36.31-107.34 23.47-31.76 31.1-70.98 21.47-110.45zm-47.21 91.41c-24.09 32.56-37.59 71.76-42.43 123.39-3.5 37.7-9 87.23-20.25 136.11l-6.34 27.59-32.9-132.06c-8.12-32.64-37.25-55.42-70.8-55.42s-62.68 22.78-70.8 55.41l-31.43 138.45-7.81-33.97c-11.25-48.86-16.75-98.39-20.25-136.09-4.81-51.56-18.31-90.78-42.45-123.41-17.72-23.97-23.45-53.75-16.12-83.84 8.26-33.98 35.32-61.58 68.94-70.3 24.3-6.27 48.55 9.13 62.12 19.14.07.05.15.08.21.13.03.02.04.05.07.07l80.33 56.25c10.7 7.43 20.15-.87 22.28-3.94 5.09-7.23 3.31-17.2-3.91-22.28L245.5 69.11c13.05-3.13 25.54-8.55 36.31-16.47 23.5-17.36 43.74-23.89 62.09-19.14 33.62 8.73 60.71 36.33 68.99 70.31 7.3 30.1 1.59 59.88-16.16 83.85z"
      }));
    }
  }]);

  return Tooth;
}(_react.Component);

var _default = Tooth;
exports["default"] = _default;