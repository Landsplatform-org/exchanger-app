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

/***/ "(app-client)/./src/app/user/[id]/_components/Avatar.tsx":
/*!**************************************************!*\
  !*** ./src/app/user/[id]/_components/Avatar.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"(app-client)/./src/components/Button.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst url = \"http://localhost:5000/api/users/set-avatar/\";\nconst Avatar = (param)=>{\n    let { avatar } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    console.log(\"avatar\", session);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(avatar);\n    const handleFile = (e)=>{\n        if (!e.target.files) return;\n        const imageState = e.target.files[0];\n        setImage(imageState);\n    };\n    const handleUpload = async (e)=>{\n        e.preventDefault();\n        updateAvatar(image);\n    };\n    const updateAvatar = async (file)=>{\n        if (typeof file === \"string\") return;\n        try {\n            var _session, _session1;\n            const formData = new FormData();\n            formData.append(\"avatar\", file);\n            const response = await fetch(url + ((_session = session) === null || _session === void 0 ? void 0 : _session.user.id), {\n                method: \"POST\",\n                headers: {\n                    authorization: \"Bearer \".concat((_session1 = session) === null || _session1 === void 0 ? void 0 : _session1.tokens.access)\n                },\n                body: formData\n            });\n            // const response = await axios.post(url + session?.user.id, formData, {\n            //   headers: {\n            //     Authorization: session?.tokens.access\n            //   }\n            // });\n            if (response.ok) {\n                const { data } = await response.json();\n                setImage(data);\n            }\n        //if(response.status === 200) location.reload();\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setImage(avatar);\n    }, [\n        avatar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: \"submit\",\n        onSubmit: (e)=>handleUpload(e),\n        className: \"flex flex-col gap-4 items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"upload-avatar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"upload-avatar\",\n                        type: \"file\",\n                        placeholder: \"Сменить аватар\",\n                        onChange: (e)=>handleFile(e),\n                        className: \"hidden\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\user\\\\[id]\\\\_components\\\\Avatar.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: \"rounded-full w-[200px] h-[200px] object-cover object-center\",\n                        src: \"http://localhost:5000/uploads/\" + avatar,\n                        width: 200,\n                        height: 200,\n                        quality: 50,\n                        alt: \"Ваше фото профиля\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\user\\\\[id]\\\\_components\\\\Avatar.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\user\\\\[id]\\\\_components\\\\Avatar.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                type: \"submit\",\n                disabled: image === avatar,\n                children: \"Сменить аватар\"\n            }, void 0, false, {\n                fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\user\\\\[id]\\\\_components\\\\Avatar.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\.web\\\\.job-projects\\\\next-exchanger-app\\\\exchanger-app\\\\src\\\\app\\\\user\\\\[id]\\\\_components\\\\Avatar.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Avatar, \"D6xfjGLTNTBcPT0ZxikeQ8jtjfg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC91c2VyL1tpZF0vX2NvbXBvbmVudHMvQXZhdGFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUyRTtBQUVsQztBQUNWO0FBRWM7QUFFN0MsTUFBTU0sTUFBTTtBQUVaLE1BQU1DLFNBQVM7UUFBQyxFQUFFQyxNQUFNLEVBQXNCOztJQUM1QyxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHTCwyREFBVUE7SUFFcENNLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtJQUV0QixNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQWdCTTtJQUVsRCxNQUFNTyxhQUFhLENBQUNDO1FBQ2xCLElBQUksQ0FBQ0EsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLEVBQUU7UUFDckIsTUFBTUMsYUFBYUgsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUNwQ0osU0FBU0s7SUFDWDtJQUVBLE1BQU1DLGVBQWUsT0FBT0o7UUFDMUJBLEVBQUVLLGNBQWM7UUFDaEJDLGFBQWFUO0lBQ2Y7SUFFQSxNQUFNUyxlQUFlLE9BQU9DO1FBQzFCLElBQUcsT0FBT0EsU0FBUyxVQUFVO1FBRTdCLElBQUk7Z0JBSWlDYixVQUdOQTtZQU43QixNQUFNYyxXQUFXLElBQUlDO1lBQ3JCRCxTQUFTRSxNQUFNLENBQUMsVUFBVUg7WUFFMUIsTUFBTUksV0FBVyxNQUFNQyxNQUFNdEIsUUFBTUksV0FBQUEscUJBQUFBLCtCQUFBQSxTQUFTbUIsSUFBSSxDQUFDQyxFQUFFLEdBQUU7Z0JBQ25EQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQQyxlQUFlLFVBQWlDLFFBQXZCdkIsWUFBQUEscUJBQUFBLGdDQUFBQSxVQUFTd0IsTUFBTSxDQUFDQyxNQUFNO2dCQUVqRDtnQkFDQUMsTUFBTVo7WUFDUjtZQUVBLHdFQUF3RTtZQUN4RSxlQUFlO1lBQ2YsNENBQTRDO1lBQzVDLE1BQU07WUFDTixNQUFNO1lBRU4sSUFBSUcsU0FBU1UsRUFBRSxFQUFFO2dCQUNmLE1BQU0sRUFBRTVCLElBQUksRUFBRSxHQUFHLE1BQU1rQixTQUFTVyxJQUFJO2dCQUNwQ3hCLFNBQVNMO1lBQ1g7UUFFQSxnREFBZ0Q7UUFDbEQsRUFBRSxPQUFPOEIsT0FBTztZQUNkNUIsUUFBUTRCLEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUVBdEMsZ0RBQVNBLENBQUM7UUFDUmEsU0FBU047SUFDWCxHQUFHO1FBQUNBO0tBQU87SUFFWCxxQkFDRSw4REFBQ2dDO1FBQ0NDLFFBQU87UUFDUEMsVUFBVSxDQUFDMUIsSUFBTUksYUFBYUo7UUFDOUIyQixXQUFVOzswQkFFViw4REFBQ0M7Z0JBQU1DLFNBQVE7O2tDQUNiLDhEQUFDQzt3QkFDQ2hCLElBQUc7d0JBQ0hpQixNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxVQUFVLENBQUNqQyxJQUFNRCxXQUFXQzt3QkFDNUIyQixXQUFVOzs7Ozs7a0NBRVosOERBQUN2QyxtREFBS0E7d0JBQ0p1QyxXQUFVO3dCQUNWTyxLQUFLLG1DQUFtQzFDO3dCQUN4QzJDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLFNBQVM7d0JBQ1RDLEtBQUk7Ozs7Ozs7Ozs7OzswQkFHUiw4REFBQ25ELDBEQUFNQTtnQkFBQzRDLE1BQUs7Z0JBQVNRLFVBQVUxQyxVQUFVTDswQkFBUTs7Ozs7Ozs7Ozs7O0FBS3hEO0dBbkZNRDs7UUFDc0JGLHVEQUFVQTs7O0tBRGhDRTtBQXFGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VzZXIvW2lkXS9fY29tcG9uZW50cy9BdmF0YXIudHN4PzQ0NDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXJzL3NldC1hdmF0YXIvXCI7XHJcblxyXG5jb25zdCBBdmF0YXIgPSAoeyBhdmF0YXIgfTogeyBhdmF0YXI6IHN0cmluZyB9KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiYXZhdGFyXCIsIHNlc3Npb24pXHJcbiAgXHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZTxGaWxlIHwgc3RyaW5nPihhdmF0YXIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWxlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWUudGFyZ2V0LmZpbGVzKSByZXR1cm47XHJcbiAgICBjb25zdCBpbWFnZVN0YXRlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRJbWFnZShpbWFnZVN0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB1cGRhdGVBdmF0YXIoaW1hZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUF2YXRhciA9IGFzeW5jIChmaWxlOiBGaWxlIHwgc3RyaW5nKSA9PiB7XHJcbiAgICBpZih0eXBlb2YgZmlsZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYXZhdGFyXCIsIGZpbGUpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBzZXNzaW9uPy51c2VyLmlkLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c2Vzc2lvbj8udG9rZW5zLmFjY2Vzc31gLFxyXG4gICAgICAgICAgLy9cIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCArIHNlc3Npb24/LnVzZXIuaWQsIGZvcm1EYXRhLCB7XHJcbiAgICAgIC8vICAgaGVhZGVyczoge1xyXG4gICAgICAvLyAgICAgQXV0aG9yaXphdGlvbjogc2Vzc2lvbj8udG9rZW5zLmFjY2Vzc1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRJbWFnZShkYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9pZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2UoYXZhdGFyKTtcclxuICB9LCBbYXZhdGFyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBhY3Rpb249XCJzdWJtaXRcIlxyXG4gICAgICBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVVwbG9hZChlKX1cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInVwbG9hZC1hdmF0YXJcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwidXBsb2FkLWF2YXRhclwiXHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0LzQtdC90LjRgtGMINCw0LLQsNGC0LDRgFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUZpbGUoZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgdy1bMjAwcHhdIGgtWzIwMHB4XSBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXHJcbiAgICAgICAgICBzcmM9e1wiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VwbG9hZHMvXCIgKyBhdmF0YXJ9XHJcbiAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICBxdWFsaXR5PXs1MH1cclxuICAgICAgICAgIGFsdD1cItCS0LDRiNC1INGE0L7RgtC+INC/0YDQvtGE0LjQu9GPXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aW1hZ2UgPT09IGF2YXRhcn0+XHJcbiAgICAgICAg0KHQvNC10L3QuNGC0Ywg0LDQstCw0YLQsNGAXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiSW1hZ2UiLCJ1c2VTZXNzaW9uIiwidXJsIiwiQXZhdGFyIiwiYXZhdGFyIiwiZGF0YSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImhhbmRsZUZpbGUiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJpbWFnZVN0YXRlIiwiaGFuZGxlVXBsb2FkIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVBdmF0YXIiLCJmaWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ1c2VyIiwiaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInRva2VucyIsImFjY2VzcyIsImJvZHkiLCJvayIsImpzb24iLCJlcnJvciIsImZvcm0iLCJhY3Rpb24iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJhbHQiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/user/[id]/_components/Avatar.tsx\n"));

/***/ })

});