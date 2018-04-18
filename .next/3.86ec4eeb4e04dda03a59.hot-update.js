webpackHotUpdate(3,{

/***/ "./pages/campaigns/requests/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_campaign__ = __webpack_require__("./ethereum/campaign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_RequestRow__ = __webpack_require__("./components/RequestRow.js");

var _jsxFileName = "/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/index.js";

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
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/index.js
 */








var RequestIndex = function (_Component) {
  _inherits(RequestIndex, _Component);

  function RequestIndex() {
    _classCallCheck(this, RequestIndex);

    return _possibleConstructorReturn(this, (RequestIndex.__proto__ || Object.getPrototypeOf(RequestIndex)).apply(this, arguments));
  }

  _createClass(RequestIndex, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_RequestRow__["a" /* default */], {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Table */].Header,
          Row = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Table */].Row,
          HeaderCell = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Table */].HeaderCell,
          Body = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Table */].Body,
          Cell = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Table */].Cell;


      console.log(this.props);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h3",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          "Requests"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__routes__["Link"],
          { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */],
              { primary: true, floated: "right", style: { marginBottom: 10 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              "Add Request"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Table */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Row,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                HeaderCell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  }
                },
                "ID"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                HeaderCell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  }
                },
                "Description"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                HeaderCell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                  }
                },
                "Amount"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                HeaderCell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  }
                },
                "Recipient"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                HeaderCell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                "Approval Count"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                HeaderCell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                "Approve"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                HeaderCell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  }
                },
                "Finalize"
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Row,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                Cell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                },
                "ID"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                Cell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  }
                },
                "Description"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                Cell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  }
                },
                "Amount"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                Cell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  }
                },
                "Recipient"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                Cell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                  }
                },
                "Approval Count"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                Cell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                "Approve"
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                Cell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                },
                "Finalize"
              )
            ),
            this.renderRows()
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          },
          "Found ",
          this.props.requestsCount
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
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
        var address, campaign, requestsCount, approversCount, requests;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = context.query.address;
                campaign = Object(__WEBPACK_IMPORTED_MODULE_5__ethereum_campaign__["a" /* default */])(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestsCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return Promise.all(Array(parseInt(requestsCount)).fill().map(function (element, index) {
                  return campaign.methods.spendRequests(index).call(); //  returns an individual request
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt("return", { address: address, requests: requests, requestsCount: requestsCount, approversCount: approversCount });

              case 12:
              case "end":
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

var _default = RequestIndex;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RequestIndex, "RequestIndex", "/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/index.js");
  reactHotLoader.register(_default, "default", "/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/index.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.86ec4eeb4e04dda03a59.hot-update.js.map