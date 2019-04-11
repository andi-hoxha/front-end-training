"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../withStyles"));

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

var depthOptions = {
  default: 'default',
  hover: 'hover',
  popover: 'popover',
  modal: 'modal'
};

var styles = function styles(_ref) {
  var palette = _ref.palette,
      size = _ref.size,
      shadows = _ref.shadows,
      transitions = _ref.transitions,
      typography = _ref.typography;
  return {
    root: {
      display: 'flex',
      borderRadius: size.baseRadius,
      boxShadow: shadows.default,
      backgroundColor: palette.common.white,
      padding: size.spacing * 2
    },
    transparent: {
      backgroundColor: 'transparent'
    },
    default: {
      boxShadow: shadows.default
    },
    hover: {
      boxShadow: shadows.hover
    },
    popover: {
      boxShadow: shadows.popover
    },
    modal: {
      boxShadow: shadows.modal
    }
  };
};

var Paper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Paper, _React$Component);

  function Paper() {
    _classCallCheck(this, Paper);

    return _possibleConstructorReturn(this, _getPrototypeOf(Paper).apply(this, arguments));
  }

  _createClass(Paper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          children = _this$props.children,
          transparent = _this$props.transparent,
          depth = _this$props.depth,
          other = _objectWithoutProperties(_this$props, ["classes", "className", "children", "transparent", "depth"]);

      var className = (0, _classnames.default)(classes.root, transparent && classes.transparent, depth === depthOptions.default && classes.default, depth === depthOptions.hover && classes.hover, depth === depthOptions.popover && classes.popover, depth === depthOptions.modal && classes.modal, classNameProp);
      return _react.default.createElement("div", _extends({
        className: className
      }, other), children);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        transparent: false,
        depth: depthOptions.default //default,hover, popover, modal

      };
    }
  }]);

  return Paper;
}(_react.default.Component);

Paper.propTypes = {
  transparent: _propTypes.default.bool,
  depth: _propTypes.default.oneOf(Object.keys(depthOptions))
};

var _default = (0, _withStyles.default)(styles)(Paper);

exports.default = _default;