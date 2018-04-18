webpackHotUpdate(3,{

/***/ "./components/RequestRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
var _jsxFileName = "/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/RequestRow.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/RequestRow.js
 */





var RequestRow = function (_Component) {
  _inherits(RequestRow, _Component);

  function RequestRow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RequestRow.__proto__ || Object.getPrototypeOf(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.approveRequest = function (event) {
      console.log("button clicked: " + event.Row.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["d" /* Table */].Row,
          Cell = __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["d" /* Table */].Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Row,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          id
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          request.description
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          __WEBPACK_IMPORTED_MODULE_2__ethereum_web3__["a" /* default */].utils.fromWei(request.value, "ether")
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          request.vendorAddress
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          request.approvalCount,
          " / ",
          approversCount
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Button */],
            { onClick: this.approveRequest, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            "Approve"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Button */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            "Finalize"
          )
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return RequestRow;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = RequestRow;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RequestRow, "RequestRow", "/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/RequestRow.js");
  reactHotLoader.register(_default, "default", "/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/RequestRow.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.3250d7903d38e67d561e.hot-update.js.map