"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/actions";
exports.ids = ["pages/api/actions"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/actions.js":
/*!******************************!*\
  !*** ./pages/api/actions.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.withApiAuthRequired)(async function actions(req, res) {\n  try {\n    const {\n      accessToken\n    } = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getAccessToken)(req, res, {});\n    const apiPort = process.env.API_PORT || 3001;\n    const path = `http://localhost:${apiPort}/api/actions`;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(path, {\n      headers: {\n        Authorization: `Bearer ${accessToken}`,\n        cookie: req.headers.cookie\n      }\n    });\n    const actions = await response.data;\n    res.status(200).json(actions);\n  } catch (error) {\n    res.status(error.status || 500).json({\n      error: error.message\n    });\n  }\n}));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQyx3RUFBbUIsQ0FBQyxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7RUFDbEUsSUFBSTtJQUNGLE1BQU07TUFBRUM7SUFBRixJQUFrQixNQUFNTixtRUFBYyxDQUFDSSxHQUFELEVBQU1DLEdBQU4sRUFBVyxFQUFYLENBQTVDO0lBRUEsTUFBTUUsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixJQUF3QixJQUF4QztJQUNBLE1BQU1DLElBQUksR0FBSSxvQkFBbUJKLE9BQVEsY0FBekM7SUFFQSxNQUFNSyxRQUFRLEdBQUcsTUFBTVYsaURBQUEsQ0FBVVMsSUFBVixFQUFnQjtNQUNyQ0csT0FBTyxFQUFFO1FBQ1BDLGFBQWEsRUFBRyxVQUFTVCxXQUFZLEVBRDlCO1FBRVBVLE1BQU0sRUFBRVosR0FBRyxDQUFDVSxPQUFKLENBQVlFO01BRmI7SUFENEIsQ0FBaEIsQ0FBdkI7SUFPQSxNQUFNYixPQUFPLEdBQUcsTUFBTVMsUUFBUSxDQUFDSyxJQUEvQjtJQUVBWixHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQmhCLE9BQXJCO0VBQ0QsQ0FoQkQsQ0FnQkUsT0FBT2lCLEtBQVAsRUFBYztJQUNkZixHQUFHLENBQUNhLE1BQUosQ0FBV0UsS0FBSyxDQUFDRixNQUFOLElBQWdCLEdBQTNCLEVBQWdDQyxJQUFoQyxDQUFxQztNQUFFQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ0M7SUFBZixDQUFyQztFQUNEO0FBQ0YsQ0FwQmlDLENBQWxDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vcGFnZXMvYXBpL2FjdGlvbnMuanM/YTI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBY2Nlc3NUb2tlbiwgd2l0aEFwaUF1dGhSZXF1aXJlZCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwaUF1dGhSZXF1aXJlZChhc3luYyBmdW5jdGlvbiBhY3Rpb25zKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4ocmVxLCByZXMsIHt9KTtcblxuICAgIGNvbnN0IGFwaVBvcnQgPSBwcm9jZXNzLmVudi5BUElfUE9SVCB8fCAzMDAxO1xuICAgIGNvbnN0IHBhdGggPSBgaHR0cDovL2xvY2FsaG9zdDoke2FwaVBvcnR9L2FwaS9hY3Rpb25zYDtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHBhdGgsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAgIGNvb2tpZTogcmVxLmhlYWRlcnMuY29va2llXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY3Rpb25zID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFjdGlvbnMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJnZXRBY2Nlc3NUb2tlbiIsIndpdGhBcGlBdXRoUmVxdWlyZWQiLCJheGlvcyIsImFjdGlvbnMiLCJyZXEiLCJyZXMiLCJhY2Nlc3NUb2tlbiIsImFwaVBvcnQiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1BPUlQiLCJwYXRoIiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/actions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/actions.js"));
module.exports = __webpack_exports__;

})();