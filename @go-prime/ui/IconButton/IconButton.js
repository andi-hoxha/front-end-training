"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("../withStyles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _polished = require("polished");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      typography = _ref.typography;
  return {
    root: {
      cursor: 'pointer',
      width: 'auto',
      display: 'inline-flex',
      padding: size.spacing / 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: (0, _polished.rgba)(palette.common.black, 0.1)
      }
    }
  };
};

var IconButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconButton, _React$Component);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconButton).apply(this, arguments));
  }

  _createClass(IconButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classNameProp = _this$props.className,
          children = _this$props.children,
          color = _this$props.color,
          disabled = _this$props.disabled,
          variant = _this$props.variant,
          classes = _this$props.classes,
          onClick = _this$props.onClick,
          onMouseDown = _this$props.onMouseDown,
          onMouseUp = _this$props.onMouseUp,
          onMouseMove = _this$props.onMouseMove,
          onMouseOver = _this$props.onMouseOver,
          onMouseOut = _this$props.onMouseOut,
          props = _objectWithoutProperties(_this$props, ["className", "children", "color", "disabled", "variant", "classes", "onClick", "onMouseDown", "onMouseUp", "onMouseMove", "onMouseOver", "onMouseOut"]);

      var className = (0, _classnames.default)(classes.root, classNameProp);
      var listeners = disabled ? {} : {
        onClick: onClick,
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        onMouseMove: onMouseMove,
        onMouseOver: onMouseOver,
        onMouseOut: onMouseOut
      };
      return _react.default.createElement(_Button.default, _extends({
        className: className,
        color: color || 'inherit',
        variant: variant || 'flat'
      }, listeners, props), children);
    }
  }]);

  return IconButton;
}(_react.default.Component);

exports.IconButton = IconButton;

var _default = (0, _withStyles.default)(styles)(IconButton);

exports.default = _default;