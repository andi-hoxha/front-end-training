"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../withStyles"));

var _Paper = _interopRequireDefault(require("../Paper"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      padding: 0
    },
    header: {
      minHeight: size.spacing * 8,
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      padding: [size.spacing * 2, size.spacing * 3]
    },
    title: _objectSpread({
      flex: 1
    }, typography.header),
    content: {
      flex: 1,
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      width: '100%',
      transition: transitions.common,
      padding: [size.spacing * 2, size.spacing * 3]
    },
    expandableContent: {
      width: '100%',
      transition: transitions.common,
      height: 0,
      overflow: 'hidden',
      display: 'flex',
      padding: [0, size.spacing * 3]
    },
    expandableContentOpen: {
      minHeight: 200,
      height: 'auto',
      padding: [size.spacing * 2, size.spacing * 3]
    },
    actions: {
      width: '100%',
      padding: [size.spacing * 2, size.spacing * 3]
    }
  };
};

var Card =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_this), "onMoreClick", function (event) {
      event.preventDefault();

      _this.setState(function (prevState) {
        return {
          open: !prevState.open
        };
      });
    });

    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          depth = _this$props.depth,
          title = _this$props.title,
          headerIcon = _this$props.headerIcon,
          children = _this$props.children,
          expandableContent = _this$props.expandableContent,
          actions = _this$props.actions,
          other = _objectWithoutProperties(_this$props, ["classes", "className", "depth", "title", "headerIcon", "children", "expandableContent", "actions"]);

      var open = this.state.open;
      var className = (0, _classnames.default)(classes.root, classNameProp);
      return _react.default.createElement(_Paper.default, _extends({
        className: className,
        depth: depth
      }, other), _react.default.createElement("div", {
        className: classes.header
      }, _react.default.createElement("span", {
        className: classes.title
      }, title), headerIcon && _react.default.createElement(_IconButton.default, {
        onClick: this.onMoreClick
      }, headerIcon)), _react.default.createElement("div", {
        className: classes.content
      }, expandableContent && _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.expandableContent, open && classes.expandableContentOpen)
      }, expandableContent), children), actions && _react.default.createElement("div", {
        className: classes.actions
      }, actions));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        title: '',
        actions: [],
        depth: 'default',
        headerIcon: null
      };
    }
  }]);

  return Card;
}(_react.default.Component);

var _default = (0, _withStyles.default)(styles)(Card);

exports.default = _default;