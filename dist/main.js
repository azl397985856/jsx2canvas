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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ctx = {\n  drawImage: function drawImage(image, dx, dy, dWidth, dHeight) {\n    return {\n      image: image,\n      dx: dx,\n      dy: dy,\n      dWidth: dWidth,\n      dHeight: dHeight\n    };\n  },\n  fillText: function fillText() {}\n};\n\nfunction Canvas(ctx, props, children) {\n  return {};\n}\n\nfunction CImage(ctx, props, children) {\n  if (!props.src) return console.warn(\"src of Image must assigned\");\n  var image = new Image();\n  image.src = props.src;\n  return ctx.drawImage(image, 0, 0, image.width, image.height);\n}\n\nfunction CText(ctx, props, children) {\n  return {};\n}\n\nfunction jsx2canvas(tag, props, children) {\n  if (typeof tag !== \"function\") {\n    return console.warn(\"暂时只支持自定义组件\");\n  }\n\n  console.log(props);\n  return tag(ctx, props, children);\n}\n\nfunction canvas(_ref) {\n  var backgroundImage = _ref.backgroundImage,\n      text = _ref.text,\n      QRCode = _ref.QRCode;\n  return jsx2canvas(Canvas, null, jsx2canvas(CImage, {\n    center: true,\n    middle: true,\n    src: backgroundImage\n  }), jsx2canvas(CText, {\n    center: true,\n    text: text\n  }), jsx2canvas(CImage, {\n    position: {\n      bottom: 0,\n      right: 0\n    },\n    src: QRCode\n  }));\n}\n\nconsole.log(canvas({\n  backgroundImage: \"http://www.bg.com\",\n  text: \"go\",\n  QRCode: \"http://www.qrcode.com\"\n}));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });