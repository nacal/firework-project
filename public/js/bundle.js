/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/firework.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/firework.js":
/*!****************************!*\
  !*** ./src/js/firework.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_makeFireworks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/makeFireworks */ \"./src/js/modules/makeFireworks.js\");\n/* harmony import */ var _modules_setVh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/setVh */ \"./src/js/modules/setVh.js\");\n\n\n\nObject(_modules_setVh__WEBPACK_IMPORTED_MODULE_1__[\"setVh\"])();\nwindow.addEventListener('resize', () => {\n  Object(_modules_setVh__WEBPACK_IMPORTED_MODULE_1__[\"setVh\"])();\n});\n\nObject(_modules_makeFireworks__WEBPACK_IMPORTED_MODULE_0__[\"makeFireworks\"])(5);\n\n\n//# sourceURL=webpack:///./src/js/firework.js?");

/***/ }),

/***/ "./src/js/modules/color.js":
/*!*********************************!*\
  !*** ./src/js/modules/color.js ***!
  \*********************************/
/*! exports provided: color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return color; });\nconst color = [\n  ['#d90000', '#ff5259'],\n  ['#de0066', '#fe58ca'],\n  ['#3f00e7', '#9462ff'],\n  ['#009ccd', '#22dbff'],\n  ['#b78500', '#ffdb4f'],\n  ['#00c435', '#00ff99'],\n];\n\n\n//# sourceURL=webpack:///./src/js/modules/color.js?");

/***/ }),

/***/ "./src/js/modules/fireworkColor.js":
/*!*****************************************!*\
  !*** ./src/js/modules/fireworkColor.js ***!
  \*****************************************/
/*! exports provided: fireworkColorMain, fireworkColorSub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fireworkColorMain\", function() { return fireworkColorMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fireworkColorSub\", function() { return fireworkColorSub; });\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ \"./src/js/modules/color.js\");\n\n\nconst fireworkColorMain = () => {\n  fireworkColorMain.value = _color__WEBPACK_IMPORTED_MODULE_0__[\"color\"][Math.floor(Math.random() * _color__WEBPACK_IMPORTED_MODULE_0__[\"color\"].length)][0];\n  return fireworkColorMain.value;\n}\n\nconst fireworkColorSub = () => {\n  fireworkColorSub.value = _color__WEBPACK_IMPORTED_MODULE_0__[\"color\"][Math.floor(Math.random() * _color__WEBPACK_IMPORTED_MODULE_0__[\"color\"].length)][1];\n  return fireworkColorSub.value;\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/fireworkColor.js?");

/***/ }),

/***/ "./src/js/modules/fireworkLuxury.js":
/*!******************************************!*\
  !*** ./src/js/modules/fireworkLuxury.js ***!
  \******************************************/
/*! exports provided: fireworkLuxury */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fireworkLuxury\", function() { return fireworkLuxury; });\nconst fireworkLuxury = () => {\n  const array = [16, 24, 32];\n  return array[Math.floor(Math.random() * array.length)];\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/fireworkLuxury.js?");

/***/ }),

/***/ "./src/js/modules/generatePosition.js":
/*!********************************************!*\
  !*** ./src/js/modules/generatePosition.js ***!
  \********************************************/
/*! exports provided: generatePositionY, generatePositionX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generatePositionY\", function() { return generatePositionY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generatePositionX\", function() { return generatePositionX; });\n/* harmony import */ var _randomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomNumber */ \"./src/js/modules/randomNumber.js\");\n\n\nconst generatePositionY = () => {\n  const minY = 10;\n  const maxY = 75;\n\n  generatePositionY.value = Object(_randomNumber__WEBPACK_IMPORTED_MODULE_0__[\"randomNumber\"])(minY, maxY) + '%';\n  return generatePositionY.value;\n}\n\nconst generatePositionX = () => {\n  const minX = 5;\n  const maxX = 95;\n\n  generatePositionX.value = Object(_randomNumber__WEBPACK_IMPORTED_MODULE_0__[\"randomNumber\"])(minX, maxX) + '%';\n  return generatePositionX.value;\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/generatePosition.js?");

/***/ }),

/***/ "./src/js/modules/lineLength.js":
/*!**************************************!*\
  !*** ./src/js/modules/lineLength.js ***!
  \**************************************/
/*! exports provided: lineLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lineLength\", function() { return lineLength; });\nconst lineLength = (positionY) => {\n  return window.innerHeight * (100 - positionY.replace(/[^0-9]/g, '')) * 0.005;\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/lineLength.js?");

/***/ }),

/***/ "./src/js/modules/makeBursts.js":
/*!**************************************!*\
  !*** ./src/js/modules/makeBursts.js ***!
  \**************************************/
/*! exports provided: makeBursts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeBursts\", function() { return makeBursts; });\n/* harmony import */ var _generatePosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatePosition */ \"./src/js/modules/generatePosition.js\");\n/* harmony import */ var _fireworkColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fireworkColor */ \"./src/js/modules/fireworkColor.js\");\n/* harmony import */ var _setDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setDelay */ \"./src/js/modules/setDelay.js\");\n/* harmony import */ var _randomNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./randomNumber */ \"./src/js/modules/randomNumber.js\");\n/* harmony import */ var _fireworkLuxury__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fireworkLuxury */ \"./src/js/modules/fireworkLuxury.js\");\n\n\n\n\n\n\nconst makeBursts = () => {\n  const STAGGER = mojs.stagger(mojs.Burst);\n  const bursts = new STAGGER({\n    radius: [80, 'rand(80, 100)', 'rand(80,120)', 'rand(80, 140)'],\n    angle: ['rand(0, 180)'],\n    top: _generatePosition__WEBPACK_IMPORTED_MODULE_0__[\"generatePositionY\"].value,\n    left: _generatePosition__WEBPACK_IMPORTED_MODULE_0__[\"generatePositionX\"].value,\n    quantifier: Object(_randomNumber__WEBPACK_IMPORTED_MODULE_3__[\"randomNumber\"])(2, 4),\n    count: Object(_fireworkLuxury__WEBPACK_IMPORTED_MODULE_4__[\"fireworkLuxury\"])(),\n    children: {\n      shape: 'line',\n      radius: [60, 40],\n      scale: 1,\n      stroke: [_fireworkColor__WEBPACK_IMPORTED_MODULE_1__[\"fireworkColorMain\"].value, _fireworkColor__WEBPACK_IMPORTED_MODULE_1__[\"fireworkColorSub\"].value],\n      strokeDasharray: '100%',\n      strokeDashoffset: { '100%': '300%' },\n      strokeOpacity: { 1: 0.25 },\n      duration: [1700, 1600],\n      delay: [1900 + _setDelay__WEBPACK_IMPORTED_MODULE_2__[\"setDelay\"].value, 1800 + _setDelay__WEBPACK_IMPORTED_MODULE_2__[\"setDelay\"].value],\n      easing: 'ease.out',\n    },\n    onComplete() {\n      this.generate();\n    }\n  });\n  return bursts;\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/makeBursts.js?");

/***/ }),

/***/ "./src/js/modules/makeCircle.js":
/*!**************************************!*\
  !*** ./src/js/modules/makeCircle.js ***!
  \**************************************/
/*! exports provided: makeCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeCircle\", function() { return makeCircle; });\n/* harmony import */ var _generatePosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatePosition */ \"./src/js/modules/generatePosition.js\");\n/* harmony import */ var _fireworkColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fireworkColor */ \"./src/js/modules/fireworkColor.js\");\n/* harmony import */ var _setDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setDelay */ \"./src/js/modules/setDelay.js\");\n\n\n\n\nconst makeCircle = () => {\n  const circle = new mojs.Shape({\n    radius: 3,\n    shape: 'circle',\n    scale: { 0: 1 },\n    top: _generatePosition__WEBPACK_IMPORTED_MODULE_0__[\"generatePositionY\"].value,\n    left: _generatePosition__WEBPACK_IMPORTED_MODULE_0__[\"generatePositionX\"].value,\n    stroke: _fireworkColor__WEBPACK_IMPORTED_MODULE_1__[\"fireworkColorMain\"].value,\n    strokeWidth: 3,\n    duration: 300,\n    delay: 1200 + _setDelay__WEBPACK_IMPORTED_MODULE_2__[\"setDelay\"].value,\n    fill: 'transparent',\n  }).then({\n    scale: 2,\n    strokeWidth: 0,\n  });\n  return circle;\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/makeCircle.js?");

/***/ }),

/***/ "./src/js/modules/makeFirework.js":
/*!****************************************!*\
  !*** ./src/js/modules/makeFirework.js ***!
  \****************************************/
/*! exports provided: makeFirework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeFirework\", function() { return makeFirework; });\n/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setStyle */ \"./src/js/modules/setStyle.js\");\n/* harmony import */ var _makeLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeLine */ \"./src/js/modules/makeLine.js\");\n/* harmony import */ var _makeCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeCircle */ \"./src/js/modules/makeCircle.js\");\n/* harmony import */ var _makeBursts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeBursts */ \"./src/js/modules/makeBursts.js\");\n/* harmony import */ var _generatePosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generatePosition */ \"./src/js/modules/generatePosition.js\");\n/* harmony import */ var _fireworkColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fireworkColor */ \"./src/js/modules/fireworkColor.js\");\n/* harmony import */ var _lineLength__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lineLength */ \"./src/js/modules/lineLength.js\");\n\n\n\n\n\n\n\n\nconst makeFirework = () => {\n\n  Object(_setStyle__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])();\n\n  const line = Object(_makeLine__WEBPACK_IMPORTED_MODULE_1__[\"makeLine\"])();\n  const circle = Object(_makeCircle__WEBPACK_IMPORTED_MODULE_2__[\"makeCircle\"])();\n  const bursts = Object(_makeBursts__WEBPACK_IMPORTED_MODULE_3__[\"makeBursts\"])();\n\n\n  const TIMELINE = new mojs.Timeline({\n    onComplete() {\n      line\n        .tune({\n          top: _generatePosition__WEBPACK_IMPORTED_MODULE_4__[\"generatePositionY\"].value,\n          left: _generatePosition__WEBPACK_IMPORTED_MODULE_4__[\"generatePositionX\"].value,\n          radius: Object(_lineLength__WEBPACK_IMPORTED_MODULE_6__[\"lineLength\"])(_generatePosition__WEBPACK_IMPORTED_MODULE_4__[\"generatePositionY\"].value),\n          stroke: _fireworkColor__WEBPACK_IMPORTED_MODULE_5__[\"fireworkColorMain\"].value,\n        })\n      circle\n        .tune({\n          top: _generatePosition__WEBPACK_IMPORTED_MODULE_4__[\"generatePositionY\"].value,\n          left: _generatePosition__WEBPACK_IMPORTED_MODULE_4__[\"generatePositionX\"].value,\n          stroke: _fireworkColor__WEBPACK_IMPORTED_MODULE_5__[\"fireworkColorMain\"].value,\n        })\n      bursts\n        .tune({\n          top: _generatePosition__WEBPACK_IMPORTED_MODULE_4__[\"generatePositionY\"].value,\n          left: _generatePosition__WEBPACK_IMPORTED_MODULE_4__[\"generatePositionX\"].value,\n          children: {\n            stroke: [_fireworkColor__WEBPACK_IMPORTED_MODULE_5__[\"fireworkColorMain\"].value, _fireworkColor__WEBPACK_IMPORTED_MODULE_5__[\"fireworkColorSub\"].value],\n          }\n        })\n      Object(_setStyle__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])();\n      this.replay();\n    }\n  });\n\n  TIMELINE.add(line, bursts, circle);\n  Object(_setStyle__WEBPACK_IMPORTED_MODULE_0__[\"setStyle\"])();\n  TIMELINE.play();\n\n  return TIMELINE;\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/makeFirework.js?");

/***/ }),

/***/ "./src/js/modules/makeFireworks.js":
/*!*****************************************!*\
  !*** ./src/js/modules/makeFireworks.js ***!
  \*****************************************/
/*! exports provided: makeFireworks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeFireworks\", function() { return makeFireworks; });\n/* harmony import */ var _makeFirework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeFirework */ \"./src/js/modules/makeFirework.js\");\n\n\nconst makeFireworks = (n) => {\n  for (let i = 1; i <= n; i++) {\n    Object(_makeFirework__WEBPACK_IMPORTED_MODULE_0__[\"makeFirework\"])();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/makeFireworks.js?");

/***/ }),

/***/ "./src/js/modules/makeLine.js":
/*!************************************!*\
  !*** ./src/js/modules/makeLine.js ***!
  \************************************/
/*! exports provided: makeLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeLine\", function() { return makeLine; });\n/* harmony import */ var _generatePosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatePosition */ \"./src/js/modules/generatePosition.js\");\n/* harmony import */ var _fireworkColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fireworkColor */ \"./src/js/modules/fireworkColor.js\");\n/* harmony import */ var _setDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setDelay */ \"./src/js/modules/setDelay.js\");\n/* harmony import */ var _lineLength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lineLength */ \"./src/js/modules/lineLength.js\");\n\n\n\n\n\nconst makeLine = () => {\n  const line = new mojs.Shape({\n    y: '50%',\n    top: _generatePosition__WEBPACK_IMPORTED_MODULE_0__[\"generatePositionY\"].value,\n    left: _generatePosition__WEBPACK_IMPORTED_MODULE_0__[\"generatePositionX\"].value,\n    shape: 'line',\n    radius: Object(_lineLength__WEBPACK_IMPORTED_MODULE_3__[\"lineLength\"])(_generatePosition__WEBPACK_IMPORTED_MODULE_0__[\"generatePositionY\"].value),\n    scale: 1,\n    angle: 90,\n    stroke: Object(_fireworkColor__WEBPACK_IMPORTED_MODULE_1__[\"fireworkColorMain\"])(),\n    strokeDasharray: '50% 150%',\n    strokeDashoffset: { '-100%': '100%' },\n    strokeOpacity: { 1: -0.25 },\n    duration: 2500,\n    delay: _setDelay__WEBPACK_IMPORTED_MODULE_2__[\"setDelay\"].value,\n    easing: 'ease.inout',\n    onComplete() {\n      this.generate();\n    }\n  });\n  return line;\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/makeLine.js?");

/***/ }),

/***/ "./src/js/modules/randomNumber.js":
/*!****************************************!*\
  !*** ./src/js/modules/randomNumber.js ***!
  \****************************************/
/*! exports provided: randomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomNumber\", function() { return randomNumber; });\nconst randomNumber = (min, max) => {\n  return Math.floor(Math.random() * (max + 1 - min)) + min;\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/randomNumber.js?");

/***/ }),

/***/ "./src/js/modules/setDelay.js":
/*!************************************!*\
  !*** ./src/js/modules/setDelay.js ***!
  \************************************/
/*! exports provided: setDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDelay\", function() { return setDelay; });\n/* harmony import */ var _randomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomNumber */ \"./src/js/modules/randomNumber.js\");\n\n\nconst setDelay = () => {\n  const min = 0;\n  const max = 5000;\n\n  setDelay.value = Object(_randomNumber__WEBPACK_IMPORTED_MODULE_0__[\"randomNumber\"])(min, max);\n  return setDelay.value;\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/setDelay.js?");

/***/ }),

/***/ "./src/js/modules/setStyle.js":
/*!************************************!*\
  !*** ./src/js/modules/setStyle.js ***!
  \************************************/
/*! exports provided: setStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setStyle\", function() { return setStyle; });\n/* harmony import */ var _generatePosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatePosition */ \"./src/js/modules/generatePosition.js\");\n/* harmony import */ var _fireworkColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fireworkColor */ \"./src/js/modules/fireworkColor.js\");\n/* harmony import */ var _setDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setDelay */ \"./src/js/modules/setDelay.js\");\n\n\n\n\nconst setStyle = () => {\n  Object(_generatePosition__WEBPACK_IMPORTED_MODULE_0__[\"generatePositionX\"])();\n  Object(_generatePosition__WEBPACK_IMPORTED_MODULE_0__[\"generatePositionY\"])();\n  Object(_fireworkColor__WEBPACK_IMPORTED_MODULE_1__[\"fireworkColorMain\"])();\n  Object(_fireworkColor__WEBPACK_IMPORTED_MODULE_1__[\"fireworkColorSub\"])();\n  Object(_setDelay__WEBPACK_IMPORTED_MODULE_2__[\"setDelay\"])();\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/setStyle.js?");

/***/ }),

/***/ "./src/js/modules/setVh.js":
/*!*********************************!*\
  !*** ./src/js/modules/setVh.js ***!
  \*********************************/
/*! exports provided: setVh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setVh\", function() { return setVh; });\nconst setVh = () => {\n  let vh = window.innerHeight * 0.01;\n  document.documentElement.style.setProperty('--vh', `${vh}px`);\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/setVh.js?");

/***/ })

/******/ });