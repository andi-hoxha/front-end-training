"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _transitions = require("@go-prime/ui/utils/transitions");

var _reactTransitionGroup = require("react-transition-group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Slide =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slide, _React$Component);

  function Slide() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Slide);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slide)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getSlideTransition", function (direction) {
      var style = {
        entering: {
          transform: 'translateX(-100%)',
          transformOrigin: 'left',
          boxShadow: 'none',
          transitionProperty: 'transform'
        },
        entered: {
          transform: 'translateX(0)',
          transformOrigin: 'left',
          transitionProperty: 'transform'
        },
        exiting: {
          transform: 'translateX(-100%)',
          transformOrigin: 'left',
          transitionProperty: 'transform'
        },
        exited: {
          display: 'none'
        }
      };

      if (direction === 'right') {
        style = _objectSpread({}, style, {
          entering: _objectSpread({}, style.entering, {
            transformOrigin: 'right'
          }),
          entered: _objectSpread({}, style.entered, {
            transformOrigin: 'right'
          }),
          exiting: _objectSpread({}, style.exiting, {
            transformOrigin: 'right'
          })
        });
      }

      return style;
    });

    _defineProperty(_assertThisInitialized(_this), "processChild", function (state) {
      var children = _this.props.children;

      var _this$getTransition = _this.getTransition(),
          _this$getTransition$d = _this$getTransition.defaultStyle,
          defaultStyle = _this$getTransition$d === void 0 ? {} : _this$getTransition$d,
          _this$getTransition$t = _this$getTransition.transitionStyle,
          transitionStyle = _this$getTransition$t === void 0 ? {} : _this$getTransition$t;

      var child = _react.default.Children.only(children);

      return _react.default.cloneElement(child, _objectSpread({}, child.props, {
        style: _objectSpread({}, child.props.style, defaultStyle, transitionStyle[state])
      }));
    });

    return _this;
  }

  _createClass(Slide, [{
    key: "getTransition",
    value: function getTransition() {
      var direction = this.props.direction;
      var defaultStyle = {
        transition: "all ".concat(_transitions.timing.short, "ms ease-in-out")
      };
      var transitionStyle = this.getSlideTransition(direction);
      return {
        defaultStyle: defaultStyle,
        transitionStyle: transitionStyle
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inProp = _this$props.in,
          timeout = _this$props.timeout;
      return _react.default.createElement(_reactTransitionGroup.Transition, {
        in: inProp,
        timeout: timeout
      }, this.processChild);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        direction: 'left',
        //if variant === slide choose between right left bottom top,
        in: false,
        timeout: {
          enter: 150,
          exit: 150
        }
      };
    }
  }]);

  return Slide;
}(_react.default.Component);

Slide.propTypes = {
  in: _propTypes.default.bool.isRequired
};
var _default = Slide;
exports.default = _default;