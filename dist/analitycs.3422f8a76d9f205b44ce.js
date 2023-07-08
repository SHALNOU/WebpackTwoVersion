/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/analitycs.js":
/*!*****************************!*\
  !*** ./src/js/analitycs.js ***!
  \*****************************/
/***/ (() => {

eval("function creadedAnalitycs() {\n\tlet counter = 0;\n\tlet isDectroed = false;\n\n\n\tconst listener = () => counter++;\n\n\tdocument.addEventListener('click', listener);\n\n\treturn {\n\t\tgetstroy() {\n\t\t\tdocument.removeEventListener('click', listener);\n\t\t\tisDectroed = true;\n\t\t},\n\n\t\tgetClicks() {\n\t\t\tif (isDectroed) {\n\t\t\t\treturn 'Analitics is dectroed, total bind, hello world1';\n\t\t\t}\n\t\t\treturn counter;\n\t\t}\n\t}\n}\n\nwindow.analitycs = creadedAnalitycs(); \n\n//# sourceURL=webpack:///./src/js/analitycs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/analitycs.js"]();
/******/ 	
/******/ })()
;