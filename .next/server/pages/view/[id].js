module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/view/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/view/[id].js":
/*!****************************!*\
  !*** ./pages/view/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_component_Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/component/Item */ "./src/component/Item.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\nextjs-tutorial\\pages\\view\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Post = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    0: item,
    1: setItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(API_URL).then(res => {
      setItem(res.data);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return __jsx(_src_component_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/component/Item.js":
/*!*******************************!*\
  !*** ./src/component/Item.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item.module.css */ "./src/component/Item.module.css");
/* harmony import */ var _Item_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Item_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\nextjs-tutorial\\src\\component\\Item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Item({
  item
}) {
  const {
    name,
    image_link,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link
  } = item;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _Item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: image_link,
    alt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _Item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.info_item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("strong", {
    className: _Item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tit_item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, name), __jsx("strong", {
    className: _Item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.num_price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "$", price), __jsx("span", {
    className: _Item_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.txt_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, category ? `${category}/` : "", product_type), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "\uAD6C\uB9E4\uD558\uAE30"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Description"), __jsx("p", {
    style: {
      paddingBottom: 20,
      fontSize: 18
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, description));
}
/**
 * 
 * 
 * api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/452/original/open-uri20171223-4-1pmofky?1514062277"
brand: "maybelline"
category: "powder"
created_at: "2016-10-01T18:35:07.476Z"
currency: null
description: "Maybelline Face Studio Master Hi-Light Light Boosting blush formula has an expert ↵balance of shade + shimmer illuminator for natural glow. Skin goes ↵soft-lit with zero glitz.↵↵		For Best Results: Brush over all shades in palette and gently sweep over ↵cheekbones, brow bones, and temples, or anywhere light naturally touches↵ the face.↵↵		↵	↵↵                    "
id: 452
image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/e8c59b78ebeaec5c4b6aeba49a9ff0f6_ra,w158,h184_pa,w158,h184.png"
name: "Maybelline Face Studio Master Hi-Light Light Booster Blush "
price: "14.99"
price_sign: null
product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/452.json"
product_colors: []
product_link: "https://well.ca/products/maybelline-face-studio-master_88836.html"
product_type: "blush"
rating: 5
tag_list: []
updated_at: "2017-12-23T20:51:17.460Z"
website_link: "https://well.ca"
 * 
 * 
 */

/***/ }),

/***/ "./src/component/Item.module.css":
/*!***************************************!*\
  !*** ./src/component/Item.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrap": "Item_wrap__SoPxu",
	"img_item": "Item_img_item__1yO-E",
	"info_item": "Item_info_item__foUha",
	"tit_item": "Item_tit_item__2mNGI",
	"num_price": "Item_num_price__ldOyO",
	"txt_info": "Item_txt_info__1D_5K"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdmlldy8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9JdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvSXRlbS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJpdGVtIiwic2V0SXRlbSIsInVzZVN0YXRlIiwiQVBJX1VSTCIsImdldERhdGEiLCJBeGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0IiwiSXRlbSIsIm5hbWUiLCJpbWFnZV9saW5rIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInVwZGF0ZWRfYXQiLCJjYXRlZ29yeSIsInByb2R1Y3RfdHlwZSIsInByb2R1Y3RfbGluayIsInN0eWxlcyIsIndyYXAiLCJpbWdfaXRlbSIsImluZm9faXRlbSIsInRpdF9pdGVtIiwibnVtX3ByaWNlIiwidHh0X2luZm8iLCJwYWRkaW5nQm90dG9tIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQVBGLENBSkYsQ0FERixFQWVFLE1BQUMsd0RBQUQ7QUFBUSxNQUFFLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGLEVBZ0JFO0FBQUcsU0FBSyxFQUFFO0FBQUVTLG1CQUFhLEVBQUUsRUFBakI7QUFBcUJDLGNBQVEsRUFBRTtBQUEvQixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0RiLFdBQWhELENBaEJGLENBREY7QUFvQkQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3ZpZXcvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdmlldy9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudC9JdGVtXCI7XHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCBBUElfVVJMID0gYGh0dHA6Ly9tYWtldXAtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3Byb2R1Y3RzLyR7aWR9Lmpzb25gO1xyXG5cclxuICBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgQXhpb3MuZ2V0KEFQSV9VUkwpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRJdGVtKHJlcy5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpZCAmJiBpZCA+IDApIHtcclxuICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtpZF0pO1xyXG5cclxuICByZXR1cm4gPEl0ZW0gaXRlbT17aXRlbX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iLCJpbXBvcnQgeyBCdXR0b24sIEhlYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0l0ZW0ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSh7IGl0ZW0gfSkge1xyXG4gIGNvbnN0IHtcclxuICAgIG5hbWUsXHJcbiAgICBpbWFnZV9saW5rLFxyXG4gICAgcHJpY2UsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHVwZGF0ZWRfYXQsXHJcbiAgICBjYXRlZ29yeSxcclxuICAgIHByb2R1Y3RfdHlwZSxcclxuICAgIHByb2R1Y3RfbGluayxcclxuICB9ID0gaXRlbTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ19pdGVtfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZV9saW5rfSBhbHQ9e25hbWV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvX2l0ZW19PlxyXG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy50aXRfaXRlbX0+e25hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLm51bV9wcmljZX0+JHtwcmljZX08L3N0cm9uZz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnR4dF9pbmZvfT5cclxuICAgICAgICAgICAge2NhdGVnb3J5ID8gYCR7Y2F0ZWdvcnl9L2AgOiBcIlwifVxyXG4gICAgICAgICAgICB7cHJvZHVjdF90eXBlfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIm9yYW5nZVwiPuq1rOunpO2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEhlYWRlciBhcz1cImgzXCI+RGVzY3JpcHRpb248L0hlYWRlcj5cclxuICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMjAsIGZvbnRTaXplOiAxOCB9fT57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4vKipcclxuICogXHJcbiAqIFxyXG4gKiBhcGlfZmVhdHVyZWRfaW1hZ2U6IFwiLy9zMy5hbWF6b25hd3MuY29tL2Rvbm92YW5iYWlsZXkvcHJvZHVjdHMvYXBpX2ZlYXR1cmVkX2ltYWdlcy8wMDAvMDAwLzQ1Mi9vcmlnaW5hbC9vcGVuLXVyaTIwMTcxMjIzLTQtMXBtb2ZreT8xNTE0MDYyMjc3XCJcclxuYnJhbmQ6IFwibWF5YmVsbGluZVwiXHJcbmNhdGVnb3J5OiBcInBvd2RlclwiXHJcbmNyZWF0ZWRfYXQ6IFwiMjAxNi0xMC0wMVQxODozNTowNy40NzZaXCJcclxuY3VycmVuY3k6IG51bGxcclxuZGVzY3JpcHRpb246IFwiTWF5YmVsbGluZSBGYWNlIFN0dWRpbyBNYXN0ZXIgSGktTGlnaHQgTGlnaHQgQm9vc3RpbmcgYmx1c2ggZm9ybXVsYSBoYXMgYW4gZXhwZXJ0IOKGtWJhbGFuY2Ugb2Ygc2hhZGUgKyBzaGltbWVyIGlsbHVtaW5hdG9yIGZvciBuYXR1cmFsIGdsb3cuIFNraW4gZ29lcyDihrVzb2Z0LWxpdCB3aXRoIHplcm8gZ2xpdHou4oa14oa1XHRcdEZvciBCZXN0IFJlc3VsdHM6IEJydXNoIG92ZXIgYWxsIHNoYWRlcyBpbiBwYWxldHRlIGFuZCBnZW50bHkgc3dlZXAgb3ZlciDihrVjaGVla2JvbmVzLCBicm93IGJvbmVzLCBhbmQgdGVtcGxlcywgb3IgYW55d2hlcmUgbGlnaHQgbmF0dXJhbGx5IHRvdWNoZXPihrUgdGhlIGZhY2Uu4oa14oa1XHRcdOKGtVx04oa14oa1ICAgICAgICAgICAgICAgICAgICBcIlxyXG5pZDogNDUyXHJcbmltYWdlX2xpbms6IFwiaHR0cHM6Ly9kM3QzMmhzbmp4bzdxNi5jbG91ZGZyb250Lm5ldC9pL2U4YzU5Yjc4ZWJlYWVjNWM0YjZhZWJhNDlhOWZmMGY2X3JhLHcxNTgsaDE4NF9wYSx3MTU4LGgxODQucG5nXCJcclxubmFtZTogXCJNYXliZWxsaW5lIEZhY2UgU3R1ZGlvIE1hc3RlciBIaS1MaWdodCBMaWdodCBCb29zdGVyIEJsdXNoIFwiXHJcbnByaWNlOiBcIjE0Ljk5XCJcclxucHJpY2Vfc2lnbjogbnVsbFxyXG5wcm9kdWN0X2FwaV91cmw6IFwiaHR0cDovL21ha2V1cC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvcHJvZHVjdHMvNDUyLmpzb25cIlxyXG5wcm9kdWN0X2NvbG9yczogW11cclxucHJvZHVjdF9saW5rOiBcImh0dHBzOi8vd2VsbC5jYS9wcm9kdWN0cy9tYXliZWxsaW5lLWZhY2Utc3R1ZGlvLW1hc3Rlcl84ODgzNi5odG1sXCJcclxucHJvZHVjdF90eXBlOiBcImJsdXNoXCJcclxucmF0aW5nOiA1XHJcbnRhZ19saXN0OiBbXVxyXG51cGRhdGVkX2F0OiBcIjIwMTctMTItMjNUMjA6NTE6MTcuNDYwWlwiXHJcbndlYnNpdGVfbGluazogXCJodHRwczovL3dlbGwuY2FcIlxyXG4gKiBcclxuICogXHJcbiAqL1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwXCI6IFwiSXRlbV93cmFwX19Tb1B4dVwiLFxuXHRcImltZ19pdGVtXCI6IFwiSXRlbV9pbWdfaXRlbV9fMXlPLUVcIixcblx0XCJpbmZvX2l0ZW1cIjogXCJJdGVtX2luZm9faXRlbV9fZm9VaGFcIixcblx0XCJ0aXRfaXRlbVwiOiBcIkl0ZW1fdGl0X2l0ZW1fXzJtTkdJXCIsXG5cdFwibnVtX3ByaWNlXCI6IFwiSXRlbV9udW1fcHJpY2VfX2xkT3lPXCIsXG5cdFwidHh0X2luZm9cIjogXCJJdGVtX3R4dF9pbmZvX18xRF81S1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==