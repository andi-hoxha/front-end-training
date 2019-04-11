"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Created by LeutrimNeziri on 21/02/2019.
 */
var Theme =
/*#__PURE__*/
function () {
  function Theme() {
    _classCallCheck(this, Theme);
  }

  _createClass(Theme, null, [{
    key: "getTheme",
    value: function getTheme() {
      var theme = {
        palette: {
          leadColor: '#3cb9e2',
          leadAccent1: '#1b9ad1',
          leadAccent2: '#086c9e',
          leadDarkAccent1: '#34576a',
          leadDarkAccent2: '#334353',
          bgColor: '#ecf0f1',
          textColor: '#293642',
          textColorInverse: '#fff',
          disabledColor: '#8ca0b3',
          error: '#e93d3d',
          success: '#2ac866',
          warning: '#f5a623',
          navBgColor: '#334353',
          borderColor: '#d4d9de',
          common: {
            black: '#000',
            white: '#fff'
          }
        },
        size: {
          displayFontSize: 60,
          avatarSize: 48,
          headingFontSize: 28,
          iconSize: 24,
          headerFontSize: 18,
          titleFontSize: 16,
          defaultFontSize: 14,
          captionFontSize: 12,
          smallFontSize: 10,
          spacing: 8,
          baseRadius: 4,
          //if we want to scale or return every pixel to rem, em, ww ,vh or anything else we will use this function
          px: function px(num) {
            return num;
          }
        },
        typography: {
          weight: {
            black: 900,
            bold: 700,
            medium: 500,
            regular: 400,
            light: 200
          },
          fontFamily: 'Roboto, sans-serif'
        },
        transitions: {
          common: 'all ease-in-out 200ms',
          slide: 'translate 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
        },
        zIndex: {
          tooltip: 1100,
          popover: 1010,
          modal: 1000,
          drawer: 901,
          overlay: 900
        },
        sizes: {
          //TODO: calculate the size of each property depending on responsive breakpoints
          drawer: 350
        },
        shadows: {
          default: '0px 4px 8px 0px rgba(0, 0, 0, 0.13)',
          hover: '0px 3px 7px 0px rgba(0, 0, 0, 0.24)',
          popover: '0px 7px 13px 0px rgba(0, 0, 0, 0.17)',
          modal: '0px 18px 32px 0px rgba(0, 0, 0, 0.47)'
        }
      };
      return _objectSpread({}, theme, {
        typography: _objectSpread({}, theme.typography, {
          display: {
            fontSize: theme.size.displayFontSize,
            fontWeight: theme.typography.weight.light,
            color: theme.palette.textColor
          },
          heading: {
            fontSize: theme.size.headingFontSize,
            fontWeight: theme.typography.weight.medium,
            color: theme.palette.textColor
          },
          header: {
            fontSize: theme.size.headerFontSize,
            fontWeight: theme.typography.weight.medium,
            color: theme.palette.textColor
          },
          headerLight: {
            fontSize: theme.size.headerFontSize,
            fontWeight: theme.typography.weight.light,
            color: theme.palette.textColor
          },
          title: {
            fontSize: theme.size.titleFontSize,
            fontWeight: theme.typography.weight.black,
            color: theme.palette.textColor
          },
          content: {
            fontSize: theme.size.defaultFontSize,
            fontWeight: theme.typography.weight.medium,
            color: theme.palette.textColor
          }
        })
      });
    }
  }]);

  return Theme;
}();

exports.default = Theme;