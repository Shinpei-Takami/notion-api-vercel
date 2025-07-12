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
exports.id = "pages/api/notion";
exports.ids = ["pages/api/notion"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "(api)/./lib/notion.js":
/*!***********************!*\
  !*** ./lib/notion.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDatabase: () => (/* binding */ getDatabase)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/notion.js\n\n// Notion API クライアントを初期化（環境変数からキーを取得）\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_API_KEY\n});\n// データベースからページを取得する関数\nasync function getDatabase() {\n    const response = await notion.databases.query({\n        database_id: process.env.NOTION_DATABASE_ID\n    });\n    return response.results;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbm90aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUMwQjtBQUUxQyxxQ0FBcUM7QUFDckMsTUFBTUMsU0FBUyxJQUFJRCxvREFBTUEsQ0FBQztJQUFFRSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFBQztBQUU3RCxxQkFBcUI7QUFDZCxlQUFlQztJQUNwQixNQUFNQyxXQUFXLE1BQU1OLE9BQU9PLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDO1FBQzVDQyxhQUFhUCxRQUFRQyxHQUFHLENBQUNPLGtCQUFrQjtJQUM3QztJQUNBLE9BQU9KLFNBQVNLLE9BQU87QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24tYXBpLXZlcmNlbC8uL2xpYi9ub3Rpb24uanM/YTQxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvbm90aW9uLmpzXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiQG5vdGlvbmhxL2NsaWVudFwiO1xuXG4vLyBOb3Rpb24gQVBJIOOCr+ODqeOCpOOCouODs+ODiOOCkuWIneacn+WMlu+8iOeSsOWig+WkieaVsOOBi+OCieOCreODvOOCkuWPluW+l++8iVxuY29uc3Qgbm90aW9uID0gbmV3IENsaWVudCh7IGF1dGg6IHByb2Nlc3MuZW52Lk5PVElPTl9BUElfS0VZIH0pO1xuXG4vLyDjg4fjg7zjgr/jg5njg7zjgrnjgYvjgonjg5rjg7zjgrjjgpLlj5blvpfjgZnjgovplqLmlbBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhYmFzZSgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcbiAgICBkYXRhYmFzZV9pZDogcHJvY2Vzcy5lbnYuTk9USU9OX0RBVEFCQVNFX0lELFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdHM7XG59Il0sIm5hbWVzIjpbIkNsaWVudCIsIm5vdGlvbiIsImF1dGgiLCJwcm9jZXNzIiwiZW52IiwiTk9USU9OX0FQSV9LRVkiLCJnZXREYXRhYmFzZSIsInJlc3BvbnNlIiwiZGF0YWJhc2VzIiwicXVlcnkiLCJkYXRhYmFzZV9pZCIsIk5PVElPTl9EQVRBQkFTRV9JRCIsInJlc3VsdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/notion.js\n");

/***/ }),

/***/ "(api)/./pages/api/notion.js":
/*!*****************************!*\
  !*** ./pages/api/notion.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_notion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/notion */ \"(api)/./lib/notion.js\");\n// pages/api/notion.js\n\nasync function handler(req, res) {\n    try {\n        const data = await (0,_lib_notion__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();\n        const results = data.map((page)=>{\n            const props = page.properties;\n            return {\n                title: props[\"書籍名\"]?.title?.[0]?.plain_text || \"(無題)\",\n                author: props[\"著者名\"]?.rich_text?.[0]?.plain_text || \"\",\n                publisher: props[\"出版社\"]?.rich_text?.[0]?.plain_text || \"\",\n                year: props[\"出版年\"]?.number || \"\",\n                selector: props[\"選書者\"]?.rich_text?.[0]?.plain_text || \"\",\n                quote: props[\"引用\"]?.rich_text?.[0]?.plain_text || \"\",\n                comment: props[\"一言\"]?.rich_text?.[0]?.plain_text || \"\"\n            };\n        });\n        res.status(200).json(results);\n    } catch (error) {\n        console.error(\"Notion API error:\", error);\n        res.status(500).json({\n            error: \"Notion API error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0JBQXNCO0FBQ3lCO0FBRWhDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNSix3REFBV0E7UUFDOUIsTUFBTUssVUFBVUQsS0FBS0UsR0FBRyxDQUFDLENBQUNDO1lBQ3hCLE1BQU1DLFFBQVFELEtBQUtFLFVBQVU7WUFDN0IsT0FBTztnQkFDTEMsT0FBT0YsS0FBSyxDQUFDLE1BQU0sRUFBRUUsT0FBTyxDQUFDLEVBQUUsRUFBRUMsY0FBYztnQkFDL0NDLFFBQVFKLEtBQUssQ0FBQyxNQUFNLEVBQUVLLFdBQVcsQ0FBQyxFQUFFLEVBQUVGLGNBQWM7Z0JBQ3BERyxXQUFXTixLQUFLLENBQUMsTUFBTSxFQUFFSyxXQUFXLENBQUMsRUFBRSxFQUFFRixjQUFjO2dCQUN2REksTUFBTVAsS0FBSyxDQUFDLE1BQU0sRUFBRVEsVUFBVTtnQkFDOUJDLFVBQVVULEtBQUssQ0FBQyxNQUFNLEVBQUVLLFdBQVcsQ0FBQyxFQUFFLEVBQUVGLGNBQWM7Z0JBQ3RETyxPQUFPVixLQUFLLENBQUMsS0FBSyxFQUFFSyxXQUFXLENBQUMsRUFBRSxFQUFFRixjQUFjO2dCQUNsRFEsU0FBU1gsS0FBSyxDQUFDLEtBQUssRUFBRUssV0FBVyxDQUFDLEVBQUUsRUFBRUYsY0FBYztZQUN0RDtRQUNGO1FBRUFSLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDaEI7SUFDdkIsRUFBRSxPQUFPaUIsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMscUJBQXFCQTtRQUNuQ25CLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBbUI7SUFDbkQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi1hcGktdmVyY2VsLy4vcGFnZXMvYXBpL25vdGlvbi5qcz8zMjdjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9ub3Rpb24uanNcbmltcG9ydCB7IGdldERhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9ub3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhYmFzZSgpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLm1hcCgocGFnZSkgPT4ge1xuICAgICAgY29uc3QgcHJvcHMgPSBwYWdlLnByb3BlcnRpZXM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogcHJvcHNbJ+abuOexjeWQjSddPy50aXRsZT8uWzBdPy5wbGFpbl90ZXh0IHx8ICco54Sh6aGMKScsXG4gICAgICAgIGF1dGhvcjogcHJvcHNbJ+iRl+iAheWQjSddPy5yaWNoX3RleHQ/LlswXT8ucGxhaW5fdGV4dCB8fCAnJyxcbiAgICAgICAgcHVibGlzaGVyOiBwcm9wc1sn5Ye654mI56S+J10/LnJpY2hfdGV4dD8uWzBdPy5wbGFpbl90ZXh0IHx8ICcnLFxuICAgICAgICB5ZWFyOiBwcm9wc1sn5Ye654mI5bm0J10/Lm51bWJlciB8fCAnJyxcbiAgICAgICAgc2VsZWN0b3I6IHByb3BzWyfpgbjmm7jogIUnXT8ucmljaF90ZXh0Py5bMF0/LnBsYWluX3RleHQgfHwgJycsXG4gICAgICAgIHF1b3RlOiBwcm9wc1sn5byV55SoJ10/LnJpY2hfdGV4dD8uWzBdPy5wbGFpbl90ZXh0IHx8ICcnLFxuICAgICAgICBjb21tZW50OiBwcm9wc1sn5LiA6KiAJ10/LnJpY2hfdGV4dD8uWzBdPy5wbGFpbl90ZXh0IHx8ICcnLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vdGlvbiBBUEkgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdOb3Rpb24gQVBJIGVycm9yJyB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJnZXREYXRhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwicmVzdWx0cyIsIm1hcCIsInBhZ2UiLCJwcm9wcyIsInByb3BlcnRpZXMiLCJ0aXRsZSIsInBsYWluX3RleHQiLCJhdXRob3IiLCJyaWNoX3RleHQiLCJwdWJsaXNoZXIiLCJ5ZWFyIiwibnVtYmVyIiwic2VsZWN0b3IiLCJxdW90ZSIsImNvbW1lbnQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/notion.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/notion.js"));
module.exports = __webpack_exports__;

})();