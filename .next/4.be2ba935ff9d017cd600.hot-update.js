webpackHotUpdate(4,{

/***/ "./pages/components/head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/home/qlapa/wedding/pages/components/head.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var HeadComponent = function (_PureComponent) {
    _inherits(HeadComponent, _PureComponent);

    function HeadComponent() {
        _classCallCheck(this, HeadComponent);

        return _possibleConstructorReturn(this, (HeadComponent.__proto__ || Object.getPrototypeOf(HeadComponent)).apply(this, arguments));
    }

    _createClass(HeadComponent, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "title",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    "Rika & Ivan Wedding"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "description", content: "April 1, 2018. Rika & Ivan Wedding.", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { charset: "utf-8", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "/static/bootstrap.min.css", rel: "stylesheet", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "/static/styles.css", rel: "stylesheet", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab", rel: "stylesheet", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                })
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return HeadComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

var _default = HeadComponent;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(HeadComponent, "HeadComponent", "/home/qlapa/wedding/pages/components/head.js");
    reactHotLoader.register(_default, "default", "/home/qlapa/wedding/pages/components/head.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/head")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.be2ba935ff9d017cd600.hot-update.js.map