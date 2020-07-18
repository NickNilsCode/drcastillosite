"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexWrap = exports.HashMark = exports.Slider = exports.Parallax = exports.GreyBackground = exports.ToothBackground = exports.Button = exports.LargeMessage = exports.Html = exports.Para = exports.H6 = exports.H5 = exports.H3 = exports.Description = exports.H2BannerTitle = exports.H2 = exports.H1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 50px;\n  @media (min-width: 700px){\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -80px;\n  border: none;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  position: absolute;\n  left: ", ";\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  transition: left 1s;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 500px;\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: #f5f5f5\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-image: url(\"/images/parallax-01.jpg\");\n  background-size: cover;\n  background-position: center;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  background-color: ", ";\n  color: ", ";\n  border: ", ";\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  padding: 15px 30px;\n  text-decoration: none;\n  transition: background-color 1s, color 1s;\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  font-weight: 700;\n  font-size: 24px;\n  margin: 8px 0;\n  color: #000;\n  line-height: 42px;\n  @media (min-width: 1000px){\n    font-size: 29px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 12px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  text-align: left;\n  font-size: 14px;\n  line-height: 25px;\n  color: #696969;\n  span {\n    font-weight: bold;\n  }\n  a {\n    color: #27b1d2;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  text-align: left;\n  font-size: 14px;\n  line-height: 25px;\n  color: #696969;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: normal;\n  font-style: italic;\n  color: #FFF;\n  margin: 0;\n  padding: 10px 0;\n  line-height: 13px;\n  -webkit-font-smoothing: antialiased;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  color: #FFF;\n  margin: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 13px;\n  font-weight: bold;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: auto;\n  position: relative;\n  margin-bottom: 24px;\n  max-width: 1140px;\n  .line {\n    width: 330px;\n    border: 1px solid #27b1d2;\n    margin: 0;\n  }\n  h3 {\n    text-align: left;\n    margin-bottom: 0;\n  }\n  p {\n    margin-top: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: table;\n  position: relative;\n  padding-left: 10px;\n  padding-right: 50px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: #000;\n  text-transform: uppercase;\n  margin: 6px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  font-size: 17px;\n  color: #27b1d2;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  font-size: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = _styledComponents["default"].h1(_templateObject());

exports.H1 = H1;

var H2 = _styledComponents["default"].h2(_templateObject2());

exports.H2 = H2;

var H2BannerTitle = _styledComponents["default"].h2(_templateObject3());

exports.H2BannerTitle = H2BannerTitle;

var Description = _styledComponents["default"].div(_templateObject4());

exports.Description = Description;

var H3 = _styledComponents["default"].h3(_templateObject5());

exports.H3 = H3;

var H5 = _styledComponents["default"].h6(_templateObject6());

exports.H5 = H5;

var H6 = _styledComponents["default"].h6(_templateObject7());

exports.H6 = H6;

var Para = _styledComponents["default"].p(_templateObject8());

exports.Para = Para;

var Html = _styledComponents["default"].div(_templateObject9());

exports.Html = Html;

var LargeMessage = _styledComponents["default"].p(_templateObject10());

exports.LargeMessage = LargeMessage;

var Button = _styledComponents["default"].button(_templateObject11(), function (props) {
  return props.color1 ? props.color1 : "transparent";
}, function (props) {
  return props.color2 ? props.color2 : "#27b1d2";
}, function (props) {
  return props.color3 ? props.color3 + " 2px solid" : "#27b1d2 2px solid";
}, function (props) {
  return props.color2 ? props.color2 : "#27b1d2";
}, function (props) {
  return props.color1 ? props.color1 : "#fff";
});

exports.Button = Button;

var ToothBackground = _styledComponents["default"].div(_templateObject12());

exports.ToothBackground = ToothBackground;

var GreyBackground = _styledComponents["default"].div(_templateObject13());

exports.GreyBackground = GreyBackground;

var Parallax = _styledComponents["default"].div(_templateObject14(), function (props) {
  return "url(".concat(props.img, ")");
});

exports.Parallax = Parallax;

var Slider = _styledComponents["default"].div(_templateObject15(), function (props) {
  return props.count * 100 + "%";
}, function (props) {
  return props.index * -100 + "%";
});

exports.Slider = Slider;

var HashMark = _styledComponents["default"].hr(_templateObject16());

exports.HashMark = HashMark;

var FlexWrap = _styledComponents["default"].div(_templateObject17());

exports.FlexWrap = FlexWrap;