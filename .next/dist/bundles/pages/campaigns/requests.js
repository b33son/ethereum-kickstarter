module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/routes.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson
 */

var routes = __webpack_require__(6)();
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/detail').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(1);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(2);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./components/Header.js
/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/header.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson at b33son@gmail.com
 */





/* harmony default export */ var Header = (function () {
  return external__react__default.a.createElement(
    external__semantic_ui_react_["Menu"],
    { style: { marginTop: "10px" } },
    external__react__default.a.createElement(
      external__semantic_ui_react_["Menu"].Item,
      null,
      external__react__default.a.createElement(
        routes["Link"],
        { route: '/' },
        external__react__default.a.createElement(
          'a',
          null,
          'Ethereum Kickstarter'
        )
      )
    ),
    external__react__default.a.createElement(
      external__semantic_ui_react_["Menu"].Menu,
      { position: 'right' },
      external__react__default.a.createElement(
        external__semantic_ui_react_["Menu"].Item,
        null,
        external__react__default.a.createElement(
          routes["Link"],
          { route: '/' },
          external__react__default.a.createElement(
            'a',
            null,
            'Campaigns'
          )
        )
      ),
      external__react__default.a.createElement(
        external__semantic_ui_react_["Menu"].Item,
        null,
        external__react__default.a.createElement(
          routes["Link"],
          { route: '/campaigns/new' },
          external__react__default.a.createElement(
            'a',
            null,
            '+'
          )
        )
      )
    )
  );
});
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.js
/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/layout.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson at b33son@gmail.com
 */





/* harmony default export */ var Layout = __webpack_exports__["a"] = (function (props) {
  return external__react__default.a.createElement(
    external__semantic_ui_react_["Container"],
    null,
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css' })
    ),
    external__react__default.a.createElement(Header, null),
    props.children
  );
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__routes__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/index.js
 */






var RequestIndex = function (_Component) {
  _inherits(RequestIndex, _Component);

  function RequestIndex() {
    _classCallCheck(this, RequestIndex);

    return _possibleConstructorReturn(this, (RequestIndex.__proto__ || Object.getPrototypeOf(RequestIndex)).apply(this, arguments));
  }

  _createClass(RequestIndex, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          null,
          'Requests'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__routes__["Link"],
          { route: '/campaigns/' + this.props.address + '/requests/new' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Button"],
              { primary: true },
              'Add Request'
            )
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
        var address;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = context.query.address;
                return _context.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

/***/ })
/******/ ]);