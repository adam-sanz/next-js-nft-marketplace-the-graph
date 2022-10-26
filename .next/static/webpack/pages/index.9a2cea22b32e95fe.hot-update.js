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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _components_NFTBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NFTBox */ \"./components/NFTBox.js\");\n/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/networkMapping.json */ \"./constants/networkMapping.json\");\n/* harmony import */ var _constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/subgraphQueries */ \"./constants/subgraphQueries.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis)(), isWeb3Enabled = ref.isWeb3Enabled, chainId = ref.chainId;\n    var chainString = chainId ? parseInt(chainId).toString() : \"31337\";\n    var marketplaceAddress = _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_3__[chainString].NftMarketplace[0];\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), loading = ref1.loading, error = ref1.error, listedNfts = ref1.data;\n    console.log(\"index.js listedNfts\", listedNfts);\n    console.log(\"index.js listedNfts sss\", listedNfts.activeItems.length);\n    useEffect(function() {\n        listedNfts.activeItems.length;\n        return function() {};\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"py-4 px-4 font-bold text-2xl\",\n                children: \"Recently Listed\"\n            }, void 0, false, {\n                fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: isWeb3Enabled ? loading || listedNfts.activeItems.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this) : listedNfts.activeItems.map(function(nft) {\n                    console.log(nft);\n                    var price = nft.price, nftAddress = nft.nftAddress, tokenId = nft.tokenId, seller = nft.seller;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        price: price,\n                        nftAddress: nftAddress,\n                        tokenId: tokenId,\n                        marketplaceAddress: marketplaceAddress,\n                        seller: seller\n                    }, \"\".concat(nftAddress).concat(tokenId), false, {\n                        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Web3 Currently Not Enabled\"\n                }, void 0, false, {\n                    fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"Dz+IG7o/Buj57Jf/h8SwkN2xzbc=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ2E7QUFDbEI7QUFDb0I7QUFDRjtBQUNsQjs7QUFFMUIsU0FBU08sSUFBSSxHQUFHOzs7SUFDN0IsSUFBbUNMLEdBQVksR0FBWkEseURBQVUsRUFBRSxFQUF2Q00sYUFBYSxHQUFjTixHQUFZLENBQXZDTSxhQUFhLEVBQUVDLE9BQU8sR0FBS1AsR0FBWSxDQUF4Qk8sT0FBTztJQUM5QixJQUFNQyxXQUFXLEdBQUdELE9BQU8sR0FBR0UsUUFBUSxDQUFDRixPQUFPLENBQUMsQ0FBQ0csUUFBUSxFQUFFLEdBQUcsT0FBTztJQUNwRSxJQUFNQyxrQkFBa0IsR0FBR1QsMkRBQWMsQ0FBQ00sV0FBVyxDQUFDLENBQUNJLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFeEUsSUFBNkNSLElBQTBCLEdBQTFCQSx3REFBUSxDQUFDRCxrRUFBZ0IsQ0FBQyxFQUEvRFUsT0FBTyxHQUE4QlQsSUFBMEIsQ0FBL0RTLE9BQU8sRUFBRUMsS0FBSyxHQUF1QlYsSUFBMEIsQ0FBdERVLEtBQUssRUFBRUMsVUFBZ0IsR0FBS1gsSUFBMEIsQ0FBL0NXLElBQUk7SUFDNUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixFQUFFRixVQUFVLENBQUM7SUFDOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFRixVQUFVLENBQUNHLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO0lBRXJFQyxTQUFTLENBQUMsV0FBTTtRQUNkTCxVQUFVLENBQUNHLFdBQVcsQ0FBQ0MsTUFBTTtRQUM3QixPQUFPLFdBQU0sRUFBRTtLQUNoQixFQUFFO1FBQUNMLElBQUk7S0FBQyxDQUFDO0lBQ1YscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7MEJBQ2hDLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsOEJBQThCOzBCQUFDLGlCQUFlOzs7OztvQkFBSzswQkFDakUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7MEJBQzVCakIsYUFBYSxHQUNaTyxPQUFPLElBQUlHLFVBQVUsQ0FBQ0csV0FBVyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxpQkFDNUMsOERBQUNFLEtBQUc7OEJBQUMsWUFBVTs7Ozs7d0JBQU0sR0FFckJOLFVBQVUsQ0FBQ0csV0FBVyxDQUFDTSxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFLO29CQUNsQ1QsT0FBTyxDQUFDQyxHQUFHLENBQUNRLEdBQUcsQ0FBQztvQkFDaEIsSUFBUUMsS0FBSyxHQUFrQ0QsR0FBRyxDQUExQ0MsS0FBSyxFQUFFQyxVQUFVLEdBQXNCRixHQUFHLENBQW5DRSxVQUFVLEVBQUVDLE9BQU8sR0FBYUgsR0FBRyxDQUF2QkcsT0FBTyxFQUFFQyxNQUFNLEdBQUtKLEdBQUcsQ0FBZEksTUFBTTtvQkFDMUMscUJBQ0UsOERBQUM3QiwwREFBTTt3QkFDTDBCLEtBQUssRUFBRUEsS0FBSzt3QkFDWkMsVUFBVSxFQUFFQSxVQUFVO3dCQUN0QkMsT0FBTyxFQUFFQSxPQUFPO3dCQUNoQmxCLGtCQUFrQixFQUFFQSxrQkFBa0I7d0JBQ3RDbUIsTUFBTSxFQUFFQSxNQUFNO3VCQUNULEVBQUMsQ0FBZUQsTUFBTyxDQUFwQkQsVUFBVSxDQUFXLFFBQVJDLE9BQU8sQ0FBRTs7Ozs2QkFDOUIsQ0FDSDtpQkFDRixDQUFDLGlCQUdKLDhEQUFDUCxLQUFHOzhCQUFDLDRCQUEwQjs7Ozs7d0JBQU07Ozs7O29CQUVuQzs7Ozs7O1lBQ0YsQ0FDUDtDQUNGO0dBMUN1QmpCLElBQUk7O1FBQ1NMLHFEQUFVO1FBSUFJLG9EQUFROzs7QUFML0JDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IHVzZU1vcmFsaXNRdWVyeSwgdXNlTW9yYWxpcyB9IGZyb20gXCJyZWFjdC1tb3JhbGlzXCJcbmltcG9ydCBORlRCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvTkZUQm94XCJcbmltcG9ydCBuZXR3b3JrTWFwcGluZyBmcm9tIFwiLi4vY29uc3RhbnRzL25ldHdvcmtNYXBwaW5nLmpzb25cIlxuaW1wb3J0IEdFVF9BQ1RJVkVfSVRFTVMgZnJvbSBcIi4uL2NvbnN0YW50cy9zdWJncmFwaFF1ZXJpZXNcIlxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGlzV2ViM0VuYWJsZWQsIGNoYWluSWQgfSA9IHVzZU1vcmFsaXMoKVxuICBjb25zdCBjaGFpblN0cmluZyA9IGNoYWluSWQgPyBwYXJzZUludChjaGFpbklkKS50b1N0cmluZygpIDogXCIzMTMzN1wiXG4gIGNvbnN0IG1hcmtldHBsYWNlQWRkcmVzcyA9IG5ldHdvcmtNYXBwaW5nW2NoYWluU3RyaW5nXS5OZnRNYXJrZXRwbGFjZVswXVxuXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGE6IGxpc3RlZE5mdHMgfSA9IHVzZVF1ZXJ5KEdFVF9BQ1RJVkVfSVRFTVMpXG4gIGNvbnNvbGUubG9nKFwiaW5kZXguanMgbGlzdGVkTmZ0c1wiLCBsaXN0ZWROZnRzKVxuICBjb25zb2xlLmxvZyhcImluZGV4LmpzIGxpc3RlZE5mdHMgc3NzXCIsIGxpc3RlZE5mdHMuYWN0aXZlSXRlbXMubGVuZ3RoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGlzdGVkTmZ0cy5hY3RpdmVJdGVtcy5sZW5ndGhcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfSwgW2RhdGFdKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJweS00IHB4LTQgZm9udC1ib2xkIHRleHQtMnhsXCI+UmVjZW50bHkgTGlzdGVkPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAge2lzV2ViM0VuYWJsZWQgPyAoXG4gICAgICAgICAgbG9hZGluZyB8fCBsaXN0ZWROZnRzLmFjdGl2ZUl0ZW1zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBsaXN0ZWROZnRzLmFjdGl2ZUl0ZW1zLm1hcCgobmZ0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5mdClcbiAgICAgICAgICAgICAgY29uc3QgeyBwcmljZSwgbmZ0QWRkcmVzcywgdG9rZW5JZCwgc2VsbGVyIH0gPSBuZnRcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TkZUQm94XG4gICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICBuZnRBZGRyZXNzPXtuZnRBZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgdG9rZW5JZD17dG9rZW5JZH1cbiAgICAgICAgICAgICAgICAgIG1hcmtldHBsYWNlQWRkcmVzcz17bWFya2V0cGxhY2VBZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgc2VsbGVyPXtzZWxsZXJ9XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake25mdEFkZHJlc3N9JHt0b2tlbklkfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5XZWIzIEN1cnJlbnRseSBOb3QgRW5hYmxlZDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VNb3JhbGlzUXVlcnkiLCJ1c2VNb3JhbGlzIiwiTkZUQm94IiwibmV0d29ya01hcHBpbmciLCJHRVRfQUNUSVZFX0lURU1TIiwidXNlUXVlcnkiLCJIb21lIiwiaXNXZWIzRW5hYmxlZCIsImNoYWluSWQiLCJjaGFpblN0cmluZyIsInBhcnNlSW50IiwidG9TdHJpbmciLCJtYXJrZXRwbGFjZUFkZHJlc3MiLCJOZnRNYXJrZXRwbGFjZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJsaXN0ZWROZnRzIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZUl0ZW1zIiwibGVuZ3RoIiwidXNlRWZmZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJuZnQiLCJwcmljZSIsIm5mdEFkZHJlc3MiLCJ0b2tlbklkIiwic2VsbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});