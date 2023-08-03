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
exports.id = "pages/api/auth/[auth0]";
exports.ids = ["pages/api/auth/[auth0]"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "(api)/./pages/api/auth/[auth0].js":
/*!***********************************!*\
  !*** ./pages/api/auth/[auth0].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleAuth)({\n  login: (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.handleLogin)({\n    authorizationParams: {\n      audience: process.env.AUTH0_AUDIENCE,\n      // or AUTH0_AUDIENCE\n      // Add the `offline_access` scope to also get a Refresh Token\n      scope: process.env.AUTH0_SCOPE // or AUTH0_SCOPE\n\n    }\n  })\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bYXV0aDBdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsaUVBQWVBLCtEQUFVLENBQUM7RUFDeEJFLEtBQUssRUFBRUQsZ0VBQVcsQ0FBQztJQUNqQkUsbUJBQW1CLEVBQUU7TUFDbkJDLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBREg7TUFDbUI7TUFDdEM7TUFDQUMsS0FBSyxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsV0FIQSxDQUdZOztJQUhaO0VBREosQ0FBRDtBQURNLENBQUQsQ0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoMC1uZXh0anMtc2FtcGxlLy4vcGFnZXMvYXBpL2F1dGgvW2F1dGgwXS5qcz9jOWJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUF1dGgsIGhhbmRsZUxvZ2luIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUF1dGgoe1xuICBsb2dpbjogaGFuZGxlTG9naW4oe1xuICAgIGF1dGhvcml6YXRpb25QYXJhbXM6IHtcbiAgICAgIGF1ZGllbmNlOiBwcm9jZXNzLmVudi5BVVRIMF9BVURJRU5DRSwgLy8gb3IgQVVUSDBfQVVESUVOQ0VcbiAgICAgIC8vIEFkZCB0aGUgYG9mZmxpbmVfYWNjZXNzYCBzY29wZSB0byBhbHNvIGdldCBhIFJlZnJlc2ggVG9rZW5cbiAgICAgIHNjb3BlOiBwcm9jZXNzLmVudi5BVVRIMF9TQ09QRSAvLyBvciBBVVRIMF9TQ09QRVxuICAgIH1cbiAgfSlcbn0pO1xuIl0sIm5hbWVzIjpbImhhbmRsZUF1dGgiLCJoYW5kbGVMb2dpbiIsImxvZ2luIiwiYXV0aG9yaXphdGlvblBhcmFtcyIsImF1ZGllbmNlIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0FVRElFTkNFIiwic2NvcGUiLCJBVVRIMF9TQ09QRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[auth0].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[auth0].js"));
module.exports = __webpack_exports__;

})();