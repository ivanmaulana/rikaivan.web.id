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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/qlapa/wedding/pages/components/footer.js";

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
                { id: "footer", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "pull-left", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        "Handcrafted with love by ",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "a",
                            { href: "https://linkedin.com/in/ivanmaulana", target: "_blank", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 9
                                }
                            },
                            "Ivan Maulana"
                        ),
                        ".",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", { className: "visible-xs", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", { className: "visible-xs", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 11
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "pull-left visible-xs", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13
                            }
                        },
                        "Built with ",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "a",
                            { href: "https://github.com/zeit/next.js/", target: "_blank", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 14
                                }
                            },
                            "Next.js framework"
                        ),
                        ". Inspired by Google site's design."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "pull-right hidden-xs", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        "Built with ",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "a",
                            { href: "https://github.com/zeit/next.js/", target: "_blank", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                }
                            },
                            "Next.js framework"
                        ),
                        ". Inspired by Google site's design."
                    )
                )
            );
        }
    }]);

    return HeadComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (HeadComponent);

/***/ }),

/***/ "./pages/components/head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/home/qlapa/wedding/pages/components/head.js";

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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto+Slab:400,300|Roboto:300,400", rel: "stylesheet", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                })
            );
        }
    }]);

    return HeadComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (HeadComponent);

/***/ }),

/***/ "./pages/components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/qlapa/wedding/pages/components/header.js";

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
                { id: "header", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "web-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        "R & I"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "visible-xs visible-sm pull-right", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "btn",
                            { className: "btn btn-primary btn-header", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 10
                                }
                            },
                            "Leave messages"
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "visible-md visible-lg pull-right header-menu", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 13
                                }
                            },
                            "Home"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "btn",
                            { className: "btn btn-primary btn-header", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 14
                                }
                            },
                            "Leave messages"
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container visible-xs visible-sm header-menu-mobile header-menu-mobile-outer", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "header-menu-mobile-inner", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 19
                                }
                            },
                            "Home"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 20
                                }
                            },
                            "Home"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                }
                            },
                            "Home"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
                                }
                            },
                            "Home"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                }
                            },
                            "Home"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                }
                            },
                            "Home"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 25
                                }
                            },
                            "Home"
                        )
                    )
                )
            );
        }
    }]);

    return HeadComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (HeadComponent);

/***/ }),

/***/ "./pages/components/section-1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/qlapa/wedding/pages/components/section-1.js";

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
                { className: "section section-1", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h1",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        "We're Getting Married."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "row", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-xs-12 col-md-6", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 10
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 11
                                    }
                                },
                                "Together with our parents. ",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 11
                                    }
                                }),
                                " We, invite you to share in the joy of beginning our new life together."
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                { className: "section-1-title", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 12
                                    }
                                },
                                "- Rika Rosdiana & Ivan Maulana."
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Section1Component;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Section1Component);

/***/ }),

/***/ "./pages/components/section-2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/qlapa/wedding/pages/components/section-2.js";

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
                { className: "section section-2", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container text-center", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "quran-text", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        "\u201CAnd among his signs is this, that He created for you mates from among your yourselves that you may dwell in tranquillity with them. ",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", { className: "visible-xs", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        }),
                        " ",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", { className: "visible-xs", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        }),
                        " And He has put love and mercy between your hearts: verily in that are signs for those who reflect.\u201D"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "quran-surah", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                            }
                        },
                        "Surah ar Rum: 71"
                    )
                )
            );
        }
    }]);

    return Section2Component;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Section2Component);

/***/ }),

/***/ "./pages/components/section-3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/qlapa/wedding/pages/components/section-3.js";

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
                { className: "section-3", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-xs-12 col-sm-6 wedding-map", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", { src: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1983.196957444171!2d106.7921418!3d-6.2116656!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sMusholla+As+Salaam!5e0!3m2!1sen!2sid!4v1519505752015", frameborder: "0", style: { border: 0 }, allowfullscreen: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-xs-12 col-sm-6 wedding-info", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        { className: "title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 11
                            }
                        },
                        "The Wedding"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "wedding-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        "Location:"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "wedding-detail", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13
                            }
                        },
                        "Aula Musholla As Salam"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "wedding-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        "Address:"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "wedding-detail", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        "Jl. Kemandoran Pluis No.24, Kebayoran Lama, Jakarta Selatan"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "wedding-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        "Date:"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "wedding-detail", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 17
                            }
                        },
                        "Sunday, April 1, 2018"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "wedding-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        "Time:"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "wedding-detail", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        "8 AM - 9 PM"
                    )
                )
            );
        }
    }]);

    return Section3Component;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Section3Component);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_head__ = __webpack_require__("./pages/components/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./pages/components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_section_1__ = __webpack_require__("./pages/components/section-1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_section_2__ = __webpack_require__("./pages/components/section-2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_section_3__ = __webpack_require__("./pages/components/section-3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer__ = __webpack_require__("./pages/components/footer.js");
var _jsxFileName = "/home/qlapa/wedding/pages/index.js";

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
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_head__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_section_1__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_section_2__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_section_3__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_footer__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                })
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map