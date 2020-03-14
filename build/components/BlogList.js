"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _BlogList = require("../styled-components/components/BlogList");

var _global = require("../styled-components/global");

var _blogList = _interopRequireDefault(require("../data/blogList"));

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

var BlogListComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(BlogListComponent, _Component);

  function BlogListComponent() {
    _classCallCheck(this, BlogListComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlogListComponent).apply(this, arguments));
  }

  _createClass(BlogListComponent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_BlogList.BlogList, {
        id: "blog"
      }, _react["default"].createElement(_global.Description, null, _react["default"].createElement(_global.H2BannerTitle, null, "Latest Blog Posts"), _react["default"].createElement("hr", null), _react["default"].createElement(_global.Para, null, "Our practice prides itself on providing the very finest level of service, from a simple filling to complex cosmetic dentistry.")), _react["default"].createElement(_BlogList.FlexWrap, null, _blogList["default"].map(function (a, i) {
        return _react["default"].createElement(_.BlogCard, {
          key: i,
          link: a.link,
          img: a.img,
          title: a.title,
          author: a.author,
          blurb: a.blurb
        });
      })), _react["default"].createElement("a", {
        href: "/blog"
      }, _react["default"].createElement(_global.Button, {
        color1: "#fff",
        color2: "#27b1d2",
        color3: "#27b1d2",
        style: {
          marginBottom: '24px'
        }
      }, "See Full Blog Page")), _react["default"].createElement(_.DentistLine, null));
    }
  }]);

  return BlogListComponent;
}(_react.Component);

var _default = BlogListComponent;
exports["default"] = _default;