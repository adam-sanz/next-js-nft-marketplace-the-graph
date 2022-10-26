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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NFTBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NFTBox */ \"./components/NFTBox.js\");\n/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/networkMapping.json */ \"./constants/networkMapping.json\");\n/* harmony import */ var _constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/subgraphQueries */ \"./constants/subgraphQueries.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis)(), isWeb3Enabled = ref1.isWeb3Enabled, chainId = ref1.chainId;\n    var chainString = chainId ? parseInt(chainId).toString() : \"31337\";\n    var marketplaceAddress = _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__[chainString].NftMarketplace[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"dataaaaaa\", data);\n    }, [\n        data\n    ]);\n    var ref2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onCompleted: setData\n    }), loading = ref2.loading, error = ref2.error, listedNfts = ref2.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"py-4 px-4 font-bold text-2xl\",\n                children: \"Recently Listed\"\n            }, void 0, false, {\n                fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: [\n                    console.log(\"listedNfts.activeItems.length\", listedNfts ? listedNfts.activeItems.length : \"active items = 0\"),\n                    console.log(\"listedNfts.activeItems\", listedNfts ? listedNfts.activeItems : \"no active items found\"),\n                    isWeb3Enabled ? loading || listedNfts.activeItems.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this) : listedNfts.activeItems.map(function(nft) {\n                        console.log(nft);\n                        var price = nft.price, nftAddress = nft.nftAddress, tokenId = nft.tokenId, seller = nft.seller;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            price: price,\n                            nftAddress: nftAddress,\n                            tokenId: tokenId,\n                            marketplaceAddress: marketplaceAddress,\n                            seller: seller\n                        }, \"\".concat(nftAddress).concat(tokenId), false, {\n                            fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Web3 Currently Not Enabled\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"29uBCjXPL6SW9D2B1V0zJptvOpI=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFVekNNLG9EQUFROzs7QUFaVUMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1vcmFsaXMgfSBmcm9tIFwicmVhY3QtbW9yYWxpc1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBORlRCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvTkZUQm94XCJcbmltcG9ydCBuZXR3b3JrTWFwcGluZyBmcm9tIFwiLi4vY29uc3RhbnRzL25ldHdvcmtNYXBwaW5nLmpzb25cIlxuaW1wb3J0IEdFVF9BQ1RJVkVfSVRFTVMgZnJvbSBcIi4uL2NvbnN0YW50cy9zdWJncmFwaFF1ZXJpZXNcIlxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgeyBpc1dlYjNFbmFibGVkLCBjaGFpbklkIH0gPSB1c2VNb3JhbGlzKClcbiAgY29uc3QgY2hhaW5TdHJpbmcgPSBjaGFpbklkID8gcGFyc2VJbnQoY2hhaW5JZCkudG9TdHJpbmcoKSA6IFwiMzEzMzdcIlxuICBjb25zdCBtYXJrZXRwbGFjZUFkZHJlc3MgPSBuZXR3b3JrTWFwcGluZ1tjaGFpblN0cmluZ10uTmZ0TWFya2V0cGxhY2VbMF1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRhdGFhYWFhYVwiLCBkYXRhKVxuICB9LCBbZGF0YV0pXG4gIGNvbnN0IHtcbiAgICBsb2FkaW5nLFxuICAgIGVycm9yLFxuICAgIGRhdGE6IGxpc3RlZE5mdHMsXG4gIH0gPSB1c2VRdWVyeShHRVRfQUNUSVZFX0lURU1TLCB7IG9uQ29tcGxldGVkOiBzZXREYXRhIH0pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTQgcHgtNCBmb250LWJvbGQgdGV4dC0yeGxcIj5SZWNlbnRseSBMaXN0ZWQ8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICB7Y29uc29sZS5sb2coXG4gICAgICAgICAgXCJsaXN0ZWROZnRzLmFjdGl2ZUl0ZW1zLmxlbmd0aFwiLFxuICAgICAgICAgIGxpc3RlZE5mdHMgPyBsaXN0ZWROZnRzLmFjdGl2ZUl0ZW1zLmxlbmd0aCA6IFwiYWN0aXZlIGl0ZW1zID0gMFwiXG4gICAgICAgICl9XG4gICAgICAgIHtjb25zb2xlLmxvZyhcbiAgICAgICAgICBcImxpc3RlZE5mdHMuYWN0aXZlSXRlbXNcIixcbiAgICAgICAgICBsaXN0ZWROZnRzID8gbGlzdGVkTmZ0cy5hY3RpdmVJdGVtcyA6IFwibm8gYWN0aXZlIGl0ZW1zIGZvdW5kXCJcbiAgICAgICAgKX1cblxuICAgICAgICB7aXNXZWIzRW5hYmxlZCA/IChcbiAgICAgICAgICBsb2FkaW5nIHx8IGxpc3RlZE5mdHMuYWN0aXZlSXRlbXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGxpc3RlZE5mdHMuYWN0aXZlSXRlbXMubWFwKChuZnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobmZ0KVxuICAgICAgICAgICAgICBjb25zdCB7IHByaWNlLCBuZnRBZGRyZXNzLCB0b2tlbklkLCBzZWxsZXIgfSA9IG5mdFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxORlRCb3hcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgIG5mdEFkZHJlc3M9e25mdEFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICB0b2tlbklkPXt0b2tlbklkfVxuICAgICAgICAgICAgICAgICAgbWFya2V0cGxhY2VBZGRyZXNzPXttYXJrZXRwbGFjZUFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICBzZWxsZXI9e3NlbGxlcn1cbiAgICAgICAgICAgICAgICAgIGtleT17YCR7bmZ0QWRkcmVzc30ke3Rva2VuSWR9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PldlYjMgQ3VycmVudGx5IE5vdCBFbmFibGVkPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZU1vcmFsaXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5GVEJveCIsIm5ldHdvcmtNYXBwaW5nIiwiR0VUX0FDVElWRV9JVEVNUyIsInVzZVF1ZXJ5IiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwiaXNXZWIzRW5hYmxlZCIsImNoYWluSWQiLCJjaGFpblN0cmluZyIsInBhcnNlSW50IiwidG9TdHJpbmciLCJtYXJrZXRwbGFjZUFkZHJlc3MiLCJOZnRNYXJrZXRwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNvbXBsZXRlZCIsImxvYWRpbmciLCJlcnJvciIsImxpc3RlZE5mdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImFjdGl2ZUl0ZW1zIiwibGVuZ3RoIiwibWFwIiwibmZ0IiwicHJpY2UiLCJuZnRBZGRyZXNzIiwidG9rZW5JZCIsInNlbGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});