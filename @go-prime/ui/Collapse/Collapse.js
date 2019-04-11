"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _transitions = require("../utils/transitions");

var _withStyles = _interopRequireDefault(require("../withStyles"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var styles = function styles(_ref) {
  var size = _ref.size,
      transitions = _ref.transitions;
  return {
    expand: {
      overflow: 'hidden',
      animationTimingFunction: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
      animationDuration: _transitions.timing.short,
      willChange: 'transform',
      animationName: '$expand'
    },
    expandInverse: {
      overflow: 'hidden',
      animationTimingFunction: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
      animationDuration: _transitions.timing.short,
      willChange: 'transform',
      animationName: '$expandInverse'
    },
    collapseContainer: {
      overflow: 'hidden',
      transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    },
    collapseEntered: {
      height: 'auto',
      overflow: 'visible'
    },
    collapseWrapper: {
      display: 'flex',
      minHeight: 10,
      height: 'auto'
    },
    collapsed: {},
    collapseWrapperInner: {
      width: '100%'
    },
    '@keyframes expand': _transitions.expandAnimation,
    '@keyframes expandInverse': _transitions.expandAnimationInverse
  };
};

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      height: 0
    });

    _defineProperty(_assertThisInitialized(_this), "setContainerHeight", function () {
      var container = _reactDom.default.findDOMNode(_this.containerRef.current);

      var height = 0;
      var rectContainer;

      if (container) {
        rectContainer = container.getBoundingClientRect();
        height = container.offsetHeight;
        console.log('rectContainer.height', height);
      }

      _this.setState({
        height: height
      });
    });

    _defineProperty(_assertThisInitialized(_this), "processChild", function (state) {
      var _this$props = _this.props,
          children = _this$props.children,
          classes = _this$props.classes;
      var height = _this.state.height;
      var transitionStyle = {};
      var wrapperStyle = {};

      var child = _react.default.Children.only(children);

      var className = (0, _classnames.default)(child.props.className, classes.collapseContainer);

      switch (state) {
        case 'entering':
          transitionStyle = {
            minHeight: 0
          };
          break;

        case 'entered':
          transitionStyle = {
            minHeight: height
          };
          break;

        case 'exiting':
          break;

        case 'exited':
          transitionStyle = {
            paddingTop: 0,
            paddingBottom: 0,
            maxHeight: 0,
            height: 0,
            overflow: 'hidden'
          };
          wrapperStyle = {};
          break;
      }

      var childrenWrapper = _react.default.createElement("div", {
        className: classes.collapseWrapper,
        style: wrapperStyle,
        ref: _this.containerRef
      }, child.props.children);

      var extendedProps = _objectSpread({}, child.props, {
        className: className,
        style: _objectSpread({}, child.props.style, transitionStyle)
      });

      return _react.default.cloneElement(child, _objectSpread({}, extendedProps), childrenWrapper);
    });

    return _this;
  }

  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setContainerHeight();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.in !== this.props.in && this.props.in) {
        this.setContainerHeight();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          inProp = _this$props2.in,
          timeout = _this$props2.timeout;
      return _react.default.createElement(_reactTransitionGroup.Transition, {
        in: inProp,
        timeout: timeout
      }, this.processChild);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        in: false,
        timeout: {
          enter: 500,
          exit: 500
        }
      };
    }
  }]);

  return Collapse;
}(_react.default.Component);

Collapse.propTypes = {
  in: _propTypes.default.bool.isRequired
};

var _default = (0, _withStyles.default)(styles)(Collapse);

exports.default = _default;