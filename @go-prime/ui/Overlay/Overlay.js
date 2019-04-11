"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Transition = _interopRequireDefault(require("../Transition"));

var _polished = require("polished");

var _withStyles = _interopRequireDefault(require("../withStyles"));

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

var styles = function styles(_ref) {
  var size = _ref.size,
      palette = _ref.palette,
      zIndex = _ref.zIndex,
      typography = _ref.typography,
      transitions = _ref.transitions;
  return {
    root: {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      top: 0,
      left: 0,
      display: 'flex',
      transition: transitions.common,
      backgroundColor: (0, _polished.rgba)(palette.leadDarkAccent1, 0.2),
      zIndex: zIndex.overlay
    },
    transparent: {
      backgroundColor: 'transparent'
    }
  };
};

var Overlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Overlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Overlay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var onClick = _this.props.onClick;
      event.preventDefault();
      if (onClick) onClick(event);
    });

    return _this;
  }

  _createClass(Overlay, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classNameProp = _this$props.className,
          transparent = _this$props.transparent,
          open = _this$props.open,
          classes = _this$props.classes,
          other = _this$props.other;
      var className = (0, _classnames.default)(classes.root, transparent && classes.transparent, classNameProp);
      return _react.default.createElement(_Transition.default, {
        variant: "fade",
        in: open
      }, _react.default.createElement("div", _extends({
        onClick: this.onClick
      }, other, {
        className: className
      })));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        open: false,
        transparent: false,
        onClick: function onClick() {}
      };
    }
  }]);

  return Overlay;
}(_react.default.Component);

Overlay.propTypes = {
  open: _propTypes.default.bool.isRequired,
  transparent: _propTypes.default.bool,
  onClick: _propTypes.default.func.isRequired
};

var _default = (0, _withStyles.default)(styles)(Overlay);

exports.default = _default;