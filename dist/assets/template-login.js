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

/***/ "./src/scripts/snippets/templates/customers/template-login.js":
/*!********************************************************************!*\
  !*** ./src/scripts/snippets/templates/customers/template-login.js ***!
  \********************************************************************/
/***/ (() => {

eval("window.addEventListener('DOMContentLoaded', event => {\n  const cFormLogin = document.querySelector('[data-form-login]');\n  const cFormRecover = document.querySelector('[data-form-recover]');\n  const recoverUrl = window.location.href.includes('#recover');\n  if (!recoverUrl) cFormLogin.classList.remove('u-hide');else cFormRecover.classList.remove('u-hide');\n  const cLoginTrigger = document.querySelector('[data-form-login-trigger]');\n  const cRecoverTrigger = document.querySelector('[data-form-recover-trigger]');\n  const triggers = [cLoginTrigger, cRecoverTrigger];\n  triggers.forEach((trigger, index) => trigger.addEventListener('click', event => {\n    const alerts = document.querySelectorAll('c-form__alert');\n    alerts.forEach(alert => alert.remove());\n\n    if (index === 0) {\n      cFormRecover.classList.add('u-hide');\n      cFormLogin.classList.remove('u-hide');\n    } else {\n      cFormLogin.classList.add('u-hide');\n      cFormRecover.classList.remove('u-hide');\n    }\n  }));\n});\n\n//# sourceURL=webpack://shopify-foundation-theme/./src/scripts/snippets/templates/customers/template-login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/snippets/templates/customers/template-login.js"]();
/******/ 	
/******/ })()
;