"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navigation.tsx":
/*!***********************************!*\
  !*** ./components/Navigation.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_alonz_OneDrive_Escritorio_my_cv_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_alonz_OneDrive_Escritorio_my_cv_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_alonz_OneDrive_Escritorio_my_cv_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-file-download */ \"./node_modules/js-file-download/file-download.js\");\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_file_download__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navigation.module.css */ \"./components/Navigation.module.css\");\n/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar Navigation = function() {\n    var download = _asyncToGenerator(C_Users_alonz_OneDrive_Escritorio_my_cv_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res;\n        return C_Users_alonz_OneDrive_Escritorio_my_cv_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://alonzofiles.s3.amazonaws.com/resumes/resumeEN.pdf\", {\n                        headers: {\n                            \"Access-Control-Allow-Origin\": \"*\"\n                        },\n                        responseType: \"blob\"\n                    });\n                case 3:\n                    res = _ctx.sent;\n                    js_file_download__WEBPACK_IMPORTED_MODULE_3___default()(res.data, \"resume.pdf\");\n                    _ctx.next = 10;\n                    break;\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(\"Error--\", _ctx.t0);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"nav\", {\n        className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_6___default().navContainer),\n        __source: {\n            fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n            lineNumber: 28,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoContainer),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Alonzo Ramirez\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"ul\", {\n                className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_6___default().listContainer),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"li\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__.LinkedIn, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"https://www.linkedin.com/in/luis-alonzo-ramirez-7175981b4/\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                                    target: \"_blank\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: \"LinkedIn\"\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"li\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__.GitHub, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"https://github.com/alonzocr1995?tab=repositories\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                                    target: \"_blank\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: \"Github\"\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"li\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__.GetApp, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                onClick: download,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Resume\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEU7QUFDbkQ7QUFDa0I7QUFDZjtBQUNIO0FBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLEdBQUssQ0FBQ1EsVUFBVSxHQUFHLFFBQVEsR0FBRixDQUFDO0lBQ3hCLEdBQUssQ0FBQ0MsUUFBUSx1S0FBRyxRQUFRLFdBQUksQ0FBQztZQUVwQkMsR0FBRzs7Ozs7OzJCQUFTUCxnREFBUyxDQUN6QixDQUEyRCw0REFDM0QsQ0FBQzt3QkFDQ1MsT0FBTyxFQUFFLENBQUM7NEJBQ1IsQ0FBNkIsOEJBQUUsQ0FBRzt3QkFDcEMsQ0FBQzt3QkFDREMsWUFBWSxFQUFFLENBQU07b0JBQ3RCLENBQUM7O29CQVBHSCxHQUFHO29CQVVUTix1REFBWSxDQUFDTSxHQUFHLENBQUNJLElBQUksRUFBRSxDQUFZOzs7Ozs7b0JBRW5DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTOzs7Ozs7Ozs7OztJQUV6QixDQUFDO0lBRUQsTUFBTSx1RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVYLDRFQUFvQjs7Ozs7Ozs7aUZBQ2pDYSxDQUFHO2dCQUFDRixTQUFTLEVBQUVYLDZFQUFxQjs7Ozs7OzsrRkFDbENlLENBQUU7Ozs7Ozs7OEJBQUMsQ0FBYzs7O2tGQUduQkMsQ0FBRTtnQkFBQ0wsU0FBUyxFQUFFWCw2RUFBcUI7Ozs7Ozs7OzBGQUNqQ2tCLENBQUU7Ozs7Ozs7O2lHQUNBeEIsd0RBQVE7Ozs7Ozs7O2lHQUNSSSxrREFBSTtnQ0FBQ3FCLElBQUksRUFBQyxDQUE0RDs7Ozs7OzsrR0FDcEVDLENBQUM7b0NBQUNDLE1BQU0sRUFBQyxDQUFROzs7Ozs7OzhDQUFDLENBQVE7Ozs7OzBGQUc5QkgsQ0FBRTs7Ozs7Ozs7aUdBQ0F6QixzREFBTTs7Ozs7Ozs7aUdBQ05LLGtEQUFJO2dDQUFDcUIsSUFBSSxFQUFDLENBQWtEOzs7Ozs7OytHQUMxREMsQ0FBQztvQ0FBQ0MsTUFBTSxFQUFDLENBQVE7Ozs7Ozs7OENBQUMsQ0FBTTs7Ozs7MEZBRzVCSCxDQUFFOzs7Ozs7OztpR0FDQXZCLHNEQUFNOzs7Ozs7OztpR0FDTjJCLENBQUk7Z0NBQUNDLE9BQU8sRUFBRXJCLFFBQVE7Ozs7Ozs7MENBQUUsQ0FBTTs7Ozs7Ozs7QUFLekMsQ0FBQztLQTdDS0QsVUFBVTtBQStDaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4PzgzZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2l0SHViLCBMaW5rZWRJbiwgR2V0QXBwLCBDbG91ZERvd25sb2FkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBmaWxlRG93bmxvYWQgZnJvbSBcImpzLWZpbGUtZG93bmxvYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL05hdmlnYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBkb3dubG9hZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcImh0dHBzOi8vYWxvbnpvZmlsZXMuczMuYW1hem9uYXdzLmNvbS9yZXN1bWVzL3Jlc3VtZUVOLnBkZlwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImJsb2JcIixcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmaWxlRG93bmxvYWQocmVzLmRhdGEsIFwicmVzdW1lLnBkZlwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3ItLVwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29Db250YWluZXJ9PlxyXG4gICAgICAgIDxoMz5BbG9uem8gUmFtaXJlejwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0Q29udGFpbmVyfT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGlua2VkSW4gLz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbHVpcy1hbG9uem8tcmFtaXJlei03MTc1OTgxYjQvXCI+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPkxpbmtlZEluPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPEdpdEh1YiAvPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbG9uem9jcjE5OTU/dGFiPXJlcG9zaXRvcmllc1wiPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5HaXRodWI8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8R2V0QXBwIC8+XHJcbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtkb3dubG9hZH0+UmVzdW1lPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIl0sIm5hbWVzIjpbIkdpdEh1YiIsIkxpbmtlZEluIiwiR2V0QXBwIiwiYXhpb3MiLCJmaWxlRG93bmxvYWQiLCJMaW5rIiwiUmVhY3QiLCJjbGFzc2VzIiwiTmF2aWdhdGlvbiIsImRvd25sb2FkIiwicmVzIiwiZ2V0IiwiaGVhZGVycyIsInJlc3BvbnNlVHlwZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibmF2IiwiY2xhc3NOYW1lIiwibmF2Q29udGFpbmVyIiwiZGl2IiwibG9nb0NvbnRhaW5lciIsImgzIiwidWwiLCJsaXN0Q29udGFpbmVyIiwibGkiLCJocmVmIiwiYSIsInRhcmdldCIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});