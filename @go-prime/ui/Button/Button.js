"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _withStyles = _interopRequireDefault(require("../withStyles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buttonVariants = {
  raised: 'raised',
  outlined: 'outlined',
  flat: 'flat'
};
var buttonColors = {
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  error: 'error',
  inherit: 'inherit'
};

var styles = function styles(_ref) {
  var palette = _ref.palette,
      size = _ref.size,
      transitions = _ref.transitions,
      typography = _ref.typography,
      shadows = _ref.shadows;
  return {
    /**
     * ======== ELEMENTS CLASSES =========
     */
    root: {
      cursor: 'pointer',
      width: 'auto',
      display: 'inline-flex',
      padding: [size.spacing * 2 - size.spacing / 2, size.spacing * 2],
      borderRadius: size.baseRadius,
      transition: transitions.common,
      lineHeight: 1,
      border: 'none',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '&:focus': {
        outline: 'none'
      },
      '&$disabled': {
        cursor: 'not-allowed',
        opacity: 0.6
      },
      '&:active:not($disabled), &$pressed:not($disabled)': {
        transition: 'none',
        boxShadow: "inset 1px 1px 4px -1px ".concat((0, _polished.rgba)(palette.common.black, 0.3))
      }
    },

    /**
     * ======== STATE CLASSES =========
     * these rules will override the rules that has been set from variant classes and default classes
     */
    pressed: {},
    disabled: {},
    fullWidth: {
      width: '100%'
    },

    /**
     * ======== VARIANT CLASSES =========
     * these rules are meant to be used only to change the look and feel of each button variant
     * note: style the elements from the root class name for the given variant
     */
    flat: {
      '&:hover:not($disabled), &$pressed:not($disabled)': {
        backgroundColor: (0, _polished.rgba)(palette.common.black, 0.1)
      },
      '&$inherit': {
        color: 'inherit'
      },
      '&$default': {
        color: palette.textColor
      },
      '&$primary': {
        color: palette.leadColor,
        '&:hover:not($disabled), &$pressed:not($disabled)': {
          backgroundColor: (0, _polished.rgba)(palette.leadColor, 0.1)
        }
      },
      '&$error': {
        color: palette.error,
        '&:hover:not($disabled), &$pressed:not($disabled)': {
          backgroundColor: (0, _polished.rgba)(palette.error, 0.1)
        }
      },
      '&$success': {
        color: palette.success,
        '&:hover:not($disabled), &$pressed:not($disabled)': {
          backgroundColor: (0, _polished.rgba)(palette.success, 0.1)
        }
      },
      '&$warning': {
        color: palette.warning,
        '&:hover:not($disabled), &$pressed:not($disabled)': {
          backgroundColor: (0, _polished.rgba)(palette.warning, 0.1)
        }
      }
    },
    outlined: {
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      '&:hover:not($disabled)': {
        backgroundColor: (0, _polished.rgba)(palette.common.black, 0.1)
      },
      '&:active:not($disabled)': {
        borderColor: 'transparent',
        backgroundColor: (0, _polished.rgba)(palette.common.black, 0.15)
      },
      '&$default': {
        color: palette.textColor,
        borderColor: palette.borderColor
      },
      '&$primary': {
        color: palette.leadColor,
        borderColor: palette.leadColor,
        '&:hover:not($disabled), &$pressed:not($disabled)': {
          backgroundColor: (0, _polished.rgba)(palette.leadColor, 0.1)
        },
        '&:active:not($disabled)': {
          borderColor: 'transparent'
        }
      },
      '&$error': {
        color: palette.error,
        borderColor: palette.error,
        '&:hover:not($disabled), &$pressed:not($disabled)': {
          backgroundColor: (0, _polished.rgba)(palette.error, 0.1)
        },
        '&:active:not($disabled)': {
          borderColor: 'transparent'
        }
      },
      '&$success': {
        color: palette.success,
        borderColor: palette.success,
        '&:hover:not($disabled), &$pressed:not($disabled)': {
          backgroundColor: (0, _polished.rgba)(palette.success, 0.1)
        },
        '&:active:not($disabled)': {
          borderColor: 'transparent'
        }
      },
      '&$warning': {
        color: palette.warning,
        borderColor: palette.warning,
        '&:hover:not($disabled), &$pressed:not($disabled)': {
          backgroundColor: (0, _polished.rgba)(palette.warning, 0.1)
        },
        '&:active:not($disabled)': {
          borderColor: 'transparent'
        }
      }
    },
    raised: {
      backgroundColor: palette.common.white,
      color: palette.textColorInverse,
      boxShadow: shadows.default,
      '&:hover:not($disabled):not(:active):not($pressed)': {
        boxShadow: shadows.hover
      },
      '&$default': {
        color: palette.textColor
      },
      '&$primary': {
        backgroundColor: palette.leadColor
      },
      '&$error': {
        backgroundColor: palette.error
      },
      '&$success': {
        backgroundColor: palette.success
      },
      '&$warning': {
        backgroundColor: palette.warning
      }
    },
    inherit: {},
    default: {},
    primary: {},
    error: {},
    success: {},
    warning: {}
  };
};

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", null);

    _defineProperty(_assertThisInitialized(_this), "setButtonRef", function (btnRef) {
      _this.ref = btnRef;
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          classNameProp = _this$props.className,
          disabled = _this$props.disabled,
          fullWidth = _this$props.fullWidth,
          pressed = _this$props.pressed,
          classes = _this$props.classes,
          variant = _this$props.variant,
          color = _this$props.color,
          onMouseDown = _this$props.onMouseDown,
          onMouseUp = _this$props.onMouseUp,
          onMouseMove = _this$props.onMouseMove,
          onMouseOver = _this$props.onMouseOver,
          onClick = _this$props.onClick,
          onMouseOut = _this$props.onMouseOut,
          props = _objectWithoutProperties(_this$props, ["children", "className", "disabled", "fullWidth", "pressed", "classes", "variant", "color", "onMouseDown", "onMouseUp", "onMouseMove", "onMouseOver", "onClick", "onMouseOut"]);

      var variantClasses;
      var colorClasses;

      switch (variant) {
        case buttonVariants.raised:
          variantClasses = classes.raised;
          break;

        case buttonVariants.outlined:
          variantClasses = classes.outlined;
          break;

        case buttonVariants.flat:
        default:
          variantClasses = classes.flat;
      }

      switch (color) {
        case buttonColors.primary:
          colorClasses = classes.primary;
          break;

        case buttonColors.success:
          colorClasses = classes.success;
          break;

        case buttonColors.warning:
          colorClasses = classes.warning;
          break;

        case buttonColors.error:
          colorClasses = classes.error;
          break;

        case buttonColors.inherit:
          colorClasses = classes.inherit;
          break;

        default:
          colorClasses = classes.default;
      }

      var className = (0, _classnames.default)(classes.root, variantClasses, colorClasses, disabled && classes.disabled, fullWidth && classes.fullWidth, pressed && classes.pressed, classNameProp);
      var listeners = disabled ? {} : {
        onClick: onClick,
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        onMouseMove: onMouseMove,
        onMouseOver: onMouseOver,
        onMouseOut: onMouseOut
      };
      return _react.default.createElement("button", _extends({
        className: className,
        ref: this.setButtonRef
      }, listeners, props), children);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        variant: buttonVariants.flat,
        color: buttonColors.default,
        disabled: false,
        fullWidth: false
      };
    }
  }]);

  return Button;
}(_react.default.Component);

exports.Button = Button;
Button.propTypes = {
  /**
   * variant: It determines how the button will look after it gets rendered,
   * options are: raised, flat, outlined and default(if not specified, default option will be applied).
   */
  variant: _propTypes.default.oneOf(Object.keys(buttonVariants)),

  /**
   * color: It determines the color of the standard buttons,
   * note: try to avoid changing colors from style or class names in order have the button styled in every state other vise properties will be overwritten
   */
  color: _propTypes.default.oneOf(Object.keys(buttonColors)),

  /**
   * disabled: if true, buttons will appear as disabled half visible and will not fire any event
   */
  disabled: _propTypes.default.bool,

  /**
   * classes the class names to style the button,
   * you can use classes for a specific state such are hover, pressed or the ones representing the colors such are success warning and others
   */
  classes: _propTypes.default.object,

  /**
   * if set to true the button will get the 100% width of the parent element
   */
  fullWidth: _propTypes.default.bool,

  /**
   * if true buttons will appear as pressed, helpful when used to attach a drop down menu under it
   */
  pressed: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(styles)(Button);

exports.default = _default;