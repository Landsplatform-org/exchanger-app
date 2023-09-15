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

/***/ "(app-client)/./src/app/home/_components/Form.tsx":
/*!*******************************************!*\
  !*** ./src/app/home/_components/Form.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Input */ \"(app-client)/./src/components/Input.tsx\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Select */ \"(app-client)/./src/components/Select.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button */ \"(app-client)/./src/components/Button.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _utils_countSumWIthFee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/countSumWIthFee */ \"(app-client)/./src/utils/countSumWIthFee.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_getRate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/getRate */ \"(app-client)/./src/utils/getRate.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst initialValue = {\n    send_sum_without_fee: \"\",\n    send_sum_with_fee: \"\",\n    send_sum_fee: 0,\n    send_client_sum_with_ps_fee: \"\",\n    send_client_ps_fee: 0.005,\n    u_field_1: \"\",\n    user_id: 0,\n    direction_id: 1,\n    currency_id_send: \"1\",\n    currency_id_receive: \"2\",\n    rate_out: 0,\n    rate_in: 1,\n    receive_client_sum_with_ps_fee: \"\",\n    receive_client_ps_fee: 0.005,\n    receive_sum_without_fee: \"\",\n    receive_sum_with_fee: \"\",\n    receive_sum_fee: 0,\n    process_type_id: 1,\n    status_id: 1\n};\nconst Form = (param)=>{\n    let { curDefaultSend, curDefaultReceive } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();\n    const [exchange, setExchange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue);\n    const handleChanges = (e)=>{\n        const { name, value } = e.target;\n        if (name !== \"send_sum_without_fee\") {\n            return setExchange({\n                ...exchange,\n                [name]: value\n            });\n        }\n        setExchange({\n            ...exchange,\n            send_sum_without_fee: value,\n            send_client_sum_with_ps_fee: (0,_utils_countSumWIthFee__WEBPACK_IMPORTED_MODULE_5__.checkCurrencies)(exchange.currency_id_send, exchange.currency_id_receive, {\n                type: \"send\",\n                sum: value,\n                sendfee: exchange.send_client_ps_fee,\n                receiveFee: exchange.receive_client_ps_fee,\n                rate: exchange.rate_out\n            }),\n            receive_client_sum_with_ps_fee: (0,_utils_countSumWIthFee__WEBPACK_IMPORTED_MODULE_5__.checkCurrencies)(exchange.currency_id_send, exchange.currency_id_receive, {\n                type: \"receive\",\n                sum: value,\n                sendfee: exchange.send_client_ps_fee,\n                receivefee: exchange.receive_client_ps_fee,\n                rate: exchange.rate_out\n            })\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!exchange) return;\n        sendExchangeRequest(exchange);\n    };\n    const sendExchangeRequest = async (data)=>{\n        const url = \"http://localhost:5000/api/exchanges/add\";\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(url, data);\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (session) {\n            setExchange({\n                ...exchange,\n                user_id: session.user.id\n            });\n        }\n    }, [\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setExchange({\n            ...exchange,\n            send_sum_with_fee: exchange.send_sum_without_fee,\n            receive_sum_with_fee: exchange.receive_client_sum_with_ps_fee || \"\",\n            receive_sum_without_fee: exchange.receive_client_sum_with_ps_fee || \"\"\n        });\n    }, [\n        exchange.send_sum_without_fee,\n        exchange.receive_client_sum_with_ps_fee\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCurrentRate = async ()=>{\n            const rate = await (0,_utils_getRate__WEBPACK_IMPORTED_MODULE_7__.getRate)();\n            setExchange({\n                ...exchange,\n                rate_out: rate\n            });\n        };\n        getCurrentRate;\n    }, []);\n    console.log(exchange.rate_out);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: \"submit\",\n        onSubmit: handleSubmit,\n        className: \"flex flex-col  gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-between gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Select__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                name: \"currency_id_send\",\n                                onChange: handleChanges,\n                                children: curDefaultSend.map((currency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: currency.id,\n                                        selected: currency.id === 1,\n                                        children: [\n                                            currency.name,\n                                            \" \",\n                                            currency.currency\n                                        ]\n                                    }, currency.id, true, {\n                                        fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-sm\",\n                                    children: [\n                                        \"Коммиссия ПС: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold\",\n                                            children: \"0.5%\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                                            lineNumber: 155,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Select__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                name: \"currency_id_receive\",\n                                onChange: handleChanges,\n                                children: curDefaultReceive.map((currency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: currency.id,\n                                        selected: currency.id === 2,\n                                        children: [\n                                            currency.name,\n                                            \" \",\n                                            currency.currency\n                                        ]\n                                    }, currency.id, true, {\n                                        fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                                        lineNumber: 160,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                                lineNumber: 158,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"send_sum_without_fee\",\n                                type: \"text\",\n                                placeholder: \"Введите сумму отправки\",\n                                value: exchange.send_sum_without_fee,\n                                onChange: handleChanges\n                            }, void 0, false, {\n                                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                                lineNumber: 171,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                type: \"text\",\n                                placeholder: \"Сумма получения с комиссией\",\n                                value: exchange.send_client_sum_with_ps_fee,\n                                readOnly: true\n                            }, void 0, false, {\n                                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                                lineNumber: 178,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                type: \"text\",\n                                placeholder: \"Итоговая сумма получения\",\n                                value: exchange.receive_client_sum_with_ps_fee,\n                                readOnly: true\n                            }, void 0, false, {\n                                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                                lineNumber: 184,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                name: \"u_field_1\",\n                style: {\n                    width: \"100%\"\n                },\n                type: \"text\",\n                placeholder: \"Счет получения\",\n                value: exchange.u_field_1,\n                onChange: handleChanges\n            }, void 0, false, {\n                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                type: \"submit\",\n                disabled: !session,\n                children: \"Обмен\"\n            }, void 0, false, {\n                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n                lineNumber: 200,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\home\\\\_components\\\\Form.tsx\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Form, \"zHwF4PdqSwxX96EBgGVHyhEzLwQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9ob21lL19jb21wb25lbnRzL0Zvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTJFO0FBRXBDO0FBQ0U7QUFDQTtBQUVmO0FBQ2dDO0FBQ2I7QUFDSDtBQU8xQyxNQUFNVSxlQUF5QjtJQUM3QkMsc0JBQXNCO0lBQ3RCQyxtQkFBbUI7SUFDbkJDLGNBQWM7SUFDZEMsNkJBQTZCO0lBQzdCQyxvQkFBb0I7SUFDcEJDLFdBQVc7SUFDWEMsU0FBUztJQUNUQyxjQUFjO0lBQ2RDLGtCQUFrQjtJQUNsQkMscUJBQXFCO0lBQ3JCQyxVQUFVO0lBQ1ZDLFNBQVM7SUFDVEMsZ0NBQWdDO0lBQ2hDQyx1QkFBdUI7SUFDdkJDLHlCQUF5QjtJQUN6QkMsc0JBQXNCO0lBQ3RCQyxpQkFBaUI7SUFDakJDLGlCQUFpQjtJQUNqQkMsV0FBVztBQUNiO0FBRUEsTUFBTUMsT0FBNEI7UUFBQyxFQUFFQyxjQUFjLEVBQUVDLGlCQUFpQixFQUFFOztJQUN0RSxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHMUIsMkRBQVVBO0lBRXBDLE1BQU0sQ0FBQzJCLFVBQVVDLFlBQVksR0FBR2xDLCtDQUFRQSxDQUFXUTtJQUVuRCxNQUFNMkIsZ0JBQWdCLENBQ3BCQztRQUVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUVoQyxJQUFJRixTQUFTLHdCQUF3QjtZQUNuQyxPQUFPSCxZQUFZO2dCQUNqQixHQUFHRCxRQUFRO2dCQUNYLENBQUNJLEtBQUssRUFBRUM7WUFDVjtRQUNGO1FBRUFKLFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1h4QixzQkFBc0I2QjtZQUN0QjFCLDZCQUE2QlAsdUVBQWVBLENBQzFDNEIsU0FBU2hCLGdCQUFnQixFQUN6QmdCLFNBQVNmLG1CQUFtQixFQUM1QjtnQkFDRXNCLE1BQU07Z0JBQ05DLEtBQUtIO2dCQUNMSSxTQUFTVCxTQUFTcEIsa0JBQWtCO2dC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QkFBb0I7Z0NBQ3BDc0QsVUFBVTVCOzs7Ozs7MENBRVosOERBQUNsQyx5REFBS0E7Z0NBQ0p1QyxNQUFLO2dDQUNMNkIsYUFBWTtnQ0FDWi9CLE9BQU9MLFNBQVNyQiwyQkFBMkI7Z0NBQzNDMEQsUUFBUTs7Ozs7OzBDQUVWLDhEQUFDckUseURBQUtBO2dDQUNKdUMsTUFBSztnQ0FDTDZCLGFBQVk7Z0NBQ1ovQixPQUFPTCxTQUFTWiw4QkFBOEI7Z0NBQzlDaUQsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlkLDhEQUFDckUseURBQUtBO2dCQUNKb0MsTUFBSztnQkFDTGtDLE9BQU87b0JBQUVDLE9BQU87Z0JBQU87Z0JBQ3ZCaEMsTUFBSztnQkFDTDZCLGFBQVk7Z0JBQ1ovQixPQUFPTCxTQUFTbkIsU0FBUztnQkFDekJpRCxVQUFVNUI7Ozs7OzswQkFFWiw4REFBQ2hDLDBEQUFNQTtnQkFBQ3FDLE1BQUs7Z0JBQVNpQyxVQUFVLENBQUN6QzswQkFBUzs7Ozs7Ozs7Ozs7O0FBS2hEO0dBcEtNSjs7UUFDc0J0Qix1REFBVUE7OztLQURoQ3NCO0FBc0tOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaG9tZS9fY29tcG9uZW50cy9Gb3JtLnRzeD9iOWIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCBGb3JtRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdHlwZSBDdXJyZW5jeSB9IGZyb20gXCJAL0B0eXBlcy9DdXJyZW5jeVwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAL2NvbXBvbmVudHMvU2VsZWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IHsgRXhjaGFuZ2UgfSBmcm9tIFwiQC9AdHlwZXMvRXhjaGFuZ2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjaGVja0N1cnJlbmNpZXMgfSBmcm9tIFwiQC91dGlscy9jb3VudFN1bVdJdGhGZWVcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0UmF0ZSB9IGZyb20gXCJAL3V0aWxzL2dldFJhdGVcIjtcclxuXHJcbnR5cGUgRm9ybVByb3BzID0ge1xyXG4gIGN1ckRlZmF1bHRTZW5kOiBDdXJyZW5jeVtdO1xyXG4gIGN1ckRlZmF1bHRSZWNlaXZlOiBDdXJyZW5jeVtdO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFZhbHVlOiBFeGNoYW5nZSA9IHtcclxuICBzZW5kX3N1bV93aXRob3V0X2ZlZTogXCJcIixcclxuICBzZW5kX3N1bV93aXRoX2ZlZTogXCJcIixcclxuICBzZW5kX3N1bV9mZWU6IDAsXHJcbiAgc2VuZF9jbGllbnRfc3VtX3dpdGhfcHNfZmVlOiBcIlwiLFxyXG4gIHNlbmRfY2xpZW50X3BzX2ZlZTogMC4wMDUsXHJcbiAgdV9maWVsZF8xOiBcIlwiLFxyXG4gIHVzZXJfaWQ6IDAsXHJcbiAgZGlyZWN0aW9uX2lkOiAxLFxyXG4gIGN1cnJlbmN5X2lkX3NlbmQ6IFwiMVwiLFxyXG4gIGN1cnJlbmN5X2lkX3JlY2VpdmU6IFwiMlwiLFxyXG4gIHJhdGVfb3V0OiAwLFxyXG4gIHJhdGVfaW46IDEsXHJcbiAgcmVjZWl2ZV9jbGllbnRfc3VtX3dpdGhfcHNfZmVlOiBcIlwiLFxyXG4gIHJlY2VpdmVfY2xpZW50X3BzX2ZlZTogMC4wMDUsXHJcbiAgcmVjZWl2ZV9zdW1fd2l0aG91dF9mZWU6IFwiXCIsXHJcbiAgcmVjZWl2ZV9zdW1fd2l0aF9mZWU6IFwiXCIsXHJcbiAgcmVjZWl2ZV9zdW1fZmVlOiAwLFxyXG4gIHByb2Nlc3NfdHlwZV9pZDogMSxcclxuICBzdGF0dXNfaWQ6IDEsXHJcbn07XHJcblxyXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxGb3JtUHJvcHM+ID0gKHsgY3VyRGVmYXVsdFNlbmQsIGN1ckRlZmF1bHRSZWNlaXZlIH0pID0+IHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgY29uc3QgW2V4Y2hhbmdlLCBzZXRFeGNoYW5nZV0gPSB1c2VTdGF0ZTxFeGNoYW5nZT4oaW5pdGlhbFZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlcyA9IChcclxuICAgIGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD5cclxuICApID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmIChuYW1lICE9PSBcInNlbmRfc3VtX3dpdGhvdXRfZmVlXCIpIHtcclxuICAgICAgcmV0dXJuIHNldEV4Y2hhbmdlKHtcclxuICAgICAgICAuLi5leGNoYW5nZSxcclxuICAgICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFeGNoYW5nZSh7XHJcbiAgICAgIC4uLmV4Y2hhbmdlLFxyXG4gICAgICBzZW5kX3N1bV93aXRob3V0X2ZlZTogdmFsdWUsXHJcbiAgICAgIHNlbmRfY2xpZW50X3N1bV93aXRoX3BzX2ZlZTogY2hlY2tDdXJyZW5jaWVzKFxyXG4gICAgICAgIGV4Y2hhbmdlLmN1cnJlbmN5X2lkX3NlbmQsXHJcbiAgICAgICAgZXhjaGFuZ2UuY3VycmVuY3lfaWRfcmVjZWl2ZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcInNlbmRcIixcclxuICAgICAgICAgIHN1bTogdmFsdWUsXHJcbiAgICAgICAgICBzZW5kZmVlOiBleGNoYW5nZS5zZW5kX2NsaWVudF9wc19mZWUsXHJcbiAgICAgICAgICByZWNlaXZlRmVlOiBleGNoYW5nZS5yZWNlaXZlX2NsaWVudF9wc19mZWUsXHJcbiAgICAgICAgICByYXRlOiBleGNoYW5nZS5yYXRlX291dCxcclxuICAgICAgICB9XHJcbiAgICAgICksXHJcbiAgICAgIHJlY2VpdmVfY2xpZW50X3N1bV93aXRoX3BzX2ZlZTogY2hlY2tDdXJyZW5jaWVzKFxyXG4gICAgICAgIGV4Y2hhbmdlLmN1cnJlbmN5X2lkX3NlbmQsXHJcbiAgICAgICAgZXhjaGFuZ2UuY3VycmVuY3lfaWRfcmVjZWl2ZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcInJlY2VpdmVcIixcclxuICAgICAgICAgIHN1bTogdmFsdWUsXHJcbiAgICAgICAgICBzZW5kZmVlOiBleGNoYW5nZS5zZW5kX2NsaWVudF9wc19mZWUsXHJcbiAgICAgICAgICByZWNlaXZlZmVlOiBleGNoYW5nZS5yZWNlaXZlX2NsaWVudF9wc19mZWUsXHJcbiAgICAgICAgICByYXRlOiBleGNoYW5nZS5yYXRlX291dCxcclxuICAgICAgICB9XHJcbiAgICAgICksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFleGNoYW5nZSkgcmV0dXJuO1xyXG4gICAgc2VuZEV4Y2hhbmdlUmVxdWVzdChleGNoYW5nZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZEV4Y2hhbmdlUmVxdWVzdCA9IGFzeW5jIChkYXRhOiBFeGNoYW5nZSkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2V4Y2hhbmdlcy9hZGRcIjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgc2V0RXhjaGFuZ2Uoe1xyXG4gICAgICAgIC4uLmV4Y2hhbmdlLFxyXG4gICAgICAgIHVzZXJfaWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3Nlc3Npb25dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEV4Y2hhbmdlKHtcclxuICAgICAgLi4uZXhjaGFuZ2UsXHJcbiAgICAgIHNlbmRfc3VtX3dpdGhfZmVlOiBleGNoYW5nZS5zZW5kX3N1bV93aXRob3V0X2ZlZSxcclxuICAgICAgcmVjZWl2ZV9zdW1fd2l0aF9mZWU6IGV4Y2hhbmdlLnJlY2VpdmVfY2xpZW50X3N1bV93aXRoX3BzX2ZlZSB8fCBcIlwiLFxyXG4gICAgICByZWNlaXZlX3N1bV93aXRob3V0X2ZlZTogZXhjaGFuZ2UucmVjZWl2ZV9jbGllbnRfc3VtX3dpdGhfcHNfZmVlIHx8IFwiXCIsXHJcbiAgICB9KTtcclxuICB9LCBbZXhjaGFuZ2Uuc2VuZF9zdW1fd2l0aG91dF9mZWUsIGV4Y2hhbmdlLnJlY2VpdmVfY2xpZW50X3N1bV93aXRoX3BzX2ZlZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0Q3VycmVudFJhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJhdGUgPSBhd2FpdCBnZXRSYXRlKCk7XHJcbiAgICAgIHNldEV4Y2hhbmdlKHtcclxuICAgICAgICAuLi5leGNoYW5nZSxcclxuICAgICAgICByYXRlX291dDogcmF0ZSxcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBnZXRDdXJyZW50UmF0ZVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coZXhjaGFuZ2UucmF0ZV9vdXQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBhY3Rpb249XCJzdWJtaXRcIlxyXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBnYXAtNFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxyXG4gICAgICAgICAgPFNlbGVjdCBuYW1lPVwiY3VycmVuY3lfaWRfc2VuZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VzfT5cclxuICAgICAgICAgICAge2N1ckRlZmF1bHRTZW5kLm1hcCgoY3VycmVuY3k6IEN1cnJlbmN5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PXtjdXJyZW5jeS5pZH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW5jeS5pZH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtjdXJyZW5jeS5pZCA9PT0gMX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVuY3kubmFtZX0ge2N1cnJlbmN5LmN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgINCa0L7QvNC80LjRgdGB0LjRjyDQn9ChOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj4wLjUlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDxTZWxlY3QgbmFtZT1cImN1cnJlbmN5X2lkX3JlY2VpdmVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlc30+XHJcbiAgICAgICAgICAgIHtjdXJEZWZhdWx0UmVjZWl2ZS5tYXAoKGN1cnJlbmN5OiBDdXJyZW5jeSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT17Y3VycmVuY3kuaWR9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVuY3kuaWR9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17Y3VycmVuY3kuaWQgPT09IDJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbmN5Lm5hbWV9IHtjdXJyZW5jeS5jdXJyZW5jeX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwic2VuZF9zdW1fd2l0aG91dF9mZWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0YHRg9C80LzRgyDQvtGC0L/RgNCw0LLQutC4XCJcclxuICAgICAgICAgICAgdmFsdWU9e2V4Y2hhbmdlLnNlbmRfc3VtX3dpdGhvdXRfZmVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YPQvNC80LAg0L/QvtC70YPRh9C10L3QuNGPINGBINC60L7QvNC40YHRgdC40LXQuVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtleGNoYW5nZS5zZW5kX2NsaWVudF9zdW1fd2l0aF9wc19mZWV9XHJcbiAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQmNGC0L7Qs9C+0LLQsNGPINGB0YPQvNC80LAg0L/QvtC70YPRh9C10L3QuNGPXCJcclxuICAgICAgICAgICAgdmFsdWU9e2V4Y2hhbmdlLnJlY2VpdmVfY2xpZW50X3N1bV93aXRoX3BzX2ZlZX1cclxuICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBuYW1lPVwidV9maWVsZF8xXCJcclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQodGH0LXRgiDQv9C+0LvRg9GH0LXQvdC40Y9cIlxyXG4gICAgICAgIHZhbHVlPXtleGNoYW5nZS51X2ZpZWxkXzF9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZXN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshc2Vzc2lvbn0+XHJcbiAgICAgICAg0J7QsdC80LXQvVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbnB1dCIsIlNlbGVjdCIsIkJ1dHRvbiIsImF4aW9zIiwiY2hlY2tDdXJyZW5jaWVzIiwidXNlU2Vzc2lvbiIsImdldFJhdGUiLCJpbml0aWFsVmFsdWUiLCJzZW5kX3N1bV93aXRob3V0X2ZlZSIsInNlbmRfc3VtX3dpdGhfZmVlIiwic2VuZF9zdW1fZmVlIiwic2VuZF9jbGllbnRfc3VtX3dpdGhfcHNfZmVlIiwic2VuZF9jbGllbnRfcHNfZmVlIiwidV9maWVsZF8xIiwidXNlcl9pZCIsImRpcmVjdGlvbl9pZCIsImN1cnJlbmN5X2lkX3NlbmQiLCJjdXJyZW5jeV9pZF9yZWNlaXZlIiwicmF0ZV9vdXQiLCJyYXRlX2luIiwicmVjZWl2ZV9jbGllbnRfc3VtX3dpdGhfcHNfZmVlIiwicmVjZWl2ZV9jbGllbnRfcHNfZmVlIiwicmVjZWl2ZV9zdW1fd2l0aG91dF9mZWUiLCJyZWNlaXZlX3N1bV93aXRoX2ZlZSIsInJlY2VpdmVfc3VtX2ZlZSIsInByb2Nlc3NfdHlwZV9pZCIsInN0YXR1c19pZCIsIkZvcm0iLCJjdXJEZWZhdWx0U2VuZCIsImN1ckRlZmF1bHRSZWNlaXZlIiwiZGF0YSIsInNlc3Npb24iLCJleGNoYW5nZSIsInNldEV4Y2hhbmdlIiwiaGFuZGxlQ2hhbmdlcyIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJ0eXBlIiwic3VtIiwic2VuZGZlZSIsInJlY2VpdmVGZWUiLCJyYXRlIiwicmVjZWl2ZWZlZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2VuZEV4Y2hhbmdlUmVxdWVzdCIsInVybCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVzZXIiLCJpZCIsImdldEN1cnJlbnRSYXRlIiwiZm9ybSIsImFjdGlvbiIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DaGFuZ2UiLCJtYXAiLCJjdXJyZW5jeSIsIm9wdGlvbiIsInNlbGVjdGVkIiwic3BhbiIsInBsYWNlaG9sZGVyIiwicmVhZE9ubHkiLCJzdHlsZSIsIndpZHRoIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/home/_components/Form.tsx\n"));

/***/ })

});