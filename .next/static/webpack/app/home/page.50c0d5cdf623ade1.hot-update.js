"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-client)/./src/app/home/_components/ExchangeWindow.tsx":
/*!*****************************************************!*\
  !*** ./src/app/home/_components/ExchangeWindow.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Exchange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Exchange */ \"(app-client)/./src/app/home/_components/Exchange.tsx\");\n/* harmony import */ var _Reserve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reserve */ \"(app-client)/./src/app/home/_components/Reserve.tsx\");\n/* harmony import */ var _hooks_useGetData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useGetData */ \"(app-client)/./src/hooks/useGetData.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ExchangeWindow = (param)=>{\n    let { searchParams } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const [currencies, setCurrencies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getAndSetUser = async ()=>{\n            try {\n                const data = await (0,_hooks_useGetData__WEBPACK_IMPORTED_MODULE_4__.useGetData)(searchParams, \"currencies\", session);\n                setCurrencies(data);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        getAndSetUser();\n    }, [\n        session,\n        currencies\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[50vh] flex items-start justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Exchange__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                currencies: currencies\n            }, void 0, false, {\n                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\ExchangeWindow.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Reserve__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currencies: currencies\n            }, void 0, false, {\n                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\ExchangeWindow.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\ExchangeWindow.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ExchangeWindow, \"BKQEwo3GXHOHsKVTOjYcEXEArOA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession\n    ];\n});\n_c = ExchangeWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExchangeWindow);\nvar _c;\n$RefreshReg$(_c, \"ExchangeWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9ob21lL19jb21wb25lbnRzL0V4Y2hhbmdlV2luZG93LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVtRDtBQUdqQjtBQUNGO0FBRWdCO0FBQ0g7QUFFN0MsTUFBTU8saUJBQWlCO1FBQUMsRUFBRUMsWUFBWSxFQUFrQzs7SUFDdEUsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR0osMkRBQVVBO0lBRXBDLE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBYSxFQUFFO0lBRTNERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGdCQUFnQjtZQUNwQixJQUFJO2dCQUNGLE1BQU1KLE9BQU8sTUFBTUosNkRBQVVBLENBQUNHLGNBQWMsY0FBY0U7Z0JBQzFERSxjQUFjSDtZQUNoQixFQUFFLE9BQU9LLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtRQUNGO1FBQ0FEO0lBQ0YsR0FBRztRQUFDSDtRQUFTQztLQUFXO0lBRXhCLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2YsaURBQVFBO2dCQUFDUSxZQUFZQTs7Ozs7OzBCQUN0Qiw4REFBQ1AsZ0RBQU9BO2dCQUFDTyxZQUFZQTs7Ozs7Ozs7Ozs7O0FBRzNCO0dBdkJNSjs7UUFDc0JELHVEQUFVQTs7O0tBRGhDQztBQXlCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2hvbWUvX2NvbXBvbmVudHMvRXhjaGFuZ2VXaW5kb3cudHN4PzljNmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBDdXJyZW5jeSB9IGZyb20gXCJAL0B0eXBlcy9DdXJyZW5jeVwiO1xyXG5pbXBvcnQgRXhjaGFuZ2UgZnJvbSBcIi4vRXhjaGFuZ2VcIjtcclxuaW1wb3J0IFJlc2VydmUgZnJvbSBcIi4vUmVzZXJ2ZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQC9AdHlwZXMvU2VhcmNoUGFyYW1zXCI7XHJcbmltcG9ydCB7IHVzZUdldERhdGEgfSBmcm9tIFwiQC9ob29rcy91c2VHZXREYXRhXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5jb25zdCBFeGNoYW5nZVdpbmRvdyA9ICh7IHNlYXJjaFBhcmFtcyB9OiB7IHNlYXJjaFBhcmFtczogU2VhcmNoUGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgY29uc3QgW2N1cnJlbmNpZXMsIHNldEN1cnJlbmNpZXNdID0gdXNlU3RhdGU8Q3VycmVuY3lbXT4oW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRBbmRTZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB1c2VHZXREYXRhKHNlYXJjaFBhcmFtcywgXCJjdXJyZW5jaWVzXCIsIHNlc3Npb24pO1xyXG4gICAgICAgIHNldEN1cnJlbmNpZXMoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZ2V0QW5kU2V0VXNlcigpO1xyXG4gIH0sIFtzZXNzaW9uLCBjdXJyZW5jaWVzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs1MHZoXSBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICA8RXhjaGFuZ2UgY3VycmVuY2llcz17Y3VycmVuY2llc30gLz5cclxuICAgICAgPFJlc2VydmUgY3VycmVuY2llcz17Y3VycmVuY2llc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZVdpbmRvdztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJFeGNoYW5nZSIsIlJlc2VydmUiLCJ1c2VHZXREYXRhIiwidXNlU2Vzc2lvbiIsIkV4Y2hhbmdlV2luZG93Iiwic2VhcmNoUGFyYW1zIiwiZGF0YSIsInNlc3Npb24iLCJjdXJyZW5jaWVzIiwic2V0Q3VycmVuY2llcyIsImdldEFuZFNldFVzZXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/home/_components/ExchangeWindow.tsx\n"));

/***/ })

});