module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/appconfig.js":
/*!*********************************!*\
  !*** ./src/config/appconfig.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet appconfig = {\n  serviceEndpoint: \"http://localhost:5000\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (appconfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcGNvbmZpZy5qcz8yZTJhIl0sIm5hbWVzIjpbImFwcGNvbmZpZyIsInNlcnZpY2VFbmRwb2ludCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxJQUFJQSxTQUFTLEdBQUc7QUFDZEMsaUJBQWUsRUFBRTtBQURILENBQWhCO0FBSWVELHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbmZpZy9hcHBjb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwY29uZmlnID0ge1xuICBzZXJ2aWNlRW5kcG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHBjb25maWc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/appconfig.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_youtube_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/youtube-data */ \"./src/services/youtube-data.js\");\n/* harmony import */ var _util_tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/tags */ \"./src/util/tags.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ \"./src/pages/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/johnsweet/repos/youtube-recommender-frontend/src/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst {\n  CheckableTag\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Tag\"];\nfunction Home() {\n  const {\n    0: channel,\n    1: setChannel\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const {\n    0: allTags,\n    1: setAllTags\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_util_tags__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  const {\n    0: selectedTags,\n    1: setSelectedTags\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: showInput,\n    1: setShowInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: inputValue,\n    1: setInputValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {// getChannel();\n  }, []);\n\n  async function getChannel() {\n    let response = await _services_youtube_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getChannel();\n    setChannel(response.data);\n  }\n\n  function handleChange(tag, checked) {\n    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);\n    setSelectedTags(nextSelectedTags);\n  }\n\n  function handleInputConfirm() {\n    if (inputValue && _util_tags__WEBPACK_IMPORTED_MODULE_4__[\"default\"].indexOf(inputValue) === -1) {\n      setAllTags([...allTags, inputValue]);\n    }\n\n    setShowInput(false);\n    setInputValue(\"\");\n  }\n\n  const tagsComponent = allTags.map((tag, index) => __jsx(CheckableTag, {\n    key: tag + index,\n    checked: selectedTags.indexOf(tag) > -1,\n    onChange: checked => handleChange(tag, checked),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, tag));\n\n  const addNewTag = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Tag\"], {\n    className: \"site-tag-plus cursor-pointer\",\n    onClick: () => setShowInput(!showInput),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"PlusOutlined\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }), \" New Tag\");\n\n  const channelLayout = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"channel-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"inner-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    className: \"thumbnail\",\n    width: 200,\n    height: 200,\n    src: \"error\",\n    fallback: \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, \"Title\")), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, \"Tags\"), __jsx(\"div\", {\n    className: \"inner-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, tagsComponent, !showInput && addNewTag, showInput && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    type: \"text\",\n    size: \"small\",\n    className: \"tag-input\",\n    placeholder: \"Enter new tag\",\n    value: inputValue,\n    onChange: e => setInputValue(e.target.value),\n    onBlur: handleInputConfirm,\n    onPressEnter: handleInputConfirm,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    onClick: getChannel,\n    className: \"mx-auto d-block\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, \"Save\"));\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, channel.title), channelLayout);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJDaGVja2FibGVUYWciLCJUYWciLCJIb21lIiwiY2hhbm5lbCIsInNldENoYW5uZWwiLCJ1c2VTdGF0ZSIsImFsbFRhZ3MiLCJzZXRBbGxUYWdzIiwidGFncyIsInNlbGVjdGVkVGFncyIsInNldFNlbGVjdGVkVGFncyIsInNob3dJbnB1dCIsInNldFNob3dJbnB1dCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwidXNlRWZmZWN0IiwiZ2V0Q2hhbm5lbCIsInJlc3BvbnNlIiwieW91dHViZURhdGFTZXJ2aWNlIiwiZGF0YSIsImhhbmRsZUNoYW5nZSIsInRhZyIsImNoZWNrZWQiLCJuZXh0U2VsZWN0ZWRUYWdzIiwiZmlsdGVyIiwidCIsImhhbmRsZUlucHV0Q29uZmlybSIsImluZGV4T2YiLCJ0YWdzQ29tcG9uZW50IiwibWFwIiwiaW5kZXgiLCJhZGROZXdUYWciLCJjaGFubmVsTGF5b3V0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFtQkMsd0NBQXpCO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RBQVEsQ0FBQ0csa0RBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NMLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDTSxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlAsc0RBQVEsQ0FBQyxLQUFELENBQTFD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QUssRUFBRUUsVUFMVDtBQU1FLFlBQVEsRUFBR29CLENBQUQsSUFBT25CLGFBQWEsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBTmhDO0FBT0UsVUFBTSxFQUFFVCxrQkFQVjtBQVFFLGdCQUFZLEVBQUVBLGtCQVJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FaRixFQTRCRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsV0FBTyxFQUFFVixVQUFoQztBQUE0QyxhQUFTLEVBQUMsaUJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkYsQ0FERjs7QUFtQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLYixPQUFPLENBQUNpQyxLQUFiLENBREYsRUFFR0osYUFGSCxDQURGO0FBTUQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIEltYWdlLCBUYWcsIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHlvdXR1YmVEYXRhU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMveW91dHViZS1kYXRhXCI7XG5pbXBvcnQgdGFncyBmcm9tIFwiLi4vdXRpbC90YWdzXCI7XG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcblxuY29uc3QgeyBDaGVja2FibGVUYWcgfSA9IFRhZztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NoYW5uZWwsIHNldENoYW5uZWxdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbYWxsVGFncywgc2V0QWxsVGFnc10gPSB1c2VTdGF0ZSh0YWdzKTtcbiAgY29uc3QgW3NlbGVjdGVkVGFncywgc2V0U2VsZWN0ZWRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Nob3dJbnB1dCwgc2V0U2hvd0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBnZXRDaGFubmVsKCk7XG4gIH0sIFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRDaGFubmVsKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHlvdXR1YmVEYXRhU2VydmljZS5nZXRDaGFubmVsKCk7XG4gICAgc2V0Q2hhbm5lbChyZXNwb25zZS5kYXRhKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh0YWcsIGNoZWNrZWQpIHtcbiAgICBjb25zdCBuZXh0U2VsZWN0ZWRUYWdzID0gY2hlY2tlZFxuICAgICAgPyBbLi4uc2VsZWN0ZWRUYWdzLCB0YWddXG4gICAgICA6IHNlbGVjdGVkVGFncy5maWx0ZXIoKHQpID0+IHQgIT09IHRhZyk7XG4gICAgc2V0U2VsZWN0ZWRUYWdzKG5leHRTZWxlY3RlZFRhZ3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDb25maXJtKCkge1xuICAgIGlmIChpbnB1dFZhbHVlICYmIHRhZ3MuaW5kZXhPZihpbnB1dFZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIHNldEFsbFRhZ3MoWy4uLmFsbFRhZ3MsIGlucHV0VmFsdWVdKTtcbiAgICB9XG4gICAgc2V0U2hvd0lucHV0KGZhbHNlKTtcbiAgICBzZXRJbnB1dFZhbHVlKFwiXCIpO1xuICB9XG5cbiAgY29uc3QgdGFnc0NvbXBvbmVudCA9IGFsbFRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXG4gICAgPENoZWNrYWJsZVRhZ1xuICAgICAga2V5PXt0YWcgKyBpbmRleH1cbiAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkVGFncy5pbmRleE9mKHRhZykgPiAtMX1cbiAgICAgIG9uQ2hhbmdlPXsoY2hlY2tlZCkgPT4gaGFuZGxlQ2hhbmdlKHRhZywgY2hlY2tlZCl9XG4gICAgPlxuICAgICAge3RhZ31cbiAgICA8L0NoZWNrYWJsZVRhZz5cbiAgKSk7XG5cbiAgY29uc3QgYWRkTmV3VGFnID0gKFxuICAgIDxUYWdcbiAgICAgIGNsYXNzTmFtZT1cInNpdGUtdGFnLXBsdXMgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0lucHV0KCFzaG93SW5wdXQpfVxuICAgID5cbiAgICAgIDxQbHVzT3V0bGluZWQgLz4gTmV3IFRhZ1xuICAgIDwvVGFnPlxuICApO1xuXG4gIGNvbnN0IGNoYW5uZWxMYXlvdXQgPSAoXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiY2hhbm5lbC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRodW1ibmFpbFwiXG4gICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICBzcmM9XCJlcnJvclwiXG4gICAgICAgICAgZmFsbGJhY2s9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1JQUFBRERDQVlBQUFEUXZjNlVBQUFCUldsRFExQkpRME1nVUhKdlptbHNaUUFBS0pGallHQVNTU3dveUdGaFlHREl6U3NwQ25KM1VvaUlqRkpnZjhMQXdTRENJTW9nd01DY21GeGM0QmdRNEFOVXdnQ2pVY0czYXd5TUlQcXlMc2lzN1BQT3EzUWRERmN2alYzak9EMWJvUVZUUFFyZ1Nra3RUZ2JTZjRBNExibWdxSVNCZ1RFRnlGWXVMeWtBc1R1QWJKRWlvS09BN0RrZ2RqcUV2UUhFVG9Ld2o0RFZoQVE1QTlrM2dHeUI1SXhFb0JtTUw0QnNuU1FrOFhRa050UmVFT0J4Y2ZYeFVRZzFNamMwZHlIZ1hOSkJTV3BGQ1loMnppK29MTXBNenloUmNBU0dVcXFDWjE2eW5vNkNrWUdSQVFNREtNd2hxai9mQUljbG94Z0hRcXhBaklIQkV1Z3c1c1VJc1NRcEJvYnRRUGRMY2lMRVZKWXpNUEJITURCc2F5aElMRXFFTzREeEcwdHhtckVSaE0yOW5ZR0JkZHIvLzUvREdSallOUmtZL2w3Ly8vLzM5di8vL3k0RG1uK0xnZUhBTndEcmtsMUF1TytwbWdBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQXdxQURBQVFBQUFBQkFBQUF3d0FBQUFEOWIvSG5BQUFIbGtsRVFWUjRBZTNkUDNQVFdCU0djYkd6TTZHQ0txbElCUlYwZEhSSkZhclEwZVVUOExINEJuUlUwTkhSMFVFRlZkSWxGUlY3VHpSa3NvbVBZOHV5a1RrL3pld1FmS3cvOXpudjR5dkp5bkx2NHVMaVYyZEJvRGlCZjRxUDMvQVJ1Q1JBQkVGQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnUUFRWlFLQW5ZRWFRQkFRYUFTS0lBUUpFa0FFRWVnSm1CRWxBb0JFZ2doZ2dRQVFaUUtBbllFYVFCQVFhQVNLSUFRSkVrQUVFZWdKbUJFbEFvQkVnZ2hnZ1FBUVpRS0FuWUVhUUJBUWFBU0tJQVFKRWtBRUVlZ0ptQkVsQW9CRWdnaGdnMEFqOGkwSk80T3pzclB2NjlXditoaTJxUEhyMHFOdmYzOStpSTk3c29SSWg0ZjN6NTgvdTdkdTNTWFg3WHQ3WjJlbmV2SG16ZlFlK29TTjJhcFNBUGowOVRTcmIrWEtJL2YzNzkrMDgrQTBjTlJFMkFOa3VwaytBQ05QdmtTUGNBQUVpYkFDeVhVeWZBQkdtM3lOSHVBRUNSTmdBWkx1WVBnRWlyS2xIdTd1N1hkeXl0R3dIQWQ4ampOeW5nNE9EN3ZuejUxZGJQVDgvN3o1OCtOQjkrL2J0NmpVL1RJK0FHV0hFbnJ4NDhlSi9Fc1NtSHp4NDBMMTgrZkx5enhGM1pWTWpFeURDaUVEak1ZWlpTNXdpUFhueVpGYkpheE1oUUlRUkd6SHZXUjdYQ3lPQ1hzT21pREFpMUhtUE1NUWpEcGJwRWlEQ2lMMzU4ZU5IdXJXLzVTbldkSUJiWGlEQ2lBMzgvUG56cmNlMll5WjQvLzU5RjNlUExOTWw0UGJwaUwySjBMOTc5Kzd5RHRIRGh3OHZ0enp2ZEduRVhkdlVpZ1NJc0NMQVdhdkhwLytxTTBCY1hNZC9xMjVuMXZGNTdUWUJwMGEzbVV6aWxlUGo0KzdrNUtTTGI2Z3Q2eWRBaFBVelhub1BSMGRIbDc5V0dUTkNmQm5uMXV2U0NKZGVnUWhMSTF2dkNrK2ZQdTJlUFh0MnRaT1lFVjYvZm4zMWR6K3Nod0FSMXNQMWNxdkxudGJFTjlNeEE5eGNZanN4UzFqV1I0QUlhMkliengwdGM0NGZZWC8xNmxWNk5ERkxYSCtZTDMyandpQUNSQmlFYmY1S2NYb1RJc1FTcHpYeDROMjhKYTRCUW9LN3JnWGl5ZGJIangvUDI1VGFRQUpFR0FndVd5MCsyUThQRDYvS2k0UjhFVmwrYnpCT25aWTk1ZnE5cmo5ekFrVEkyU3hkaWRCSHFHOStza2R3NDNib3JDWE8vWmNKZHJhUFdkdjIydUlFaUxBNHE3bnZ2Q3VnOFdUcXpRdmVPSDI2Zm9kbzdnNnVGZS9hMTdXMytuRkJBa1JZRU5SZGIxdmtrejFDSDljUHNWeS9qcmhyMjdQcU1ZdkVOWU5sSEFJZXNSaUJZd1J5MFYrOGlYUDgrL2Z2WDExTXI3TDdFQ3VlYi9yNDhlTXFtN0Z1STJCR1dERUc4Y20rN0czTkVPZm1kY1RRdzRoOS81NWxobTdEZWtSWUtRUFpGMkFyYlhUQXl1NGtEWUIyWXhVendnMGdpLzQxenRIbmZRRzI2SGJHZWwvY3JWcm03dE5ZKy8xYnRrT0VBWjJNMDVyNEZCN3I5R2JBSWR4YVpZckhkT3NnSi93Q0VRWTBKNzRUbU9LbmJ4eFQ5bjNGZ0dHV1dzVmRvd0h0anQ5Tm52Zjd5UU0yYVpVL1RJQUlBeHJ3NmRPbkFXdFpaY29FbkJwTnVUdU9iV01FaUxBeDFIWTBaUUpFbUhKM0hOdkdDQkJoWTZqdGFNb0VpSkIwWjI5dkw2bHM1OHZ4UGNPOC96ZnJkbzVxdktPK2QzRng4V3U4emYxZFc0cC9jUHpMbHkvZHR2OVRzL0ViY3ZHQUhoSHlmQkloWjZOU2lJQlRvMExOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUNSQ2pVYkVQTkNSQWhaNk5TaUFBUkNqWGJVSE1DUk1qWnFCUWlRSVJDelRiVW5BQVJjallxaFFnUW9WQ3pEVFVuUUlTY2pVb2hBa1FvMUd4RHpRa1FJV2VqVW9nQUVRbzEyMUJ6QWtUSTJhZ1VJa0NFUXMwMjFKd0FFWEkyS29VSUVLRlFzdzAxSjBDRW5JMUtJUUpFS05Sc1E4MEpFQ0ZubzFLSUFCRUtOZHRRY3dKRXlObW9GQ0pBaEVMTk50U2NBQkZ5TmlxRkNCQ2hVTE1OTlNkQWhKeU5TaUVDUkNqVWJFUE5DUkFoWjZOU2lBQVJDalhiVUhNQ1JNalpxQlFpUUlSQ3pUYlVuQUFSY2pZcWhRZ1FvVkN6RFRVblFJU2NqVW9oQWtRbzFHeER6UWtRSVdlalVvZ0FFUW8xMjFCekFrVEkyYWdVSWtDRVFzMDIxSndBRVhJMktvVUlFS0ZRc3cwMUowQ0VuSTFLSVFKRUtOUnNRODBKRUNGbm8xS0lBQkVLTmR0UWN3SkV5Tm1vRkNKQWhFTE5OdFNjQUJGeU5pcUZDQkNoVUxNTk5TZEFoSnlOU2lFQ1JDalViRVBOQ1JBaFo2TlNpQUFSQ2pYYlVITUNSTWpacUJRaVFJUkN6VGJVbkFBUmNqWXFoUWdRb1ZDekRUVW5RSVNjalVvaEFrUW8xR3hEelFrUUlXZWpVb2dBRVFvMTIxQnpBa1RJMmFnVUlrQ0VRczAyMUp3QUVYSTJLb1VJRUtGUXN3MDFKMENFbkkxS0lRSkVLTlJzUTgwSkVDRm5vMUtJQUJFS05kdFFjd0pFeU5tb0ZDSkFoRUxOTnRTY0FCRnlOaXFGQ0JDaFVMTU5OU2RBaEp5TlNpRUMvd0dnS0tDNFlNQTRUQUFBQUFCSlJVNUVya0pnZ2c9PVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoMj5UaXRsZTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMz5UYWdzPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgIHt0YWdzQ29tcG9uZW50fVxuICAgICAgICB7IXNob3dJbnB1dCAmJiBhZGROZXdUYWd9XG4gICAgICAgIHtzaG93SW5wdXQgJiYgKFxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZy1pbnB1dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyB0YWdcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dENvbmZpcm19XG4gICAgICAgICAgICBvblByZXNzRW50ZXI9e2hhbmRsZUlucHV0Q29uZmlybX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17Z2V0Q2hhbm5lbH0gY2xhc3NOYW1lPVwibXgtYXV0byBkLWJsb2NrXCI+XG4gICAgICAgIFNhdmVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ2FyZD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2NoYW5uZWwudGl0bGV9PC9oMT5cbiAgICAgIHtjaGFubmVsTGF5b3V0fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "./src/pages/index.scss":
/*!******************************!*\
  !*** ./src/pages/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.scss\n");

/***/ }),

/***/ "./src/services/service.js":
/*!*********************************!*\
  !*** ./src/services/service.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({});\nconst serviceUtil = {\n  get: function get(url, config) {\n    return new Promise(async (res, rej) => {\n      let response = await service.get(url, config);\n      res(response);\n    }).catch(error => {\n      var _error$response, _error$response$data;\n\n      antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].error(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error);\n    });\n  },\n  post: function post(url, data, config) {\n    return new Promise(async (res, rej) => {\n      let response = await service.post(url, data, config);\n      res(response);\n    }).catch(error => {\n      var _error$response2, _error$response2$data;\n\n      antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].error(error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.error);\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (serviceUtil);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2VydmljZS5qcz8zYTc4Il0sIm5hbWVzIjpbInNlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsInNlcnZpY2VVdGlsIiwiZ2V0IiwidXJsIiwiY29uZmlnIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwicG9zdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxFQUFiLENBQWhCO0FBRUEsTUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxLQUFHLEVBQUUsU0FBU0EsR0FBVCxDQUFhQyxHQUFiLEVBQWtCQyxNQUFsQixFQUEwQjtBQUM3QixXQUFPLElBQUlDLE9BQUosQ0FBWSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDckMsVUFBSUMsUUFBUSxHQUFHLE1BQU1WLE9BQU8sQ0FBQ0ksR0FBUixDQUFZQyxHQUFaLEVBQWlCQyxNQUFqQixDQUFyQjtBQUNBRSxTQUFHLENBQUNFLFFBQUQsQ0FBSDtBQUNELEtBSE0sRUFHSkMsS0FISSxDQUdHQyxLQUFELElBQVc7QUFBQTs7QUFDbEJDLGtEQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZCxhQUFjQSxLQUFkLDBDQUFjQSxLQUFLLENBQUVGLFFBQXJCLDRFQUFjLGdCQUFpQkksSUFBL0IseURBQWMscUJBQXVCRixLQUFyQztBQUNELEtBTE0sQ0FBUDtBQU1ELEdBUmlCO0FBU2xCRyxNQUFJLEVBQUUsU0FBU0EsSUFBVCxDQUFjVixHQUFkLEVBQW1CUyxJQUFuQixFQUF5QlIsTUFBekIsRUFBaUM7QUFDckMsV0FBTyxJQUFJQyxPQUFKLENBQVksT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3JDLFVBQUlDLFFBQVEsR0FBRyxNQUFNVixPQUFPLENBQUNlLElBQVIsQ0FBYVYsR0FBYixFQUFrQlMsSUFBbEIsRUFBd0JSLE1BQXhCLENBQXJCO0FBQ0FFLFNBQUcsQ0FBQ0UsUUFBRCxDQUFIO0FBQ0QsS0FITSxFQUdKQyxLQUhJLENBR0dDLEtBQUQsSUFBVztBQUFBOztBQUNsQkMsa0RBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkLGFBQWNBLEtBQWQsMkNBQWNBLEtBQUssQ0FBRUYsUUFBckIsOEVBQWMsaUJBQWlCSSxJQUEvQiwwREFBYyxzQkFBdUJGLEtBQXJDO0FBQ0QsS0FMTSxDQUFQO0FBTUQ7QUFoQmlCLENBQXBCO0FBbUJlVCwwRUFBZiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IHNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe30pO1xuXG5jb25zdCBzZXJ2aWNlVXRpbCA9IHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQodXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBzZXJ2aWNlLmdldCh1cmwsIGNvbmZpZyk7XG4gICAgICByZXMocmVzcG9uc2UpO1xuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcj8ucmVzcG9uc2U/LmRhdGE/LmVycm9yKTtcbiAgICB9KTtcbiAgfSxcbiAgcG9zdDogZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHNlcnZpY2UucG9zdCh1cmwsIGRhdGEsIGNvbmZpZyk7XG4gICAgICByZXMocmVzcG9uc2UpO1xuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcj8ucmVzcG9uc2U/LmRhdGE/LmVycm9yKTtcbiAgICB9KTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VVdGlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/service.js\n");

/***/ }),

/***/ "./src/services/youtube-data.js":
/*!**************************************!*\
  !*** ./src/services/youtube-data.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./src/services/service.js\");\n/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/appconfig */ \"./src/config/appconfig.js\");\n\n\nconst serviceEndpoint = _config_appconfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"].serviceEndpoint;\n\nclass YoutubeDataService {\n  async getChannel() {\n    return _service__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`${serviceEndpoint}/api/get-youtube-channel`);\n  }\n\n}\n\nconst youtubeDataService = new YoutubeDataService();\n/* harmony default export */ __webpack_exports__[\"default\"] = (youtubeDataService);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMveW91dHViZS1kYXRhLmpzPzFjM2YiXSwibmFtZXMiOlsic2VydmljZUVuZHBvaW50IiwiYXBwY29uZmlnIiwiWW91dHViZURhdGFTZXJ2aWNlIiwiZ2V0Q2hhbm5lbCIsInNlcnZpY2UiLCJnZXQiLCJ5b3V0dWJlRGF0YVNlcnZpY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxlQUFlLEdBQUdDLHlEQUFTLENBQUNELGVBQWxDOztBQUVBLE1BQU1FLGtCQUFOLENBQXlCO0FBQ3ZCLFFBQU1DLFVBQU4sR0FBbUI7QUFDakIsV0FBT0MsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFhLEdBQUVMLGVBQWdCLDBCQUEvQixDQUFQO0FBQ0Q7O0FBSHNCOztBQU16QixNQUFNTSxrQkFBa0IsR0FBRyxJQUFJSixrQkFBSixFQUEzQjtBQUNlSSxpRkFBZiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy95b3V0dWJlLWRhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5pbXBvcnQgYXBwY29uZmlnIGZyb20gXCIuLi9jb25maWcvYXBwY29uZmlnXCI7XG5cbmNvbnN0IHNlcnZpY2VFbmRwb2ludCA9IGFwcGNvbmZpZy5zZXJ2aWNlRW5kcG9pbnQ7XG5cbmNsYXNzIFlvdXR1YmVEYXRhU2VydmljZSB7XG4gIGFzeW5jIGdldENoYW5uZWwoKSB7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0KGAke3NlcnZpY2VFbmRwb2ludH0vYXBpL2dldC15b3V0dWJlLWNoYW5uZWxgKTtcbiAgfVxufVxuXG5jb25zdCB5b3V0dWJlRGF0YVNlcnZpY2UgPSBuZXcgWW91dHViZURhdGFTZXJ2aWNlKCk7XG5leHBvcnQgZGVmYXVsdCB5b3V0dWJlRGF0YVNlcnZpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/youtube-data.js\n");

/***/ }),

/***/ "./src/util/tags.js":
/*!**************************!*\
  !*** ./src/util/tags.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst tags = [\"Gaming\", \"Commentary\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (tags);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90YWdzLmpzPzZhOWEiXSwibmFtZXMiOlsidGFncyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQyxRQUFELEVBQVcsWUFBWCxDQUFiO0FBRWVBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3V0aWwvdGFncy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhZ3MgPSBbXCJHYW1pbmdcIiwgXCJDb21tZW50YXJ5XCJdO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/tags.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiPzI0MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFudC1kZXNpZ24vaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });