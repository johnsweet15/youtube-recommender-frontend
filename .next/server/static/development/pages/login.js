module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./src/pages/login/index.js":
/*!**********************************!*\
  !*** ./src/pages/login/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login */ \"./src/services/login.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ \"./src/pages/login/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/johnsweet/repos/starter-frontend/src/pages/login/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Login() {\n  const onFinish = async values => {\n    const {\n      username,\n      password\n    } = values;\n    let loginRes = await _services_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login({\n      username,\n      password\n    });\n    console.log(loginRes);\n\n    if (loginRes.ok) {\n      antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].success(\"Logged in\");\n    } else {\n      antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].error(loginRes);\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    xs: 22,\n    sm: 18,\n    md: 12,\n    lg: 8,\n    style: {\n      margin: \"auto\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"PageHeader\"], {\n    className: \"site-page-header\",\n    title: \"Login\",\n    subTitle: \"Enter auth info\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    name: \"normal_login\",\n    className: \"\",\n    initialValues: {\n      remember: true\n    },\n    onFinish: onFinish,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    name: \"username\",\n    rules: [{\n      required: true,\n      message: \"Please input your Username!\"\n    }],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"UserOutlined\"], {\n      className: \"site-form-item-icon\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 25\n      }\n    }),\n    placeholder: \"Username\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 15\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    name: \"password\",\n    rules: [{\n      required: true,\n      message: \"Please input your Password!\"\n    }],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"LockOutlined\"], {\n      className: \"site-form-item-icon\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 25\n      }\n    }),\n    type: \"password\",\n    placeholder: \"Password\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 15\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    name: \"remember\",\n    valuePropName: \"checked\",\n    noStyle: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Checkbox\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }, \"Remember me\")), __jsx(\"a\", {\n    className: \"login-form-forgot\",\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, \"Forgot password\")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    className: \"login-form-button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 15\n    }\n  }, \"Log in\"), \"Or \", __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 18\n    }\n  }, \"register now!\"))))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4vaW5kZXguanM/ODBjMSJdLCJuYW1lcyI6WyJMb2dpbiIsIm9uRmluaXNoIiwidmFsdWVzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxvZ2luUmVzIiwibG9naW5TZXJ2aWNlIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwib2siLCJtZXNzYWdlIiwic3VjY2VzcyIsImVycm9yIiwibWFyZ2luIiwicmVtZW1iZXIiLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFDOUIsUUFBTUMsUUFBUSxHQUFHLE1BQU9DLE1BQVAsSUFBa0I7QUFDakMsVUFBTTtBQUFFQyxjQUFGO0FBQVlDO0FBQVosUUFBeUJGLE1BQS9CO0FBQ0EsUUFBSUcsUUFBUSxHQUFHLE1BQU1DLHVEQUFZLENBQUNDLEtBQWIsQ0FBbUI7QUFBRUosY0FBRjtBQUFZQztBQUFaLEtBQW5CLENBQXJCO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaOztBQUNBLFFBQUlBLFFBQVEsQ0FBQ0ssRUFBYixFQUFpQjtBQUNmQyxrREFBTyxDQUFDQyxPQUFSLENBQWdCLFdBQWhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELGtEQUFPLENBQUNFLEtBQVIsQ0FBY1IsUUFBZDtBQUNEO0FBQ0YsR0FURDs7QUFXQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLE1BQUUsRUFBRSxDQUFqQztBQUFvQyxTQUFLLEVBQUU7QUFBRVMsWUFBTSxFQUFFO0FBQVYsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFDRSxhQUFTLEVBQUMsa0JBRFo7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLFlBQVEsRUFBQyxpQkFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRSxNQUFDLHlDQUFEO0FBQ0UsUUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFTLEVBQUMsRUFGWjtBQUdFLGlCQUFhLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FIakI7QUFJRSxZQUFRLEVBQUVkLFFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxTQUFLLEVBQUUsQ0FDTDtBQUFFZSxjQUFRLEVBQUUsSUFBWjtBQUFrQkwsYUFBTyxFQUFFO0FBQTNCLEtBREssQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQywwQ0FBRDtBQUNFLFVBQU0sRUFBRSxNQUFDLDhEQUFEO0FBQWMsZUFBUyxFQUFDLHFCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFY7QUFFRSxlQUFXLEVBQUMsVUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FORixFQWlCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsU0FBSyxFQUFFLENBQ0w7QUFBRUssY0FBUSxFQUFFLElBQVo7QUFBa0JMLGFBQU8sRUFBRTtBQUEzQixLQURLLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsMENBQUQ7QUFDRSxVQUFNLEVBQUUsTUFBQyw4REFBRDtBQUFjLGVBQVMsRUFBQyxxQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURWO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxlQUFXLEVBQUMsVUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FqQkYsRUE2QkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsUUFBSSxFQUFDLFVBQWhCO0FBQTJCLGlCQUFhLEVBQUMsU0FBekM7QUFBbUQsV0FBTyxNQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFLRTtBQUFHLGFBQVMsRUFBQyxtQkFBYjtBQUFpQyxRQUFJLEVBQUMsRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRixDQTdCRixFQXVDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNFLFFBQUksRUFBQyxTQURQO0FBRUUsWUFBUSxFQUFDLFFBRlg7QUFHRSxhQUFTLEVBQUMsbUJBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLFNBUUs7QUFBRyxRQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJMLENBdkNGLENBTkYsQ0FERixDQURGLENBREY7QUErREQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGb3JtLFxuICBJbnB1dCxcbiAgQnV0dG9uLFxuICBDaGVja2JveCxcbiAgUGFnZUhlYWRlcixcbiAgUm93LFxuICBDb2wsXG4gIG1lc3NhZ2UsXG59IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IGxvZ2luU2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9naW5cIjtcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3Qgb25GaW5pc2ggPSBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHZhbHVlcztcbiAgICBsZXQgbG9naW5SZXMgPSBhd2FpdCBsb2dpblNlcnZpY2UubG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG4gICAgY29uc29sZS5sb2cobG9naW5SZXMpO1xuICAgIGlmIChsb2dpblJlcy5vaykge1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiTG9nZ2VkIGluXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmVycm9yKGxvZ2luUmVzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHhzPXsyMn0gc209ezE4fSBtZD17MTJ9IGxnPXs4fSBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxQYWdlSGVhZGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLXBhZ2UtaGVhZGVyXCJcbiAgICAgICAgICAgIHRpdGxlPVwiTG9naW5cIlxuICAgICAgICAgICAgc3ViVGl0bGU9XCJFbnRlciBhdXRoIGluZm9cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIG5hbWU9XCJub3JtYWxfbG9naW5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cbiAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBVc2VybmFtZSFcIiB9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwcmVmaXg9ezxVc2VyT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBQYXNzd29yZCFcIiB9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInJlbWVtYmVyXCIgdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIiBub1N0eWxlPlxuICAgICAgICAgICAgICAgIDxDaGVja2JveD5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tZm9yZ290XCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1idXR0b25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICBPciA8YSBocmVmPVwiXCI+cmVnaXN0ZXIgbm93ITwvYT5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login/index.js\n");

/***/ }),

/***/ "./src/pages/login/index.scss":
/*!************************************!*\
  !*** ./src/pages/login/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9wYWdlcy9sb2dpbi9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login/index.scss\n");

/***/ }),

/***/ "./src/services/login.js":
/*!*******************************!*\
  !*** ./src/services/login.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./src/services/service.js\");\n/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/appconfig */ \"./src/config/appconfig.js\");\n\n\n\nclass LoginService {\n  async login(data) {\n    return _service__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_config_appconfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"].serviceEndpoint + \"/login/login\", data);\n  }\n\n}\n\nconst loginService = new LoginService();\n/* harmony default export */ __webpack_exports__[\"default\"] = (loginService);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbG9naW4uanM/NmE3YyJdLCJuYW1lcyI6WyJMb2dpblNlcnZpY2UiLCJsb2dpbiIsImRhdGEiLCJzZXJ2aWNlIiwicG9zdCIsImFwcGNvbmZpZyIsInNlcnZpY2VFbmRwb2ludCIsImxvZ2luU2VydmljZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFOLENBQW1CO0FBQ2pCLFFBQU1DLEtBQU4sQ0FBWUMsSUFBWixFQUFrQjtBQUNoQixXQUFPQyxnREFBTyxDQUFDQyxJQUFSLENBQWFDLHlEQUFTLENBQUNDLGVBQVYsR0FBNEIsY0FBekMsRUFBeURKLElBQXpELENBQVA7QUFDRDs7QUFIZ0I7O0FBTW5CLE1BQU1LLFlBQVksR0FBRyxJQUFJUCxZQUFKLEVBQXJCO0FBQ2VPLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlcnZpY2UgZnJvbSBcIi4vc2VydmljZVwiO1xuaW1wb3J0IGFwcGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2FwcGNvbmZpZ1wiO1xuXG5jbGFzcyBMb2dpblNlcnZpY2Uge1xuICBhc3luYyBsb2dpbihkYXRhKSB7XG4gICAgcmV0dXJuIHNlcnZpY2UucG9zdChhcHBjb25maWcuc2VydmljZUVuZHBvaW50ICsgXCIvbG9naW4vbG9naW5cIiwgZGF0YSk7XG4gIH1cbn1cblxuY29uc3QgbG9naW5TZXJ2aWNlID0gbmV3IExvZ2luU2VydmljZSgpO1xuZXhwb3J0IGRlZmF1bHQgbG9naW5TZXJ2aWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/login.js\n");

/***/ }),

/***/ "./src/services/service.js":
/*!*********************************!*\
  !*** ./src/services/service.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Service {\n  constructor() {\n    _defineProperty(this, \"handleError\", error => {\n      var _error$response;\n\n      switch (error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) {\n        case 403:\n          antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].error(\"Invalid session. Please try signing in again.\");\n          break;\n\n        case 404:\n          antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].error(\"Not found\");\n          break;\n\n        default:\n          antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].error(\"Internal server error.\");\n          break;\n      }\n\n      return Promise.reject(error);\n    });\n\n    let service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({});\n    service.interceptors.response.use(this.handleSuccess, this.handleError);\n    this.service = service;\n  }\n\n  handleSuccess(response) {\n    return response;\n  }\n\n  get(path, params) {\n    return this.service.get(path, {\n      params: params\n    });\n  }\n\n  post(path, payload) {\n    return this.service.post(path, payload);\n  }\n\n}\n\nlet service = new Service();\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2VydmljZS5qcz8zYTc4Il0sIm5hbWVzIjpbIlNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwiUHJvbWlzZSIsInJlamVjdCIsInNlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInVzZSIsImhhbmRsZVN1Y2Nlc3MiLCJoYW5kbGVFcnJvciIsImdldCIsInBhdGgiLCJwYXJhbXMiLCJwb3N0IiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTixDQUFjO0FBQ1pDLGFBQVcsR0FBRztBQUFBLHlDQVdDQyxLQUFELElBQVc7QUFBQTs7QUFDdkIsY0FBUUEsS0FBUixhQUFRQSxLQUFSLDBDQUFRQSxLQUFLLENBQUVDLFFBQWYsb0RBQVEsZ0JBQWlCQyxNQUF6QjtBQUNFLGFBQUssR0FBTDtBQUNFQyxzREFBTyxDQUFDSCxLQUFSLENBQWMsK0NBQWQ7QUFDQTs7QUFDRixhQUFLLEdBQUw7QUFDRUcsc0RBQU8sQ0FBQ0gsS0FBUixDQUFjLFdBQWQ7QUFDQTs7QUFDRjtBQUNFRyxzREFBTyxDQUFDSCxLQUFSLENBQWMsd0JBQWQ7QUFDQTtBQVRKOztBQVdBLGFBQU9JLE9BQU8sQ0FBQ0MsTUFBUixDQUFlTCxLQUFmLENBQVA7QUFDRCxLQXhCYTs7QUFDWixRQUFJTSxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxFQUFiLENBQWQ7QUFFQUYsV0FBTyxDQUFDRyxZQUFSLENBQXFCUixRQUFyQixDQUE4QlMsR0FBOUIsQ0FBa0MsS0FBS0MsYUFBdkMsRUFBc0QsS0FBS0MsV0FBM0Q7QUFDQSxTQUFLTixPQUFMLEdBQWVBLE9BQWY7QUFDRDs7QUFFREssZUFBYSxDQUFDVixRQUFELEVBQVc7QUFDdEIsV0FBT0EsUUFBUDtBQUNEOztBQWlCRFksS0FBRyxDQUFDQyxJQUFELEVBQU9DLE1BQVAsRUFBZTtBQUNoQixXQUFPLEtBQUtULE9BQUwsQ0FBYU8sR0FBYixDQUFpQkMsSUFBakIsRUFBdUI7QUFBRUMsWUFBTSxFQUFFQTtBQUFWLEtBQXZCLENBQVA7QUFDRDs7QUFFREMsTUFBSSxDQUFDRixJQUFELEVBQU9HLE9BQVAsRUFBZ0I7QUFDbEIsV0FBTyxLQUFLWCxPQUFMLENBQWFVLElBQWIsQ0FBa0JGLElBQWxCLEVBQXdCRyxPQUF4QixDQUFQO0FBQ0Q7O0FBakNXOztBQW9DZCxJQUFJWCxPQUFPLEdBQUcsSUFBSVIsT0FBSixFQUFkO0FBQ2VRLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL3NlcnZpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcblxuY2xhc3MgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHt9KTtcblxuICAgIHNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSh0aGlzLmhhbmRsZVN1Y2Nlc3MsIHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gIH1cblxuICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICBzd2l0Y2ggKGVycm9yPy5yZXNwb25zZT8uc3RhdHVzKSB7XG4gICAgICBjYXNlIDQwMzpcbiAgICAgICAgbWVzc2FnZS5lcnJvcihcIkludmFsaWQgc2Vzc2lvbi4gUGxlYXNlIHRyeSBzaWduaW5nIGluIGFnYWluLlwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQwNDpcbiAgICAgICAgbWVzc2FnZS5lcnJvcihcIk5vdCBmb3VuZFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtZXNzYWdlLmVycm9yKFwiSW50ZXJuYWwgc2VydmVyIGVycm9yLlwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH07XG5cbiAgZ2V0KHBhdGgsIHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0KHBhdGgsIHsgcGFyYW1zOiBwYXJhbXMgfSk7XG4gIH1cblxuICBwb3N0KHBhdGgsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnBvc3QocGF0aCwgcGF5bG9hZCk7XG4gIH1cbn1cblxubGV0IHNlcnZpY2UgPSBuZXcgU2VydmljZSgpO1xuZXhwb3J0IGRlZmF1bHQgc2VydmljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/service.js\n");

/***/ }),

/***/ 3:
/*!****************************************!*\
  !*** multi ./src/pages/login/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/johnsweet/repos/starter-frontend/src/pages/login/index.js */"./src/pages/login/index.js");


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