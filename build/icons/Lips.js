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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LipSVG = _styledComponents["default"].svg(_templateObject());

var Lips = /*#__PURE__*/function (_Component) {
  _inherits(Lips, _Component);

  var _super = _createSuper(Lips);

  function Lips() {
    _classCallCheck(this, Lips);

    return _super.apply(this, arguments);
  }

  _createClass(Lips, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(LipSVG, {
        "aria-hidden": "true",
        viewBox: "0 0 640 512"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        fill: "#27b1d2",
        d: "M545.25 219c-17.56-7.56-65.56-25.33-131.97-26.89-29.09-.26-43.57 13.79-93.28 13.79-49.64 0-64.6-14.04-93.28-13.79-66.41 1.56-114.41 19.33-131.97 26.89-6.13 2.62-10.53 8.09-11.72 14.62-1.22 6.53.94 13.22 5.78 17.89 115.97 113.38 347.91 111.91 462.38 0 4.84-4.67 7-11.36 5.78-17.89-1.19-6.53-5.59-12-11.72-14.62zM320 304c-100.16 0-164.34-38.81-194.19-62.55 91.6-30.58 135.94-10.52 137.28-10.19 17.59 4.41 37.25 6.61 56.91 6.61s39.31-2.21 56.91-6.61c1.34-.33 45.68-20.39 137.28 10.19C484.34 265.19 420.16 304 320 304zm311.14-108.32C579.47 109.99 466.31 32 417.72 32c0 0-32.57 0-97.72 50-65.15-50-97.72-50-97.72-50-48.59 0-161.75 77.99-213.42 163.68-10.32 17.11-11.63 37.99-3.89 56.38C32.95 318.51 117.59 480 279.28 480h81.43c161.69 0 246.33-161.49 274.32-227.95 7.74-18.38 6.43-39.26-3.89-56.37zm-25.6 43.95C579.16 302.28 502.49 448 360.72 448h-81.43C137.51 448 60.84 302.28 34.46 239.63c-3.85-9.15-3.19-19.14 1.8-27.43 48.4-80.28 151.23-146.83 184.99-148.18 27.32 4.25 64.82 32.28 98.74 58.31 33.92-26.04 71.42-54.07 98.74-58.31 33.77 1.35 136.59 67.9 184.99 148.18 5.01 8.29 5.67 18.29 1.82 27.43z"
      }));
    }
  }]);

  return Lips;
}(_react.Component);

var _default = Lips;
exports["default"] = _default;