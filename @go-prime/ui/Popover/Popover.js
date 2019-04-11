"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../withStyles"));

var _Paper = _interopRequireDefault(require("../Paper"));

var _Transition = _interopRequireDefault(require("../Transition"));

var _ClickAwayListener = _interopRequireDefault(require("../ClickAwayListener"));

var _Position = _interopRequireDefault(require("../utils/Position"));

var _Props = require("../utils/Props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var styles = function styles(_ref) {
  var size = _ref.size,
      palette = _ref.palette,
      typography = _ref.typography,
      transitions = _ref.transitions,
      zIndex = _ref.zIndex;
  return {
    root: {
      position: 'fixed',
      zIndex: zIndex.popover,
      width: 200
    }
  };
};

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      //it determines if it has an element and it could place the paper under the given position
      dirty: false,
      style: {}
    });

    _defineProperty(_assertThisInitialized(_this), "containerRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "getCoordinates", function () {
      var _this$props = _this.props,
          anchorEl = _this$props.anchorEl,
          placeHorizontally = _this$props.placeHorizontally,
          placeVertically = _this$props.placeVertically,
          verticalOffset = _this$props.verticalOffset,
          horizontalOffset = _this$props.horizontalOffset;
      var dirty = _this.state.dirty; // if no anchor el supplied as prop don't do anything

      if (!dirty) {
        return;
      }

      var options = {
        verticalOffset: verticalOffset,
        horizontalOffset: horizontalOffset,
        placeHorizontally: placeHorizontally,
        placeVertically: placeVertically
      };

      var style = _Position.default.getPoperPositions(anchorEl, options);

      _this.setState({
        style: style
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function (event) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          anchorEl = _this$props2.anchorEl;

      var container = _reactDom.default.findDOMNode(_this.containerRef.current);

      if (event.target === anchorEl) {
        console.log('the element clicked is the target');
        return;
      }

      if (event.target === container) {
        console.log('the element clicked is the container');
        return;
      }

      if (onClose) onClose(event);
    });

    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.dirty !== this.state.dirty && this.state.dirty) {
        this.getCoordinates();
      }
    }
    /**
     * TODO: other props to take into consideration
     * form which point to display the container horizontally
     * from which point to display the container vertically
     * support offset for both axis
     */

    /**
     * TODO: use this logic for tooltips and other components, make this an utility function
     * TODO: add support to automatically place in opposite direction of target element if no available room in window
     * get the coordinates of the anchor element
     * and position the content at the requested place
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          classes = _this$props3.classes,
          classNameProp = _this$props3.className,
          open = _this$props3.open,
          children = _this$props3.children,
          anchorEl = _this$props3.anchorEl,
          placeHorizontally = _this$props3.placeHorizontally,
          placeVertically = _this$props3.placeVertically,
          verticalOffset = _this$props3.verticalOffset,
          styleProp = _this$props3.style,
          horizontalOffset = _this$props3.horizontalOffset,
          other = _objectWithoutProperties(_this$props3, ["classes", "className", "open", "children", "anchorEl", "placeHorizontally", "placeVertically", "verticalOffset", "style", "horizontalOffset"]);

      var style = this.state.style;
      var className = (0, _classnames.default)(classes.root, classNameProp);
      /*console.log('la style', style)
       console.log('is dirty', this.state.dirty)*/

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Transition.default, {
        in: open,
        variant: 'collapse'
      }, _react.default.createElement(_Paper.default, _extends({
        depth: 'popover',
        className: className,
        ref: this.containerRef,
        style: _objectSpread({}, style, styleProp)
      }, other), children)), open && _react.default.createElement(_ClickAwayListener.default, {
        onClick: this.onClose
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.anchorEl) {
        return {
          dirty: true
        };
      }

      return {
        dirty: false
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      var horizontalOptions = _Props.popoverPositions.horizontalOptions,
          verticalOptions = _Props.popoverPositions.verticalOptions;
      return {
        open: false,
        anchorEl: null,
        placeHorizontally: horizontalOptions.left,
        placeVertically: verticalOptions.top,
        verticalOffset: 8,
        horizontalOffset: 0
      };
    }
  }]);

  return Popover;
}(_react.default.Component);

Popover.propTypes = {
  open: _propTypes.default.bool.isRequired,
  anchorEl: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
  onClose: _propTypes.default.func,
  placeHorizontally: _propTypes.default.oneOf(Object.keys(_Props.popoverPositions.horizontalOptions)),
  placeVertically: _propTypes.default.oneOf(Object.keys(_Props.popoverPositions.verticalOptions)),
  verticalOffset: _propTypes.default.number,
  horizontalOffset: _propTypes.default.number
};

var _default = (0, _withStyles.default)(styles, {
  withTheme: true
})(Popover);

exports.default = _default;