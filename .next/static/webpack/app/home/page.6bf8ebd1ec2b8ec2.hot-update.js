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

/***/ "(app-client)/./src/utils/countSumWIthFee.ts":
/*!**************************************!*\
  !*** ./src/utils/countSumWIthFee.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkCurrencies: function() { return /* binding */ checkCurrencies; }\n/* harmony export */ });\nconst checkCurrencies = (firstCur, secondCur, param)=>{\n    let { ...args } = param;\n    console.log(firstCur, secondCur);\n    switch(true){\n        case firstCur === \"1\" && secondCur === \"2\" || firstCur === \"2\" && secondCur === \"1\":\n            return countUSDtoUSD({\n                ...args\n            });\n        case firstCur === \"1\" && secondCur === \"5\":\n            return countUSDtoRUB({\n                ...args\n            });\n        case firstCur === (\"5\" || 0) && secondCur !== \"5\":\n            return countRUBtoUSD({\n                ...args\n            });\n    }\n};\nconst countUSDtoUSD = (param)=>{\n    let { ...args } = param;\n    let fee;\n    switch(args.type){\n        case \"send\":\n            return (+args.sum * args.sendfee + +args.sum).toFixed(2);\n        case \"receive\":\n            {\n                fee = +args.sum * args.receivefee;\n                const result = (+args.sum - fee).toFixed(3).toString();\n                return result;\n            }\n    }\n};\nconst countUSDtoRUB = (param)=>{\n    let { ...args } = param;\n    let resWOFee;\n    let fee;\n    switch(args.type){\n        case \"send\":\n            return (+args.sum * args.sendfee + +args.sum).toFixed(2);\n        case \"receive\":\n            {\n                resWOFee = +args.sum * args.rate;\n                fee = +resWOFee * args.receivefee;\n                const result = (resWOFee - fee).toFixed(3).toString();\n                return result;\n            }\n    }\n};\nconst countRUBtoUSD = (param)=>{\n    let { ...args } = param;\n    let resWOFee;\n    let fee;\n    switch(args.type){\n        case \"send\":\n            return (+args.sum * args.sendfee + +args.sum).toFixed(2);\n        case \"receive\":\n            {\n                resWOFee = +args.sum / args.rate;\n                fee = +resWOFee * args.receivefee;\n                const result = (resWOFee - fee).toFixed(3).toString();\n                return result;\n            }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3V0aWxzL2NvdW50U3VtV0l0aEZlZS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsa0JBQWtCLENBQUNDLFVBQWtCQztRQUFtQixFQUFFLEdBQUdDLE1BQU07SUFDOUVDLFFBQVFDLEdBQUcsQ0FBQ0osVUFBVUM7SUFDdEIsT0FBUTtRQUNOLEtBQU0sYUFBYyxPQUFPQSxjQUFjLE9BQVNELGFBQWEsT0FBT0MsY0FBYztZQUNsRixPQUFPSSxjQUFjO2dCQUFFLEdBQUdILElBQUk7WUFBQztRQUNqQyxLQUFPRixhQUFhLE9BQU9DLGNBQWM7WUFDdkMsT0FBT0ssY0FBYztnQkFBRSxHQUFHSixJQUFJO1lBQUM7UUFDakMsS0FBT0YsYUFBYyxRQUFPLENBQUUsS0FBT0MsY0FBYztZQUNqRCxPQUFPTSxjQUFjO2dCQUFFLEdBQUdMLElBQUk7WUFBQztJQUNuQztBQUNGLEVBQUM7QUFFRCxNQUFNRyxnQkFBZ0I7UUFBQyxFQUFFLEdBQUdILE1BQU07SUFDaEMsSUFBSU07SUFFSixPQUFRTixLQUFLTyxJQUFJO1FBQ2YsS0FBSztZQUNILE9BQU8sQ0FBQyxDQUFDUCxLQUFLUSxHQUFHLEdBQUdSLEtBQUtTLE9BQU8sR0FBRyxDQUFDVCxLQUFLUSxHQUFHLEVBQUVFLE9BQU8sQ0FBQztRQUN4RCxLQUFLO1lBQVc7Z0JBQ2JKLE1BQU0sQ0FBQ04sS0FBS1EsR0FBRyxHQUFHUixLQUFLVyxVQUFVO2dCQUNqQyxNQUFNQyxTQUFTLENBQUMsQ0FBQ1osS0FBS1EsR0FBRyxHQUFHRixHQUFFLEVBQUdJLE9BQU8sQ0FBQyxHQUFHRyxRQUFRO2dCQUNwRCxPQUFPRDtZQUNSO0lBQ0o7QUFDRjtBQUVBLE1BQU1SLGdCQUFlO1FBQUMsRUFBRSxHQUFHSixNQUFNO0lBQy9CLElBQUljO0lBQ0osSUFBSVI7SUFFSixPQUFRTixLQUFLTyxJQUFJO1FBQ2YsS0FBSztZQUNILE9BQU8sQ0FBQyxDQUFDUCxLQUFLUSxHQUFHLEdBQUdSLEtBQUtTLE9BQU8sR0FBRyxDQUFDVCxLQUFLUSxHQUFHLEVBQUVFLE9BQU8sQ0FBQztRQUN4RCxLQUFLO1lBQVc7Z0JBQ2RJLFdBQWEsQ0FBQ2QsS0FBS1EsR0FBRyxHQUFHUixLQUFLZSxJQUFJO2dCQUNsQ1QsTUFBTSxDQUFDUSxXQUFXZCxLQUFLVyxVQUFVO2dCQUNqQyxNQUFNQyxTQUFTLENBQUNFLFdBQVdSLEdBQUUsRUFBR0ksT0FBTyxDQUFDLEdBQUdHLFFBQVE7Z0JBQ25ELE9BQU9EO1lBQ1Q7SUFDRjtBQUNGO0FBR0EsTUFBTVAsZ0JBQWdCO1FBQUMsRUFBRSxHQUFHTCxNQUFNO0lBQ2hDLElBQUljO0lBQ0osSUFBSVI7SUFFSixPQUFRTixLQUFLTyxJQUFJO1FBQ2YsS0FBSztZQUNILE9BQU8sQ0FBQyxDQUFDUCxLQUFLUSxHQUFHLEdBQUdSLEtBQUtTLE9BQU8sR0FBRyxDQUFDVCxLQUFLUSxHQUFHLEVBQUVFLE9BQU8sQ0FBQztRQUN4RCxLQUFLO1lBQVc7Z0JBQ2RJLFdBQWEsQ0FBQ2QsS0FBS1EsR0FBRyxHQUFHUixLQUFLZSxJQUFJO2dCQUNsQ1QsTUFBTSxDQUFDUSxXQUFXZCxLQUFLVyxVQUFVO2dCQUNqQyxNQUFNQyxTQUFTLENBQUNFLFdBQVdSLEdBQUUsRUFBR0ksT0FBTyxDQUFDLEdBQUdHLFFBQVE7Z0JBQ25ELE9BQU9EO1lBQ1Q7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9jb3VudFN1bVdJdGhGZWUudHM/NDVmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2hlY2tDdXJyZW5jaWVzID0gKGZpcnN0Q3VyOiBzdHJpbmcsIHNlY29uZEN1cjogc3RyaW5nLCB7IC4uLmFyZ3MgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGZpcnN0Q3VyLCBzZWNvbmRDdXIpXHJcbiAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICBjYXNlICgoZmlyc3RDdXIgPT09IFwiMVwiICYmIHNlY29uZEN1ciA9PT0gXCIyXCIpIHx8IChmaXJzdEN1ciA9PT0gXCIyXCIgJiYgc2Vjb25kQ3VyID09PSBcIjFcIikpOiBcclxuICAgICAgcmV0dXJuIGNvdW50VVNEdG9VU0QoeyAuLi5hcmdzIH0pXHJcbiAgICBjYXNlICgoZmlyc3RDdXIgPT09IFwiMVwiICYmIHNlY29uZEN1ciA9PT0gXCI1XCIpKTpcclxuICAgICAgcmV0dXJuIGNvdW50VVNEdG9SVUIoeyAuLi5hcmdzIH0pXHJcbiAgICBjYXNlICgoZmlyc3RDdXIgPT09IChcIjVcIiB8fCBcIjNcIikgICYmIHNlY29uZEN1ciAhPT0gXCI1XCIpKTpcclxuICAgICAgcmV0dXJuIGNvdW50UlVCdG9VU0QoeyAuLi5hcmdzIH0pICAgXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjb3VudFVTRHRvVVNEID0gKHsgLi4uYXJncyB9KSA9PiB7XHJcbiAgbGV0IGZlZTtcclxuXHJcbiAgc3dpdGNoIChhcmdzLnR5cGUpIHtcclxuICAgIGNhc2UgXCJzZW5kXCI6XHJcbiAgICAgIHJldHVybiAoK2FyZ3Muc3VtICogYXJncy5zZW5kZmVlICsgK2FyZ3Muc3VtKS50b0ZpeGVkKDIpO1xyXG4gICAgY2FzZSBcInJlY2VpdmVcIjoge1xyXG4gICAgICAgZmVlID0gK2FyZ3Muc3VtICogYXJncy5yZWNlaXZlZmVlXHJcbiAgICAgICBjb25zdCByZXN1bHQgPSAoK2FyZ3Muc3VtIC0gZmVlKS50b0ZpeGVkKDMpLnRvU3RyaW5nKClcclxuICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvdW50VVNEdG9SVUI9ICh7IC4uLmFyZ3MgfSkgPT4ge1xyXG4gIGxldCByZXNXT0ZlZTtcclxuICBsZXQgZmVlO1xyXG5cclxuICBzd2l0Y2ggKGFyZ3MudHlwZSkge1xyXG4gICAgY2FzZSBcInNlbmRcIjpcclxuICAgICAgcmV0dXJuICgrYXJncy5zdW0gKiBhcmdzLnNlbmRmZWUgKyArYXJncy5zdW0pLnRvRml4ZWQoMik7XHJcbiAgICBjYXNlIFwicmVjZWl2ZVwiOiB7XHJcbiAgICAgIHJlc1dPRmVlID0gKCgrYXJncy5zdW0gKiBhcmdzLnJhdGUpKVxyXG4gICAgICBmZWUgPSArcmVzV09GZWUgKiBhcmdzLnJlY2VpdmVmZWVcclxuICAgICAgY29uc3QgcmVzdWx0ID0gKHJlc1dPRmVlIC0gZmVlKS50b0ZpeGVkKDMpLnRvU3RyaW5nKClcclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGNvdW50UlVCdG9VU0QgPSAoeyAuLi5hcmdzIH0pID0+IHtcclxuICBsZXQgcmVzV09GZWU7XHJcbiAgbGV0IGZlZTtcclxuXHJcbiAgc3dpdGNoIChhcmdzLnR5cGUpIHtcclxuICAgIGNhc2UgXCJzZW5kXCI6XHJcbiAgICAgIHJldHVybiAoK2FyZ3Muc3VtICogYXJncy5zZW5kZmVlICsgK2FyZ3Muc3VtKS50b0ZpeGVkKDIpO1xyXG4gICAgY2FzZSBcInJlY2VpdmVcIjoge1xyXG4gICAgICByZXNXT0ZlZSA9ICgoK2FyZ3Muc3VtIC8gYXJncy5yYXRlKSlcclxuICAgICAgZmVlID0gK3Jlc1dPRmVlICogYXJncy5yZWNlaXZlZmVlXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IChyZXNXT0ZlZSAtIGZlZSkudG9GaXhlZCgzKS50b1N0cmluZygpXHJcbiAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiY2hlY2tDdXJyZW5jaWVzIiwiZmlyc3RDdXIiLCJzZWNvbmRDdXIiLCJhcmdzIiwiY29uc29sZSIsImxvZyIsImNvdW50VVNEdG9VU0QiLCJjb3VudFVTRHRvUlVCIiwiY291bnRSVUJ0b1VTRCIsImZlZSIsInR5cGUiLCJzdW0iLCJzZW5kZmVlIiwidG9GaXhlZCIsInJlY2VpdmVmZWUiLCJyZXN1bHQiLCJ0b1N0cmluZyIsInJlc1dPRmVlIiwicmF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/utils/countSumWIthFee.ts\n"));

/***/ })

});