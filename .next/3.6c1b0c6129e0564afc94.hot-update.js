webpackHotUpdate(3,{

/***/ "./pages/campaigns/detail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_campaign__ = __webpack_require__("./ethereum/campaign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContributeForm__ = __webpack_require__("./components/ContributeForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);

var _jsxFileName = '/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/detail.js';

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
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/detail.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson
 */









var CampaignDetail = function (_Component) {
  _inherits(CampaignDetail, _Component);

  function CampaignDetail() {
    _classCallCheck(this, CampaignDetail);

    return _possibleConstructorReturn(this, (CampaignDetail.__proto__ || Object.getPrototypeOf(CampaignDetail)).apply(this, arguments));
  }

  _createClass(CampaignDetail, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          minContribution = _props.minContribution,
          campaignBalance = _props.campaignBalance,
          spendRequestsCount = _props.spendRequestsCount,
          approversCount = _props.approversCount,
          managerAddress = _props.managerAddress;

      console.log('in detail: this.props.campaignAddress');
      console.log(this.props.campaignAddress);
      var items = [{
        header: managerAddress,
        meta: 'Address of manager',
        description: 'The creator of the campaign. Creates requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minContribution,
        meta: 'Minimum Contribution (in wei)',
        description: 'This campaign requires at least this amount from each contributor'
        //style: { overflowWrap: 'break-word' }
      }, {
        header: spendRequestsCount,
        meta: 'Spend Request Count',
        description: 'The number of spend requests created for this campaign'
        //style: { overflowWrap: 'break-word' }
      }, {
        header: approversCount,
        meta: 'Approver Count',
        description: 'The number of eligable approvers for this campaign'
        //style: { overflowWrap: 'break-word' }
      }, {
        header: __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__["a" /* default */].utils.fromWei(campaignBalance, 'ether'),
        meta: 'Campaign Balance (in ether)',
        description: 'The current funds available on this contract for spend requests'
        //style: { overflowWrap: 'break-word' }
      }];

      // https://react.semantic-ui.com/views/card#card-example-group-props
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["b" /* Card */].Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      });
    }

    // https://react.semantic-ui.com/collections/grid#grid-example-column-width

  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          },
          'Campaign Details'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["e" /* Grid */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["e" /* Grid */].Row,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["e" /* Grid */].Column,
              { width: 10, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81
                }
              },
              this.renderCards()
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["e" /* Grid */].Column,
              { width: 6, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContributeForm__["a" /* default */], { campaignAddress: this.props.campaignAddress, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["e" /* Grid */].Row,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["e" /* Grid */].Column,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7__routes__["Link"],
                { route: '/campaigns/' + this.props.campaignAddress + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["a" /* Button */],
                    { primary: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                      }
                    },
                    'View Requests'
                  )
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var address, campaign, summary;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_campaign__["a" /* default */])(address);
                _context.next = 4;
                return campaign.methods.getSummary().call();

              case 4:
                summary = _context.sent;
                return _context.abrupt('return', {
                  campaignAddress: props.query.address,
                  minContribution: summary[0],
                  campaignBalance: summary[1],
                  spendRequestsCount: summary[2],
                  approversCount: summary[3],
                  managerAddress: summary[4]
                });

              case 6:
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

  return CampaignDetail;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = CampaignDetail;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CampaignDetail, 'CampaignDetail', '/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/detail.js');
  reactHotLoader.register(_default, 'default', '/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/detail.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/detail")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.6c1b0c6129e0564afc94.hot-update.js.map