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
      this.units = 'imperial';
      this.tempUnit = 'F';
      this.speedUnit = 'mph';
    }
  }

  async getWeatherData() {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather'
      + `?q=${this.location}`
      + `&units=${this.units}`
      + '&APPID=59e393b0ab45a1585d147ab33d507f28');
      if (response.status === 404) {
        throw `${this.location} not found! Double check your spelling.`;
      }
      this.validCity = true;
      document.querySelector('.currentTemp').classList.remove('hidden');
      document.querySelector('.conditionDiv').classList.remove('hidden');
      document.querySelector('.secondaryInfo').classList.remove('hidden');
      const weatherData = await response.json();
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
    const result = await this.getWeatherData();

    const temp = document.querySelector('.currentTemp');
    const low = document.querySelector('.lowTemp');
    const high = document.querySelector('.highTemp');
    const feel = document.querySelector('.feelsLikeTemp');
    const humid = document.querySelector('.humidity');
    const wind = document.querySelector('.windSpeed');
    const city = document.querySelector('.location');
    const imgDiv = document.querySelector('.conditionImg');
    const details = document.querySelector('.currentConditon');

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
      const img = result.weather[0].icon;
      const weatherImg = document.createElement('img');
      weatherImg.src = `http://openweathermap.org/img/wn/${img}@2x.png`;
      imgDiv.appendChild(weatherImg);

      const description = result.weather[0].main;
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
/* harmony export */   "saveLocation": () => (/* binding */ saveLocation),
/* harmony export */   "searchLocation": () => (/* binding */ searchLocation)
/* harmony export */ });
/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ "./src/scripts/Weather.js");


function searchLocation() {
  const search = document.querySelector('#searchbar').value;
  const weatherUnit = localStorage.getItem('weatherUnits') || 'f';
  new _Weather__WEBPACK_IMPORTED_MODULE_0__["default"](search, weatherUnit).displayWeatherData();
  saveLocation(search);
  clearSearch();
}

function changeUnits() {
  const unitInput = document.querySelector('.unitType');
  let currentUnit;
  if (unitInput.checked) {
    currentUnit = 'f';
    document.querySelector('.unitC').style.color = 'white';
    document.querySelector('.unitF').style.color = 'black';
    document.querySelector('.unitC').style.transition = '.4s';
    document.querySelector('.unitF').style.transition = '.4s';
  } else {
    currentUnit = 'c';
    document.querySelector('.unitF').style.color = 'white';
    document.querySelector('.unitC').style.color = 'black';
    document.querySelector('.unitC').style.transition = '.4s';
    document.querySelector('.unitF').style.transition = '.4s';
  }
  const cityLocation = localStorage.getItem('currentLocation') || 'philadelphia';
  new _Weather__WEBPACK_IMPORTED_MODULE_0__["default"](cityLocation, currentUnit).displayWeatherData();
  saveUnits(currentUnit);
}

function clearSearch() {
  const search = document.querySelector('#searchbar');
  search.value = '';
  search.focus();
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




const currentLocation = localStorage.getItem('currentLocation') || 'philadelphia';
const weatherUnits = localStorage.getItem('weatherUnits') || 'f';

async function initLoad() {
  document.body.appendChild(createHeader());
  document.body.appendChild(createMain());
  const start = new _Weather__WEBPACK_IMPORTED_MODULE_1__["default"](currentLocation, weatherUnits);
  await start.getWeatherData();
  if (start.validCity === true) {
    start.displayWeatherData();
  } else {
    new _Weather__WEBPACK_IMPORTED_MODULE_1__["default"]('Philadelphia', weatherUnits).displayWeatherData();
    (0,_displayControl__WEBPACK_IMPORTED_MODULE_2__.saveLocation)('Philadelphia');
  }
}

function createHeader() {
  const header = document.createElement('header');

  const searchDiv = document.createElement('div');
  searchDiv.classList.add('search');

  const searchbar = document.createElement('input');
  searchbar.setAttribute('id', 'searchbar');
  searchbar.setAttribute('type', 'search');
  searchbar.setAttribute('name', 'searchbar');
  searchbar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchbar.blur();
      (0,_displayControl__WEBPACK_IMPORTED_MODULE_2__.searchLocation)();
    }
  });

  const searchClose = document.createElement('img');
  searchClose.classList.add('searchCancel');
  searchClose.src = `${_imgs_close_svg__WEBPACK_IMPORTED_MODULE_0__}`;
  searchClose.alt = 'Cancel';
  searchClose.addEventListener('click', _displayControl__WEBPACK_IMPORTED_MODULE_2__.clearSearch);

  const unitChanger = document.createElement('label');
  unitChanger.classList.add('unitChanger');

  const unitF = document.createElement('p');
  unitF.classList.add('unitF');
  unitF.textContent = 'F';

  const unitC = document.createElement('p');
  unitC.classList.add('unitC');
  unitC.textContent = 'C';

  const unitInput = document.createElement('input');
  unitInput.type = 'checkbox';
  unitInput.classList.add('unitType');

  if (weatherUnits === 'f') {
    unitInput.checked = false;
    unitC.style.color = 'white';
    unitF.style.color = 'black';
  } else if (weatherUnits === 'c') {
    unitInput.checked = true;
    unitF.style.color = 'white';
    unitC.style.color = 'black';
  }

  const unitSpan = document.createElement('span');
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
  const main = document.createElement('main');

  const mainInfo = document.createElement('div');
  mainInfo.classList.add('mainInfo');

  const cityDiv = document.createElement('div');
  cityDiv.classList.add('location');

  const currentTemp = document.createElement('div');
  currentTemp.classList.add('currentTemp');

  const conditionDiv = document.createElement('div');
  conditionDiv.classList.add('conditionDiv');

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('currentConditon');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('conditionImg');

  main.appendChild(mainInfo);

  mainInfo.appendChild(cityDiv);
  mainInfo.appendChild(currentTemp);

  mainInfo.appendChild(conditionDiv);
  conditionDiv.appendChild(detailsDiv);
  conditionDiv.appendChild(imgDiv);

  const secondaryInfo = document.createElement('div');
  secondaryInfo.classList.add('secondaryInfo');

  const tempRange = document.createElement('div');
  tempRange.classList.add('tempRanges');

  const highTemp = document.createElement('div');
  highTemp.classList.add('highTemp');

  const lowTemp = document.createElement('div');
  lowTemp.classList.add('lowTemp');

  const feelsLike = document.createElement('div');
  feelsLike.classList.add('feelsLikeDiv');

  const feelsText = document.createElement('p');
  feelsText.classList.add('feelsLikeText');
  feelsText.textContent = 'Feels Like:';

  const feelsTemp = document.createElement('div');
  feelsTemp.classList.add('feelsLikeTemp');

  const humidDiv = document.createElement('div');
  humidDiv.classList.add('humidityDiv');

  const humidText = document.createElement('p');
  humidText.classList.add('humidityText');
  humidText.textContent = 'Humidity:';

  const humidity = document.createElement('div');
  humidity.classList.add('humidity');

  const windDiv = document.createElement('div');
  windDiv.classList.add('windDiv');

  const windText = document.createElement('p');
  windText.classList.add('windText');
  windText.textContent = 'Wind:';

  const windSpeed = document.createElement('div');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLCtLQUErSywyQkFBMkIsZUFBZSxjQUFjLG9CQUFvQixxQkFBcUIsR0FBRyxVQUFVLHNCQUFzQixnQ0FBZ0MsMkJBQTJCLGtCQUFrQixrQ0FBa0MsdUJBQXVCLEdBQUcsWUFBWSxrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsR0FBRyxhQUFhLGtCQUFrQix1QkFBdUIsMkJBQTJCLHdCQUF3QixhQUFhLG1CQUFtQixHQUFHLG1CQUFtQixxQkFBcUIsNkJBQTZCLHNCQUFzQix5Q0FBeUMsd0JBQXdCLHFCQUFxQixpQkFBaUIsdUJBQXVCLEdBQUcseUJBQXlCLDJDQUEyQyxHQUFHLHlCQUF5QixrQkFBa0IseUNBQXlDLCtDQUErQyxHQUFHLGlEQUFpRCw2QkFBNkIscUJBQXFCLEdBQUcsbUJBQW1CLG9CQUFvQix1QkFBdUIsZUFBZSxHQUFHLHlCQUF5Qix5QkFBeUIsaUNBQWlDLEdBQUcsa0JBQWtCLHVCQUF1QixnQkFBZ0IsdUJBQXVCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsNEJBQTRCLEdBQUcscUJBQXFCLHNCQUFzQixpQkFBaUIsZ0JBQWdCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QixpQkFBaUIsZ0JBQWdCLHlCQUF5QixHQUFHLHdCQUF3QixrQkFBa0IsR0FBRyxrREFBa0QsZ0NBQWdDLEdBQUcsYUFBYSx1QkFBdUIsb0JBQW9CLFdBQVcsWUFBWSxhQUFhLGNBQWMsb0JBQW9CLHVCQUF1QixpQkFBaUIsZ0JBQWdCLHFCQUFxQixHQUFHLHFCQUFxQix1QkFBdUIsa0JBQWtCLGlCQUFpQixnQkFBZ0IsY0FBYyxnQkFBZ0Isb0JBQW9CLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHNCQUFzQixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQix3QkFBd0IscUJBQXFCLGFBQWEsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGFBQWEsR0FBRyxlQUFlLG9CQUFvQix1QkFBdUIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcseUJBQXlCLHVCQUF1QixtQkFBbUIsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsc0JBQXNCLG9CQUFvQixzQkFBc0IsR0FBRyx1QkFBdUIsaUJBQWlCLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsYUFBYSwrQ0FBK0Msa0JBQWtCLHVCQUF1QixpQkFBaUIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsZUFBZSw0QkFBNEIsY0FBYyw0QkFBNEIsR0FBRywyRkFBMkYsa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyw4Q0FBOEMsK0JBQStCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxzQkFBc0IsbUJBQW1CLHdEQUF3RCxLQUFLLG1CQUFtQix3REFBd0QsS0FBSyxHQUFHLE9BQU8sb0ZBQW9GLEtBQUssT0FBTyxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLDRCQUE0QiwrS0FBK0ssMkJBQTJCLGVBQWUsY0FBYyxvQkFBb0IscUJBQXFCLEdBQUcsVUFBVSxzQkFBc0IsZ0NBQWdDLDJCQUEyQixrQkFBa0Isa0NBQWtDLHVCQUF1QixHQUFHLFlBQVksa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLEdBQUcsYUFBYSxrQkFBa0IsdUJBQXVCLDJCQUEyQix3QkFBd0IsYUFBYSxtQkFBbUIsR0FBRyxtQkFBbUIscUJBQXFCLDZCQUE2QixzQkFBc0IseUNBQXlDLHdCQUF3QixxQkFBcUIsaUJBQWlCLHVCQUF1QixHQUFHLHlCQUF5QiwyQ0FBMkMsR0FBRyx5QkFBeUIsa0JBQWtCLHlDQUF5QywrQ0FBK0MsR0FBRyxpREFBaUQsNkJBQTZCLHFCQUFxQixHQUFHLG1CQUFtQixvQkFBb0IsdUJBQXVCLGVBQWUsR0FBRyx5QkFBeUIseUJBQXlCLGlDQUFpQyxHQUFHLGtCQUFrQix1QkFBdUIsZ0JBQWdCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDRCQUE0QixHQUFHLHFCQUFxQixzQkFBc0IsaUJBQWlCLGdCQUFnQix1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLGdCQUFnQix5QkFBeUIsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcsa0RBQWtELGdDQUFnQyxHQUFHLGFBQWEsdUJBQXVCLG9CQUFvQixXQUFXLFlBQVksYUFBYSxjQUFjLG9CQUFvQix1QkFBdUIsaUJBQWlCLGdCQUFnQixxQkFBcUIsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLGNBQWMsZ0JBQWdCLG9CQUFvQiw0QkFBNEIsNEJBQTRCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QixzQkFBc0IsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHFCQUFxQixhQUFhLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLHdCQUF3QixhQUFhLEdBQUcsZUFBZSxvQkFBb0IsdUJBQXVCLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLHlCQUF5Qix1QkFBdUIsbUJBQW1CLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLHNCQUFzQixvQkFBb0Isc0JBQXNCLEdBQUcsdUJBQXVCLGlCQUFpQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGFBQWEsK0NBQStDLGtCQUFrQix1QkFBdUIsaUJBQWlCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLGVBQWUsNEJBQTRCLGNBQWMsNEJBQTRCLEdBQUcsMkZBQTJGLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcsOENBQThDLCtCQUErQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsc0JBQXNCLG1CQUFtQix3REFBd0QsS0FBSyxtQkFBbUIsd0RBQXdELEtBQUssR0FBRyxtQkFBbUI7QUFDMTVTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ2lEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QixrQkFBa0IsV0FBVztBQUM3QjtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQsOEJBQThCLGlDQUFpQztBQUMvRCwrQkFBK0IsaUNBQWlDO0FBQ2hFLDRCQUE0QixtQ0FBbUM7QUFDL0QsNkJBQTZCLHFCQUFxQjtBQUNsRCw0QkFBNEIsOEJBQThCLEVBQUUsZUFBZTtBQUMzRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELElBQUk7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUEsbURBQW1ELDBEQUFRLElBQUksWUFBWSxPQUFPO0FBQ2xGO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRnZCO0FBQ0E7QUFDQSxrQ0FBa0MseUNBQXlDO0FBQzNFO0FBQ0E7O0FBRUEsMkJBQTJCLGtFQUErRDs7QUFFdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0RBQU87QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnREFBTztBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQU9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERvQztBQUNOO0FBTU47O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixRQUFRLGdEQUFPO0FBQ2YsSUFBSSw2REFBWTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQWM7QUFDcEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSx1QkFBdUIsNENBQUssQ0FBQztBQUM3QjtBQUNBLHdDQUF3Qyx3REFBVzs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLHdEQUFXOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEx4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDaUI7O0FBRTFDLDZEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLmpwZyQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9XZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvYmFja2dyb3VuZEltZ0xvYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlDb250cm9sLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvaW5pdExvYWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxuICAgICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDUwcHggMWZyIC8gMWZyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiA2cHggMjJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaENhbmNlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbn1cXG5cXG4uc2VhcmNoQ2FuY2VsOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogc2hha2UgLjZzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG59XFxuXFxuLnVuaXRDaGFuZ2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDM4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi51bml0RixcXG4udW5pdEMge1xcbiAgZm9udC1zaXplOiAuODVyZW07XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiAyMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udW5pdENoYW5nZXIgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVuaXRDaGFuZ2VyIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAzOHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNsaWRlcjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgd2lkdGg6IDE0cHg7XFxuICBsZWZ0OiAzcHg7XFxuICBib3R0b206IDJweDtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAuODVyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDJ2aDtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4ubWFpbkluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50VGVtcCB7XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5jdXJyZW50VGVtcDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIsKwXFxcIjtcXG59XFxuXFxuLmNvbmRpdGlvbkRpdiB7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuLmN1cnJlbnRDb25kaXRvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLmNvbmRpdGlvbkltZyBpbWcge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4uc2Vjb25kYXJ5SW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLnNlY29uZGFyeUluZm8gcCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4uaGlnaFRlbXAge1xcbiAgY29sb3I6IHJnYigxNTAsIDAsIDApXFxufVxcblxcbi5sb3dUZW1wIHtcXG4gIGNvbG9yOiByZ2IoMTIsIDYzLCAyMzEpO1xcbn1cXG5cXG4uY29uZGl0aW9uRGl2LFxcbi5jb25kaXRpb25JbWcsXFxuLnRlbXBSYW5nZXMsXFxuLmZlZWxzTGlrZURpdixcXG4uaHVtaWRpdHlEaXYsXFxuLndpbmREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbixcXG4uY3VycmVudFRlbXAsXFxuLmNvbmRpdGlvbkRpdiB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDRweCB3aGl0ZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDE1JSwgNDUlLCA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCkgcm90YXRlKDRkZWcpO1xcbiAgfVxcbiAgMzAlLCA2MCUsIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC41cHgsIDAsIDApIHJvdGF0ZSgtNGRlZyk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7NEZBQzBGO0VBQzFGLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsaURBQWlEO0VBQ25EO0VBQ0E7SUFDRSxpREFBaUQ7RUFDbkQ7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxuICAgICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDUwcHggMWZyIC8gMWZyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiA2cHggMjJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaENhbmNlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbn1cXG5cXG4uc2VhcmNoQ2FuY2VsOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogc2hha2UgLjZzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG59XFxuXFxuLnVuaXRDaGFuZ2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDM4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi51bml0RixcXG4udW5pdEMge1xcbiAgZm9udC1zaXplOiAuODVyZW07XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiAyMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udW5pdENoYW5nZXIgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVuaXRDaGFuZ2VyIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAzOHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNsaWRlcjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgd2lkdGg6IDE0cHg7XFxuICBsZWZ0OiAzcHg7XFxuICBib3R0b206IDJweDtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAuODVyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDJ2aDtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4ubWFpbkluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50VGVtcCB7XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5jdXJyZW50VGVtcDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIsKwXFxcIjtcXG59XFxuXFxuLmNvbmRpdGlvbkRpdiB7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuLmN1cnJlbnRDb25kaXRvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLmNvbmRpdGlvbkltZyBpbWcge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4uc2Vjb25kYXJ5SW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLnNlY29uZGFyeUluZm8gcCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4uaGlnaFRlbXAge1xcbiAgY29sb3I6IHJnYigxNTAsIDAsIDApXFxufVxcblxcbi5sb3dUZW1wIHtcXG4gIGNvbG9yOiByZ2IoMTIsIDYzLCAyMzEpO1xcbn1cXG5cXG4uY29uZGl0aW9uRGl2LFxcbi5jb25kaXRpb25JbWcsXFxuLnRlbXBSYW5nZXMsXFxuLmZlZWxzTGlrZURpdixcXG4uaHVtaWRpdHlEaXYsXFxuLndpbmREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbixcXG4uY3VycmVudFRlbXAsXFxuLmNvbmRpdGlvbkRpdiB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDRweCB3aGl0ZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDE1JSwgNDUlLCA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCkgcm90YXRlKDRkZWcpO1xcbiAgfVxcbiAgMzAlLCA2MCUsIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC41cHgsIDAsIDApIHJvdGF0ZSgtNGRlZyk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0FzaC5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvQXNoLmpwZ1wiLFxuXHRcIi4vQ2xlYXIuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL0NsZWFyLmpwZ1wiLFxuXHRcIi4vQ2xvdWRzLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9DbG91ZHMuanBnXCIsXG5cdFwiLi9Ecml6emxlLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9Ecml6emxlLmpwZ1wiLFxuXHRcIi4vRHVzdC5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvRHVzdC5qcGdcIixcblx0XCIuL0ZvZy5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvRm9nLmpwZ1wiLFxuXHRcIi4vSGF6ZS5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvSGF6ZS5qcGdcIixcblx0XCIuL01pc3QuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL01pc3QuanBnXCIsXG5cdFwiLi9SYWluLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9SYWluLmpwZ1wiLFxuXHRcIi4vU2FuZC5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvU2FuZC5qcGdcIixcblx0XCIuL1Ntb2tlLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9TbW9rZS5qcGdcIixcblx0XCIuL1Nub3cuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL1Nub3cuanBnXCIsXG5cdFwiLi9TcXVhbGwuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL1NxdWFsbC5qcGdcIixcblx0XCIuL1RodW5kZXJzdG9ybS5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvVGh1bmRlcnN0b3JtLmpwZ1wiLFxuXHRcIi4vVG9ybmFkby5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvVG9ybmFkby5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzIHN5bmMgXFxcXC5qcGckXCI7IiwiaW1wb3J0IHsgYmdJbWFnZXMgfSBmcm9tICcuL2JhY2tncm91bmRJbWdMb2FkZXInO1xuXG5jbGFzcyBXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IobG9jYXRpb24sIHVuaXRzID0gJ2YnKSB7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIGlmICh1bml0cyA9PT0gJ2MnKSB7XG4gICAgICB0aGlzLnVuaXRzID0gJ21ldHJpYyc7XG4gICAgICB0aGlzLnRlbXBVbml0ID0gJ0MnO1xuICAgICAgdGhpcy5zcGVlZFVuaXQgPSAna20vaCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5pdHMgPSAnaW1wZXJpYWwnO1xuICAgICAgdGhpcy50ZW1wVW5pdCA9ICdGJztcbiAgICAgIHRoaXMuc3BlZWRVbml0ID0gJ21waCc7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0V2VhdGhlckRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyJ1xuICAgICAgKyBgP3E9JHt0aGlzLmxvY2F0aW9ufWBcbiAgICAgICsgYCZ1bml0cz0ke3RoaXMudW5pdHN9YFxuICAgICAgKyAnJkFQUElEPTU5ZTM5M2IwYWI0NWExNTg1ZDE0N2FiMzNkNTA3ZjI4Jyk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgdGhyb3cgYCR7dGhpcy5sb2NhdGlvbn0gbm90IGZvdW5kISBEb3VibGUgY2hlY2sgeW91ciBzcGVsbGluZy5gO1xuICAgICAgfVxuICAgICAgdGhpcy52YWxpZENpdHkgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uRGl2JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kYXJ5SW5mbycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKS50ZXh0Q29udGVudCA9IGVycjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50VGVtcCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbkRpdicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZGFyeUluZm8nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMudmFsaWRDaXR5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gVXNlIHRoaXMgdG8gbWFrZSBvbmx5IDEgQVBJIGNhbGxcbiAgYXN5bmMgZGlzcGxheVdlYXRoZXJEYXRhKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0V2VhdGhlckRhdGEoKTtcblxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRlbXAnKTtcbiAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93VGVtcCcpO1xuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaFRlbXAnKTtcbiAgICBjb25zdCBmZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzTGlrZVRlbXAnKTtcbiAgICBjb25zdCBodW1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZFNwZWVkJyk7XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpO1xuICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb25JbWcnKTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRDb25kaXRvbicpO1xuXG4gICAgaWYgKHRoaXMudmFsaWRDaXR5ID09PSB0cnVlKSB7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChyZXN1bHQubWFpbi50ZW1wKX1gO1xuICAgICAgbG93LnRleHRDb250ZW50ID0gYEw6ICR7TWF0aC5yb3VuZChyZXN1bHQubWFpbi50ZW1wX21pbil9wrBgO1xuICAgICAgaGlnaC50ZXh0Q29udGVudCA9IGBIOiAke01hdGgucm91bmQocmVzdWx0Lm1haW4udGVtcF9tYXgpfcKwYDtcbiAgICAgIGZlZWwudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHJlc3VsdC5tYWluLmZlZWxzX2xpa2UpfcKwYDtcbiAgICAgIGh1bWlkLnRleHRDb250ZW50ID0gYCR7cmVzdWx0Lm1haW4uaHVtaWRpdHl9JWA7XG4gICAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChyZXN1bHQud2luZC5zcGVlZCl9JHt0aGlzLnNwZWVkVW5pdH1gO1xuICAgICAgY2l0eS50ZXh0Q29udGVudCA9IHJlc3VsdC5uYW1lO1xuXG4gICAgICB3aGlsZSAoaW1nRGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBpbWdEaXYucmVtb3ZlQ2hpbGQoaW1nRGl2Lmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBpbWcgPSByZXN1bHQud2VhdGhlclswXS5pY29uO1xuICAgICAgY29uc3Qgd2VhdGhlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgd2VhdGhlckltZy5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpbWd9QDJ4LnBuZ2A7XG4gICAgICBpbWdEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckltZyk7XG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcmVzdWx0LndlYXRoZXJbMF0ubWFpbjtcbiAgICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJ0Nsb3VkcycpIHtcbiAgICAgICAgZGV0YWlscy50ZXh0Q29udGVudCA9ICdDbG91ZHknO1xuICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbiA9PT0gJ1RodW5kZXJzdG9ybScpIHtcbiAgICAgICAgZGV0YWlscy50ZXh0Q29udGVudCA9ICdUaHVuZGVyc3Rvcm1zJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmdJbWFnZXNbYCR7ZGVzY3JpcHRpb259LmpwZ2BdfSlgO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyO1xuIiwiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgbGV0IGltZ3MgPSB7fTtcbiAgci5rZXlzKCkubWFwKChpdGVtLCBpbmRleCkgPT4geyBpbWdzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gIHJldHVybiBpbWdzO1xufVxuXG5jb25zdCBiZ0ltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcycsIGZhbHNlLCAvXFwuanBnJC8pKTtcblxuZXhwb3J0IHsgYmdJbWFnZXMgfTtcbiIsImltcG9ydCBXZWF0aGVyIGZyb20gJy4vV2VhdGhlcic7XG5cbmZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKCkge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoYmFyJykudmFsdWU7XG4gIGNvbnN0IHdlYXRoZXJVbml0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dlYXRoZXJVbml0cycpIHx8ICdmJztcbiAgbmV3IFdlYXRoZXIoc2VhcmNoLCB3ZWF0aGVyVW5pdCkuZGlzcGxheVdlYXRoZXJEYXRhKCk7XG4gIHNhdmVMb2NhdGlvbihzZWFyY2gpO1xuICBjbGVhclNlYXJjaCgpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VVbml0cygpIHtcbiAgY29uc3QgdW5pdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRUeXBlJyk7XG4gIGxldCBjdXJyZW50VW5pdDtcbiAgaWYgKHVuaXRJbnB1dC5jaGVja2VkKSB7XG4gICAgY3VycmVudFVuaXQgPSAnZic7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRDJykuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0RicpLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdEMnKS5zdHlsZS50cmFuc2l0aW9uID0gJy40cyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRGJykuc3R5bGUudHJhbnNpdGlvbiA9ICcuNHMnO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRVbml0ID0gJ2MnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0RicpLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdEMnKS5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRDJykuc3R5bGUudHJhbnNpdGlvbiA9ICcuNHMnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0RicpLnN0eWxlLnRyYW5zaXRpb24gPSAnLjRzJztcbiAgfVxuICBjb25zdCBjaXR5TG9jYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudExvY2F0aW9uJykgfHwgJ3BoaWxhZGVscGhpYSc7XG4gIG5ldyBXZWF0aGVyKGNpdHlMb2NhdGlvbiwgY3VycmVudFVuaXQpLmRpc3BsYXlXZWF0aGVyRGF0YSgpO1xuICBzYXZlVW5pdHMoY3VycmVudFVuaXQpO1xufVxuXG5mdW5jdGlvbiBjbGVhclNlYXJjaCgpIHtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaGJhcicpO1xuICBzZWFyY2gudmFsdWUgPSAnJztcbiAgc2VhcmNoLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVMb2NhdGlvbihsb2NhdGlvbikge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRMb2NhdGlvbicsIGxvY2F0aW9uKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVVuaXRzKHVuaXRzKSB7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VhdGhlclVuaXRzJywgdW5pdHMpO1xufVxuXG5leHBvcnQge1xuICBjbGVhclNlYXJjaCxcbiAgc2VhcmNoTG9jYXRpb24sXG4gIGNoYW5nZVVuaXRzLFxuICBzYXZlTG9jYXRpb24sXG59O1xuIiwiaW1wb3J0IENsb3NlIGZyb20gJy4uL2ltZ3MvY2xvc2Uuc3ZnJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vV2VhdGhlcic7XG5pbXBvcnQge1xuICBjbGVhclNlYXJjaCxcbiAgc2VhcmNoTG9jYXRpb24sXG4gIGNoYW5nZVVuaXRzLFxuICBzYXZlTG9jYXRpb24sXG59IGZyb20gJy4vZGlzcGxheUNvbnRyb2wnO1xuXG5jb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudExvY2F0aW9uJykgfHwgJ3BoaWxhZGVscGhpYSc7XG5jb25zdCB3ZWF0aGVyVW5pdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlclVuaXRzJykgfHwgJ2YnO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0TG9hZCgpIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29uc3Qgc3RhcnQgPSBuZXcgV2VhdGhlcihjdXJyZW50TG9jYXRpb24sIHdlYXRoZXJVbml0cyk7XG4gIGF3YWl0IHN0YXJ0LmdldFdlYXRoZXJEYXRhKCk7XG4gIGlmIChzdGFydC52YWxpZENpdHkgPT09IHRydWUpIHtcbiAgICBzdGFydC5kaXNwbGF5V2VhdGhlckRhdGEoKTtcbiAgfSBlbHNlIHtcbiAgICBuZXcgV2VhdGhlcignUGhpbGFkZWxwaGlhJywgd2VhdGhlclVuaXRzKS5kaXNwbGF5V2VhdGhlckRhdGEoKTtcbiAgICBzYXZlTG9jYXRpb24oJ1BoaWxhZGVscGhpYScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgY29uc3Qgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaERpdi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gnKTtcblxuICBjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hiYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2hiYXInKTtcbiAgc2VhcmNoYmFyLnNldEF0dHJpYnV0ZSgndHlwZScsICdzZWFyY2gnKTtcbiAgc2VhcmNoYmFyLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzZWFyY2hiYXInKTtcbiAgc2VhcmNoYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHNlYXJjaGJhci5ibHVyKCk7XG4gICAgICBzZWFyY2hMb2NhdGlvbigpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2VhcmNoQ2xvc2UuY2xhc3NMaXN0LmFkZCgnc2VhcmNoQ2FuY2VsJyk7XG4gIHNlYXJjaENsb3NlLnNyYyA9IGAke0Nsb3NlfWA7XG4gIHNlYXJjaENsb3NlLmFsdCA9ICdDYW5jZWwnO1xuICBzZWFyY2hDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyU2VhcmNoKTtcblxuICBjb25zdCB1bml0Q2hhbmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHVuaXRDaGFuZ2VyLmNsYXNzTGlzdC5hZGQoJ3VuaXRDaGFuZ2VyJyk7XG5cbiAgY29uc3QgdW5pdEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHVuaXRGLmNsYXNzTGlzdC5hZGQoJ3VuaXRGJyk7XG4gIHVuaXRGLnRleHRDb250ZW50ID0gJ0YnO1xuXG4gIGNvbnN0IHVuaXRDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB1bml0Qy5jbGFzc0xpc3QuYWRkKCd1bml0QycpO1xuICB1bml0Qy50ZXh0Q29udGVudCA9ICdDJztcblxuICBjb25zdCB1bml0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB1bml0SW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gIHVuaXRJbnB1dC5jbGFzc0xpc3QuYWRkKCd1bml0VHlwZScpO1xuXG4gIGlmICh3ZWF0aGVyVW5pdHMgPT09ICdmJykge1xuICAgIHVuaXRJbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgdW5pdEMuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIHVuaXRGLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgfSBlbHNlIGlmICh3ZWF0aGVyVW5pdHMgPT09ICdjJykge1xuICAgIHVuaXRJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICB1bml0Ri5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgdW5pdEMuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICB9XG5cbiAgY29uc3QgdW5pdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHVuaXRTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuICB1bml0U3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVVuaXRzKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRGl2KTtcbiAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaGJhcik7XG4gIHNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hDbG9zZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh1bml0Q2hhbmdlcik7XG4gIHVuaXRDaGFuZ2VyLmFwcGVuZENoaWxkKHVuaXRGKTtcbiAgdW5pdENoYW5nZXIuYXBwZW5kQ2hpbGQodW5pdEMpO1xuICB1bml0Q2hhbmdlci5hcHBlbmRDaGlsZCh1bml0SW5wdXQpO1xuICB1bml0Q2hhbmdlci5hcHBlbmRDaGlsZCh1bml0U3Bhbik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICBjb25zdCBtYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluSW5mby5jbGFzc0xpc3QuYWRkKCdtYWluSW5mbycpO1xuXG4gIGNvbnN0IGNpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2l0eURpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGN1cnJlbnRUZW1wLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRUZW1wJyk7XG5cbiAgY29uc3QgY29uZGl0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbmRpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb25EaXYnKTtcblxuICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnY3VycmVudENvbmRpdG9uJyk7XG5cbiAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltZ0Rpdi5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb25JbWcnKTtcblxuICBtYWluLmFwcGVuZENoaWxkKG1haW5JbmZvKTtcblxuICBtYWluSW5mby5hcHBlbmRDaGlsZChjaXR5RGl2KTtcbiAgbWFpbkluZm8uYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xuXG4gIG1haW5JbmZvLmFwcGVuZENoaWxkKGNvbmRpdGlvbkRpdik7XG4gIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcbiAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKGltZ0Rpdik7XG5cbiAgY29uc3Qgc2Vjb25kYXJ5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWNvbmRhcnlJbmZvLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeUluZm8nKTtcblxuICBjb25zdCB0ZW1wUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVtcFJhbmdlLmNsYXNzTGlzdC5hZGQoJ3RlbXBSYW5nZXMnKTtcblxuICBjb25zdCBoaWdoVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoaWdoVGVtcC5jbGFzc0xpc3QuYWRkKCdoaWdoVGVtcCcpO1xuXG4gIGNvbnN0IGxvd1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG93VGVtcC5jbGFzc0xpc3QuYWRkKCdsb3dUZW1wJyk7XG5cbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKCdmZWVsc0xpa2VEaXYnKTtcblxuICBjb25zdCBmZWVsc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZlZWxzVGV4dC5jbGFzc0xpc3QuYWRkKCdmZWVsc0xpa2VUZXh0Jyk7XG4gIGZlZWxzVGV4dC50ZXh0Q29udGVudCA9ICdGZWVscyBMaWtlOic7XG5cbiAgY29uc3QgZmVlbHNUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZlZWxzVGVtcC5jbGFzc0xpc3QuYWRkKCdmZWVsc0xpa2VUZW1wJyk7XG5cbiAgY29uc3QgaHVtaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHVtaWREaXYuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHlEaXYnKTtcblxuICBjb25zdCBodW1pZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGh1bWlkVGV4dC5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eVRleHQnKTtcbiAgaHVtaWRUZXh0LnRleHRDb250ZW50ID0gJ0h1bWlkaXR5Oic7XG5cbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHknKTtcblxuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmREaXYuY2xhc3NMaXN0LmFkZCgnd2luZERpdicpO1xuXG4gIGNvbnN0IHdpbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3aW5kVGV4dC5jbGFzc0xpc3QuYWRkKCd3aW5kVGV4dCcpO1xuICB3aW5kVGV4dC50ZXh0Q29udGVudCA9ICdXaW5kOic7XG5cbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCd3aW5kU3BlZWQnKTtcblxuICBtYWluLmFwcGVuZENoaWxkKHNlY29uZGFyeUluZm8pO1xuXG4gIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQodGVtcFJhbmdlKTtcbiAgdGVtcFJhbmdlLmFwcGVuZENoaWxkKGhpZ2hUZW1wKTtcbiAgdGVtcFJhbmdlLmFwcGVuZENoaWxkKGxvd1RlbXApO1xuXG4gIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoZmVlbHNMaWtlKTtcbiAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzVGV4dCk7XG4gIGZlZWxzTGlrZS5hcHBlbmRDaGlsZChmZWVsc1RlbXApO1xuXG4gIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoaHVtaWREaXYpO1xuICBodW1pZERpdi5hcHBlbmRDaGlsZChodW1pZFRleHQpO1xuICBodW1pZERpdi5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZCh3aW5kRGl2KTtcbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kVGV4dCk7XG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdExvYWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd2VhdGhlci1hcHAvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdExvYWQgZnJvbSAnLi9zY3JpcHRzL2luaXRMb2FkJztcblxuaW5pdExvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==