"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _procedurestemplate = require("../styled-components/pages/procedurestemplate");

var _global = require("../styled-components/global");

var _moreProceduresList = _interopRequireDefault(require("../data/moreProceduresList"));

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

var Procedurestemplate = /*#__PURE__*/function (_Component) {
  _inherits(Procedurestemplate, _Component);

  var _super = _createSuper(Procedurestemplate);

  function Procedurestemplate() {
    _classCallCheck(this, Procedurestemplate);

    return _super.apply(this, arguments);
  }

  _createClass(Procedurestemplate, [{
    key: "render",
    value: function render() {
      var procedureId = this.props.data.procedureId;

      var data = _moreProceduresList["default"].find(function (a) {
        return a.service == procedureId;
      });

      return /*#__PURE__*/_react["default"].createElement(_procedurestemplate.ProcedurestemplateWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, null), /*#__PURE__*/_react["default"].createElement(_procedurestemplate.ProcedurestemplateContent, null, /*#__PURE__*/_react["default"].createElement(_components.BlueBanner, {
        title: data.title
      }), /*#__PURE__*/_react["default"].createElement(_procedurestemplate.FlexWrapProcedure, null, /*#__PURE__*/_react["default"].createElement(_procedurestemplate.FlexDiv, null, /*#__PURE__*/_react["default"].createElement(_procedurestemplate.ProcedureH2, null, data.titleLeft), /*#__PURE__*/_react["default"].createElement("hr", {
        className: "partline"
      }), /*#__PURE__*/_react["default"].createElement(_global.Html, {
        dangerouslySetInnerHTML: {
          __html: data.blurbLeft
        }
      })), /*#__PURE__*/_react["default"].createElement(_procedurestemplate.FlexDiv, null, /*#__PURE__*/_react["default"].createElement(_procedurestemplate.ProcedureH2, null, data.titleRight), /*#__PURE__*/_react["default"].createElement("hr", {
        className: "partline"
      }), /*#__PURE__*/_react["default"].createElement(_global.Html, {
        dangerouslySetInnerHTML: {
          __html: data.blurbRight
        }
      }))), /*#__PURE__*/_react["default"].createElement(_components.ScheduleBanner, null), /*#__PURE__*/_react["default"].createElement(_components.MoreProcedures, {
        title: "Other Services",
        currentPage: data.service
      }), /*#__PURE__*/_react["default"].createElement(_components.ConsultationForm, null)), /*#__PURE__*/_react["default"].createElement(_components.Footer, null));
    }
  }]);

  return Procedurestemplate;
}(_react.Component);

var _default = Procedurestemplate;
exports["default"] = _default;