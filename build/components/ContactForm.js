"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ContactForm = require("../styled-components/components/ContactForm");

var _global = require("../styled-components/global");

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

var ContactFormComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ContactFormComponent, _Component);

  function ContactFormComponent(props) {
    var _this;

    _classCallCheck(this, ContactFormComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactFormComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "submitForm", function (e) {
      console.log("submit");
      e.preventDefault();
      var _this$state = _this.state,
          name = _this$state.name,
          surname = _this$state.surname,
          phone = _this$state.phone,
          email = _this$state.email,
          message = _this$state.message;
      var data = {
        name: name,
        surname: surname,
        phone: phone,
        email: email,
        message: message,
        option: 2
      };
      fetch('/emailer', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        console.log("success");
        alert("An email has been submitted to Dr. Castillo's office. Someone will be in contact with you regarding your inquiry.");

        _this.setState({
          name: "",
          surname: "",
          phone: "",
          email: "",
          message: ""
        });
      })["catch"](function (err) {
        console.log("crash");
        alert("Something went wrong. Please contact Dr. Castillo's office directly. We are sorry for the inconvenience.");

        _this.setState({
          name: "",
          surname: "",
          phone: "",
          email: "",
          message: ""
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeState", function (e, prop) {
      var obj = {};
      obj[prop] = e.target.value;

      _this.setState(obj);

      console.log(obj);
    });

    _this.state = {
      name: "",
      surname: "",
      phone: "",
      email: "",
      message: ""
    };
    return _this;
  }

  _createClass(ContactFormComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          name = _this$state2.name,
          surname = _this$state2.surname,
          email = _this$state2.email,
          phone = _this$state2.phone,
          message = _this$state2.message;
      return _react["default"].createElement(_ContactForm.ContactForm, {
        onSubmit: this.submitForm
      }, _react["default"].createElement(_ContactForm.ContactWrap, null, _react["default"].createElement(_global.H2BannerTitle, null, "SEND US A MESSAGE"), _react["default"].createElement(_ContactForm.Input, {
        placeholder: "Name",
        onChange: function onChange(e) {
          _this2.changeState(e, "name");
        },
        value: name,
        type: "text",
        required: true
      }), _react["default"].createElement(_ContactForm.Input, {
        placeholder: "Surname",
        onChange: function onChange(e) {
          _this2.changeState(e, "surname");
        },
        value: surname,
        type: "text",
        required: true
      }), _react["default"].createElement(_ContactForm.Input, {
        placeholder: "Phone",
        onChange: function onChange(e) {
          _this2.changeState(e, "phone");
        },
        value: phone,
        type: "tel",
        required: true
      }), _react["default"].createElement(_ContactForm.Input, {
        placeholder: "Email",
        onChange: function onChange(e) {
          _this2.changeState(e, "email");
        },
        value: email,
        type: "email",
        required: true
      }), _react["default"].createElement(_ContactForm.TextArea, {
        placeholder: "Message",
        onChange: function onChange(e) {
          _this2.changeState(e, "message");
        },
        value: message,
        required: true
      }), _react["default"].createElement(_global.Button, {
        type: "submit"
      }, "SUBMIT MESSAGE")));
    }
  }]);

  return ContactFormComponent;
}(_react.Component);

var _default = ContactFormComponent;
exports["default"] = _default;