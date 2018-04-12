webpackHotUpdate(3,{

/***/ "./components/ContributeForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_campaign__ = __webpack_require__("./ethereum/campaign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);

var _jsxFileName = '/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/ContributeForm.js';

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
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/ContributeForm.js
 */






// https://react.semantic-ui.com/collections/form#form-example-form

var ContributeForm = function (_Component) {
  _inherits(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContributeForm.__proto__ || Object.getPrototypeOf(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
        var campaign, accounts;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ errorMessage: '' });
                _this.setState({ loading: true });
                console.log('this.props.address');
                console.log(_this.props.campaignAddress);
                campaign = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_campaign__["a" /* default */])(_this.props.campaignAddress);
                _context.prev = 6;
                _context.next = 9;
                return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts();

              case 9:
                accounts = _context.sent;
                _context.next = 12;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].utils.toWei(_this.state.value, 'ether')
                });

              case 12:

                __WEBPACK_IMPORTED_MODULE_5__routes__["Router"].replaceRoute('/campaigns/' + _this.props.campaignAddress);
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](6);

                console.log(_context.t0);

                _this.setState({ errorMessage: _context.t0.message });

              case 19:
                _this.setState({ loading: false });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[6, 15]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */],
        { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            'Amount to Contribute'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Input */], {
            value: this.state.value,
            onChange: function onChange(event) {
              return _this3.setState({ value: event.target.value });
            },
            label: 'ether', labelPosition: 'right', __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["h" /* Message */], { error: true, header: 'Oops', content: this.state.errorMessage, color: 'teal', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */],
          { primary: true, loading: this.state.loading, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          'Contribute'
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return ContributeForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = ContributeForm;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContributeForm, 'ContributeForm', '/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/ContributeForm.js');
  reactHotLoader.register(_default, 'default', '/Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/ContributeForm.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.b4dfd0b0c4cbe9353bd6.hot-update.js.map