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

  // eslint-disable-next-line consistent-return
  async getWeatherData() {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather'
      + `?q=${this.location}`
      + `&units=${this.units}`
      + '&APPID=59e393b0ab45a1585d147ab33d507f28');
      if (response.status === 404) {
        // eslint-disable-next-line no-throw-literal
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
  // eslint-disable-next-line no-use-before-define
  saveLocation(search);
  // eslint-disable-next-line no-use-before-define
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
  // eslint-disable-next-line no-use-before-define
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
  // eslint-disable-next-line no-use-before-define
  document.body.appendChild(createHeader());
  // eslint-disable-next-line no-use-before-define
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBYztBQUNwQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHVCQUF1Qiw0Q0FBSyxDQUFDO0FBQzdCO0FBQ0Esd0NBQXdDLHdEQUFXOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsd0RBQVc7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4THhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOzs7Ozs7Ozs7Ozs7OztBQ0F5QjtBQUNpQjs7QUFFMUMsNkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy8gc3luYyBub25yZWN1cnNpdmUgXFwuanBnJCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL1dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kSW1nTG9hZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvZGlzcGxheUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9pbml0TG9hZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXG4gICAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogNTBweCAxZnIgLyAxZnI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBhZGRpbmc6IDZweCAyMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoQ2FuY2VsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxufVxcblxcbi5zZWFyY2hDYW5jZWw6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAuNnM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbn1cXG5cXG4udW5pdENoYW5nZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnVuaXRGLFxcbi51bml0QyB7XFxuICBmb250LXNpemU6IC44NXJlbTtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHotaW5kZXg6IDIwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi51bml0Q2hhbmdlciBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udW5pdENoYW5nZXIgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDM4cHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uc2xpZGVyOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICB3aWR0aDogMTRweDtcXG4gIGxlZnQ6IDNweDtcXG4gIGJvdHRvbTogMnB4O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IC44NXJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMnZoO1xcbiAgZ2FwOiAydmg7XFxufVxcblxcbi5tYWluSW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJ2aDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnRUZW1wIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLmN1cnJlbnRUZW1wOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiwrBcXFwiO1xcbn1cXG5cXG4uY29uZGl0aW9uRGl2IHtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG4uY3VycmVudENvbmRpdG9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4uY29uZGl0aW9uSW1nIGltZyB7XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5zZWNvbmRhcnlJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uc2Vjb25kYXJ5SW5mbyBwIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5oaWdoVGVtcCB7XFxuICBjb2xvcjogcmdiKDE1MCwgMCwgMClcXG59XFxuXFxuLmxvd1RlbXAge1xcbiAgY29sb3I6IHJnYigxMiwgNjMsIDIzMSk7XFxufVxcblxcbi5jb25kaXRpb25EaXYsXFxuLmNvbmRpdGlvbkltZyxcXG4udGVtcFJhbmdlcyxcXG4uZmVlbHNMaWtlRGl2LFxcbi5odW1pZGl0eURpdixcXG4ud2luZERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uLFxcbi5jdXJyZW50VGVtcCxcXG4uY29uZGl0aW9uRGl2IHtcXG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IHdoaXRlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMTUlLCA0NSUsIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuNXB4LCAwLCAwKSByb3RhdGUoNGRlZyk7XFxuICB9XFxuICAzMCUsIDYwJSwgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjVweCwgMCwgMCkgcm90YXRlKC00ZGVnKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs0RkFDMEY7RUFDMUYsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOzs7Ozs7RUFNRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxpREFBaUQ7RUFDbkQ7RUFDQTtJQUNFLGlEQUFpRDtFQUNuRDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXG4gICAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogNTBweCAxZnIgLyAxZnI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBhZGRpbmc6IDZweCAyMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoQ2FuY2VsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxufVxcblxcbi5zZWFyY2hDYW5jZWw6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAuNnM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbn1cXG5cXG4udW5pdENoYW5nZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnVuaXRGLFxcbi51bml0QyB7XFxuICBmb250LXNpemU6IC44NXJlbTtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHotaW5kZXg6IDIwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi51bml0Q2hhbmdlciBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udW5pdENoYW5nZXIgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDM4cHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uc2xpZGVyOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICB3aWR0aDogMTRweDtcXG4gIGxlZnQ6IDNweDtcXG4gIGJvdHRvbTogMnB4O1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IC44NXJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMnZoO1xcbiAgZ2FwOiAydmg7XFxufVxcblxcbi5tYWluSW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJ2aDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnRUZW1wIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLmN1cnJlbnRUZW1wOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiwrBcXFwiO1xcbn1cXG5cXG4uY29uZGl0aW9uRGl2IHtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG4uY3VycmVudENvbmRpdG9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4uY29uZGl0aW9uSW1nIGltZyB7XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5zZWNvbmRhcnlJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uc2Vjb25kYXJ5SW5mbyBwIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5oaWdoVGVtcCB7XFxuICBjb2xvcjogcmdiKDE1MCwgMCwgMClcXG59XFxuXFxuLmxvd1RlbXAge1xcbiAgY29sb3I6IHJnYigxMiwgNjMsIDIzMSk7XFxufVxcblxcbi5jb25kaXRpb25EaXYsXFxuLmNvbmRpdGlvbkltZyxcXG4udGVtcFJhbmdlcyxcXG4uZmVlbHNMaWtlRGl2LFxcbi5odW1pZGl0eURpdixcXG4ud2luZERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uLFxcbi5jdXJyZW50VGVtcCxcXG4uY29uZGl0aW9uRGl2IHtcXG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IHdoaXRlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMTUlLCA0NSUsIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuNXB4LCAwLCAwKSByb3RhdGUoNGRlZyk7XFxuICB9XFxuICAzMCUsIDYwJSwgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjVweCwgMCwgMCkgcm90YXRlKC00ZGVnKTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQXNoLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9Bc2guanBnXCIsXG5cdFwiLi9DbGVhci5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvQ2xlYXIuanBnXCIsXG5cdFwiLi9DbG91ZHMuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL0Nsb3Vkcy5qcGdcIixcblx0XCIuL0RyaXp6bGUuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL0RyaXp6bGUuanBnXCIsXG5cdFwiLi9EdXN0LmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9EdXN0LmpwZ1wiLFxuXHRcIi4vRm9nLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9Gb2cuanBnXCIsXG5cdFwiLi9IYXplLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9IYXplLmpwZ1wiLFxuXHRcIi4vTWlzdC5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvTWlzdC5qcGdcIixcblx0XCIuL1JhaW4uanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL1JhaW4uanBnXCIsXG5cdFwiLi9TYW5kLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9TYW5kLmpwZ1wiLFxuXHRcIi4vU21va2UuanBnXCI6IFwiLi9zcmMvaW1ncy93ZWF0aGVyLWJhY2tncm91bmRzL1Ntb2tlLmpwZ1wiLFxuXHRcIi4vU25vdy5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvU25vdy5qcGdcIixcblx0XCIuL1NxdWFsbC5qcGdcIjogXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMvU3F1YWxsLmpwZ1wiLFxuXHRcIi4vVGh1bmRlcnN0b3JtLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9UaHVuZGVyc3Rvcm0uanBnXCIsXG5cdFwiLi9Ub3JuYWRvLmpwZ1wiOiBcIi4vc3JjL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcy9Ub3JuYWRvLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWdzL3dlYXRoZXItYmFja2dyb3VuZHMgc3luYyBcXFxcLmpwZyRcIjsiLCJpbXBvcnQgeyBiZ0ltYWdlcyB9IGZyb20gJy4vYmFja2dyb3VuZEltZ0xvYWRlcic7XG5cbmNsYXNzIFdlYXRoZXIge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbiwgdW5pdHMgPSAnZicpIHtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgaWYgKHVuaXRzID09PSAnYycpIHtcbiAgICAgIHRoaXMudW5pdHMgPSAnbWV0cmljJztcbiAgICAgIHRoaXMudGVtcFVuaXQgPSAnQyc7XG4gICAgICB0aGlzLnNwZWVkVW5pdCA9ICdrbS9oJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bml0cyA9ICdpbXBlcmlhbCc7XG4gICAgICB0aGlzLnRlbXBVbml0ID0gJ0YnO1xuICAgICAgdGhpcy5zcGVlZFVuaXQgPSAnbXBoJztcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgYXN5bmMgZ2V0V2VhdGhlckRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyJ1xuICAgICAgKyBgP3E9JHt0aGlzLmxvY2F0aW9ufWBcbiAgICAgICsgYCZ1bml0cz0ke3RoaXMudW5pdHN9YFxuICAgICAgKyAnJkFQUElEPTU5ZTM5M2IwYWI0NWExNTg1ZDE0N2FiMzNkNTA3ZjI4Jyk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICAgICAgdGhyb3cgYCR7dGhpcy5sb2NhdGlvbn0gbm90IGZvdW5kISBEb3VibGUgY2hlY2sgeW91ciBzcGVsbGluZy5gO1xuICAgICAgfVxuICAgICAgdGhpcy52YWxpZENpdHkgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uRGl2JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kYXJ5SW5mbycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKS50ZXh0Q29udGVudCA9IGVycjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50VGVtcCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbkRpdicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZGFyeUluZm8nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMudmFsaWRDaXR5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gVXNlIHRoaXMgdG8gbWFrZSBvbmx5IDEgQVBJIGNhbGxcbiAgYXN5bmMgZGlzcGxheVdlYXRoZXJEYXRhKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0V2VhdGhlckRhdGEoKTtcblxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRlbXAnKTtcbiAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93VGVtcCcpO1xuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaFRlbXAnKTtcbiAgICBjb25zdCBmZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzTGlrZVRlbXAnKTtcbiAgICBjb25zdCBodW1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZFNwZWVkJyk7XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpO1xuICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb25JbWcnKTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRDb25kaXRvbicpO1xuXG4gICAgaWYgKHRoaXMudmFsaWRDaXR5ID09PSB0cnVlKSB7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChyZXN1bHQubWFpbi50ZW1wKX1gO1xuICAgICAgbG93LnRleHRDb250ZW50ID0gYEw6ICR7TWF0aC5yb3VuZChyZXN1bHQubWFpbi50ZW1wX21pbil9wrBgO1xuICAgICAgaGlnaC50ZXh0Q29udGVudCA9IGBIOiAke01hdGgucm91bmQocmVzdWx0Lm1haW4udGVtcF9tYXgpfcKwYDtcbiAgICAgIGZlZWwudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHJlc3VsdC5tYWluLmZlZWxzX2xpa2UpfcKwYDtcbiAgICAgIGh1bWlkLnRleHRDb250ZW50ID0gYCR7cmVzdWx0Lm1haW4uaHVtaWRpdHl9JWA7XG4gICAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChyZXN1bHQud2luZC5zcGVlZCl9JHt0aGlzLnNwZWVkVW5pdH1gO1xuICAgICAgY2l0eS50ZXh0Q29udGVudCA9IHJlc3VsdC5uYW1lO1xuXG4gICAgICB3aGlsZSAoaW1nRGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBpbWdEaXYucmVtb3ZlQ2hpbGQoaW1nRGl2Lmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBpbWcgPSByZXN1bHQud2VhdGhlclswXS5pY29uO1xuICAgICAgY29uc3Qgd2VhdGhlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgd2VhdGhlckltZy5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpbWd9QDJ4LnBuZ2A7XG4gICAgICBpbWdEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckltZyk7XG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcmVzdWx0LndlYXRoZXJbMF0ubWFpbjtcbiAgICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJ0Nsb3VkcycpIHtcbiAgICAgICAgZGV0YWlscy50ZXh0Q29udGVudCA9ICdDbG91ZHknO1xuICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbiA9PT0gJ1RodW5kZXJzdG9ybScpIHtcbiAgICAgICAgZGV0YWlscy50ZXh0Q29udGVudCA9ICdUaHVuZGVyc3Rvcm1zJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmdJbWFnZXNbYCR7ZGVzY3JpcHRpb259LmpwZ2BdfSlgO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyO1xuIiwiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgbGV0IGltZ3MgPSB7fTtcbiAgci5rZXlzKCkubWFwKChpdGVtLCBpbmRleCkgPT4geyBpbWdzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gIHJldHVybiBpbWdzO1xufVxuXG5jb25zdCBiZ0ltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ltZ3Mvd2VhdGhlci1iYWNrZ3JvdW5kcycsIGZhbHNlLCAvXFwuanBnJC8pKTtcblxuZXhwb3J0IHsgYmdJbWFnZXMgfTtcbiIsImltcG9ydCBXZWF0aGVyIGZyb20gJy4vV2VhdGhlcic7XG5cbmZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKCkge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoYmFyJykudmFsdWU7XG4gIGNvbnN0IHdlYXRoZXJVbml0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dlYXRoZXJVbml0cycpIHx8ICdmJztcbiAgbmV3IFdlYXRoZXIoc2VhcmNoLCB3ZWF0aGVyVW5pdCkuZGlzcGxheVdlYXRoZXJEYXRhKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBzYXZlTG9jYXRpb24oc2VhcmNoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGNsZWFyU2VhcmNoKCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVVuaXRzKCkge1xuICBjb25zdCB1bml0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdFR5cGUnKTtcbiAgbGV0IGN1cnJlbnRVbml0O1xuICBpZiAodW5pdElucHV0LmNoZWNrZWQpIHtcbiAgICBjdXJyZW50VW5pdCA9ICdmJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdEMnKS5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRGJykuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0QycpLnN0eWxlLnRyYW5zaXRpb24gPSAnLjRzJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdEYnKS5zdHlsZS50cmFuc2l0aW9uID0gJy40cyc7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFVuaXQgPSAnYyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRGJykuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0QycpLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdEMnKS5zdHlsZS50cmFuc2l0aW9uID0gJy40cyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXRGJykuc3R5bGUudHJhbnNpdGlvbiA9ICcuNHMnO1xuICB9XG4gIGNvbnN0IGNpdHlMb2NhdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50TG9jYXRpb24nKSB8fCAncGhpbGFkZWxwaGlhJztcbiAgbmV3IFdlYXRoZXIoY2l0eUxvY2F0aW9uLCBjdXJyZW50VW5pdCkuZGlzcGxheVdlYXRoZXJEYXRhKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBzYXZlVW5pdHMoY3VycmVudFVuaXQpO1xufVxuXG5mdW5jdGlvbiBjbGVhclNlYXJjaCgpIHtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaGJhcicpO1xuICBzZWFyY2gudmFsdWUgPSAnJztcbiAgc2VhcmNoLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVMb2NhdGlvbihsb2NhdGlvbikge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRMb2NhdGlvbicsIGxvY2F0aW9uKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVVuaXRzKHVuaXRzKSB7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VhdGhlclVuaXRzJywgdW5pdHMpO1xufVxuXG5leHBvcnQge1xuICBjbGVhclNlYXJjaCxcbiAgc2VhcmNoTG9jYXRpb24sXG4gIGNoYW5nZVVuaXRzLFxuICBzYXZlTG9jYXRpb24sXG59O1xuIiwiaW1wb3J0IENsb3NlIGZyb20gJy4uL2ltZ3MvY2xvc2Uuc3ZnJztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vV2VhdGhlcic7XG5pbXBvcnQge1xuICBjbGVhclNlYXJjaCxcbiAgc2VhcmNoTG9jYXRpb24sXG4gIGNoYW5nZVVuaXRzLFxuICBzYXZlTG9jYXRpb24sXG59IGZyb20gJy4vZGlzcGxheUNvbnRyb2wnO1xuXG5jb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudExvY2F0aW9uJykgfHwgJ3BoaWxhZGVscGhpYSc7XG5jb25zdCB3ZWF0aGVyVW5pdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlclVuaXRzJykgfHwgJ2YnO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0TG9hZCgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb25zdCBzdGFydCA9IG5ldyBXZWF0aGVyKGN1cnJlbnRMb2NhdGlvbiwgd2VhdGhlclVuaXRzKTtcbiAgYXdhaXQgc3RhcnQuZ2V0V2VhdGhlckRhdGEoKTtcbiAgaWYgKHN0YXJ0LnZhbGlkQ2l0eSA9PT0gdHJ1ZSkge1xuICAgIHN0YXJ0LmRpc3BsYXlXZWF0aGVyRGF0YSgpO1xuICB9IGVsc2Uge1xuICAgIG5ldyBXZWF0aGVyKCdQaGlsYWRlbHBoaWEnLCB3ZWF0aGVyVW5pdHMpLmRpc3BsYXlXZWF0aGVyRGF0YSgpO1xuICAgIHNhdmVMb2NhdGlvbignUGhpbGFkZWxwaGlhJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBjb25zdCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoRGl2LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaCcpO1xuXG4gIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaGJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaGJhcicpO1xuICBzZWFyY2hiYXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3NlYXJjaCcpO1xuICBzZWFyY2hiYXIuc2V0QXR0cmlidXRlKCduYW1lJywgJ3NlYXJjaGJhcicpO1xuICBzZWFyY2hiYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgc2VhcmNoYmFyLmJsdXIoKTtcbiAgICAgIHNlYXJjaExvY2F0aW9uKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzZWFyY2hDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzZWFyY2hDbG9zZS5jbGFzc0xpc3QuYWRkKCdzZWFyY2hDYW5jZWwnKTtcbiAgc2VhcmNoQ2xvc2Uuc3JjID0gYCR7Q2xvc2V9YDtcbiAgc2VhcmNoQ2xvc2UuYWx0ID0gJ0NhbmNlbCc7XG4gIHNlYXJjaENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJTZWFyY2gpO1xuXG4gIGNvbnN0IHVuaXRDaGFuZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdW5pdENoYW5nZXIuY2xhc3NMaXN0LmFkZCgndW5pdENoYW5nZXInKTtcblxuICBjb25zdCB1bml0RiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdW5pdEYuY2xhc3NMaXN0LmFkZCgndW5pdEYnKTtcbiAgdW5pdEYudGV4dENvbnRlbnQgPSAnRic7XG5cbiAgY29uc3QgdW5pdEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHVuaXRDLmNsYXNzTGlzdC5hZGQoJ3VuaXRDJyk7XG4gIHVuaXRDLnRleHRDb250ZW50ID0gJ0MnO1xuXG4gIGNvbnN0IHVuaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHVuaXRJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgdW5pdElucHV0LmNsYXNzTGlzdC5hZGQoJ3VuaXRUeXBlJyk7XG5cbiAgaWYgKHdlYXRoZXJVbml0cyA9PT0gJ2YnKSB7XG4gICAgdW5pdElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB1bml0Qy5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgdW5pdEYuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJVbml0cyA9PT0gJ2MnKSB7XG4gICAgdW5pdElucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIHVuaXRGLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICB1bml0Qy5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gIH1cblxuICBjb25zdCB1bml0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdW5pdFNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyJyk7XG4gIHVuaXRTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVW5pdHMpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hEaXYpO1xuICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoYmFyKTtcbiAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaENsb3NlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHVuaXRDaGFuZ2VyKTtcbiAgdW5pdENoYW5nZXIuYXBwZW5kQ2hpbGQodW5pdEYpO1xuICB1bml0Q2hhbmdlci5hcHBlbmRDaGlsZCh1bml0Qyk7XG4gIHVuaXRDaGFuZ2VyLmFwcGVuZENoaWxkKHVuaXRJbnB1dCk7XG4gIHVuaXRDaGFuZ2VyLmFwcGVuZENoaWxkKHVuaXRTcGFuKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5JbmZvLmNsYXNzTGlzdC5hZGQoJ21haW5JbmZvJyk7XG5cbiAgY29uc3QgY2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG5cbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3VycmVudFRlbXAuY2xhc3NMaXN0LmFkZCgnY3VycmVudFRlbXAnKTtcblxuICBjb25zdCBjb25kaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uZGl0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbkRpdicpO1xuXG4gIGNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Q29uZGl0b24nKTtcblxuICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbkltZycpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkluZm8pO1xuXG4gIG1haW5JbmZvLmFwcGVuZENoaWxkKGNpdHlEaXYpO1xuICBtYWluSW5mby5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG5cbiAgbWFpbkluZm8uYXBwZW5kQ2hpbGQoY29uZGl0aW9uRGl2KTtcbiAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKGRldGFpbHNEaXYpO1xuICBjb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcblxuICBjb25zdCBzZWNvbmRhcnlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY29uZGFyeUluZm8uY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5SW5mbycpO1xuXG4gIGNvbnN0IHRlbXBSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wUmFuZ2UuY2xhc3NMaXN0LmFkZCgndGVtcFJhbmdlcycpO1xuXG4gIGNvbnN0IGhpZ2hUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhpZ2hUZW1wLmNsYXNzTGlzdC5hZGQoJ2hpZ2hUZW1wJyk7XG5cbiAgY29uc3QgbG93VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb3dUZW1wLmNsYXNzTGlzdC5hZGQoJ2xvd1RlbXAnKTtcblxuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzTGlrZURpdicpO1xuXG4gIGNvbnN0IGZlZWxzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmVlbHNUZXh0LmNsYXNzTGlzdC5hZGQoJ2ZlZWxzTGlrZVRleHQnKTtcbiAgZmVlbHNUZXh0LnRleHRDb250ZW50ID0gJ0ZlZWxzIExpa2U6JztcblxuICBjb25zdCBmZWVsc1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmVlbHNUZW1wLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzTGlrZVRlbXAnKTtcblxuICBjb25zdCBodW1pZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZERpdi5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eURpdicpO1xuXG4gIGNvbnN0IGh1bWlkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaHVtaWRUZXh0LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5VGV4dCcpO1xuICBodW1pZFRleHQudGV4dENvbnRlbnQgPSAnSHVtaWRpdHk6JztcblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xuXG4gIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZERpdi5jbGFzc0xpc3QuYWRkKCd3aW5kRGl2Jyk7XG5cbiAgY29uc3Qgd2luZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdpbmRUZXh0LmNsYXNzTGlzdC5hZGQoJ3dpbmRUZXh0Jyk7XG4gIHdpbmRUZXh0LnRleHRDb250ZW50ID0gJ1dpbmQ6JztcblxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ3dpbmRTcGVlZCcpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5SW5mbyk7XG5cbiAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZCh0ZW1wUmFuZ2UpO1xuICB0ZW1wUmFuZ2UuYXBwZW5kQ2hpbGQoaGlnaFRlbXApO1xuICB0ZW1wUmFuZ2UuYXBwZW5kQ2hpbGQobG93VGVtcCk7XG5cbiAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNUZXh0KTtcbiAgZmVlbHNMaWtlLmFwcGVuZENoaWxkKGZlZWxzVGVtcCk7XG5cbiAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChodW1pZERpdik7XG4gIGh1bWlkRGl2LmFwcGVuZENoaWxkKGh1bWlkVGV4dCk7XG4gIGh1bWlkRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcblxuICBzZWNvbmRhcnlJbmZvLmFwcGVuZENoaWxkKHdpbmREaXYpO1xuICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRUZXh0KTtcbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0TG9hZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93ZWF0aGVyLWFwcC9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBpbml0TG9hZCBmcm9tICcuL3NjcmlwdHMvaW5pdExvYWQnO1xuXG5pbml0TG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9