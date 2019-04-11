"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../withStyles"));

var _polished = require("polished");

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputVariants = {
  underlined: 'underlined',
  bordered: 'bordered',
  filled: 'filled',
  default: 'default'
};

var styles = function styles(_ref) {
  var size = _ref.size,
      palette = _ref.palette,
      typography = _ref.typography,
      transitions = _ref.transitions;
  return {
    /**
     * ======== ELEMENTS CLASSES =========
     */
    root: {
      display: 'flex',
      width: 300,
      flexFlow: 'column nowrap',
      position: 'relative',
      marginTop: size.spacing,
      marginBottom: size.spacing
    },
    placeholder: {
      width: 'auto',
      display: 'inline-flex',
      position: 'absolute',
      color: palette.disabledColor,
      transformOrigin: 'top left',
      top: 0,
      fontSize: size.defaultFontSize,
      lineHeight: 1,
      transition: transitions.common,
      padding: [0, size.spacing * 2]
    },

    /**
     * this class name helps to draw top lines for input when variant is set to default
     * note: do not use ore override this class it will break functionality
     */
    hiddenPlaceholder: {
      width: '100%',
      display: 'inline-flex',
      position: 'absolute',
      color: 'transparent',
      transformOrigin: 'top left',
      top: 0,
      lineHeight: 1,
      padding: [0, size.spacing * 2],
      fontSize: size.defaultFontSize * 0.75,
      letterSpacing: -8,
      pointerEvents: 'none',
      userSelect: 'none',
      transition: transitions.common
    },
    inputWrapper: {
      display: 'flex',
      flexFlow: 'row wrap',
      position: 'relative',
      transition: transitions.common,
      height: size.spacing * 5 - size.spacing / 4
    },
    input: {
      width: '100%',
      padding: [0, size.spacing * 2],
      border: 'none',
      backgroundColor: 'transparent',
      lineHeight: 1,
      fontSize: size.defaultFontSize,
      '&:focus': {
        outline: 'none'
      }
    },
    helperText: {
      display: 'inline-flex',
      textAlign: 'center',
      justifyContent: 'center',
      width: '100%',
      color: 'inherit',
      marginTop: size.spacing,
      fontSize: size.smallFontSize
    },

    /**
     * ======== END OF ELEMENTS CLASSES =========
     */

    /**
     * ======== STATE CLASSES =========
     * these rules will override the rules that has been set from variant classes and default classes
     */
    warning: {
      '&$underlined:not($error)': {
        '&$dirty': {
          '& $input,&$focused $placeholder,& $helperText': {
            color: palette.warning
          },
          '& $inputWrapper': {
            '&:after': {
              backgroundColor: palette.warning
            }
          }
        }
      },
      '&$bordered:not($error)': {
        '&$dirty': {
          '& $input,& $helperText': {
            color: palette.warning
          },
          '& $inputWrapper': {
            borderColor: palette.warning
          }
        }
      },
      '&$filled:not($error)': {
        '&$dirty': {
          '& $helperText': {
            color: palette.warning
          },
          '& $inputWrapper': {
            backgroundColor: (0, _polished.lighten)(0.25, palette.warning)
          }
        }
      },
      '&$default:not($error)': {
        '&$dirty': {
          '& $helperText, & $input, &$focused $placeholder': {
            color: palette.warning
          },
          '& $hiddenPlaceholder, & $inputWrapper': {
            borderColor: palette.warning
          }
        }
      }
    },
    error: {
      '&$underlined': {
        '&$dirty': {
          '& $input,&$focused $placeholder,& $helperText': {
            color: palette.error
          },
          '& $inputWrapper': {
            '&:after': {
              backgroundColor: palette.error
            }
          }
        }
      },
      '&$bordered': {
        '&$dirty': {
          '& $input,& $helperText': {
            color: palette.error
          },
          '& $inputWrapper': {
            borderColor: palette.error
          }
        }
      },
      '&$filled': {
        '&$dirty': {
          '& $helperText': {
            color: palette.error
          },
          '& $inputWrapper': {
            backgroundColor: (0, _polished.lighten)(0.25, palette.error)
          }
        }
      },
      '&$default': {
        '&$dirty': {
          '& $helperText, & $input, &$focused $placeholder': {
            color: palette.error
          },
          '& $hiddenPlaceholder, & $inputWrapper': {
            borderColor: palette.error
          }
        }
      }
    },
    disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      pointerEvents: 'none'
    },
    fullWidth: {
      width: '100%'
    },
    focused: {
      '&$underlined': {
        /**
         *if focused scale and place the label in top left corner
         */
        '& $placeholder': {
          //scale down the label to have 10px height
          transform: "translate(".concat(size.spacing / 2, "px, -").concat(size.spacing, "px) scale(0.75)")
        },

        /**
         * if focused and it has no error make the label and underline active
         */
        '&:not($error) $placeholder': {
          color: palette.leadColor
        },
        '&:not($error) $inputWrapper': {
          '&:after': {
            backgroundColor: palette.leadColor
          }
        }
      },
      '&$bordered': {
        '&:not($error) $helperText': {
          color: palette.leadColor
        },
        '&:not($error) $inputWrapper': {
          borderColor: palette.leadColor
        }
      },
      '&$filled': {
        '&:not($error):not($warning) $helperText': {
          color: palette.leadColor
        },
        '&:not($error):not($warning) $inputWrapper': {
          borderColor: palette.leadColor
        }
      },
      '&$default': {
        /**
         * same approach as the underlined variant
         */
        '& $placeholder': {
          transform: "translate(".concat(size.spacing / 2, "px, -").concat(size.spacing / 2, "px) scale(0.75)")
        },
        '& $hiddenPlaceholder': {
          letterSpacing: 'initial',
          '&:before': {
            marginRight: size.spacing
          },
          '&:after': {
            marginLeft: size.spacing
          }
        },
        '&:not($error) $hiddenPlaceholder': {
          borderColor: palette.leadColor
        },
        '&:not($error) $placeholder': {
          color: palette.leadColor
        },
        '&:not($error) $inputWrapper': {
          borderColor: palette.leadColor
        }
      }
    },
    dirty: {
      '&$underlined': {
        /**
         *if dirty(has value) and variant underlined scale and place the label in top left corner
         */
        '& $placeholder': {
          //scale down the label to have 10px height
          transform: "translate(".concat(size.spacing / 2, "px, -").concat(size.spacing, "px) scale(0.75)")
        }
      },
      '&$default': {
        '& $placeholder': {
          //scale down the label to have 10px height
          transform: "translate(".concat(size.spacing / 2, "px, -").concat(size.spacing / 2, "px) scale(0.75)")
        },
        '& $hiddenPlaceholder': {
          letterSpacing: 'initial',
          '&:before': {
            marginRight: size.spacing
          },
          '&:after': {
            marginLeft: size.spacing
          }
        }
      }
    },

    /**
     * ======== END OF STATE CLASSES =========
     */

    /**
     * ======== VARIANT CLASSES =========
     * these rules are meant to be used only to change the look and feel of each input
     * note: style the elements from the root class name for the given variant
     */

    /*** if variant === underlined */
    underlined: {
      /**
       * if is not focused move the label in line with input
       */
      '& $placeholder': {
        transform: "translate(0, ".concat(size.spacing + size.spacing / 2, "px) scale(1)"),
        cursor: 'text'
      },
      '& $inputWrapper': {
        position: 'relative',
        '&:after': {
          content: '""',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          height: 1,
          transition: transitions.common,
          backgroundColor: palette.disabledColor
        }
      },
      '& $input': {
        '&::placeholder': {
          opacity: 0
        }
      }
    },

    /*** if variant === bordered */
    bordered: {
      '& $inputWrapper': {
        borderRadius: size.baseRadius,
        border: "1px solid ".concat(palette.disabledColor)
      },
      '& $input': {
        '&::placeholder': {
          opacity: 1,
          color: palette.disabledColor
        }
      }
    },

    /*** if variant === filled */
    filled: {
      '& $inputWrapper': {
        border: "1px solid transparent",
        borderRadius: size.baseRadius,
        backgroundColor: (0, _polished.lighten)(0.2, palette.disabledColor)
      },
      '& $input': {
        '&::placeholder': {
          opacity: 1,
          color: palette.disabledColor
        }
      }
    },

    /*** if variant === default */
    default: {
      '& $placeholder': {
        transform: "translate(0, ".concat(size.spacing + size.spacing / 2, "px) scale(1)"),
        cursor: 'text'
      },
      '& $hiddenPlaceholder': {
        borderColor: palette.disabledColor,
        '&:after, &:before': {
          content: '""',
          flex: 1,
          borderRadius: [0, size.baseRadius, size.baseRadius, 0],
          borderTop: "1px solid",
          borderColor: 'inherit'
        },
        '&:before': {
          borderRadius: [size.baseRadius, 0, 0, size.baseRadius],
          maxWidth: size.spacing,
          marginLeft: -size.spacing * 2
        },
        '&:after': {
          marginRight: -size.spacing * 2
        }
      },
      '& $inputWrapper': {
        borderRadius: size.baseRadius,
        border: "1px solid ".concat(palette.disabledColor),
        borderTop: 0
      },
      '& $input': {
        '&::placeholder': {
          opacity: 0
        }
      }
      /**
       * ======== END OF VARIANT CLASSES =========
       */

    }
  };
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      focused: false,
      dirty: false,
      value: undefined,

      /**
       * Provide an id from prop or generate a new one in order to get the input focused even when user clicks in input label as well
       */
      id: _this.props.id || _uuid.default.v1()
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        focused: true
      });

      if (onFocus) onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        focused: false
      });

      if (onBlur) onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value;
      /*
       for uncontrolled component register value in local state in order to detect if it is dirty
       */

      if (value === undefined) {
        _this.setState({
          value: event.target.value
        });
      }

      if (onChange) onChange(event);
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",

    /**
     * renders an input depending of the given props
     * @return {React}
     */
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          classNameProp = _this$props2.className,
          placeholder = _this$props2.placeholder,
          helperText = _this$props2.helperText,
          error = _this$props2.error,
          warning = _this$props2.warning,
          fullWidth = _this$props2.fullWidth,
          type = _this$props2.type,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          variant = _this$props2.variant,
          value = _this$props2.value,
          name = _this$props2.name,
          other = _this$props2.other;
      var _this$state = this.state,
          focused = _this$state.focused,
          dirty = _this$state.dirty,
          id = _this$state.id;
      var className = (0, _classnames.default)(classes.root, error && classes.error, warning && classes.warning, focused && classes.focused, disabled && classes.disabled, dirty && classes.dirty, fullWidth && classes.fullWidth, variant === inputVariants.underlined && classes.underlined, variant === inputVariants.bordered && classes.bordered, variant === inputVariants.filled && classes.filled, variant === inputVariants.default && classes.default, classNameProp);
      var inputListeners = (!disabled || !readOnly) && {
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      };
      var showPlaceholder = placeholder && (variant === inputVariants.underlined || variant === inputVariants.default);
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement("div", {
        className: classes.inputWrapper
      }, showPlaceholder && _react.default.createElement("label", {
        htmlFor: id,
        className: classes.placeholder
      }, placeholder), variant === inputVariants.default && _react.default.createElement("label", {
        className: classes.hiddenPlaceholder
      }, placeholder), _react.default.createElement("input", _extends({
        className: classes.input,
        value: value,
        type: type,
        id: id,
        name: name,
        placeholder: placeholder
      }, inputListeners, other))), helperText && _react.default.createElement("span", {
        className: classes.helperText
      }, helperText));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      /**
       * TODO: Check also when adding support for chip inputs and for select input if an option is selected
       */
      if (props.value || state.value) {
        return {
          dirty: true
        };
      }

      return {
        dirty: false
      };
    }
    /**
     *
     * @param event
     */

  }, {
    key: "defaultProps",
    get: function get() {
      return {
        variant: inputVariants.default,
        type: 'text',
        // all other types of input, number , date, range
        placeholder: '',
        helperText: '',
        error: false,
        warning: false,
        value: undefined,
        fullWidth: true,
        disabled: false
      };
    }
  }]);

  return Input;
}(_react.default.Component);

Input.propTypes = {
  /**
   * variant: It determines how the input will look after it gets rendered,
   * options are: filled, underlined, bordered and default(if not specified, default option will be applied).
   */
  variant: _propTypes.default.oneOf(Object.keys(inputVariants)),

  /**
   * placeholder: It shows a text or a label that determines what the input does, eg. name, password etc...
   */
  placeholder: _propTypes.default.string,

  /**
   * helperText: It shows a small text under the input that informs you something, useful for handling errors and warnings,
   * note: if input has error or any warning this text will be coloured with the theme colors for Errors and Warnings.
   */
  helperText: _propTypes.default.string,

  /**
   * error: If true, it will make the colors and borders with the error color.
   */
  error: _propTypes.default.bool,

  /**
   * warning: If true, it will make the colors and borders with the warning color.
   */
  warning: _propTypes.default.bool,

  /**
   * fullWidth: If true, it will fill the available space determined from the container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * disabled: If true, it will appear as a disabled(half transparent) input and it will not fire any event at all.
   */
  disabled: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(styles)(Input);

exports.default = _default;