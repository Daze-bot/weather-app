/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  list-style: none;\n}\n\nbody {\n  min-height: 100vh;\n  background-position: center;\n  background-size: cover;\n  display: grid;\n  grid-template: 50px 1fr / 1fr;\n  position: relative;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.search {\n  display: flex;\n  position: relative;\n  justify-content: start;\n  align-items: center;\n  gap: 5px;\n  margin: 10px 0;\n}\n\n.search input {\n  appearance: none;\n  -webkit-appearance: none;\n  padding: 6px 22px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 20px;\n  background: none;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.search input:hover {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);\n}\n\n.search input:focus {\n  outline: none;\n  border: 1px solid rgba(0, 0, 0, 0.7);\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.search input::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.searchCancel {\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n}\n\n.searchCancel:hover {\n  animation: shake .6s;\n  animation-iteration-count: 1;\n}\n\n.unitChanger {\n  position: absolute;\n  right: 10px;\n  border-radius: 8px;\n  height: 20px;\n  width: 38px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n}\n\n.unitF,\n.unitC {\n  font-size: .85rem;\n  height: 16px;\n  width: 16px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  z-index: 20;\n  pointer-events: none;\n}\n\n.unitChanger input {\n  display: none;\n}\n\n.unitChanger input:checked + .slider::before {\n  transform: translateX(16px);\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: .4s;\n  border-radius: 8px;\n  height: 20px;\n  width: 38px;\n  background: none;\n}\n\n.slider::before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  left: 3px;\n  bottom: 2px;\n  transition: .4s;\n  border: 1px solid white;\n  background-color: white;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: .85rem;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 2vh;\n  gap: 2vh;\n}\n\n.mainInfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2vh;\n}\n\n.location {\n  font-size: 3rem;\n  text-align: center;\n}\n\n.currentTemp {\n  font-size: 5rem;\n}\n\n.currentTemp::after {\n  position: absolute;\n  content: \"°\";\n}\n\n.conditionDiv {\n  margin-top: -10px;\n}\n\n.currentConditon {\n  font-size: 2rem;\n  padding-left: 5px;\n}\n\n.conditionImg img {\n  height: 3rem;\n}\n\n.secondaryInfo {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  background-color: rgba(255, 255, 255, 0.4);\n  padding: 10px;\n  border-radius: 8px;\n  width: 150px;\n}\n\n.secondaryInfo p {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.highTemp {\n  color: rgb(150, 0, 0)\n}\n\n.lowTemp {\n  color: rgb(12, 63, 231);\n}\n\n.conditionDiv,\n.conditionImg,\n.tempRanges,\n.feelsLikeDiv,\n.humidityDiv,\n.windDiv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.location,\n.currentTemp,\n.conditionDiv {\n  text-shadow: 0 0 4px white;\n}\n\n.hidden {\n  display: none;\n}\n\n@keyframes shake {\n  15%, 45%, 75% {\n    transform: translate3d(-0.5px, 0, 0) rotate(4deg);\n  }\n  30%, 60%, 90% {\n    transform: translate3d(0.5px, 0, 0) rotate(-4deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE;4FAC0F;EAC1F,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,sBAAsB;EACtB,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,iBAAiB;EACjB,oCAAoC;EACpC,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,0CAA0C;AAC5C;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,oBAAoB;EACpB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;EAEE,iBAAiB;EACjB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,0CAA0C;EAC1C,aAAa;EACb,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;AACF;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;;;;;EAME,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;;;EAGE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,iDAAiD;EACnD;EACA;IACE,iDAAiD;EACnD;AACF","sourcesContent":["* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  list-style: none;\n}\n\nbody {\n  min-height: 100vh;\n  background-position: center;\n  background-size: cover;\n  display: grid;\n  grid-template: 50px 1fr / 1fr;\n  position: relative;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.search {\n  display: flex;\n  position: relative;\n  justify-content: start;\n  align-items: center;\n  gap: 5px;\n  margin: 10px 0;\n}\n\n.search input {\n  appearance: none;\n  -webkit-appearance: none;\n  padding: 6px 22px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 20px;\n  background: none;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.search input:hover {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);\n}\n\n.search input:focus {\n  outline: none;\n  border: 1px solid rgba(0, 0, 0, 0.7);\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.search input::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.searchCancel {\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n}\n\n.searchCancel:hover {\n  animation: shake .6s;\n  animation-iteration-count: 1;\n}\n\n.unitChanger {\n  position: absolute;\n  right: 10px;\n  border-radius: 8px;\n  height: 20px;\n  width: 38px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n}\n\n.unitF,\n.unitC {\n  font-size: .85rem;\n  height: 16px;\n  width: 16px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  z-index: 20;\n  pointer-events: none;\n}\n\n.unitChanger input {\n  display: none;\n}\n\n.unitChanger input:checked + .slider::before {\n  transform: translateX(16px);\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: .4s;\n  border-radius: 8px;\n  height: 20px;\n  width: 38px;\n  background: none;\n}\n\n.slider::before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  left: 3px;\n  bottom: 2px;\n  transition: .4s;\n  border: 1px solid white;\n  background-color: white;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: .85rem;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 2vh;\n  gap: 2vh;\n}\n\n.mainInfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2vh;\n}\n\n.location {\n  font-size: 3rem;\n  text-align: center;\n}\n\n.currentTemp {\n  font-size: 5rem;\n}\n\n.currentTemp::after {\n  position: absolute;\n  content: \"°\";\n}\n\n.conditionDiv {\n  margin-top: -10px;\n}\n\n.currentConditon {\n  font-size: 2rem;\n  padding-left: 5px;\n}\n\n.conditionImg img {\n  height: 3rem;\n}\n\n.secondaryInfo {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  background-color: rgba(255, 255, 255, 0.4);\n  padding: 10px;\n  border-radius: 8px;\n  width: 150px;\n}\n\n.secondaryInfo p {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.highTemp {\n  color: rgb(150, 0, 0)\n}\n\n.lowTemp {\n  color: rgb(12, 63, 231);\n}\n\n.conditionDiv,\n.conditionImg,\n.tempRanges,\n.feelsLikeDiv,\n.humidityDiv,\n.windDiv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.location,\n.currentTemp,\n.conditionDiv {\n  text-shadow: 0 0 4px white;\n}\n\n.hidden {\n  display: none;\n}\n\n@keyframes shake {\n  15%, 45%, 75% {\n    transform: translate3d(-0.5px, 0, 0) rotate(4deg);\n  }\n  30%, 60%, 90% {\n    transform: translate3d(0.5px, 0, 0) rotate(-4deg);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/imgs/weather-backgrounds sync \\.jpg$":
/*!****************************************************************!*\
  !*** ./src/imgs/weather-backgrounds/ sync nonrecursive \.jpg$ ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Ash.jpg": "./src/imgs/weather-backgrounds/Ash.jpg",
	"./Clear.jpg": "./src/imgs/weather-backgrounds/Clear.jpg",
	"./Clouds.jpg": "./src/imgs/weather-backgrounds/Clouds.jpg",
	"./Drizzle.jpg": "./src/imgs/weather-backgrounds/Drizzle.jpg",
	"./Dust.jpg": "./src/imgs/weather-backgrounds/Dust.jpg",
	"./Fog.jpg": "./src/imgs/weather-backgrounds/Fog.jpg",
	"./Haze.jpg": "./src/imgs/weather-backgrounds/Haze.jpg",
	"./Mist.jpg": "./src/imgs/weather-backgrounds/Mist.jpg",
	"./Rain.jpg": "./src/imgs/weather-backgrounds/Rain.jpg",
	"./Sand.jpg": "./src/imgs/weather-backgrounds/Sand.jpg",
	"./Smoke.jpg": "./src/imgs/weather-backgrounds/Smoke.jpg",
	"./Snow.jpg": "./src/imgs/weather-backgrounds/Snow.jpg",
	"./Squall.jpg": "./src/imgs/weather-backgrounds/Squall.jpg",
	"./Thunderstorm.jpg": "./src/imgs/weather-backgrounds/Thunderstorm.jpg",
	"./Tornado.jpg": "./src/imgs/weather-backgrounds/Tornado.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/imgs/weather-backgrounds sync \\.jpg$";

/***/ }),

/***/ "./src/scripts/Weather.js":
/*!********************************!*\
  !*** ./src/scripts/Weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _backgroundImgLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundImgLoader */ "./src/scripts/backgroundImgLoader.js");


class Weather {
  constructor(location, units = 'f') {
    this.location = location;
    if (units === 'c') {
      this.units = 'metric';
      this.tempUnit = 'C';
      this.speedUnit = 'km/h';
    } else {
      this.units = 'imperial'
      this.tempUnit = 'F';
      this.speedUnit = 'mph';
    }
    this.validCity;
  }

  async getWeatherData() {
    try {
      let response = await fetch('https://api.openweathermap.org/data/2.5/weather' + 
      `?q=${this.location}` + 
      `&units=${this.units}` + 
      `&APPID=59e393b0ab45a1585d147ab33d507f28`);
      if (response.status === 404) {
        throw `City not found! Double check your spelling.`;
      }
      this.validCity = true
      document.querySelector('.currentTemp').classList.remove('hidden');
      document.querySelector('.conditionDiv').classList.remove('hidden');
      document.querySelector('.secondaryInfo').classList.remove('hidden');
      let weatherData = await response.json();
      return weatherData;
    } catch (err) {
      document.querySelector('.location').textContent = err;
      document.querySelector('.currentTemp').classList.add('hidden');
      document.querySelector('.conditionDiv').classList.add('hidden');
      document.querySelector('.secondaryInfo').classList.add('hidden');
      this.validCity = false;
    }
  }

  // Use this to make only 1 API call
  async displayWeatherData() {
    let result = await this.getWeatherData();

    let temp = document.querySelector('.currentTemp');
    let low = document.querySelector('.lowTemp');
    let high = document.querySelector('.highTemp');
    let feel = document.querySelector('.feelsLikeTemp');
    let humid = document.querySelector('.humidity');
    let wind = document.querySelector('.windSpeed');
    let city = document.querySelector('.location');
    let imgDiv = document.querySelector('.conditionImg');
    let details = document.querySelector('.currentConditon');

    if (this.validCity === true) {
      temp.textContent = `${Math.round(result.main.temp)}`;
      low.textContent = `L: ${Math.round(result.main.temp_min)}°`;
      high.textContent = `H: ${Math.round(result.main.temp_max)}°`;
      feel.textContent = `${Math.round(result.main.feels_like)}°`;
      humid.textContent = `${result.main.humidity}%`;
      wind.textContent = `${Math.round(result.wind.speed)}${this.speedUnit}`;
      city.textContent = result.name;

      while (imgDiv.hasChildNodes()) {
        imgDiv.removeChild(imgDiv.lastChild);
      }
      let img = result.weather[0].icon;
      let weatherImg = document.createElement('img');
      weatherImg.src = `http://openweathermap.org/img/wn/${img}@2x.png`;
      imgDiv.appendChild(weatherImg);

      let description = result.weather[0].main;
      if (description === 'Clouds') {
        details.textContent = 'Cloudy';
      } else if (description === 'Thunderstorm') {
        details.textContent = 'Thunderstorms';
      } else {
        details.textContent = description;
      }

      document.body.style.backgroundImage = `url(${_backgroundImgLoader__WEBPACK_IMPORTED_MODULE_0__.bgImages[`${description}.jpg`]})`;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);


/***/ }),

/***/ "./src/scripts/backgroundImgLoader.js":
/*!********************************************!*\
  !*** ./src/scripts/backgroundImgLoader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bgImages": () => (/* binding */ bgImages)
/* harmony export */ });
function importAll(r) {
  let imgs = {};
  r.keys().map((item, index) => { imgs[item.replace('./', '')] = r(item); });
  return imgs;
}

const bgImages = importAll(__webpack_require__("./src/imgs/weather-backgrounds sync \\.jpg$"));




/***/ }),

/***/ "./src/scripts/displayControl.js":
/*!***************************************!*\
  !*** ./src/scripts/displayControl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeUnits": () => (/* binding */ changeUnits),
/* harmony export */   "clearSearch": () => (/* binding */ clearSearch),
/* harmony export */   "currentLocation": () => (/* binding */ currentLocation),
/* harmony export */   "saveLocation": () => (/* binding */ saveLocation),
/* harmony export */   "searchLocation": () => (/* binding */ searchLocation),
/* harmony export */   "weatherUnits": () => (/* binding */ weatherUnits)
/* harmony export */ });
/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ "./src/scripts/Weather.js");


let currentLocation = localStorage.getItem('currentLocation') || 'philadelphia';
let weatherUnits = localStorage.getItem('weatherUnits') || 'f';

function searchLocation() {
  let search = document.querySelector('#searchbar').value;
  new _Weather__WEBPACK_IMPORTED_MODULE_0__["default"](search, weatherUnits).displayWeatherData();
  saveLocation(search);
  clearSearch();
}

function clearSearch() {
  let search = document.querySelector('#searchbar')
  search.value = "";
  search.focus();
}

function changeUnits() {
  let unitInput = document.querySelector('.unitType');
  if (unitInput.checked) {
    weatherUnits = 'f';
    document.querySelector('.unitC').style.color = 'white';
    document.querySelector('.unitF').style.color = 'black';
    document.querySelector('.unitC').style.transition = '.4s';
    document.querySelector('.unitF').style.transition = '.4s';
  } else {
    weatherUnits = 'c';
    document.querySelector('.unitF').style.color = 'white';
    document.querySelector('.unitC').style.color = 'black';
    document.querySelector('.unitC').style.transition = '.4s';
    document.querySelector('.unitF').style.transition = '.4s';
  }
  let cityLocation = localStorage.getItem('currentLocation') || 'philadelphia';
  new _Weather__WEBPACK_IMPORTED_MODULE_0__["default"](cityLocation, weatherUnits).displayWeatherData();
  saveUnits(weatherUnits);
}

function saveLocation(location) {
  window.localStorage.setItem('currentLocation', location);
}

function saveUnits(units) {
  window.localStorage.setItem('weatherUnits', units);
}



/***/ }),

/***/ "./src/scripts/initLoad.js":
/*!*********************************!*\
  !*** ./src/scripts/initLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/close.svg */ "./src/imgs/close.svg");
/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weather */ "./src/scripts/Weather.js");
/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayControl */ "./src/scripts/displayControl.js");




async function initLoad() {
  document.body.appendChild(createHeader());
  document.body.appendChild(createMain());
  let start = new _Weather__WEBPACK_IMPORTED_MODULE_1__["default"](_displayControl__WEBPACK_IMPORTED_MODULE_2__.currentLocation, _displayControl__WEBPACK_IMPORTED_MODULE_2__.weatherUnits);
  await start.getWeatherData();
  if (start.validCity === true) {
    start.displayWeatherData();
  } else {
    (0,_displayControl__WEBPACK_IMPORTED_MODULE_2__.saveLocation)('Philadelphia');
    new _Weather__WEBPACK_IMPORTED_MODULE_1__["default"]('Philadelphia', _displayControl__WEBPACK_IMPORTED_MODULE_2__.weatherUnits).displayWeatherData();
  }
}

function createHeader() {
  let header = document.createElement('header');

  let searchDiv = document.createElement('div');
  searchDiv.classList.add('search');

  let searchbar = document.createElement('input');
  searchbar.setAttribute('id', 'searchbar');
  searchbar.setAttribute('type', 'search');
  searchbar.setAttribute('name', 'searchbar');
  searchbar.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchbar.blur();
      (0,_displayControl__WEBPACK_IMPORTED_MODULE_2__.searchLocation)();
    }
  })

  let searchClose = document.createElement('img');
  searchClose.classList.add('searchCancel');
  searchClose.src = `${_imgs_close_svg__WEBPACK_IMPORTED_MODULE_0__}`;
  searchClose.alt = 'Cancel';
  searchClose.addEventListener('click', _displayControl__WEBPACK_IMPORTED_MODULE_2__.clearSearch);

  let unitChanger = document.createElement('label');
  unitChanger.classList.add('unitChanger');

  let unitF = document.createElement('p');
  unitF.classList.add('unitF');
  unitF.textContent = "F";

  let unitC = document.createElement('p');
  unitC.classList.add('unitC');
  unitC.textContent = "C";

  let unitInput = document.createElement('input');
  unitInput.type = 'checkbox';
  unitInput.classList.add('unitType');

  if (_displayControl__WEBPACK_IMPORTED_MODULE_2__.weatherUnits === 'f') {
    unitInput.checked = false;
    unitC.style.color = 'white';
    unitF.style.color = 'black';
  } else if (_displayControl__WEBPACK_IMPORTED_MODULE_2__.weatherUnits === 'c') {
    unitInput.checked = true;
    unitF.style.color = 'white';
    unitC.style.color = 'black';
  }

  let unitSpan = document.createElement('span');
  unitSpan.classList.add('slider');
  unitSpan.addEventListener('click', _displayControl__WEBPACK_IMPORTED_MODULE_2__.changeUnits);
  
  header.appendChild(searchDiv);
  searchDiv.appendChild(searchbar);
  searchDiv.appendChild(searchClose);
  header.appendChild(unitChanger);
  unitChanger.appendChild(unitF);
  unitChanger.appendChild(unitC);
  unitChanger.appendChild(unitInput);
  unitChanger.appendChild(unitSpan);

  return header;
}

function createMain() {
  let main = document.createElement('main');

  let mainInfo = document.createElement('div');
  mainInfo.classList.add('mainInfo');

  let cityDiv = document.createElement('div');
  cityDiv.classList.add('location');

  let currentTemp = document.createElement('div');
  currentTemp.classList.add('currentTemp');

  let conditionDiv = document.createElement('div');
  conditionDiv.classList.add('conditionDiv');

  let detailsDiv = document.createElement('div');
  detailsDiv.classList.add('currentConditon');

  let imgDiv = document.createElement('div');
  imgDiv.classList.add('conditionImg');

  main.appendChild(mainInfo);

  mainInfo.appendChild(cityDiv);
  mainInfo.appendChild(currentTemp);

  mainInfo.appendChild(conditionDiv);
  conditionDiv.appendChild(detailsDiv);
  conditionDiv.appendChild(imgDiv);

  let secondaryInfo = document.createElement('div');
  secondaryInfo.classList.add('secondaryInfo');

  let tempRange = document.createElement('div');
  tempRange.classList.add('tempRanges');

  let highTemp = document.createElement('div');
  highTemp.classList.add('highTemp');

  let lowTemp = document.createElement('div');
  lowTemp.classList.add('lowTemp');

  let feelsLike = document.createElement('div');
  feelsLike.classList.add('feelsLikeDiv');

  let feelsText = document.createElement('p');
  feelsText.classList.add('feelsLikeText');
  feelsText.textContent = 'Feels Like:';

  let feelsTemp = document.createElement('div');
  feelsTemp.classList.add('feelsLikeTemp');

  let humidDiv = document.createElement('div');
  humidDiv.classList.add('humidityDiv');

  let humidText = document.createElement('p');
  humidText.classList.add('humidityText');
  humidText.textContent = 'Humidity:';

  let humidity = document.createElement('div');
  humidity.classList.add('humidity');

  let windDiv = document.createElement('div');
  windDiv.classList.add('windDiv');

  let windText = document.createElement('p');
  windText.classList.add('windText');
  windText.textContent = 'Wind:';

  let windSpeed = document.createElement('div');
  windSpeed.classList.add('windSpeed');

  main.appendChild(secondaryInfo);

  secondaryInfo.appendChild(tempRange);
  tempRange.appendChild(highTemp);
  tempRange.appendChild(lowTemp);

  secondaryInfo.appendChild(feelsLike);
  feelsLike.appendChild(feelsText);
  feelsLike.appendChild(feelsTemp);

  secondaryInfo.appendChild(humidDiv);
  humidDiv.appendChild(humidText);
  humidDiv.appendChild(humidity);

  secondaryInfo.appendChild(windDiv);
  windDiv.appendChild(windText);
  windDiv.appendChild(windSpeed);

  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initLoad);

/***/ }),

/***/ "./src/imgs/close.svg":
/*!****************************!*\
  !*** ./src/imgs/close.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "244b66874c46718f7e06.svg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Ash.jpg":
/*!**********************************************!*\
  !*** ./src/imgs/weather-backgrounds/Ash.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3db1875e26db29765b46.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Clear.jpg":
/*!************************************************!*\
  !*** ./src/imgs/weather-backgrounds/Clear.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e96268c130fd5cbe842a.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Clouds.jpg":
/*!*************************************************!*\
  !*** ./src/imgs/weather-backgrounds/Clouds.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5ea3943509a1fa56b185.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Drizzle.jpg":
/*!**************************************************!*\
  !*** ./src/imgs/weather-backgrounds/Drizzle.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9093caa968b7734394c.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Dust.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/weather-backgrounds/Dust.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b16bb7bd48e1cbfe4062.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Fog.jpg":
/*!**********************************************!*\
  !*** ./src/imgs/weather-backgrounds/Fog.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "19abee15fd4e0e58f008.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Haze.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/weather-backgrounds/Haze.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fbcbf0c35282f171c2e9.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Mist.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/weather-backgrounds/Mist.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "68c3b14a7e8b3ec3ecee.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Rain.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/weather-backgrounds/Rain.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9093caa968b7734394c.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Sand.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/weather-backgrounds/Sand.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "80c91f523a9549f27cbb.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Smoke.jpg":
/*!************************************************!*\
  !*** ./src/imgs/weather-backgrounds/Smoke.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4444ea70eef9def3ba96.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Snow.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/weather-backgrounds/Snow.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "514e28cba00c78faa963.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Squall.jpg":
/*!*************************************************!*\
  !*** ./src/imgs/weather-backgrounds/Squall.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d08449aa481f35701c6d.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Thunderstorm.jpg":
/*!*******************************************************!*\
  !*** ./src/imgs/weather-backgrounds/Thunderstorm.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f8fe132b1d9f796625c2.jpg";

/***/ }),

/***/ "./src/imgs/weather-backgrounds/Tornado.jpg":
/*!**************************************************!*\
  !*** ./src/imgs/weather-backgrounds/Tornado.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "68fa1210ad05d4803ebd.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/weather-app/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _scripts_initLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/initLoad */ "./src/scripts/initLoad.js");



(0,_scripts_initLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFjO0FBQ3BCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsdUJBQXVCLDRDQUFLLENBQUM7QUFDN0I7QUFDQSx3Q0FBd0Msd0RBQVc7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSx5REFBWTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLFNBQVMseURBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyx3REFBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5S3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOzs7Ozs7Ozs7Ozs7OztBQ0F5QjtBQUNpQjs7QUFFMUMsNkRBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5qcGckIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL2JhY2tncm91bmRJbWdMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9kaXNwbGF5Q29udHJvbC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL2luaXRMb2FkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcbiAgICAgIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiA1MHB4IDFmciAvIDFmcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogNnB4IDIycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zZWFyY2hDYW5jZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG59XFxuXFxuLnNlYXJjaENhbmNlbDpob3ZlciB7XFxuICBhbmltYXRpb246IHNoYWtlIC42cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxufVxcblxcbi51bml0Q2hhbmdlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAzOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udW5pdEYsXFxuLnVuaXRDIHtcXG4gIGZvbnQtc2l6ZTogLjg1cmVtO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgei1pbmRleDogMjA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnVuaXRDaGFuZ2VyIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi51bml0Q2hhbmdlciBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzhweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zbGlkZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgbGVmdDogM3B4O1xcbiAgYm90dG9tOiAycHg7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogLjg1cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAydmg7XFxuICBnYXA6IDJ2aDtcXG59XFxuXFxuLm1haW5JbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudFRlbXAge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4uY3VycmVudFRlbXA6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCLCsFxcXCI7XFxufVxcblxcbi5jb25kaXRpb25EaXYge1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxufVxcblxcbi5jdXJyZW50Q29uZGl0b24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5jb25kaXRpb25JbWcgaW1nIHtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnNlY29uZGFyeUluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5zZWNvbmRhcnlJbmZvIHAge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmhpZ2hUZW1wIHtcXG4gIGNvbG9yOiByZ2IoMTUwLCAwLCAwKVxcbn1cXG5cXG4ubG93VGVtcCB7XFxuICBjb2xvcjogcmdiKDEyLCA2MywgMjMxKTtcXG59XFxuXFxuLmNvbmRpdGlvbkRpdixcXG4uY29uZGl0aW9uSW1nLFxcbi50ZW1wUmFuZ2VzLFxcbi5mZWVsc0xpa2VEaXYsXFxuLmh1bWlkaXR5RGl2LFxcbi53aW5kRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24sXFxuLmN1cnJlbnRUZW1wLFxcbi5jb25kaXRpb25EaXYge1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggd2hpdGU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAxNSUsIDQ1JSwgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApIHJvdGF0ZSg0ZGVnKTtcXG4gIH1cXG4gIDMwJSwgNjAlLCA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuNXB4LCAwLCAwKSByb3RhdGUoLTRkZWcpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOzRGQUMwRjtFQUMxRixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7Ozs7OztFQU1FLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGlEQUFpRDtFQUNuRDtFQUNBO0lBQ0UsaURBQWlEO0VBQ25EO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcbiAgICAgIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiA1MHB4IDFmciAvIDFmcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogNnB4IDIycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zZWFyY2hDYW5jZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG59XFxuXFxuLnNlYXJjaENhbmNlbDpob3ZlciB7XFxuICBhbmltYXRpb246IHNoYWtlIC42cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxufVxcblxcbi51bml0Q2hhbmdlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAzOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udW5pdEYsXFxuLnVuaXRDIHtcXG4gIGZvbnQtc2l6ZTogLjg1cmVtO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgei1pbmRleDogMjA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnVuaXRDaGFuZ2VyIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi51bml0Q2hhbmdlciBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzhweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zbGlkZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgbGVmdDogM3B4O1xcbiAgYm90dG9tOiAycHg7XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogLjg1cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAydmg7XFxuICBnYXA6IDJ2aDtcXG59XFxuXFxuLm1haW5JbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudFRlbXAge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4uY3VycmVudFRlbXA6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCLCsFxcXCI7XFxufVxcblxcbi5jb25kaXRpb25EaXYge1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxufVxcblxcbi5jdXJyZW50Q29uZGl0b24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5jb25kaXRpb25JbWcgaW1nIHtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnNlY29uZGFyeUluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5zZWNvbmRhcnlJbmZvIHAge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmhpZ2hUZW1wIHtcXG4gIGNvbG9yOiByZ2IoMTUwLCAwLCAwKVxcbn1cXG5cXG4ubG93VGVtcCB7XFxuICBjb2xvcjogcmdiKDEyLCA2MywgMjMxKTtcXG59XFxuXFxuLmNvbmRpdGlvbkRpdixcXG4uY29uZGl0aW9uSW1nLFxcbi50ZW1wUmFuZ2VzLFxcbi5mZWVsc0xpa2VEaXYsXFxuLmh1bWlkaXR5RGl2LFxcbi53aW5kRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24sXFxuLmN1cnJlbnRUZW1wLFxcbi5jb25kaXRpb25EaXYge1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggd2hpdGU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAxNSUsIDQ1JSwgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApIHJvdGF0ZSg0ZGVnKTtcXG4gIH1cXG4gIDMwJSwgNjAlLCA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuNXB4LCAwLCAwKSByb3RhdGUoLTRkZWcpO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9Bc2guanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL0FzaC5qcGdcIixcblx0XCIuL0NsZWFyLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9DbGVhci5qcGdcIixcblx0XCIuL0Nsb3Vkcy5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvQ2xvdWRzLmpwZ1wiLFxuXHRcIi4vRHJpenpsZS5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvRHJpenpsZS5qcGdcIixcblx0XCIuL0R1c3QuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL0R1c3QuanBnXCIsXG5cdFwiLi9Gb2cuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL0ZvZy5qcGdcIixcblx0XCIuL0hhemUuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL0hhemUuanBnXCIsXG5cdFwiLi9NaXN0LmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9NaXN0LmpwZ1wiLFxuXHRcIi4vUmFpbi5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvUmFpbi5qcGdcIixcblx0XCIuL1NhbmQuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL1NhbmQuanBnXCIsXG5cdFwiLi9TbW9rZS5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvU21va2UuanBnXCIsXG5cdFwiLi9Tbm93LmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9Tbm93LmpwZ1wiLFxuXHRcIi4vU3F1YWxsLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9TcXVhbGwuanBnXCIsXG5cdFwiLi9UaHVuZGVyc3Rvcm0uanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL1RodW5kZXJzdG9ybS5qcGdcIixcblx0XCIuL1Rvcm5hZG8uanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL1Rvcm5hZG8uanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcyBzeW5jIFxcXFwuanBnJFwiOyIsImltcG9ydCB7IGJnSW1hZ2VzIH0gZnJvbSAnLi9iYWNrZ3JvdW5kSW1nTG9hZGVyJztcblxuY2xhc3MgV2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uLCB1bml0cyA9ICdmJykge1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICBpZiAodW5pdHMgPT09ICdjJykge1xuICAgICAgdGhpcy51bml0cyA9ICdtZXRyaWMnO1xuICAgICAgdGhpcy50ZW1wVW5pdCA9ICdDJztcbiAgICAgIHRoaXMuc3BlZWRVbml0ID0gJ2ttL2gnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuaXRzID0gJ2ltcGVyaWFsJ1xuICAgICAgdGhpcy50ZW1wVW5pdCA9ICdGJztcbiAgICAgIHRoaXMuc3BlZWRVbml0ID0gJ21waCc7XG4gICAgfVxuICAgIHRoaXMudmFsaWRDaXR5O1xuICB9XG5cbiAgYXN5bmMgZ2V0V2VhdGhlckRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcicgKyBcbiAgICAgIGA/cT0ke3RoaXMubG9jYXRpb259YCArIFxuICAgICAgYCZ1bml0cz0ke3RoaXMudW5pdHN9YCArIFxuICAgICAgYCZBUFBJRD01OWUzOTNiMGFiNDVhMTU4NWQxNDdhYjMzZDUwN2YyOGApO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHRocm93IGBDaXR5IG5vdCBmb3VuZCEgRG91YmxlIGNoZWNrIHlvdXIgc3BlbGxpbmcuYDtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsaWRDaXR5ID0gdHJ1ZVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uRGl2JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kYXJ5SW5mbycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJykudGV4dENvbnRlbnQgPSBlcnI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRlbXAnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb25EaXYnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRhcnlJbmZvJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB0aGlzLnZhbGlkQ2l0eSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVzZSB0aGlzIHRvIG1ha2Ugb25seSAxIEFQSSBjYWxsXG4gIGFzeW5jIGRpc3BsYXlXZWF0aGVyRGF0YSgpIHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRXZWF0aGVyRGF0YSgpO1xuXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRlbXAnKTtcbiAgICBsZXQgbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvd1RlbXAnKTtcbiAgICBsZXQgaGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoVGVtcCcpO1xuICAgIGxldCBmZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzTGlrZVRlbXAnKTtcbiAgICBsZXQgaHVtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbiAgICBsZXQgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kU3BlZWQnKTtcbiAgICBsZXQgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpO1xuICAgIGxldCBpbWdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uSW1nJyk7XG4gICAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudENvbmRpdG9uJyk7XG5cbiAgICBpZiAodGhpcy52YWxpZENpdHkgPT09IHRydWUpIHtcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHJlc3VsdC5tYWluLnRlbXApfWA7XG4gICAgICBsb3cudGV4dENvbnRlbnQgPSBgTDogJHtNYXRoLnJvdW5kKHJlc3VsdC5tYWluLnRlbXBfbWluKX3CsGA7XG4gICAgICBoaWdoLnRleHRDb250ZW50ID0gYEg6ICR7TWF0aC5yb3VuZChyZXN1bHQubWFpbi50ZW1wX21heCl9wrBgO1xuICAgICAgZmVlbC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQocmVzdWx0Lm1haW4uZmVlbHNfbGlrZSl9wrBgO1xuICAgICAgaHVtaWQudGV4dENvbnRlbnQgPSBgJHtyZXN1bHQubWFpbi5odW1pZGl0eX0lYDtcbiAgICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHJlc3VsdC53aW5kLnNwZWVkKX0ke3RoaXMuc3BlZWRVbml0fWA7XG4gICAgICBjaXR5LnRleHRDb250ZW50ID0gcmVzdWx0Lm5hbWU7XG5cbiAgICAgIHdoaWxlIChpbWdEaXYuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGltZ0Rpdi5yZW1vdmVDaGlsZChpbWdEaXYubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGxldCBpbWcgPSByZXN1bHQud2VhdGhlclswXS5pY29uO1xuICAgICAgbGV0IHdlYXRoZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHdlYXRoZXJJbWcuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aW1nfUAyeC5wbmdgO1xuICAgICAgaW1nRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJbWcpO1xuXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSByZXN1bHQud2VhdGhlclswXS5tYWluO1xuICAgICAgaWYgKGRlc2NyaXB0aW9uID09PSAnQ2xvdWRzJykge1xuICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gJ0Nsb3VkeSc7XG4gICAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uID09PSAnVGh1bmRlcnN0b3JtJykge1xuICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gJ1RodW5kZXJzdG9ybXMnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGV0YWlscy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiZ0ltYWdlc1tgJHtkZXNjcmlwdGlvbn0uanBnYF19KWA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7XG4iLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICBsZXQgaW1ncyA9IHt9O1xuICByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IGltZ3NbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcbiAgcmV0dXJuIGltZ3M7XG59XG5cbmNvbnN0IGJnSW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzJywgZmFsc2UsIC9cXC5qcGckLykpO1xuXG5leHBvcnQgeyBiZ0ltYWdlcyB9O1xuIiwiaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi9XZWF0aGVyJztcblxubGV0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50TG9jYXRpb24nKSB8fCAncGhpbGFkZWxwaGlhJztcbmxldCB3ZWF0aGVyVW5pdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlclVuaXRzJykgfHwgJ2YnO1xuXG5mdW5jdGlvbiBzZWFyY2hMb2NhdGlvbigpIHtcbiAgbGV0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hiYXInKS52YWx1ZTtcbiAgbmV3IFdlYXRoZXIoc2VhcmNoLCB3ZWF0aGVyVW5pdHMpLmRpc3BsYXlXZWF0aGVyRGF0YSgpO1xuICBzYXZlTG9jYXRpb24oc2VhcmNoKTtcbiAgY2xlYXJTZWFyY2goKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTZWFyY2goKSB7XG4gIGxldCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoYmFyJylcbiAgc2VhcmNoLnZhbHVlID0gXCJcIjtcbiAgc2VhcmNoLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVVuaXRzKCkge1xuICBsZXQgdW5pdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRUeXBlJyk7XG4gIGlmICh1bml0SW5wdXQuY2hlY2tlZCkge1xuICAgIHdlYXRoZXJVbml0cyA9ICdmJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdEMnKS5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRGJykuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0QycpLnN0eWxlLnRyYW5zaXRpb24gPSAnLjRzJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdEYnKS5zdHlsZS50cmFuc2l0aW9uID0gJy40cyc7XG4gIH0gZWxzZSB7XG4gICAgd2VhdGhlclVuaXRzID0gJ2MnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0RicpLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdEMnKS5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRDJykuc3R5bGUudHJhbnNpdGlvbiA9ICcuNHMnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0RicpLnN0eWxlLnRyYW5zaXRpb24gPSAnLjRzJztcbiAgfVxuICBsZXQgY2l0eUxvY2F0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRMb2NhdGlvbicpIHx8ICdwaGlsYWRlbHBoaWEnO1xuICBuZXcgV2VhdGhlcihjaXR5TG9jYXRpb24sIHdlYXRoZXJVbml0cykuZGlzcGxheVdlYXRoZXJEYXRhKCk7XG4gIHNhdmVVbml0cyh3ZWF0aGVyVW5pdHMpO1xufVxuXG5mdW5jdGlvbiBzYXZlTG9jYXRpb24obG9jYXRpb24pIHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50TG9jYXRpb24nLCBsb2NhdGlvbik7XG59XG5cbmZ1bmN0aW9uIHNhdmVVbml0cyh1bml0cykge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dlYXRoZXJVbml0cycsIHVuaXRzKTtcbn1cblxuZXhwb3J0IHtcbiAgY3VycmVudExvY2F0aW9uLFxuICB3ZWF0aGVyVW5pdHMsXG4gIGNsZWFyU2VhcmNoLFxuICBzZWFyY2hMb2NhdGlvbixcbiAgY2hhbmdlVW5pdHMsXG4gIHNhdmVMb2NhdGlvbixcbn0iLCJpbXBvcnQgQ2xvc2UgZnJvbSAnLi4vaW1ncy9jbG9zZS5zdmcnO1xuaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi9XZWF0aGVyJztcbmltcG9ydCB7IGN1cnJlbnRMb2NhdGlvbiwgd2VhdGhlclVuaXRzLCBjbGVhclNlYXJjaCwgc2VhcmNoTG9jYXRpb24sIGNoYW5nZVVuaXRzLCBzYXZlTG9jYXRpb24gfSBmcm9tICcuL2Rpc3BsYXlDb250cm9sJztcblxuYXN5bmMgZnVuY3Rpb24gaW5pdExvYWQoKSB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGxldCBzdGFydCA9IG5ldyBXZWF0aGVyKGN1cnJlbnRMb2NhdGlvbiwgd2VhdGhlclVuaXRzKTtcbiAgYXdhaXQgc3RhcnQuZ2V0V2VhdGhlckRhdGEoKTtcbiAgaWYgKHN0YXJ0LnZhbGlkQ2l0eSA9PT0gdHJ1ZSkge1xuICAgIHN0YXJ0LmRpc3BsYXlXZWF0aGVyRGF0YSgpO1xuICB9IGVsc2Uge1xuICAgIHNhdmVMb2NhdGlvbignUGhpbGFkZWxwaGlhJyk7XG4gICAgbmV3IFdlYXRoZXIoJ1BoaWxhZGVscGhpYScsIHdlYXRoZXJVbml0cykuZGlzcGxheVdlYXRoZXJEYXRhKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgbGV0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hEaXYuY2xhc3NMaXN0LmFkZCgnc2VhcmNoJyk7XG5cbiAgbGV0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaGJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaGJhcicpO1xuICBzZWFyY2hiYXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3NlYXJjaCcpO1xuICBzZWFyY2hiYXIuc2V0QXR0cmlidXRlKCduYW1lJywgJ3NlYXJjaGJhcicpO1xuICBzZWFyY2hiYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBzZWFyY2hiYXIuYmx1cigpO1xuICAgICAgc2VhcmNoTG9jYXRpb24oKTtcbiAgICB9XG4gIH0pXG5cbiAgbGV0IHNlYXJjaENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNlYXJjaENsb3NlLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaENhbmNlbCcpO1xuICBzZWFyY2hDbG9zZS5zcmMgPSBgJHtDbG9zZX1gO1xuICBzZWFyY2hDbG9zZS5hbHQgPSAnQ2FuY2VsJztcbiAgc2VhcmNoQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhclNlYXJjaCk7XG5cbiAgbGV0IHVuaXRDaGFuZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdW5pdENoYW5nZXIuY2xhc3NMaXN0LmFkZCgndW5pdENoYW5nZXInKTtcblxuICBsZXQgdW5pdEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHVuaXRGLmNsYXNzTGlzdC5hZGQoJ3VuaXRGJyk7XG4gIHVuaXRGLnRleHRDb250ZW50ID0gXCJGXCI7XG5cbiAgbGV0IHVuaXRDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB1bml0Qy5jbGFzc0xpc3QuYWRkKCd1bml0QycpO1xuICB1bml0Qy50ZXh0Q29udGVudCA9IFwiQ1wiO1xuXG4gIGxldCB1bml0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB1bml0SW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gIHVuaXRJbnB1dC5jbGFzc0xpc3QuYWRkKCd1bml0VHlwZScpO1xuXG4gIGlmICh3ZWF0aGVyVW5pdHMgPT09ICdmJykge1xuICAgIHVuaXRJbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgdW5pdEMuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIHVuaXRGLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgfSBlbHNlIGlmICh3ZWF0aGVyVW5pdHMgPT09ICdjJykge1xuICAgIHVuaXRJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICB1bml0Ri5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgdW5pdEMuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICB9XG5cbiAgbGV0IHVuaXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB1bml0U3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXInKTtcbiAgdW5pdFNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VVbml0cyk7XG4gIFxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRGl2KTtcbiAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaGJhcik7XG4gIHNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hDbG9zZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh1bml0Q2hhbmdlcik7XG4gIHVuaXRDaGFuZ2VyLmFwcGVuZENoaWxkKHVuaXRGKTtcbiAgdW5pdENoYW5nZXIuYXBwZW5kQ2hpbGQodW5pdEMpO1xuICB1bml0Q2hhbmdlci5hcHBlbmRDaGlsZCh1bml0SW5wdXQpO1xuICB1bml0Q2hhbmdlci5hcHBlbmRDaGlsZCh1bml0U3Bhbik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgbGV0IG1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5JbmZvLmNsYXNzTGlzdC5hZGQoJ21haW5JbmZvJyk7XG5cbiAgbGV0IGNpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2l0eURpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuXG4gIGxldCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50VGVtcCcpO1xuXG4gIGxldCBjb25kaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uZGl0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbkRpdicpO1xuXG4gIGxldCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnY3VycmVudENvbmRpdG9uJyk7XG5cbiAgbGV0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWdEaXYuY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9uSW1nJyk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluSW5mbyk7XG5cbiAgbWFpbkluZm8uYXBwZW5kQ2hpbGQoY2l0eURpdik7XG4gIG1haW5JbmZvLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcblxuICBtYWluSW5mby5hcHBlbmRDaGlsZChjb25kaXRpb25EaXYpO1xuICBjb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XG4gIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChpbWdEaXYpO1xuXG4gIGxldCBzZWNvbmRhcnlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY29uZGFyeUluZm8uY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5SW5mbycpO1xuXG4gIGxldCB0ZW1wUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVtcFJhbmdlLmNsYXNzTGlzdC5hZGQoJ3RlbXBSYW5nZXMnKTtcblxuICBsZXQgaGlnaFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGlnaFRlbXAuY2xhc3NMaXN0LmFkZCgnaGlnaFRlbXAnKTtcblxuICBsZXQgbG93VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb3dUZW1wLmNsYXNzTGlzdC5hZGQoJ2xvd1RlbXAnKTtcblxuICBsZXQgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKCdmZWVsc0xpa2VEaXYnKTtcblxuICBsZXQgZmVlbHNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmZWVsc1RleHQuY2xhc3NMaXN0LmFkZCgnZmVlbHNMaWtlVGV4dCcpO1xuICBmZWVsc1RleHQudGV4dENvbnRlbnQgPSAnRmVlbHMgTGlrZTonO1xuXG4gIGxldCBmZWVsc1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmVlbHNUZW1wLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzTGlrZVRlbXAnKTtcblxuICBsZXQgaHVtaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHVtaWREaXYuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHlEaXYnKTtcblxuICBsZXQgaHVtaWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBodW1pZFRleHQuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHlUZXh0Jyk7XG4gIGh1bWlkVGV4dC50ZXh0Q29udGVudCA9ICdIdW1pZGl0eTonO1xuXG4gIGxldCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xuXG4gIGxldCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmREaXYuY2xhc3NMaXN0LmFkZCgnd2luZERpdicpO1xuXG4gIGxldCB3aW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2luZFRleHQuY2xhc3NMaXN0LmFkZCgnd2luZFRleHQnKTtcbiAgd2luZFRleHQudGV4dENvbnRlbnQgPSAnV2luZDonO1xuXG4gIGxldCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ3dpbmRTcGVlZCcpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5SW5mbyk7XG5cbiAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZCh0ZW1wUmFuZ2UpO1xuICB0ZW1wUmFuZ2UuYXBwZW5kQ2hpbGQoaGlnaFRlbXApO1xuICB0ZW1wUmFuZ2UuYXBwZW5kQ2hpbGQobG93VGVtcCk7XG5cbiAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNUZXh0KTtcbiAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzVGVtcCk7XG5cbiAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChodW1pZERpdik7XG4gIGh1bWlkRGl2LmFwcGVuZENoaWxkKGh1bWlkVGV4dCk7XG4gIGh1bWlkRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcblxuICBzZWNvbmRhcnlJbmZvLmFwcGVuZENoaWxkKHdpbmREaXYpO1xuICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRUZXh0KTtcbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0TG9hZDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd2VhdGhlci1hcHAvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdExvYWQgZnJvbSAnLi9zY3JpcHRzL2luaXRMb2FkJztcblxuaW5pdExvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=