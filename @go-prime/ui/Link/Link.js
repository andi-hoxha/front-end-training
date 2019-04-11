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

/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
var styles = function styles(_ref) {
  var size = _ref.size,
      transitions = _ref.transitions;
  return {};
};

var Link = function Link(props) {
  return _react.default.createElement("a", props);
};

var _default = (0, _withStyles.default)(styles)(Link);

exports.default = _default;