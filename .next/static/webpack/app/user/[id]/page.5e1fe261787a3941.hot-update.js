"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/user/[id]/page",{

/***/ "(app-client)/./src/app/user/[id]/_components/Profile.tsx":
/*!***************************************************!*\
  !*** ./src/app/user/[id]/_components/Profile.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ExtraInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtraInfo */ \"(app-client)/./src/app/user/[id]/_components/ExtraInfo.tsx\");\n/* harmony import */ var _MainInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainInfo */ \"(app-client)/./src/app/user/[id]/_components/MainInfo.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Loader */ \"(app-client)/./src/components/Loader.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst url = \"http://localhost:5000/api/users/get/\";\nconst Profile = (param)=>{\n    let { user } = param;\n    _s();\n    //const { data: session } = useSession();\n    //console.log(\"profile\", session);\n    //const [user, setUser] = useState<User>();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // useEffect(() => {\n    //   const getUser = async () => {\n    //     try {\n    //       const response = await fetch(url + session?.user.id, {\n    //         headers: {\n    //           authorization: `Bearer ${session?.tokens.access}`,\n    //           \"Content-Type\": \"application/json\",\n    //         },\n    //       });\n    //       if (response.ok) {\n    //         const { data } = await response.json();\n    //         setUser(data);\n    //       }\n    //     } catch (error) {\n    //       console.error(error);\n    //     } finally {\n    //       setLoading(false);\n    //     }\n    //   };\n    //   getUser();\n    // }, [session]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex flex-row-reverse items-start justify-around flex-wrap\",\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\user\\\\[id]\\\\_components\\\\Profile.tsx\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ExtraInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    avatar: user.avatar,\n                    account: user.account\n                }, void 0, false, {\n                    fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\user\\\\[id]\\\\_components\\\\Profile.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    user: user\n                }, void 0, false, {\n                    fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\user\\\\[id]\\\\_components\\\\Profile.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\user\\\\[id]\\\\_components\\\\Profile.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC91c2VyL1tpZF0vX2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW9DO0FBQ0Y7QUFDaUI7QUFJVjtBQUV6QyxNQUFNSyxNQUFNO0FBRVosTUFBTUMsVUFBVTtRQUFDLEVBQUVDLElBQUksRUFBa0I7O0lBQ3ZDLHlDQUF5QztJQUV6QyxrQ0FBa0M7SUFFbEMsMkNBQTJDO0lBQzNDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBVTtJQUVoRCxvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWiwrREFBK0Q7SUFDL0QscUJBQXFCO0lBQ3JCLCtEQUErRDtJQUMvRCxnREFBZ0Q7SUFDaEQsYUFBYTtJQUNiLFlBQVk7SUFFWiwyQkFBMkI7SUFDM0Isa0RBQWtEO0lBQ2xELHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFFBQVE7SUFDUixPQUFPO0lBQ1AsZUFBZTtJQUNmLGlCQUFpQjtJQUVqQixxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDWkgsd0JBQ0MsOERBQUNKLDBEQUFNQTs7OztzQ0FFUDs7OEJBQ0UsOERBQUNKLGtEQUFTQTtvQkFBQ1ksUUFBUUwsS0FBTUssTUFBTTtvQkFBR0MsU0FBU04sS0FBTU0sT0FBTzs7Ozs7OzhCQUN4RCw4REFBQ1osaURBQVFBO29CQUFDTSxNQUFNQTs7Ozs7Ozs7Ozs7OztBQUsxQjtHQTNDTUQ7S0FBQUE7QUE2Q04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91c2VyL1tpZF0vX2NvbXBvbmVudHMvUHJvZmlsZS50c3g/MDllZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBFeHRyYUluZm8gZnJvbSBcIi4vRXh0cmFJbmZvXCI7XHJcbmltcG9ydCBNYWluSW5mbyBmcm9tIFwiLi9NYWluSW5mb1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0eXBlIFVzZXIgfSBmcm9tIFwiQC9AdHlwZXMvVXNlclwiO1xyXG5pbXBvcnQgVXNlck5vdEZvdW5kIGZyb20gXCIuL1VzZXJOb3RGb3VuZFwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTG9hZGVyXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcnMvZ2V0L1wiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICh7IHVzZXIgfTogeyB1c2VyOiBVc2VyIH0pID0+IHtcclxuICAvL2NvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICAvL2NvbnNvbGUubG9nKFwicHJvZmlsZVwiLCBzZXNzaW9uKTtcclxuXHJcbiAgLy9jb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyPigpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIHRyeSB7XHJcbiAgLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBzZXNzaW9uPy51c2VyLmlkLCB7XHJcbiAgLy8gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uPy50b2tlbnMuYWNjZXNzfWAsXHJcbiAgLy8gICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIC8vICAgICAgICAgfSxcclxuICAvLyAgICAgICB9KTtcclxuXHJcbiAgLy8gICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgLy8gICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgICAgICAgIHNldFVzZXIoZGF0YSk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIC8vICAgICB9IGZpbmFsbHkge1xyXG4gIC8vICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgZ2V0VXNlcigpO1xyXG4gIC8vIH0sIFtzZXNzaW9uXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtcm93LXJldmVyc2UgaXRlbXMtc3RhcnQganVzdGlmeS1hcm91bmQgZmxleC13cmFwXCI+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEV4dHJhSW5mbyBhdmF0YXI9e3VzZXIhLmF2YXRhciF9IGFjY291bnQ9e3VzZXIhLmFjY291bnR9IC8+XHJcbiAgICAgICAgICA8TWFpbkluZm8gdXNlcj17dXNlciF9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sIm5hbWVzIjpbIkV4dHJhSW5mbyIsIk1haW5JbmZvIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvYWRlciIsInVybCIsIlByb2ZpbGUiLCJ1c2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJhdmF0YXIiLCJhY2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/user/[id]/_components/Profile.tsx\n"));

/***/ })

});