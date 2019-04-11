"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Props = require("./Props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Position =
/*#__PURE__*/
function () {
  function Position() {
    _classCallCheck(this, Position);
  }

  _createClass(Position, null, [{
    key: "getPoperPositions",

    /**
     * it determines where to place a container depending on the given properties
     * e.g place a container horizontally from left of the target or vertically  from middle of the target etc
     * @param anchorEl - the target from where the element container will pop out
     * @param options -
     */
    value: function getPoperPositions(anchorEl, options) {
      var element;

      if (_react.default.isValidElement(anchorEl)) {
        element = ReactDOM.findDOMNode(anchorEl);
      } else {
        element = anchorEl;
      }

      var verticalOffset = options.verticalOffset,
          horizontalOffset = options.horizontalOffset,
          placeHorizontally = options.placeHorizontally,
          placeVertically = options.placeVertically;
      var _popoverPositions$hor = _Props.popoverPositions.horizontalOptions,
          right = _popoverPositions$hor.right,
          left = _popoverPositions$hor.left,
          middle = _popoverPositions$hor.middle;
      var _popoverPositions$ver = _Props.popoverPositions.verticalOptions,
          top = _popoverPositions$ver.top,
          bottom = _popoverPositions$ver.bottom,
          center = _popoverPositions$ver.center;
      /**
       * get coordinates of the anchor element
       * @type {ClientRect}
       */

      var rect = element.getBoundingClientRect();
      console.log('rect', rect);
      var style = {};
      var body = document.body;

      var convertToPositive = function convertToPositive(number) {
        if (number < 0) {
          return -number;
        }

        return number;
      }; // console.log(rect)


      switch (placeHorizontally) {
        case right:
          var rightVal = Math.round(body.offsetWidth - rect.right + horizontalOffset);
          style = _objectSpread({}, style, {
            right: convertToPositive(rightVal)
          });
          break;

        case left:
          var leftVal = 0;
          leftVal = Math.round(rect.left + horizontalOffset);
          style = _objectSpread({}, style, {
            right: undefined,
            left: convertToPositive(leftVal)
          });
          break;

        case middle:
          leftVal = Math.round(rect.left - rect.width / 2 + horizontalOffset); // rightVal = Math.round(rect.right - (rect.width / 2) + horizontalOffset)

          style = _objectSpread({}, style, {
            left: convertToPositive(leftVal) // right: convertToPositive(rightVal),

          });
          console.log(style);
          break;
      }

      switch (placeVertically) {
        case top:
          var topVal = Math.round(rect.top + rect.height + verticalOffset);
          style = _objectSpread({}, style, {
            top: convertToPositive(topVal)
          });
          break;

        case bottom:
          style = _objectSpread({}, style, {
            top: Math.round(rect.top + rect.height + horizontalOffset)
          });
          break;

        case center:
          style = _objectSpread({}, style, {
            left: Math.round(rect.top - rect.height / 2 + horizontalOffset)
          });
          break;
      }

      return style;
    }
  }]);

  return Position;
}();

exports.default = Position;