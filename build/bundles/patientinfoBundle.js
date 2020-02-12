"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _PatientinfoPage = _interopRequireDefault(require("../pages/PatientinfoPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (window) (0, _reactDom.render)(_react["default"].createElement(_PatientinfoPage["default"], {
  data: window.__DATA__
}), document.getElementById('app'));