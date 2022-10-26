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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _components_NFTBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NFTBox */ \"./components/NFTBox.js\");\n/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/networkMapping.json */ \"./constants/networkMapping.json\");\n/* harmony import */ var _constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/subgraphQueries */ \"./constants/subgraphQueries.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis)(), isWeb3Enabled = ref.isWeb3Enabled, chainId = ref.chainId;\n    var chainString = chainId ? parseInt(chainId).toString() : \"31337\";\n    var marketplaceAddress = _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_3__[chainString].NftMarketplace[0];\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), loading = ref1.loading, error = ref1.error, listedNfts = ref1.data;\n    console.log(\"listedNfts\", listedNfts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"py-4 px-4 font-bold text-2xl\",\n                children: \"Recently Listed\"\n            }, void 0, false, {\n                fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: isWeb3Enabled ? loading || !listedNfts ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, this) : listedNfts.activeItems.map(function(nft) {\n                    console.log(nft);\n                    var price = nft.price, nftAddress = nft.nftAddress, tokenId = nft.tokenId, seller = nft.seller;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        price: price,\n                        nftAddress: nftAddress,\n                        tokenId: tokenId,\n                        marketplaceAddress: marketplaceAddress,\n                        seller: seller\n                    }, \"\".concat(nftAddress).concat(tokenId), false, {\n                        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, _this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Web3 Currently Not Enabled\"\n                }, void 0, false, {\n                    fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adamsouthey/newDevelopment/l15-nextjs-nft-marketplace-the-graph-fcc/pages/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"OaxU4zppGmSLw8rSiB+kyP+xEsA=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ2E7QUFDbEI7QUFDb0I7QUFDRjtBQUNsQjs7QUFFMUIsU0FBU08sSUFBSSxHQUFHOzs7SUFDN0IsSUFBbUNMLEdBQVksR0FBWkEseURBQVUsRUFBRSxFQUF2Q00sYUFBYSxHQUFjTixHQUFZLENBQXZDTSxhQUFhLEVBQUVDLE9BQU8sR0FBS1AsR0FBWSxDQUF4Qk8sT0FBTztJQUM5QixJQUFNQyxXQUFXLEdBQUdELE9BQU8sR0FBR0UsUUFBUSxDQUFDRixPQUFPLENBQUMsQ0FBQ0csUUFBUSxFQUFFLEdBQUcsT0FBTztJQUNwRSxJQUFNQyxrQkFBa0IsR0FBR1QsMkRBQWMsQ0FBQ00sV0FBVyxDQUFDLENBQUNJLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFeEUsSUFBNkNSLElBQTBCLEdBQTFCQSx3REFBUSxDQUFDRCxrRUFBZ0IsQ0FBQyxFQUEvRFUsT0FBTyxHQUE4QlQsSUFBMEIsQ0FBL0RTLE9BQU8sRUFBRUMsS0FBSyxHQUF1QlYsSUFBMEIsQ0FBdERVLEtBQUssRUFBRUMsVUFBZ0IsR0FBS1gsSUFBMEIsQ0FBL0NXLElBQUk7SUFDNUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRUYsVUFBVSxDQUFDO0lBQ3JDLHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzBCQUNoQyw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLDhCQUE4QjswQkFBQyxpQkFBZTs7Ozs7b0JBQUs7MEJBQ2pFLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOzBCQUM1QmQsYUFBYSxHQUNaTyxPQUFPLElBQUksQ0FBQ0csVUFBVSxpQkFDcEIsOERBQUNHLEtBQUc7OEJBQUMsWUFBVTs7Ozs7d0JBQU0sR0FFckJILFVBQVUsQ0FBQ00sV0FBVyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFLO29CQUNsQ1AsT0FBTyxDQUFDQyxHQUFHLENBQUNNLEdBQUcsQ0FBQztvQkFDaEIsSUFBUUMsS0FBSyxHQUFrQ0QsR0FBRyxDQUExQ0MsS0FBSyxFQUFFQyxVQUFVLEdBQXNCRixHQUFHLENBQW5DRSxVQUFVLEVBQUVDLE9BQU8sR0FBYUgsR0FBRyxDQUF2QkcsT0FBTyxFQUFFQyxNQUFNLEdBQUtKLEdBQUcsQ0FBZEksTUFBTTtvQkFDMUMscUJBQ0UsOERBQUMzQiwwREFBTTt3QkFDTHdCLEtBQUssRUFBRUEsS0FBSzt3QkFDWkMsVUFBVSxFQUFFQSxVQUFVO3dCQUN0QkMsT0FBTyxFQUFFQSxPQUFPO3dCQUNoQmhCLGtCQUFrQixFQUFFQSxrQkFBa0I7d0JBQ3RDaUIsTUFBTSxFQUFFQSxNQUFNO3VCQUNULEVBQUMsQ0FBZUQsTUFBTyxDQUFwQkQsVUFBVSxDQUFXLFFBQVJDLE9BQU8sQ0FBRTs7Ozs2QkFDOUIsQ0FDSDtpQkFDRixDQUFDLGlCQUdKLDhEQUFDUixLQUFHOzhCQUFDLDRCQUEwQjs7Ozs7d0JBQU07Ozs7O29CQUVuQzs7Ozs7O1lBQ0YsQ0FDUDtDQUNGO0dBcEN1QmQsSUFBSTs7UUFDU0wscURBQVU7UUFJQUksb0RBQVE7OztBQUwvQkMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgdXNlTW9yYWxpc1F1ZXJ5LCB1c2VNb3JhbGlzIH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIlxuaW1wb3J0IE5GVEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9ORlRCb3hcIlxuaW1wb3J0IG5ldHdvcmtNYXBwaW5nIGZyb20gXCIuLi9jb25zdGFudHMvbmV0d29ya01hcHBpbmcuanNvblwiXG5pbXBvcnQgR0VUX0FDVElWRV9JVEVNUyBmcm9tIFwiLi4vY29uc3RhbnRzL3N1YmdyYXBoUXVlcmllc1wiXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgaXNXZWIzRW5hYmxlZCwgY2hhaW5JZCB9ID0gdXNlTW9yYWxpcygpXG4gIGNvbnN0IGNoYWluU3RyaW5nID0gY2hhaW5JZCA/IHBhcnNlSW50KGNoYWluSWQpLnRvU3RyaW5nKCkgOiBcIjMxMzM3XCJcbiAgY29uc3QgbWFya2V0cGxhY2VBZGRyZXNzID0gbmV0d29ya01hcHBpbmdbY2hhaW5TdHJpbmddLk5mdE1hcmtldHBsYWNlWzBdXG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YTogbGlzdGVkTmZ0cyB9ID0gdXNlUXVlcnkoR0VUX0FDVElWRV9JVEVNUylcbiAgY29uc29sZS5sb2coXCJsaXN0ZWROZnRzXCIsIGxpc3RlZE5mdHMpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTQgcHgtNCBmb250LWJvbGQgdGV4dC0yeGxcIj5SZWNlbnRseSBMaXN0ZWQ8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICB7aXNXZWIzRW5hYmxlZCA/IChcbiAgICAgICAgICBsb2FkaW5nIHx8ICFsaXN0ZWROZnRzID8gKFxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGxpc3RlZE5mdHMuYWN0aXZlSXRlbXMubWFwKChuZnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobmZ0KVxuICAgICAgICAgICAgICBjb25zdCB7IHByaWNlLCBuZnRBZGRyZXNzLCB0b2tlbklkLCBzZWxsZXIgfSA9IG5mdFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxORlRCb3hcbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgIG5mdEFkZHJlc3M9e25mdEFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICB0b2tlbklkPXt0b2tlbklkfVxuICAgICAgICAgICAgICAgICAgbWFya2V0cGxhY2VBZGRyZXNzPXttYXJrZXRwbGFjZUFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICBzZWxsZXI9e3NlbGxlcn1cbiAgICAgICAgICAgICAgICAgIGtleT17YCR7bmZ0QWRkcmVzc30ke3Rva2VuSWR9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PldlYjMgQ3VycmVudGx5IE5vdCBFbmFibGVkPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZU1vcmFsaXNRdWVyeSIsInVzZU1vcmFsaXMiLCJORlRCb3giLCJuZXR3b3JrTWFwcGluZyIsIkdFVF9BQ1RJVkVfSVRFTVMiLCJ1c2VRdWVyeSIsIkhvbWUiLCJpc1dlYjNFbmFibGVkIiwiY2hhaW5JZCIsImNoYWluU3RyaW5nIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm1hcmtldHBsYWNlQWRkcmVzcyIsIk5mdE1hcmtldHBsYWNlIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImxpc3RlZE5mdHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhY3RpdmVJdGVtcyIsIm1hcCIsIm5mdCIsInByaWNlIiwibmZ0QWRkcmVzcyIsInRva2VuSWQiLCJzZWxsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});