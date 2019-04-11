"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expandReverseAnimation60fps = exports.expandAnimation60fps = exports.expandAnimationInverse = exports.expandAnimation = exports.timing = void 0;

/**
 * Created by LeutrimNeziri on 07/03/2019.
 */
var timing = {
  shortest: 100,
  short: 200,
  normal: 250
};
exports.timing = timing;
var expandAnimation = {
  '0%': {
    transform: 'scaleY(0)',
    transformOrigin: '100% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  }
};
exports.expandAnimation = expandAnimation;
var expandAnimationInverse = {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0)',
    transformOrigin: '100% 0%',
    opacity: 0
  }
};
exports.expandAnimationInverse = expandAnimationInverse;
var expandAnimation60fps = {
  "0%": {
    transform: "scaleY(0)"
  },
  "3.44828%": {
    transform: "scaleY(0.13096)"
  },
  "6.89655%": {
    transform: "scaleY(0.24861)"
  },
  "10.34483%": {
    transform: "scaleY(0.3539)"
  },
  "13.7931%": {
    transform: "scaleY(0.44771)"
  },
  "17.24138%": {
    transform: "scaleY(0.53091)"
  },
  "20.68966%": {
    transform: "scaleY(0.60434)"
  },
  "24.13793%": {
    transform: "scaleY(0.66879)"
  },
  "27.58621%": {
    transform: "scaleY(0.72503)"
  },
  "31.03448%": {
    transform: "scaleY(0.77378)"
  },
  "34.48276%": {
    transform: "scaleY(0.81574)"
  },
  "37.93103%": {
    transform: "scaleY(0.85158)"
  },
  "41.37931%": {
    transform: "scaleY(0.88191)"
  },
  "44.82759%": {
    transform: "scaleY(0.90734)"
  },
  "48.27586%": {
    transform: "scaleY(0.92842)"
  },
  "51.72414%": {
    transform: "scaleY(0.94568)"
  },
  "55.17241%": {
    transform: "scaleY(0.95962)"
  },
  "58.62069%": {
    transform: "scaleY(0.97068)"
  },
  "62.06897%": {
    transform: "scaleY(0.9793)"
  },
  "65.51724%": {
    transform: "scaleY(0.98586)"
  },
  "68.96552%": {
    transform: "scaleY(0.99072)"
  },
  "72.41379%": {
    transform: "scaleY(0.99421)"
  },
  "75.86207%": {
    transform: "scaleY(0.99661)"
  },
  "79.31034%": {
    transform: "scaleY(0.99817)"
  },
  "82.75862%": {
    transform: "scaleY(0.99912)"
  },
  "86.2069%": {
    transform: "scaleY(0.99964)"
  },
  "89.65517%": {
    transform: "scaleY(0.99989)"
  },
  "93.10345%": {
    transform: "scaleY(0.99998)"
  },
  "96.55172%": {
    transform: "scaleY(1)"
  },
  "100%": {
    transform: "scaleY(1)"
  }
};
exports.expandAnimation60fps = expandAnimation60fps;
var expandReverseAnimation60fps = {
  "0%": {
    transform: "scaleY(7.63592)"
  },
  "3.44828%": {
    transform: "scaleY(7.63592)"
  },
  "6.89655%": {
    transform: "scaleY(4.02236)"
  },
  "10.34483%": {
    transform: "scaleY(2.82566)"
  },
  "13.7931%": {
    transform: "scaleY(2.23359)"
  },
  "17.24138%": {
    transform: "scaleY(1.88356)"
  },
  "20.68966%": {
    transform: "scaleY(1.6547)"
  },
  "24.13793%": {
    transform: "scaleY(1.49524)"
  },
  "27.58621%": {
    transform: "scaleY(1.37925)"
  },
  "31.03448%": {
    transform: "scaleY(1.29236)"
  },
  "34.48276%": {
    transform: "scaleY(1.22588)"
  },
  "37.93103%": {
    transform: "scaleY(1.17429)"
  },
  "41.37931%": {
    transform: "scaleY(1.1339)"
  },
  "44.82759%": {
    transform: "scaleY(1.10212)"
  },
  "48.27586%": {
    transform: "scaleY(1.0771)"
  },
  "51.72414%": {
    transform: "scaleY(1.05744)"
  },
  "55.17241%": {
    transform: "scaleY(1.04208)"
  },
  "58.62069%": {
    transform: "scaleY(1.03021)"
  },
  "62.06897%": {
    transform: "scaleY(1.02114)"
  },
  "65.51724%": {
    transform: "scaleY(1.01434)"
  },
  "68.96552%": {
    transform: "scaleY(1.00937)"
  },
  "72.41379%": {
    transform: "scaleY(1.00582)"
  },
  "75.86207%": {
    transform: "scaleY(1.0034)"
  },
  "79.31034%": {
    transform: "scaleY(1.00183)"
  },
  "82.75862%": {
    transform: "scaleY(1.00088)"
  },
  "86.2069%": {
    transform: "scaleY(1.00036)"
  },
  "89.65517%": {
    transform: "scaleY(1.00011)"
  },
  "93.10345%": {
    transform: "scaleY(1.00002)"
  },
  "96.55172%": {
    transform: "scaleY(1)"
  },
  "100%": {
    transform: "scaleY(1)"
  }
};
exports.expandReverseAnimation60fps = expandReverseAnimation60fps;