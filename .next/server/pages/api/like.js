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
exports.id = "pages/api/like";
exports.ids = ["pages/api/like"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./libs/prismadb.ts":
/*!**************************!*\
  !*** ./libs/prismadb.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3ByaXNtYWRiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQU03QyxNQUFNQyxTQUFTQyxXQUFXQyxNQUFNLElBQUksSUFBSUgsd0RBQVlBO0FBQ3BELElBQUlJLElBQW9DLEVBQUVGLFdBQVdDLE1BQU0sR0FBR0Y7QUFFOUQsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXNoLy4vbGlicy9wcmlzbWFkYi50cz83ZDlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmNvbnN0IGNsaWVudCA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9IFwicHJvZHVjdGlvblwiKSBnbG9iYWxUaGlzLnByaXNtYSA9IGNsaWVudFxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY2xpZW50IiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/prismadb.ts\n");

/***/ }),

/***/ "(api)/./libs/serverAuth.ts":
/*!****************************!*\
  !*** ./libs/serverAuth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst serverAuth = async (req, res)=>{\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session?.user?.email) {\n        throw new Error(\"Not signed in\");\n    }\n    const currentUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!currentUser) {\n        throw new Error(\"Not signed in\");\n    }\n    return {\n        currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlckF1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFcUM7QUFDd0I7QUFDaEI7QUFFN0MsTUFBTUcsYUFBYSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDdEUsTUFBTUMsVUFBVSxNQUFNSiwyREFBZ0JBLENBQUNFLEtBQUtDLEtBQUtKLGtFQUFXQTtJQUU1RCxJQUFJLENBQUNLLFNBQVNDLE1BQU1DLE9BQU87UUFDekIsTUFBTSxJQUFJQyxNQUFNLGlCQUFpQjtJQUNuQyxDQUFDO0lBRUQsTUFBTUMsY0FBYyxNQUFNVixzRUFBc0IsQ0FBQztRQUMvQ1ksT0FBTztZQUNMSixPQUFPRixRQUFRQyxJQUFJLENBQUNDLEtBQUs7UUFDM0I7SUFDRjtJQUVBLElBQUksQ0FBQ0UsYUFBYTtRQUNoQixNQUFNLElBQUlELE1BQU0saUJBQWlCO0lBQ25DLENBQUM7SUFFRCxPQUFPO1FBQUVDO0lBQVk7QUFDdkI7QUFFQSxpRUFBZVAsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1c2gvLi9saWJzL3NlcnZlckF1dGgudHM/ODU5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSAnQC9saWJzL3ByaXNtYWRiJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdJztcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnO1xuXG5jb25zdCBzZXJ2ZXJBdXRoID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucyk7XG5cbiAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IHNpZ25lZCBpbicpO1xuICB9IFxuXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXG4gICAgfVxuICB9KTtcblxuICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3Qgc2lnbmVkIGluJyk7XG4gIH1cblxuICByZXR1cm4geyBjdXJyZW50VXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyQXV0aDtcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImdldFNlcnZlclNlc3Npb24iLCJzZXJ2ZXJBdXRoIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsIkVycm9yIiwiY3VycmVudFVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/serverAuth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_libs_prismadb__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_4__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user?.hashedPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_JWT_SECRET\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ3NCO0FBQ2dCO0FBQ1I7QUFFckI7QUFFN0IsTUFBTUssY0FBMkI7SUFDdENDLFNBQVNILHdFQUFhQSxDQUFDQyxzREFBTUE7SUFDN0JHLFdBQVc7UUFDVEwsc0VBQW1CQSxDQUFDO1lBQ2xCTSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3RDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVyxFQUFFO2dCQUMzQixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsTUFBTSxJQUFJRSxNQUFNLHVCQUF1QjtnQkFDekMsQ0FBQztnQkFFRCxNQUFNQyxPQUFPLE1BQU1aLHNFQUFzQixDQUFDO29CQUN4Q2MsT0FBTzt3QkFDTFIsT0FBT0QsWUFBWUMsS0FBSztvQkFDMUI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDTSxRQUFRLENBQUNBLE1BQU1HLGdCQUFnQjtvQkFDbEMsTUFBTSxJQUFJSixNQUFNLHVCQUF1QjtnQkFDekMsQ0FBQztnQkFFRCxNQUFNSyxvQkFBb0IsTUFBTXBCLHFEQUFjLENBQzVDUyxZQUFZSSxRQUFRLEVBQ3BCRyxLQUFLRyxjQUFjO2dCQUdyQixJQUFJLENBQUNDLG1CQUFtQjtvQkFDdEIsTUFBTSxJQUFJTCxNQUFNLHVCQUF1QjtnQkFDekMsQ0FBQztnQkFFRCxPQUFPQztZQUNUO1FBQ0Y7S0FDRDtJQUNETSxPQUFPQyxrQkFBeUI7SUFDaENDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLEtBQUs7UUFDSEMsUUFBUUosUUFBUUssR0FBRyxDQUFDQyxtQkFBbUI7SUFDekM7SUFDQUYsUUFBUUosUUFBUUssR0FBRyxDQUFDRSxlQUFlO0FBQ3JDLEVBQUU7QUFFRixpRUFBZTdCLGdEQUFRQSxDQUFDSSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVzaC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIlxuaW1wb3J0IE5leHRBdXRoLCB7IEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYnMvcHJpc21hZGJcIlxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnZW1haWwnLCB0eXBlOiAndGV4dCcgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdwYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyPy5oYXNoZWRQYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLmhhc2hlZFBhc3N3b3JkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxuICB9LFxuICBqd3Q6IHtcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX0pXVF9TRUNSRVQsXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbImJjcnlwdCIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJpc0NvcnJlY3RQYXNzd29yZCIsImNvbXBhcmUiLCJkZWJ1ZyIsInByb2Nlc3MiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJqd3QiLCJzZWNyZXQiLCJlbnYiLCJORVhUQVVUSF9KV1RfU0VDUkVUIiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./pages/api/like.ts":
/*!***************************!*\
  !*** ./pages/api/like.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/serverAuth */ \"(api)/./libs/serverAuth.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\" && req.method !== \"DELETE\") {\n        return res.status(405).end();\n    }\n    try {\n        const { postId  } = req.body;\n        const { currentUser  } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n        if (!postId || typeof postId !== \"string\") {\n            throw new Error(\"Invalid ID\");\n        }\n        const post = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findUnique({\n            where: {\n                id: postId\n            }\n        });\n        if (!post) {\n            throw new Error(\"Invalid ID\");\n        }\n        let updatedLikedIds = [\n            ...post.likedIds || []\n        ];\n        if (req.method === \"POST\") {\n            updatedLikedIds.push(currentUser.id);\n            // NOTIFICATION PART START\n            try {\n                const post = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findUnique({\n                    where: {\n                        id: postId\n                    }\n                });\n                if (post?.userId) {\n                    await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notification.create({\n                        data: {\n                            body: \"Someone liked your tweet!\",\n                            userId: post.userId\n                        }\n                    });\n                    await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.update({\n                        where: {\n                            id: post.userId\n                        },\n                        data: {\n                            hasNotification: true\n                        }\n                    });\n                }\n            } catch (error) {\n                console.log(error);\n            }\n        // NOTIFICATION PART END\n        }\n        if (req.method === \"DELETE\") {\n            updatedLikedIds = updatedLikedIds.filter((likedId)=>likedId !== currentUser?.id);\n        }\n        const updatedPost = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.update({\n            where: {\n                id: postId\n            },\n            data: {\n                likedIds: updatedLikedIds\n            }\n        });\n        return res.status(200).json(updatedPost);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlrZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFcUM7QUFDTTtBQUU1QixlQUFlRSxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQy9FLElBQUlELElBQUlFLE1BQU0sS0FBSyxVQUFVRixJQUFJRSxNQUFNLEtBQUssVUFBVTtRQUNwRCxPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM1QixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFM0IsTUFBTSxFQUFFQyxZQUFXLEVBQUUsR0FBRyxNQUFNVCw0REFBVUEsQ0FBQ0UsS0FBS0M7UUFFOUMsSUFBSSxDQUFDSSxVQUFVLE9BQU9BLFdBQVcsVUFBVTtZQUN6QyxNQUFNLElBQUlHLE1BQU0sY0FBYztRQUNoQyxDQUFDO1FBRUQsTUFBTUMsT0FBTyxNQUFNWixzRUFBc0IsQ0FBQztZQUN4Q2MsT0FBTztnQkFDTEMsSUFBSVA7WUFDTjtRQUNGO1FBRUEsSUFBSSxDQUFDSSxNQUFNO1lBQ1QsTUFBTSxJQUFJRCxNQUFNLGNBQWM7UUFDaEMsQ0FBQztRQUVELElBQUlLLGtCQUFrQjtlQUFLSixLQUFLSyxRQUFRLElBQUksRUFBRTtTQUFFO1FBRWhELElBQUlkLElBQUlFLE1BQU0sS0FBSyxRQUFRO1lBQ3pCVyxnQkFBZ0JFLElBQUksQ0FBQ1IsWUFBWUssRUFBRTtZQUVuQywwQkFBMEI7WUFDMUIsSUFBSTtnQkFDRixNQUFNSCxPQUFPLE1BQU1aLHNFQUFzQixDQUFDO29CQUN4Q2MsT0FBTzt3QkFDTEMsSUFBSVA7b0JBQ047Z0JBQ0Y7Z0JBRUEsSUFBSUksTUFBTU8sUUFBUTtvQkFDaEIsTUFBTW5CLDBFQUEwQixDQUFDO3dCQUMvQnNCLE1BQU07NEJBQ0piLE1BQU07NEJBQ05VLFFBQVFQLEtBQUtPLE1BQU07d0JBQ3JCO29CQUNGO29CQUVBLE1BQU1uQixrRUFBa0IsQ0FBQzt3QkFDdkJjLE9BQU87NEJBQ0xDLElBQUlILEtBQUtPLE1BQU07d0JBQ2pCO3dCQUNBRyxNQUFNOzRCQUNKRyxpQkFBaUIsSUFBSTt3QkFDdkI7b0JBQ0Y7Z0JBQ0YsQ0FBQztZQUNILEVBQUUsT0FBTUMsT0FBTztnQkFDYkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNkO1FBQ0Esd0JBQXdCO1FBQzFCLENBQUM7UUFFRCxJQUFJdkIsSUFBSUUsTUFBTSxLQUFLLFVBQVU7WUFDM0JXLGtCQUFrQkEsZ0JBQWdCYSxNQUFNLENBQUMsQ0FBQ0MsVUFBWUEsWUFBWXBCLGFBQWFLO1FBQ2pGLENBQUM7UUFFRCxNQUFNZ0IsY0FBYyxNQUFNL0Isa0VBQWtCLENBQUM7WUFDM0NjLE9BQU87Z0JBQ0xDLElBQUlQO1lBQ047WUFDQWMsTUFBTTtnQkFDSkwsVUFBVUQ7WUFDWjtRQUNGO1FBRUEsT0FBT1osSUFBSUUsTUFBTSxDQUFDLEtBQUswQixJQUFJLENBQUNEO0lBQzlCLEVBQUUsT0FBT0wsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osT0FBT3RCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzVCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1c2gvLi9wYWdlcy9hcGkvbGlrZS50cz81ZDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvbGlicy9wcmlzbWFkYic7XG5pbXBvcnQgc2VydmVyQXV0aCBmcm9tIFwiQC9saWJzL3NlcnZlckF1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnICYmIHJlcS5tZXRob2QgIT09ICdERUxFVEUnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBwb3N0SWQgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gYXdhaXQgc2VydmVyQXV0aChyZXEsIHJlcyk7XG5cbiAgICBpZiAoIXBvc3RJZCB8fCB0eXBlb2YgcG9zdElkICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIElEJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5wb3N0LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHBvc3RJZFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFwb3N0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKTtcbiAgICB9XG5cbiAgICBsZXQgdXBkYXRlZExpa2VkSWRzID0gWy4uLihwb3N0Lmxpa2VkSWRzIHx8IFtdKV07XG5cbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICB1cGRhdGVkTGlrZWRJZHMucHVzaChjdXJyZW50VXNlci5pZCk7XG4gICAgICBcbiAgICAgIC8vIE5PVElGSUNBVElPTiBQQVJUIFNUQVJUXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiBwb3N0SWQsXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgaWYgKHBvc3Q/LnVzZXJJZCkge1xuICAgICAgICAgIGF3YWl0IHByaXNtYS5ub3RpZmljYXRpb24uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgYm9keTogJ1NvbWVvbmUgbGlrZWQgeW91ciB0d2VldCEnLFxuICAgICAgICAgICAgICB1c2VySWQ6IHBvc3QudXNlcklkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIGlkOiBwb3N0LnVzZXJJZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgaGFzTm90aWZpY2F0aW9uOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgICAgLy8gTk9USUZJQ0FUSU9OIFBBUlQgRU5EXG4gICAgfVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICB1cGRhdGVkTGlrZWRJZHMgPSB1cGRhdGVkTGlrZWRJZHMuZmlsdGVyKChsaWtlZElkKSA9PiBsaWtlZElkICE9PSBjdXJyZW50VXNlcj8uaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRQb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBwb3N0SWRcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpa2VkSWRzOiB1cGRhdGVkTGlrZWRJZHNcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVkUG9zdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuZW5kKCk7XG4gIH1cbn0iXSwibmFtZXMiOlsicHJpc21hIiwic2VydmVyQXV0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJwb3N0SWQiLCJib2R5IiwiY3VycmVudFVzZXIiLCJFcnJvciIsInBvc3QiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInVwZGF0ZWRMaWtlZElkcyIsImxpa2VkSWRzIiwicHVzaCIsInVzZXJJZCIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZSIsImRhdGEiLCJ1c2VyIiwidXBkYXRlIiwiaGFzTm90aWZpY2F0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwibGlrZWRJZCIsInVwZGF0ZWRQb3N0IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/like.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/like.ts"));
module.exports = __webpack_exports__;

})();