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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_alonz_OneDrive_Escritorio_my_cv_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_alonz_OneDrive_Escritorio_my_cv_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_alonz_OneDrive_Escritorio_my_cv_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-file-download */ \"./node_modules/js-file-download/file-download.js\");\n/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_file_download__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navigation.module.css */ \"./components/Navigation.module.css\");\n/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar Navigation = function() {\n    var download = _asyncToGenerator(C_Users_alonz_OneDrive_Escritorio_my_cv_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res;\n        return C_Users_alonz_OneDrive_Escritorio_my_cv_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://alonzofiles.s3.amazonaws.com/resumes/resumeEN.pdf\", {\n                        headers: {\n                            \"Access-Control-Allow-Origin\": \"*\"\n                        },\n                        responseType: \"blob\"\n                    });\n                case 3:\n                    res = _ctx.sent;\n                    js_file_download__WEBPACK_IMPORTED_MODULE_3___default()(res.data, \"resume.pdf\");\n                    _ctx.next = 10;\n                    break;\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(\"Error--\", _ctx.t0);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"nav\", {\n        className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_6___default().navContainer),\n        __source: {\n            fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoContainer),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Alonzo Ramirez\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_6___default().listContainer),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"https://www.linkedin.com/in/luis-alonzo-ramirez-7175981b4/\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"a\", {\n                                target: \"_blank\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__.LinkedIn, {\n                                        style: {\n                                            paddingRight: \"3px\"\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    }),\n                                    \"LinkedIn\"\n                                ]\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"https://github.com/alonzocr1995?tab=repositories\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"a\", {\n                                target: \"_blank\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__.GitHub, {\n                                        style: {\n                                            paddingRight: \"3px\"\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    }),\n                                    \"Github\"\n                                ]\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"span\", {\n                            onClick: download,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__.AssignmentReturned, {\n                                    style: {\n                                        paddingRight: \"3px\"\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\alonz\\\\OneDrive\\\\Escritorio\\\\my-cv\\\\components\\\\Navigation.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this\n                                }),\n                                \"Resume\"\n                            ]\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMkI7QUFDRjtBQUNrQjtBQUNmO0FBQ0g7QUFDb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsR0FBSyxDQUFDUSxVQUFVLEdBQUcsUUFBUSxHQUFGLENBQUM7SUFDeEIsR0FBSyxDQUFDQyxRQUFRLHVLQUFHLFFBQVEsV0FBSSxDQUFDO1lBRXBCQyxHQUFHOzs7Ozs7MkJBQVNQLGdEQUFTLENBQ3pCLENBQTJELDREQUMzRCxDQUFDO3dCQUNDUyxPQUFPLEVBQUUsQ0FBQzs0QkFDUixDQUE2Qiw4QkFBRSxDQUFHO3dCQUNwQyxDQUFDO3dCQUNEQyxZQUFZLEVBQUUsQ0FBTTtvQkFDdEIsQ0FBQzs7b0JBUEdILEdBQUc7b0JBVVROLHVEQUFZLENBQUNNLEdBQUcsQ0FBQ0ksSUFBSSxFQUFFLENBQVk7Ozs7OztvQkFFbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVM7Ozs7Ozs7Ozs7O0lBRXpCLENBQUM7SUFFRCxNQUFNLHVFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBRVgsNEVBQW9COzs7Ozs7OztpRkFDakNhLENBQUc7Z0JBQUNGLFNBQVMsRUFBRVgsNkVBQXFCOzs7Ozs7OytGQUNsQ2UsQ0FBRTs7Ozs7Ozs4QkFBQyxDQUFjOzs7a0ZBR25CRixDQUFHO2dCQUFDRixTQUFTLEVBQUVYLDZFQUFxQjs7Ozs7Ozs7eUZBQ2xDYSxDQUFHOzs7Ozs7O3VHQUNEZixrREFBSTs0QkFBQ21CLElBQUksRUFBQyxDQUE0RDs7Ozs7Ozs0R0FDcEVDLENBQUM7Z0NBQUNDLE1BQU0sRUFBQyxDQUFROzs7Ozs7Ozt5R0FDZnpCLHdEQUFRO3dDQUFDMEIsS0FBSyxFQUFFLENBQUM7NENBQUNDLFlBQVksRUFBRSxDQUFLO3dDQUFDLENBQUM7Ozs7Ozs7O29DQUFJLENBRTlDOzs7Ozt5RkFHSFIsQ0FBRzs7Ozs7Ozt1R0FDRGYsa0RBQUk7NEJBQUNtQixJQUFJLEVBQUMsQ0FBa0Q7Ozs7Ozs7NEdBQzFEQyxDQUFDO2dDQUFDQyxNQUFNLEVBQUMsQ0FBUTs7Ozs7Ozs7eUdBQ2YxQixzREFBTTt3Q0FBQzJCLEtBQUssRUFBRSxDQUFDOzRDQUFDQyxZQUFZLEVBQUUsQ0FBSzt3Q0FBQyxDQUFDOzs7Ozs7OztvQ0FBSSxDQUU1Qzs7Ozs7eUZBR0hSLENBQUc7Ozs7Ozs7d0dBQ0RTLENBQUk7NEJBQUNDLE9BQU8sRUFBRXJCLFFBQVE7Ozs7Ozs7O3FHQUNwQlAsa0VBQWtCO29DQUFDeUIsS0FBSyxFQUFFLENBQUM7d0NBQUNDLFlBQVksRUFBRSxDQUFLO29DQUFDLENBQUM7Ozs7Ozs7O2dDQUFJLENBRXhEOzs7Ozs7OztBQUtWLENBQUM7S0FuREtwQixVQUFVO0FBcURoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3g/ODNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEdpdEh1YixcclxuICBMaW5rZWRJbixcclxuICBHZXRBcHAsXHJcbiAgQ2xvdWREb3dubG9hZCxcclxuICBBc3NpZ25tZW50UmV0dXJuLFxyXG4gIEFzc2lnbm1lbnRSZXR1cm5lZCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGZpbGVEb3dubG9hZCBmcm9tIFwianMtZmlsZS1kb3dubG9hZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTmF2aWdhdGlvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRvd25sb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hbG9uem9maWxlcy5zMy5hbWF6b25hd3MuY29tL3Jlc3VtZXMvcmVzdW1lRU4ucGRmXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXNwb25zZVR5cGU6IFwiYmxvYlwiLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZpbGVEb3dubG9hZChyZXMuZGF0YSwgXCJyZXN1bWUucGRmXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvci0tXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2Q29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGgzPkFsb256byBSYW1pcmV6PC9oMz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0Q29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sdWlzLWFsb256by1yYW1pcmV6LTcxNzU5ODFiNC9cIj5cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgPExpbmtlZEluIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCIzcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIExpbmtlZEluXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbG9uem9jcjE5OTU/dGFiPXJlcG9zaXRvcmllc1wiPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICA8R2l0SHViIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCIzcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIEdpdGh1YlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2Rvd25sb2FkfT5cclxuICAgICAgICAgICAgPEFzc2lnbm1lbnRSZXR1cm5lZCBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiM3B4XCIgfX0gLz5cclxuICAgICAgICAgICAgUmVzdW1lXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiJdLCJuYW1lcyI6WyJHaXRIdWIiLCJMaW5rZWRJbiIsIkFzc2lnbm1lbnRSZXR1cm5lZCIsImF4aW9zIiwiZmlsZURvd25sb2FkIiwiTGluayIsIlJlYWN0IiwiY2xhc3NlcyIsIk5hdmlnYXRpb24iLCJkb3dubG9hZCIsInJlcyIsImdldCIsImhlYWRlcnMiLCJyZXNwb25zZVR5cGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm5hdiIsImNsYXNzTmFtZSIsIm5hdkNvbnRhaW5lciIsImRpdiIsImxvZ29Db250YWluZXIiLCJoMyIsImxpc3RDb250YWluZXIiLCJocmVmIiwiYSIsInRhcmdldCIsInN0eWxlIiwicGFkZGluZ1JpZ2h0Iiwic3BhbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n");

/***/ })

});