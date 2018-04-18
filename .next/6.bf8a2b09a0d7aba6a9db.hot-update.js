webpackHotUpdate(6,{

/***/ "./pages/campaigns/requests/new.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__ = __webpack_require__("./ethereum/campaign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);

var _jsxFileName = "/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/new.js";

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
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/new.js
 */








var RequestNew = function (_Component) {
  _inherits(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RequestNew.__proto__ || Object.getPrototypeOf(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: "",
      description: "",
      recipient: "",
      loading: false,
      errorMessage: ""
    }, _this.onSubmit = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
        var campaign, _this$state, description, value, recipient, accounts, val;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: "" });
                campaign = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__["a" /* default */])(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                _context.prev = 4;
                _context.next = 7;
                return __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__["a" /* default */].eth.getAccounts();

              case 7:
                accounts = _context.sent;
                val = __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__["a" /* default */].utils.toWei(value, "ether");
                _context.next = 11;
                return campaign.methods.createRequest(description, val, recipient).send({ from: accounts[0] });

              case 11:
                _this.setState({ loading: false, errorMessage: "" });
                __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute("/campaigns/" + _this.props.address);
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](4);

                console.log(_context.t0);
                _this.setState({ loading: false, errorMessage: _context.t0.message });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 15]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RequestNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6__routes__["Link"],
          { route: "/campaigns/" + this.props.address + "/request", __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              "Back"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h3",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          "Create A New Request"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */],
          { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Field,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              "Description"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Input */], {
              value: this.state.description,
              onChange: function onChange(event) {
                return _this3.setState({ description: event.target.value });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Field,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              "Requested Amount in Ether"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Input */], {
              value: this.state.value,
              onChange: function onChange(event) {
                return _this3.setState({ value: event.target.value });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Field,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "label",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                }
              },
              "Recipient"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Input */], {
              value: this.state.recipient,
              onChange: function onChange(event) {
                return _this3.setState({ recipient: event.target.value });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["f" /* Message */], { error: true, header: "Oops", content: this.state.errorMessage, __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */],
            { primary: true, loading: this.state.loading, __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            "Create"
          )
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(props) {
        var address;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt("return", { address: address });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = RequestNew;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RequestNew, "RequestNew", "/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/new.js");
  reactHotLoader.register(_default, "default", "/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/new.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests/new")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.bf8a2b09a0d7aba6a9db.hot-update.js.map