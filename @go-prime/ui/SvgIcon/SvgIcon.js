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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = function styles(_ref) {
  var size = _ref.size;
  return {
    root: {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0
    },
    defaultFontSize: {
      fontSize: size.iconSize
    },
    inheritFontSize: {
      fontSize: 'inherit'
    }
  };
};

var SvgIcon = function SvgIcon(props) {
  var classes = props.classes,
      children = props.children,
      classNameProp = props.className,
      fontSize = props.fontSize,
      nativeColor = props.nativeColor,
      viewBox = props.viewBox,
      other = _objectWithoutProperties(props, ["classes", "children", "className", "fontSize", "nativeColor", "viewBox"]); //TODO: add color property


  var className = (0, _classnames.default)(classes.root, fontSize === 'default' && classes.defaultFontSize, fontSize === 'inherit' && classes.inheritFontSize, classNameProp);
  return _react.default.createElement("svg", _extends({
    color: nativeColor,
    className: className,
    viewBox: viewBox,
    focusable: "false"
  }, other), children);
};

SvgIcon.defaultProps = {
  color: 'inherit',
  fontSize: 'default',
  viewBox: '0 0 30 30'
};

var _default = (0, _withStyles.default)(styles)(SvgIcon);

exports.default = _default;