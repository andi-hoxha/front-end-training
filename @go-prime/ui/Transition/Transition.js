"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Fade = _interopRequireDefault(require("../Fade"));

var _Slide = _interopRequireDefault(require("../Slide"));

var _Collapse = _interopRequireDefault(require("../Collapse"));

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

var transitionVariants = {
  fade: 'fade',
  slide: 'slide',
  grow: 'grow',
  collapse: 'collapse'
};

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition() {
    _classCallCheck(this, Transition);

    return _possibleConstructorReturn(this, _getPrototypeOf(Transition).apply(this, arguments));
  }

  _createClass(Transition, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inProp = _this$props.in,
          variant = _this$props.variant,
          children = _this$props.children,
          timeout = _this$props.timeout;
      var transition = undefined;

      switch (variant) {
        case transitionVariants.fade:
          transition = _react.default.createElement(_Fade.default, {
            in: inProp,
            timeout: timeout
          }, children);
          break;

        case transitionVariants.slide:
          transition = _react.default.createElement(_Slide.default, {
            in: inProp,
            timeout: timeout
          }, children);
          break;

        case transitionVariants.collapse:
          transition = _react.default.createElement(_Collapse.default, {
            in: inProp,
            timeout: timeout
          }, children);
          break;
      }

      return transition;
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        direction: 'left',
        //if variant === slide choose between right left bottom top
        variant: 'slide',
        // slide, zoom, grow, collapse, fade,
        in: false,
        timeout: {
          enter: 150,
          exit: 150
        }
      };
    }
  }]);

  return Transition;
}(_react.default.Component);

Transition.propTypes = {
  in: _propTypes.default.bool.isRequired,
  variant: _propTypes.default.oneOf(Object.keys(transitionVariants)),
  timeout: _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })
};
var _default = Transition;
exports.default = _default;