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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NFTBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NFTBox */ \"./components/NFTBox.js\");\n/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/networkMapping.json */ \"./constants/networkMapping.json\");\n/* harmony import */ var _constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/subgraphQueries */ \"./constants/subgraphQueries.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis)(), isWeb3Enabled = ref1.isWeb3Enabled, chainId = ref1.chainId;\n    var chainString = chainId ? parseInt(chainId).toString() : \"31337\";\n    var marketplaceAddress = _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__[chainString].NftMarketplace[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"dataaaaaa\", data);\n        console.log(\"data.activeitems.length\", data ? data.activeItems.length : \"active items = 0\");\n        console.log(\"data.activeItems\", data ? data.activeItems : \"no active items found\");\n    }, [\n        data\n    ]);\n    var ref2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onCompleted: setData\n    }), loading = ref2.loading, error = ref2.error, listedNfts = ref2.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"py-4 px-4 font-bold text-2xl\",\n                children: \"Recently Listed\"\n            }, void 0, false, {\n                fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: isWeb3Enabled ? loading || listedNfts.activeItems.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this) : listedNfts.activeItems.map(function(nft) {\n                    console.log(nft);\n                    var price = nft.price, nftAddress = nft.nftAddress, tokenId = nft.tokenId, seller = nft.seller;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        price: price,\n                        nftAddress: nftAddress,\n                        tokenId: tokenId,\n                        marketplaceAddress: marketplaceAddress,\n                        seller: seller\n                    }, \"\".concat(nftAddress).concat(tokenId), false, {\n                        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Web3 Currently Not Enabled\"\n                }, void 0, false, {\n                    fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"29uBCjXPL6SW9D2B1V0zJptvOpI=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtRQWtCekNNLG9EQUFROzs7QUFwQlVDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNb3JhbGlzIH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTkZUQm94IGZyb20gXCIuLi9jb21wb25lbnRzL05GVEJveFwiXG5pbXBvcnQgbmV0d29ya01hcHBpbmcgZnJvbSBcIi4uL2NvbnN0YW50cy9uZXR3b3JrTWFwcGluZy5qc29uXCJcbmltcG9ydCBHRVRfQUNUSVZFX0lURU1TIGZyb20gXCIuLi9jb25zdGFudHMvc3ViZ3JhcGhRdWVyaWVzXCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IHsgaXNXZWIzRW5hYmxlZCwgY2hhaW5JZCB9ID0gdXNlTW9yYWxpcygpXG4gIGNvbnN0IGNoYWluU3RyaW5nID0gY2hhaW5JZCA/IHBhcnNlSW50KGNoYWluSWQpLnRvU3RyaW5nKCkgOiBcIjMxMzM3XCJcbiAgY29uc3QgbWFya2V0cGxhY2VBZGRyZXNzID0gbmV0d29ya01hcHBpbmdbY2hhaW5TdHJpbmddLk5mdE1hcmtldHBsYWNlWzBdXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkYXRhYWFhYWFcIiwgZGF0YSlcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiZGF0YS5hY3RpdmVpdGVtcy5sZW5ndGhcIixcbiAgICAgIGRhdGEgPyBkYXRhLmFjdGl2ZUl0ZW1zLmxlbmd0aCA6IFwiYWN0aXZlIGl0ZW1zID0gMFwiXG4gICAgKVxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJkYXRhLmFjdGl2ZUl0ZW1zXCIsXG4gICAgICBkYXRhID8gZGF0YS5hY3RpdmVJdGVtcyA6IFwibm8gYWN0aXZlIGl0ZW1zIGZvdW5kXCJcbiAgICApXG4gIH0sIFtkYXRhXSlcbiAgY29uc3Qge1xuICAgIGxvYWRpbmcsXG4gICAgZXJyb3IsXG4gICAgZGF0YTogbGlzdGVkTmZ0cyxcbiAgfSA9IHVzZVF1ZXJ5KEdFVF9BQ1RJVkVfSVRFTVMsIHsgb25Db21wbGV0ZWQ6IHNldERhdGEgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicHktNCBweC00IGZvbnQtYm9sZCB0ZXh0LTJ4bFwiPlJlY2VudGx5IExpc3RlZDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgIHt9XG4gICAgICAgIHt9XG5cbiAgICAgICAge2lzV2ViM0VuYWJsZWQgPyAoXG4gICAgICAgICAgbG9hZGluZyB8fCBsaXN0ZWROZnRzLmFjdGl2ZUl0ZW1zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBsaXN0ZWROZnRzLmFjdGl2ZUl0ZW1zLm1hcCgobmZ0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5mdClcbiAgICAgICAgICAgICAgY29uc3QgeyBwcmljZSwgbmZ0QWRkcmVzcywgdG9rZW5JZCwgc2VsbGVyIH0gPSBuZnRcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TkZUQm94XG4gICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICBuZnRBZGRyZXNzPXtuZnRBZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgdG9rZW5JZD17dG9rZW5JZH1cbiAgICAgICAgICAgICAgICAgIG1hcmtldHBsYWNlQWRkcmVzcz17bWFya2V0cGxhY2VBZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgc2VsbGVyPXtzZWxsZXJ9XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake25mdEFkZHJlc3N9JHt0b2tlbklkfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5XZWIzIEN1cnJlbnRseSBOb3QgRW5hYmxlZDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VNb3JhbGlzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJORlRCb3giLCJuZXR3b3JrTWFwcGluZyIsIkdFVF9BQ1RJVkVfSVRFTVMiLCJ1c2VRdWVyeSIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImlzV2ViM0VuYWJsZWQiLCJjaGFpbklkIiwiY2hhaW5TdHJpbmciLCJwYXJzZUludCIsInRvU3RyaW5nIiwibWFya2V0cGxhY2VBZGRyZXNzIiwiTmZ0TWFya2V0cGxhY2UiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlSXRlbXMiLCJsZW5ndGgiLCJvbkNvbXBsZXRlZCIsImxvYWRpbmciLCJlcnJvciIsImxpc3RlZE5mdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsIm5mdCIsInByaWNlIiwibmZ0QWRkcmVzcyIsInRva2VuSWQiLCJzZWxsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});