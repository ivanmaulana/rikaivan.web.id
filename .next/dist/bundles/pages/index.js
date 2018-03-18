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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_NO_CONNECTION", function() { return ERROR_NO_CONNECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_SUCCESS", function() { return RESPONSE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_ERROR", function() { return RESPONSE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_ERROR_CONNECTION", function() { return RESPONSE_ERROR_CONNECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGet", function() { return fetchGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPost", function() { return fetchPost; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ERROR_NO_CONNECTION = ["Gagal terhubung ke server. Cek koneksimu dan refresh halaman ini."];
var RESPONSE_SUCCESS = "SUCCESS";
var RESPONSE_ERROR = "ERROR";
var RESPONSE_ERROR_CONNECTION = { status: RESPONSE_ERROR, errors: ERROR_NO_CONNECTION };

var stringifyPrimitive = function stringifyPrimitive(v) {
    switch (typeof v === "undefined" ? "undefined" : _typeof(v)) {
        case "string":
            return v;
        case "boolean":
            return v ? "true" : "false";
        case "number":
            return isFinite(v) ? v : "";
        default:
            return "";
    }
};

var stringify = function stringify(obj, sep, eq, name) {
    sep = sep || "&";
    eq = eq || "=";
    if (obj === null) {
        obj = undefined;
    }

    if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
        return Object.keys(obj).map(function (k) {
            var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
            if (Array.isArray(obj[k])) {
                return obj[k].map(function (v) {
                    return ks + encodeURIComponent(stringifyPrimitive(v));
                }).join(sep);
            } else {
                return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
            }
        }).join(sep);
    }

    return !name ? "" : encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var fetchGet = function fetchGet(urlPath) {
    return fetch(urlPath, { credentials: "include" }).then(function (response) {
        return response.ok ? response.json() : Promise.reject(new Error("error"));
    }).catch(function (error) {
        return Promise.reject(new Error(error));
    });
};

var fetchPost = function fetchPost(urlPath, params, contentType) {
    var emptyResponse = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var requestBody = stringify(params);
    var requestHeaders = { "Content-Type": "application/x-www-form-urlencoded" };

    if (contentType === "json") {
        requestBody = JSON.stringify(params);
        requestHeaders = { "Content-Type": "application/json" };
    }

    return fetch(urlPath, {
        credentials: "include",
        headers: requestHeaders,
        body: requestBody,
        method: "POST"
    }).then(function (response) {
        if (emptyResponse) {
            return response.ok ? response : Promise.reject(new Error("error"));
        }
        return response.ok ? response.json() : Promise.reject(new Error("error"));
    }).catch(function (error) {
        return Promise.reject(new Error(error));
    });
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
                "div",
                { id: "footer" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    null,
                                    "Handcrafted by ",
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "a",
                                        { href: "https://linkedin.com/in/ivanmaulana", target: "_blank" },
                                        "Ivan Maulana"
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "div",
                                        { className: "pull-right hidden-xs" },
                                        "Built with ",
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "a",
                                            { href: "https://github.com/zeit/next.js/", target: "_blank" },
                                            "Next.js framework"
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", { className: "visible-xs" }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "visible-xs" },
                                "Built with ",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "a",
                                    { href: "https://github.com/zeit/next.js/", target: "_blank" },
                                    "Next.js framework"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HeadComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (HeadComponent);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "title",
                    null,
                    "Rika & Ivan Wedding"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "description", content: "We're getting married on Sunday, April 1, 2018." }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { charset: "utf-8" }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "/static/bootstrap.min.css", rel: "stylesheet" }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "/static/styles.css", rel: "stylesheet" }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto+Slab:400,300|Roboto:300,400", rel: "stylesheet" }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "shortcut icon", href: "/static/favicon.png" })
            );
        }
    }]);

    return HeadComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (HeadComponent);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zenscroll__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zenscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zenscroll__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var HeadComponent = function (_PureComponent) {
    _inherits(HeadComponent, _PureComponent);

    function HeadComponent(props) {
        _classCallCheck(this, HeadComponent);

        var _this = _possibleConstructorReturn(this, (HeadComponent.__proto__ || Object.getPrototypeOf(HeadComponent)).call(this, props));

        _this.handleScroll = _this.handleScroll.bind(_this);
        return _this;
    }

    _createClass(HeadComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            __WEBPACK_IMPORTED_MODULE_1_zenscroll___default.a.setup(500, 100);
        }
    }, {
        key: "handleScroll",
        value: function handleScroll(to) {
            var toElement = document.getElementById(to);
            __WEBPACK_IMPORTED_MODULE_1_zenscroll___default.a.to(toElement);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "header" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "web-title" },
                        "R & I"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "visible-xs visible-sm pull-right" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "button",
                            { onClick: function onClick() {
                                    return _this2.handleScroll("messages");
                                }, className: "btn btn-primary btn-header" },
                            "Leave messages"
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "visible-md visible-lg pull-right header-menu" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return _this2.handleScroll("home");
                                } },
                            "Home"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "/static/rikaivan-invitation.pdf", target: "_blank" },
                                "Get Invitation"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return _this2.handleScroll("wedding");
                                } },
                            "The Wedding"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return _this2.handleScroll("bride-groom");
                                } },
                            "Bride & Groom"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "button",
                            { onClick: function onClick() {
                                    return _this2.handleScroll("messages");
                                }, className: "btn btn-primary btn-header" },
                            "Leave messages"
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container visible-xs visible-sm header-menu-mobile header-menu-mobile-outer" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "header-menu-mobile-inner" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return _this2.handleScroll("home");
                                } },
                            "Home"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "/static/rikaivan-invitation.pdf", target: "_blank" },
                                "Get Invitation"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return _this2.handleScroll("wedding");
                                } },
                            "The Wedding"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return _this2.handleScroll("bride-groom");
                                } },
                            "Bride & Groom"
                        )
                    )
                )
            );
        }
    }]);

    return HeadComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (HeadComponent);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("zenscroll");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Section1Component = function (_PureComponent) {
    _inherits(Section1Component, _PureComponent);

    function Section1Component() {
        _classCallCheck(this, Section1Component);

        return _possibleConstructorReturn(this, (Section1Component.__proto__ || Object.getPrototypeOf(Section1Component)).apply(this, arguments));
    }

    _createClass(Section1Component, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "home", className: "section section-1" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "row" },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12 col-md-6 col-sm-6 hidden-xs" },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/hand.jpeg", className: "img-responsive image-section-1" })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12 col-md-6 col-sm-6 download-btn", style: { marginTop: "18px" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "h1",
                                        null,
                                        "We're Getting Married."
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "p",
                                        null,
                                        "Together with our parents. ",
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                                        " We, invite you to share in the joy of beginning our new life together."
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "a",
                                        { href: "/static/rikaivan-invitation.pdf", target: "_blank" },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "span",
                                            null,
                                            "Get our invitation (.pdf soft copy) ",
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/download.png", width: "16" })
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-10 col-xs-offset-1 visible-xs" },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/hand.jpeg", className: "img-responsive image-section-1" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Section1Component;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Section1Component);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Section2Component = function (_PureComponent) {
    _inherits(Section2Component, _PureComponent);

    function Section2Component() {
        _classCallCheck(this, Section2Component);

        return _possibleConstructorReturn(this, (Section2Component.__proto__ || Object.getPrototypeOf(Section2Component)).apply(this, arguments));
    }

    _createClass(Section2Component, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "quote", className: "section section-2" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container text-center" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-md-8 col-md-offset-2 col-xs-12 col-sm-8 col-sm-offset-2" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                { className: "quran-text" },
                                "\u201CAnd among his signs is this, that He created for you mates from among yourselves that you may dwell in tranquillity with them. ",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", { className: "visible-xs" }),
                                " ",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", { className: "visible-xs" }),
                                " And He has put love and mercy between your hearts: verily in that are signs for those who reflect.\u201D"
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                { className: "quran-surah" },
                                "Surah ar Rum: 71"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Section2Component;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Section2Component);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Section3Component = function (_PureComponent) {
    _inherits(Section3Component, _PureComponent);

    function Section3Component() {
        _classCallCheck(this, Section3Component);

        return _possibleConstructorReturn(this, (Section3Component.__proto__ || Object.getPrototypeOf(Section3Component)).apply(this, arguments));
    }

    _createClass(Section3Component, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "wedding", className: "section section-3" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "row section-3-container" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "col-xs-12" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "text-center" },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "h2",
                                    { className: "title" },
                                    "The Wedding"
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", { src: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1983.196957444171!2d106.7921418!3d-6.2116656!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sMusholla+As+Salaam!5e0!3m2!1sen!2sid!4v1519505752015", frameBorder: "0", style: { border: 0 }, allowFullScreen: true })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 wedding-info" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "row" },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12 col-sm-6" },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "div",
                                        { className: "row mobile-padding hidden-xs" },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-title text-right" },
                                            "Date:"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-detail text-right" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "b",
                                                null,
                                                "Sunday, April 1, 2018"
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-title text-right" },
                                            "Time:"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-detail text-right" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "b",
                                                null,
                                                "8 AM - 9 PM"
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "div",
                                        { className: "row mobile-padding visible-xs" },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-title" },
                                            "Date:"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-detail" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "b",
                                                null,
                                                "Sunday, April 1, 2018"
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-title" },
                                            "Time:"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-detail" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "b",
                                                null,
                                                "8 AM - 9 PM"
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12 col-sm-6" },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "div",
                                        { className: "row mobile-padding" },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-title" },
                                            "Location:"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-detail" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "b",
                                                null,
                                                "Aula Musholla As Salam"
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-title" },
                                            "Address:"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "wedding-detail" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "b",
                                                null,
                                                "Jl. Kemandoran Pluis No.24, Kebayoran Lama, Jakarta Selatan"
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Section3Component;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Section3Component);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Section4Component = function (_PureComponent) {
    _inherits(Section4Component, _PureComponent);

    function Section4Component() {
        _classCallCheck(this, Section4Component);

        return _possibleConstructorReturn(this, (Section4Component.__proto__ || Object.getPrototypeOf(Section4Component)).apply(this, arguments));
    }

    _createClass(Section4Component, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "bride-groom", className: "section section-4" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "row" },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12 col-md-6 col-sm-6" },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "div",
                                        { className: "colored-container" },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "bride" },
                                            "THE BRIDE"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "bride-after" }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "h3",
                                            { className: "bride-name" },
                                            "Rika Rosdiana"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            null,
                                            "Daughter of (Alm.) Mr. Rochmani & Mrs. Rohimah"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "see-profile" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "a",
                                                { href: "https://linkedin.com/in/rika-rosdiana-58a6b113a/", target: "_blank" },
                                                "See Profile"
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12 col-md-6 col-sm-6" },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "div",
                                        { className: "colored-container" },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "groom" },
                                            "THE GROOM"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "groom-after" }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "h3",
                                            { className: "groom-name" },
                                            "Ivan Maulana Putra"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            null,
                                            "Son of Mr. Syahruroji & (Almh.) Mrs. Marhaliah"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "p",
                                            { className: "see-profile" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "a",
                                                { href: "https://linkedin.com/in/ivanmaulana", target: "_blank" },
                                                "See Profile"
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Section4Component;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Section4Component);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_fetchers__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function toTitleCase(str) {
    if (str === null || str === undefined) return str;
    str = str.trim();
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

var Section5Component = function (_PureComponent) {
    _inherits(Section5Component, _PureComponent);

    function Section5Component(props) {
        _classCallCheck(this, Section5Component);

        var _this = _possibleConstructorReturn(this, (Section5Component.__proto__ || Object.getPrototypeOf(Section5Component)).call(this, props));

        _this.state = {
            name: "",
            messages: "",
            email: "",
            isAttending: null,
            isLoading: false,
            isSubmitting: false,
            isSuccess: false
        };

        _this.handleChangeState = _this.handleChangeState.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Section5Component, [{
        key: "handleChangeState",
        value: function handleChangeState(name, value) {
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            var _this2 = this;

            event.preventDefault();

            var _state = this.state,
                name = _state.name,
                email = _state.email,
                messages = _state.messages,
                isAttending = _state.isAttending;


            this.setState({
                isLoading: true,
                isSubmitting: true,
                isSuccess: false
            });

            var params = {
                name: name,
                email: email,
                messages: messages,
                isAttending: isAttending ? "true" : "false"
            };

            Object(__WEBPACK_IMPORTED_MODULE_1__functions_fetchers__["fetchPost"])("/api/", params, "json").then(function (response) {
                if (response.status === "SUCCESS") {
                    _this2.setState({
                        isLoading: false,
                        isSubmitting: false,
                        isSuccess: true
                    });
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state2 = this.state,
                name = _state2.name,
                email = _state2.email,
                messages = _state2.messages,
                isAttending = _state2.isAttending,
                isLoading = _state2.isLoading,
                isSubmitting = _state2.isSubmitting,
                isSuccess = _state2.isSuccess;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "messages", className: "section section-5" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-md-6 col-md-offset-3 col-xs-12 col-sm-8 col-sm-offset-2" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "row" },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12" },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "h4",
                                        { className: "stories-title" },
                                        "LEAVE US MESSAGES"
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "stories-after" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "form",
                                        { onSubmit: this.handleSubmit },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "h4",
                                            { className: "input-title" },
                                            "Name"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-xs-12" },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
                                                    value: name,
                                                    type: "text",
                                                    className: "form-control",
                                                    placeholder: "Name ",
                                                    onChange: function onChange(event) {
                                                        return _this3.handleChangeState("name", event.target.value);
                                                    },
                                                    required: true
                                                }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    { className: "input-tips" },
                                                    name && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "p",
                                                        null,
                                                        "Hi, ",
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "b",
                                                            null,
                                                            toTitleCase(name)
                                                        ),
                                                        ". Thanks for leaving us messages."
                                                    )
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "h4",
                                            { className: "input-title" },
                                            "Attending ?"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-xs-12" },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "div",
                                                        { className: "col-xs-6", style: { paddingRight: "7px" } },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "div",
                                                            {
                                                                className: "attending-option text-center" + (isAttending === true ? " active" : ""),
                                                                onClick: function onClick() {
                                                                    return _this3.handleChangeState("isAttending", true);
                                                                }
                                                            },
                                                            "YES"
                                                        )
                                                    ),
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "div",
                                                        { className: "col-xs-6", style: { paddingLeft: "7px" } },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "div",
                                                            {
                                                                className: "attending-option text-center" + (isAttending === false ? " active" : ""),
                                                                onClick: function onClick() {
                                                                    return _this3.handleChangeState("isAttending", false);
                                                                }
                                                            },
                                                            "NO"
                                                        )
                                                    )
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    null,
                                                    isAttending != null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "div",
                                                        { className: "input-tips" },
                                                        isAttending ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "span",
                                                            null,
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                "b",
                                                                null,
                                                                "Great!"
                                                            ),
                                                            " See you there."
                                                        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "span",
                                                            null,
                                                            "Hopefully we can meet you there."
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "h4",
                                            { className: "input-title" },
                                            "Email"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-xs-12" },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
                                                    value: email,
                                                    type: "email",
                                                    className: "form-control",
                                                    placeholder: "Name ",
                                                    onChange: function onChange(event) {
                                                        return _this3.handleChangeState("email", event.target.value);
                                                    }
                                                }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    { className: "input-tips" },
                                                    email && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "div",
                                                        { className: "input-tips" },
                                                        "We'll send your photo to ",
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "b",
                                                            null,
                                                            email
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "h4",
                                            { className: "input-title" },
                                            "Messages"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row" },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-xs-12" },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
                                                    value: messages,
                                                    className: "form-control",
                                                    placeholder: "Messages",
                                                    rows: "5",
                                                    onChange: function onChange(event) {
                                                        return _this3.handleChangeState("messages", event.target.value);
                                                    },
                                                    required: true
                                                }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    { className: "input-tips" },
                                                    messages != "" && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "div",
                                                        null,
                                                        messages.length < 50 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "span",
                                                            null,
                                                            "Thanks for the message. But r u sure not to send us a longer one ?"
                                                        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "span",
                                                            null,
                                                            "Thanks for the message, ",
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                "b",
                                                                null,
                                                                toTitleCase(name)
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row", style: { marginTop: "15px" } },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-xs-12" },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "button",
                                                    { id: "btn-submit", type: "submit", className: "btn btn-lg btn-primary btn-block", disabled: isSubmitting },
                                                    isLoading ? "SENDING....." : "SEND"
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    { className: "input-tips" },
                                                    isSubmitting && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "div",
                                                        null,
                                                        isLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "span",
                                                            null,
                                                            "Saving your messages..."
                                                        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "span",
                                                            null,
                                                            "Saved. Thanks."
                                                        )
                                                    ),
                                                    isSuccess && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "h3",
                                                        { className: "text-center success-messages" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "b",
                                                            null,
                                                            "Thanks for your messages"
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Section5Component;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Section5Component);

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_head__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_section_1__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_section_2__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_section_3__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_section_4__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_section_5__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_head__["default"], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["default"], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_section_1__["default"], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_section_2__["default"], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_section_3__["default"], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_section_4__["default"], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_section_5__["default"], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_footer__["default"], null)
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })
/******/ ]);