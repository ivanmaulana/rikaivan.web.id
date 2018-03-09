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
                        { className: "row", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 9
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 10
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 11
                                        }
                                    },
                                    "Handcrafted by ",
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "a",
                                        { href: "https://linkedin.com/in/ivanmaulana", target: "_blank", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 12
                                            }
                                        },
                                        "Ivan Maulana"
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "div",
                                        { className: "pull-right hidden-xs", __source: {
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
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", { className: "visible-xs", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 18
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "visible-xs", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 19
                                    }
                                },
                                "Built with ",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "a",
                                    { href: "https://github.com/zeit/next.js/", target: "_blank", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 20
                                        }
                                    },
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "description", content: "We're getting married on Sunday, April 1, 2018.", __source: {
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
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 14
                                }
                            },
                            "Get Invitation ",
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/download.png", width: "16", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 14
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 15
                                }
                            },
                            "Where"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 16
                                }
                            },
                            "When"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                }
                            },
                            "Bride & Groom"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "btn",
                            { className: "btn btn-primary btn-header", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 18
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
                            lineNumber: 21
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "header-menu-mobile-inner", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
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
                            "Get Invitation ",
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/download.png", width: "16", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 25
                                }
                            },
                            "Where"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                }
                            },
                            "When"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27
                                }
                            },
                            "Bride & Groom"
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
                        "div",
                        { className: "row", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 9
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "h1",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 10
                                    }
                                },
                                "We're Getting Married."
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "row", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 11
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12 col-md-6 col-sm-6", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 12
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "p",
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 13
                                            }
                                        },
                                        "Together with our parents. ",
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 13
                                            }
                                        }),
                                        " We, invite you to share in the joy of beginning our new life together."
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "p",
                                        { className: "section-1-title", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 14
                                            }
                                        },
                                        "- Rika Rosdiana & Ivan Maulana."
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12 col-md-6 col-sm-6 text-center download-btn", style: { marginTop: "18px" }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 16
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "span",
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 17
                                            }
                                        },
                                        "Get our invitation (.pdf soft copy) ",
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/download.png", width: "16", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 18
                                            }
                                        })
                                    )
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
                        "div",
                        { className: "row", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 9
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                { className: "quran-text", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 10
                                    }
                                },
                                "\u201CAnd among his signs is this, that He created for you mates from among your yourselves that you may dwell in tranquillity with them. ",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", { className: "visible-xs", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 10
                                    }
                                }),
                                " ",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", { className: "visible-xs", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 10
                                    }
                                }),
                                " And He has put love and mercy between your hearts: verily in that are signs for those who reflect.\u201D"
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                { className: "quran-surah", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 11
                                    }
                                },
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
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", { src: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1983.196957444171!2d106.7921418!3d-6.2116656!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sMusholla+As+Salaam!5e0!3m2!1sen!2sid!4v1519505752015", frameBorder: "0", style: { border: 0 }, allowFullScreen: true, __source: {
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

/***/ "./pages/components/section-4.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/qlapa/wedding/pages/components/section-4.js";

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
                { className: "section section-4", __source: {
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
                        { className: "row", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 9
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "row", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 10
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12 col-md-6 col-sm-6", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 11
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "p",
                                        { className: "bride", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 12
                                            }
                                        },
                                        "THE BRIDE"
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "bride-after", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 13
                                        }
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "h3",
                                        { className: "bride-name", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 14
                                            }
                                        },
                                        "Rika Rosdiana"
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "p",
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 15
                                            }
                                        },
                                        "Daughter of (Alm.) Mr. Rochmani & Mrs. Rohimah"
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12 col-md-6 col-sm-6", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 17
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "p",
                                        { className: "groom", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 18
                                            }
                                        },
                                        "THE GROOM"
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "groom-after", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 19
                                        }
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "h3",
                                        { className: "groom-name", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 20
                                            }
                                        },
                                        "Ivan Maulana Putra"
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "p",
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 21
                                            }
                                        },
                                        "Son of Mr. Syahruroji & Mrs. Marhaliah"
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

/* harmony default export */ __webpack_exports__["a"] = (Section4Component);

/***/ }),

/***/ "./pages/components/section-5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/qlapa/wedding/pages/components/section-5.js";

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
            sender: "",
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
            event.preventDefault();

            var _state = this.state,
                sender = _state.sender,
                email = _state.email,
                messages = _state.messages,
                isAttending = _state.isAttending;


            this.setState({
                isLoading: true,
                isSubmitting: true
            });

            console.log(sender, email, messages, isAttending);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                sender = _state2.sender,
                email = _state2.email,
                messages = _state2.messages,
                isAttending = _state2.isAttending,
                isLoading = _state2.isLoading,
                isSubmitting = _state2.isSubmitting;


            console.log(sender, email, messages, isAttending);

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "section section-5", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "container", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "row", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 68
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "col-md-10 col-md-offset-1 col-xs-12 col-sm-12", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 69
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "row", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 70
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "div",
                                    { className: "col-xs-12", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 71
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "h4",
                                        { className: "stories-title", __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 72
                                            }
                                        },
                                        "LEAVE US MESSAGES"
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "stories-after", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 75
                                        }
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 76
                                        }
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        "form",
                                        { onSubmit: this.handleSubmit, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 78
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 79
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-6 col-xs-12", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 80
                                                }
                                            }),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-6 col-xs-12", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 83
                                                }
                                            })
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "h4",
                                            { className: "input-title", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 88
                                                }
                                            },
                                            "Name"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 89
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-sm-6 col-xs-12", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 90
                                                    }
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
                                                    value: sender,
                                                    type: "text",
                                                    className: "form-control",
                                                    placeholder: "Name ",
                                                    onChange: function onChange(event) {
                                                        return _this2.handleChangeState("sender", event.target.value);
                                                    },
                                                    required: true,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 91
                                                    }
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-sm-6 col-xs-12 input-tips", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 100
                                                    }
                                                },
                                                sender && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "p",
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 102
                                                        }
                                                    },
                                                    "Hi, ",
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "b",
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 102
                                                            }
                                                        },
                                                        toTitleCase(sender)
                                                    ),
                                                    ". Thanks for leaving us messages."
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "h4",
                                            { className: "input-title", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 108
                                                }
                                            },
                                            "Attending ?"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 109
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-sm-6 col-xs-12", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 110
                                                    }
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    { className: "row", __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 111
                                                        }
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "div",
                                                        { className: "col-xs-6", style: { paddingRight: "7px" }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 112
                                                            }
                                                        },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "div",
                                                            {
                                                                className: "attending-option text-center" + (isAttending === true ? " active" : ""),
                                                                onClick: function onClick() {
                                                                    return _this2.handleChangeState("isAttending", true);
                                                                },
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 113
                                                                }
                                                            },
                                                            "YES"
                                                        )
                                                    ),
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "div",
                                                        { className: "col-xs-6", style: { paddingLeft: "7px" }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 120
                                                            }
                                                        },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "div",
                                                            {
                                                                className: "attending-option text-center" + (isAttending === false ? " active" : ""),
                                                                onClick: function onClick() {
                                                                    return _this2.handleChangeState("isAttending", false);
                                                                },
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 121
                                                                }
                                                            },
                                                            "NO"
                                                        )
                                                    )
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { id: "attending-messages", className: "col-sm-6 col-xs-12", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 130
                                                    }
                                                },
                                                isAttending != null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    { className: "input-tips", __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 132
                                                        }
                                                    },
                                                    isAttending ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "span",
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 134
                                                            }
                                                        },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "b",
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 134
                                                                }
                                                            },
                                                            "Great!"
                                                        ),
                                                        " See you there."
                                                    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "span",
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 135
                                                            }
                                                        },
                                                        "Hopefully we can meet you there."
                                                    )
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 142
                                            }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "h4",
                                            { className: "input-title", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 144
                                                }
                                            },
                                            "Email"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 145
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-sm-6 col-xs-12", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 146
                                                    }
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
                                                    value: email,
                                                    type: "email",
                                                    className: "form-control",
                                                    placeholder: "Name ",
                                                    onChange: function onChange(event) {
                                                        return _this2.handleChangeState("email", event.target.value);
                                                    },
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 147
                                                    }
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-sm-6 col-xs-12", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 155
                                                    }
                                                },
                                                email && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    { className: "input-tips", __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 157
                                                        }
                                                    },
                                                    "We'll send your photo to ",
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "b",
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 158
                                                            }
                                                        },
                                                        email
                                                    )
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "h4",
                                            { className: "input-title", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 165
                                                }
                                            },
                                            "Messages"
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 166
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-sm-6 col-xs-12", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 167
                                                    }
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
                                                    value: messages,
                                                    className: "form-control",
                                                    placeholder: "Messages",
                                                    rows: "5",
                                                    onChange: function onChange(event) {
                                                        return _this2.handleChangeState("messages", event.target.value);
                                                    },
                                                    required: true,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 168
                                                    }
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-sm-6 col-xs-12 input-tips", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 177
                                                    }
                                                },
                                                messages != "" && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 179
                                                        }
                                                    },
                                                    messages.length < 50 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "span",
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 181
                                                            }
                                                        },
                                                        "Thanks for the message. But r u sure not to send us a longer one ?"
                                                    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "span",
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 182
                                                            }
                                                        },
                                                        "Thanks for the message, ",
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            "b",
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 182
                                                                }
                                                            },
                                                            sender
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            "div",
                                            { className: "row", __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 190
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-sm-6 col-xs-12", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 191
                                                    }
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "button",
                                                    { id: "btn-submit", type: "submit", className: "btn btn-lg btn-primary btn-block", disabled: isLoading, __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 192
                                                        }
                                                    },
                                                    isLoading ? "SENDING....." : "SEND"
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                "div",
                                                { className: "col-sm-6 col-xs-12 input-tips", __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 199
                                                    }
                                                },
                                                isSubmitting && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    "div",
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 201
                                                        }
                                                    },
                                                    isLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "span",
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 203
                                                            }
                                                        },
                                                        "Saving your messages..."
                                                    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        "span",
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 204
                                                            }
                                                        },
                                                        "Saved. Thanks."
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

/* harmony default export */ __webpack_exports__["a"] = (Section5Component);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_section_4__ = __webpack_require__("./pages/components/section-4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_section_5__ = __webpack_require__("./pages/components/section-5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer__ = __webpack_require__("./pages/components/footer.js");
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
                        lineNumber: 18
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_head__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_section_1__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_section_2__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_section_3__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_section_4__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_section_5__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_footer__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
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