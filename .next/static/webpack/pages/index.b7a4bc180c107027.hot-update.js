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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NFTBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NFTBox */ \"./components/NFTBox.js\");\n/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/networkMapping.json */ \"./constants/networkMapping.json\");\n/* harmony import */ var _constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/subgraphQueries */ \"./constants/subgraphQueries.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis)(), isWeb3Enabled = ref1.isWeb3Enabled, chainId = ref1.chainId;\n    var chainString = chainId ? parseInt(chainId).toString() : \"31337\";\n    var marketplaceAddress = _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__[chainString].NftMarketplace[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"dataaaaaa\", data);\n        console.log(\"data.activeitems.length\", data ? data.activeItems.length : \"active items = 0\");\n    }, [\n        data\n    ]);\n    var ref2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onCompleted: setData\n    }), loading = ref2.loading, error = ref2.error, listedNfts = ref2.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"py-4 px-4 font-bold text-2xl\",\n                children: \"Recently Listed\"\n            }, void 0, false, {\n                fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: [\n                    console.log(\"data.activeItems\", data ? data.activeItems : \"no active items found\"),\n                    isWeb3Enabled ? loading || listedNfts.activeItems.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this) : listedNfts.activeItems.map(function(nft) {\n                        console.log(nft);\n                        var price = nft.price, nftAddress = nft.nftAddress, tokenId = nft.tokenId, seller = nft.seller;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            price: price,\n                            nftAddress: nftAddress,\n                            tokenId: tokenId,\n                            marketplaceAddress: marketplaceAddress,\n                            seller: seller\n                        }, \"\".concat(nftAddress).concat(tokenId), false, {\n                            fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Web3 Currently Not Enabled\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"29uBCjXPL6SW9D2B1V0zJptvOpI=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO1FBY3pDTSxvREFBUTs7O0FBaEJVQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTW9yYWxpcyB9IGZyb20gXCJyZWFjdC1tb3JhbGlzXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5GVEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9ORlRCb3hcIlxuaW1wb3J0IG5ldHdvcmtNYXBwaW5nIGZyb20gXCIuLi9jb25zdGFudHMvbmV0d29ya01hcHBpbmcuanNvblwiXG5pbXBvcnQgR0VUX0FDVElWRV9JVEVNUyBmcm9tIFwiLi4vY29uc3RhbnRzL3N1YmdyYXBoUXVlcmllc1wiXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCB7IGlzV2ViM0VuYWJsZWQsIGNoYWluSWQgfSA9IHVzZU1vcmFsaXMoKVxuICBjb25zdCBjaGFpblN0cmluZyA9IGNoYWluSWQgPyBwYXJzZUludChjaGFpbklkKS50b1N0cmluZygpIDogXCIzMTMzN1wiXG4gIGNvbnN0IG1hcmtldHBsYWNlQWRkcmVzcyA9IG5ldHdvcmtNYXBwaW5nW2NoYWluU3RyaW5nXS5OZnRNYXJrZXRwbGFjZVswXVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YWFhYWFhXCIsIGRhdGEpXG4gICAgY29uc29sZS5sb2coXG4gICAgICBcImRhdGEuYWN0aXZlaXRlbXMubGVuZ3RoXCIsXG4gICAgICBkYXRhID8gZGF0YS5hY3RpdmVJdGVtcy5sZW5ndGggOiBcImFjdGl2ZSBpdGVtcyA9IDBcIlxuICAgIClcbiAgfSwgW2RhdGFdKVxuICBjb25zdCB7XG4gICAgbG9hZGluZyxcbiAgICBlcnJvcixcbiAgICBkYXRhOiBsaXN0ZWROZnRzLFxuICB9ID0gdXNlUXVlcnkoR0VUX0FDVElWRV9JVEVNUywgeyBvbkNvbXBsZXRlZDogc2V0RGF0YSB9KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJweS00IHB4LTQgZm9udC1ib2xkIHRleHQtMnhsXCI+UmVjZW50bHkgTGlzdGVkPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAge31cbiAgICAgICAge2NvbnNvbGUubG9nKFxuICAgICAgICAgIFwiZGF0YS5hY3RpdmVJdGVtc1wiLFxuICAgICAgICAgIGRhdGEgPyBkYXRhLmFjdGl2ZUl0ZW1zIDogXCJubyBhY3RpdmUgaXRlbXMgZm91bmRcIlxuICAgICAgICApfVxuXG4gICAgICAgIHtpc1dlYjNFbmFibGVkID8gKFxuICAgICAgICAgIGxvYWRpbmcgfHwgbGlzdGVkTmZ0cy5hY3RpdmVJdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgbGlzdGVkTmZ0cy5hY3RpdmVJdGVtcy5tYXAoKG5mdCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZnQpXG4gICAgICAgICAgICAgIGNvbnN0IHsgcHJpY2UsIG5mdEFkZHJlc3MsIHRva2VuSWQsIHNlbGxlciB9ID0gbmZ0XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE5GVEJveFxuICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgbmZ0QWRkcmVzcz17bmZ0QWRkcmVzc31cbiAgICAgICAgICAgICAgICAgIHRva2VuSWQ9e3Rva2VuSWR9XG4gICAgICAgICAgICAgICAgICBtYXJrZXRwbGFjZUFkZHJlc3M9e21hcmtldHBsYWNlQWRkcmVzc31cbiAgICAgICAgICAgICAgICAgIHNlbGxlcj17c2VsbGVyfVxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtuZnRBZGRyZXNzfSR7dG9rZW5JZH1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+V2ViMyBDdXJyZW50bHkgTm90IEVuYWJsZWQ8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlTW9yYWxpcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTkZUQm94IiwibmV0d29ya01hcHBpbmciLCJHRVRfQUNUSVZFX0lURU1TIiwidXNlUXVlcnkiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJpc1dlYjNFbmFibGVkIiwiY2hhaW5JZCIsImNoYWluU3RyaW5nIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm1hcmtldHBsYWNlQWRkcmVzcyIsIk5mdE1hcmtldHBsYWNlIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZUl0ZW1zIiwibGVuZ3RoIiwib25Db21wbGV0ZWQiLCJsb2FkaW5nIiwiZXJyb3IiLCJsaXN0ZWROZnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJuZnQiLCJwcmljZSIsIm5mdEFkZHJlc3MiLCJ0b2tlbklkIiwic2VsbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});