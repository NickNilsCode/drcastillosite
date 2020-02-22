"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MobileHeader = require("../styled-components/components/MobileHeader");

var _menuOptions = _interopRequireDefault(require("../data/menuOptions"));

var _global = require("../styled-components/global");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MobileHeaderComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(MobileHeaderComponent, _Component);

  function MobileHeaderComponent(props) {
    var _this;

    _classCallCheck(this, MobileHeaderComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MobileHeaderComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "menuChange", function () {
      _this.setState({
        showMenu: !_this.state.showMenu
      });
    });

    _this.state = {
      showMenu: false,
      thisPath: ""
    };
    return _this;
  }

  _createClass(MobileHeaderComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        thisPath: window.location.pathname
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          showMenu = _this$state.showMenu,
          thisPath = _this$state.thisPath;
      return _react["default"].createElement(_MobileHeader.MobileHeader, null, _react["default"].createElement(_MobileHeader.VisibleContent, null, _react["default"].createElement("a", {
        href: "/"
      }, _react["default"].createElement("img", {
        src: "/images/dentistlogo.png"
      })), _react["default"].createElement("i", {
        className: "fas fa-bars",
        onClick: this.menuChange
      })), showMenu && _react["default"].createElement(_MobileHeader.SlidingMenu, null, _menuOptions["default"].map(function (a, i) {
        var thisPage = thisPath == a.link ? "thisPage" : "";
        return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_MobileHeader.MenuLink, {
          key: i,
          href: a.link
        }, _react["default"].createElement(_global.H3, {
          className: thisPage
        }, a.label)), a.dropdown && a.dropdown.map(function (b, ind) {
          var thisPage2 = thisPath == a.link ? "thisPage" : "";
          return _react["default"].createElement(_MobileHeader.MenuLink, {
            key: ind,
            href: b.link
          }, _react["default"].createElement(_global.H3, {
            className: "shiftRight ".concat(thisPage2)
          }, b.label));
        }));
      })));
    }
  }]);

  return MobileHeaderComponent;
}(_react.Component);

var _default = MobileHeaderComponent;
exports["default"] = _default;