"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NewPatientInfo = require("../styled-components/components/NewPatientInfo");

var _global = require("../styled-components/global");

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

var NewPatientInfoComponent = /*#__PURE__*/function (_Component) {
  _inherits(NewPatientInfoComponent, _Component);

  var _super = _createSuper(NewPatientInfoComponent);

  function NewPatientInfoComponent() {
    _classCallCheck(this, NewPatientInfoComponent);

    return _super.apply(this, arguments);
  }

  _createClass(NewPatientInfoComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_NewPatientInfo.NewPatientInfo, null, /*#__PURE__*/_react["default"].createElement(_global.Description, null, /*#__PURE__*/_react["default"].createElement(_global.H2BannerTitle, null, "NEW PATIENT INFORMATION"), /*#__PURE__*/_react["default"].createElement("hr", {
        className: "line"
      }), /*#__PURE__*/_react["default"].createElement(_global.H3, null, "Consultation & Diagnostics"), /*#__PURE__*/_react["default"].createElement(_global.Para, null, "There have never been so many different possibilities as today to save severely damaged teeth and to replace lost teeth. But which treatment is the appropriate ? What are the costs? Dr. Castillo and his friendly team will help you make the right decision."), /*#__PURE__*/_react["default"].createElement(_global.H3, null, "\"Crucial to the success of any treatment is the trust between patient and doctor, which is why we take the time to get to know our patients and listen to their questions, concerns and expectations.\""), /*#__PURE__*/_react["default"].createElement(_global.Para, null, "-Dr. Luis Castillo"), /*#__PURE__*/_react["default"].createElement(_global.Para, null, "At our office we want to get to know you first, and your expectations before an extensive diagnosis is carried out and a treatment plan is established. We utilize the following technology to assure the desired outcome of your treatment:"), /*#__PURE__*/_react["default"].createElement(_global.Para, null, "- Dental Magnifying Glasses for a precise diagnostic", /*#__PURE__*/_react["default"].createElement("br", null), "- Intraoral camera so that you, the patient is able to see what treatment is necessary", /*#__PURE__*/_react["default"].createElement("br", null), "- Digital x-rays - This kind of x-ray diagnostic gives us the immediate access with 90% less radiation"), /*#__PURE__*/_react["default"].createElement(_global.Para, null, "\"My valued team and I are here to help and serve you with any questions and concerns\"")));
    }
  }]);

  return NewPatientInfoComponent;
}(_react.Component);

var _default = NewPatientInfoComponent;
exports["default"] = _default;