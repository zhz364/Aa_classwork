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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const warmup = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\"); \n\nconst clockElement = document.getElementById('clock');\n// let clock = new Clock\n\nclass Clock {\n    constructor() {\n        // 1. Create a Date object.\n        const currentTime = new Date();\n\n        // 2. Store the hour, minute, and second.\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();    \n\n        // 3. Call printTime.\n        this.printTime();\n        // warmup.htmlGenerator(this.printTime(), clockElement);\n        // clockElement.parentNode.removeChild(\"p\")\n        // 4. Schedule the tick at 1 second intervals.\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n        warmup.htmlGenerator(timeString, clockElement);\n        // clockElement.parentNode.removeChild(\"p\")\n        // Use console.log to print it.\n        // console.log(timeString);\n    }\n\n    _tick() {\n        // 1. Increment the time by one second.\n        this._incrementSeconds();\n\n        // 2. Call printTime.\n        this.printTime();\n    }\n\n    _incrementSeconds() {\n        // 1. Increment the time by one second.\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this._incrementMinutes();\n        }\n    }\n\n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this._incrementHours();\n        }\n    }\n\n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\n\nconst clock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: dogLinkCreator, attachDogLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dogLinkCreator\", function() { return dogLinkCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachDogLinks\", function() { return attachDogLinks; });\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\nconst dropDown = document.querySelector('.drop-down-dog-list');\n\n\nconst dogLinkCreator = (dogs) => {\n  let arr = [];\n  // <li><a href=\"\">Corgi</a></li>\n\n  //iterating a hash obj\n  for (let k in dogs){\n    // document.getElementById(\"myLink\").href = \"style2.css\";\n    // create li tag\n    let newLi = document.createElement(\"li\");\n    let key = document.createTextNode(k);  \n    newLi.appendChild(key);\n    //create a tag\n    let newA = document.createElement(\"a\");\n    newA.href = dogs[k];\n    \n    newLi.appendChild(newA);\n    // dropDown.appendChild(newLi);\n    arr.push(newLi)\n    \n  }\n  return arr\n}\n\n// dogLinkCreator(dogs);\n\nconst attachDogLinks = () => {\n  let dogLinks = dogLinkCreator(dogs);  \n  // debugger\n  dogLinks.forEach((el) => {\n    // console.log(dropDown);\n    // console.log(`ele1 ${el}`);\n    dropDown.appendChild(el);\n  })\n}\nattachDogLinks()\nconst dogNav = document.querySelector(\".drop-down-dog-nav\");\nconst hideDrop = (event) =>{\n  event.target.style.display = \"none\";\n}\n\nconst showDrop = (event) =>{\n  event.target.style.display = \"block\";\n}\ndogNav.addEventListener(\"mouseleave\",hideDrop)\ndogNav.addEventListener(\"mouseenter\",showDrop)\n\n// export const handleEnter = () => {\n//   let dogLinks = document.querySelectorAll(\".dog-link\");\n//   for (let i = 0; i < dogLinks.length; i++) {\n//     dogLinks[i].style.display = \"block\";\n//   }\n// };\n// export const handleLeave = () => {\n//   let dogLinks = document.querySelectorAll(\".dog-link\");\n//   for (let i = 0; i < dogLinks.length; i++) {\n//     dogLinks[i].style.display = \"none\";\n//   }\n// };\n// attachDogLinks()\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n\n\n\nwindow.dogLinkCreator = _drop_down_js__WEBPACK_IMPORTED_MODULE_2__[\"dogLinkCreator\"]\n\nwindow.attachDogLinks = _drop_down_js__WEBPACK_IMPORTED_MODULE_2__[\"attachDogLinks\"]\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    // var node = document.createElement(\"LI\");                 // Create a <li> node\n    // var textnode = document.createTextNode(\"Water\");         // Create a text node\n    // node.appendChild(node);   \n    Array.from(htmlElement.children).forEach((el,idx) => {\n        htmlElement.removeChild(el);\n    })\n\n    let newP = document.createElement(\"p\");\n    let text = document.createTextNode(string);  \n    newP.appendChild(text);\n    htmlElement.appendChild(newP);\n};\n{/* <p>party time </p> */}\n// htmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });