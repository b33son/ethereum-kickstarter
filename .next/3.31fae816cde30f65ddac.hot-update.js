webpackHotUpdate(3,{

/***/ "./components/RequestRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__ = __webpack_require__("./ethereum/campaign.js");

var _jsxFileName = "/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/RequestRow.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/RequestRow.js
 */






var RequestRow = function (_Component) {
  _inherits(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RequestRow.__proto__ || Object.getPrototypeOf(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.approveRequest = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
        var campaign, accounts;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // need to get campaign
                // call approveRequest(uint index)
                campaign = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__["a" /* default */])(_this.props.address);
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].eth.getAccounts();

              case 3:
                accounts = _context.sent;
                _context.next = 6;
                return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.finalizeRequest = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(event) {
        var campaign, accounts;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("finalize request started");
                campaign = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__["a" /* default */])(_this.props.address);
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].eth.getAccounts();

              case 4:
                accounts = _context2.sent;
                _context2.next = 7;
                return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }
  //   function approveRequest(uint index) public {

  _createClass(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Row,
          Cell = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Table */].Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        Row,
        { disabled: request.complete, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          id
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          request.description
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].utils.fromWei(request.value, "ether")
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          request.vendorAddress
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          request.approvalCount,
          " / ",
          approversCount
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          request.complete ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */],
            { onClick: this.approveRequest, basic: true, color: "green", __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            "Approve"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Cell,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          request.complete ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */],
            { onClick: this.finalizeRequest, basic: true, color: "blue", __source: {
                fileName: _jsxFileName,
                lineNumber: 53
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
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

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
//# sourceMappingURL=3.31fae816cde30f65ddac.hot-update.js.map