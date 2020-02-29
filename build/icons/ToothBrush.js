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

var BrushSVG = _styledComponents["default"].svg(_templateObject());

var ToothBrush =
/*#__PURE__*/
function (_Component) {
  _inherits(ToothBrush, _Component);

  function ToothBrush() {
    _classCallCheck(this, ToothBrush);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToothBrush).apply(this, arguments));
  }

  _createClass(ToothBrush, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(BrushSVG, {
        "aria-hidden": "true",
        viewBox: "0 0 640 512"
      }, _react["default"].createElement("path", {
        fill: "#27b1d2",
        d: "M624 416H448V224h-32v192h-32V224h-32v192h-32V224h-32v192h-32V224h-32v192h-32V224h-32v192h-32V224H96v192H64V224H32v192H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-16 64H32v-32h576v32zM64 192h352c35.35 0 64-28.65 64-64C480 57.31 422.69 0 352 0c23.62 23.62 6.89 64-26.51 64H64C28.65 64 0 92.65 0 128s28.65 64 64 64zm0-96h261.49c28.21 0 53.41-16.84 64.2-42.9 1.59-3.84 2.82-7.76 3.69-11.72C425.66 56.87 448 89.88 448 128c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32s14.36-32 32-32z"
      }));
    }
  }]);

  return ToothBrush;
}(_react.Component);

var _default = ToothBrush;
exports["default"] = _default;