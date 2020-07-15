"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ExperienceCard = _interopRequireDefault(require("./ExperienceCard"));

var _AboutExperience = require("../styled-components/components/AboutExperience");

var _global = require("../styled-components/global");

var _aboutExperience = _interopRequireDefault(require("../data/aboutExperience"));

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

var AboutExperienceComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(AboutExperienceComponent, _Component);

  function AboutExperienceComponent() {
    _classCallCheck(this, AboutExperienceComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(AboutExperienceComponent).apply(this, arguments));
  }

  _createClass(AboutExperienceComponent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_AboutExperience.AboutExperience, null, _react["default"].createElement(_global.Description, null, _react["default"].createElement(_global.HashMark, {
        id: "about"
      }), _react["default"].createElement(_global.H2BannerTitle, null, "ABOUT OUR EXPERIENCE"), _react["default"].createElement("hr", null), _react["default"].createElement(_global.Para, null, "By entrusting us with your dental needs and concerns, we will provide you with compassionate care tailored to your specific needs. As equal partners in achieving total dental wellness for you, we will develop an individualized dental plan to work together with our team of qualified, caring professionls to reach your goal.")), _react["default"].createElement(_AboutExperience.FlexWrap, null, _react["default"].createElement(_AboutExperience.LeftSide, null, _aboutExperience["default"].map(function (a, i) {
        return _react["default"].createElement(_ExperienceCard["default"], {
          key: i,
          Icon: a.Icon,
          link: a.link,
          title: a.title,
          blurb: a.blurb
        });
      })), _react["default"].createElement(_AboutExperience.RightSide, null, _react["default"].createElement("img", {
        src: "/images/about_us.jpg"
      }))));
    }
  }]);

  return AboutExperienceComponent;
}(_react.Component);

var _default = AboutExperienceComponent;
exports["default"] = _default;