"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSyntaxHighlighter = require("react-syntax-highlighter");

var _prism = require("react-syntax-highlighter/dist/esm/styles/prism");

var _withStyles = _interopRequireDefault(require("@go-prime/ui/withStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(_ref) {
  var palette = _ref.palette,
      size = _ref.size,
      shadows = _ref.shadows,
      transitions = _ref.transitions,
      typography = _ref.typography;
  return {
    root: {
      display: 'flex',
      flexFlow: 'column wrap',
      alignContent: 'flex-start',
      width: '100%'
    }
  };
};

var Code =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, _getPrototypeOf(Code).apply(this, arguments));
  }

  _createClass(Code, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          children = _this$props.children;
      var className = (0, _classnames.default)(classes.root, classNameProp);
      return _react.default.createElement(_reactSyntaxHighlighter.PrismAsyncLight, {
        className: className,
        customStyle: {
          width: '100%',
          margin: 0,
          padding: 0,
          lineHeight: 1.7,
          fontSize: 15,
          border: 'none',
          backgroundColor: 'transparent'
        },
        language: "javascript",
        useInlineStyles: true,
        style: _prism.ghcolors
      }, children);
    }
  }]);

  return Code;
}(_react.default.Component);

var _default = (0, _withStyles.default)(styles)(Code);

exports.default = _default;