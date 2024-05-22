/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _didact_Didact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./didact/Didact.js */ \"./src/didact/Didact.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/** @jsx Didact.createElement */\nfunction Counter() {\n  var _Didact$useState = _didact_Didact_js__WEBPACK_IMPORTED_MODULE_0__.Didact.useState(1),\n    _Didact$useState2 = _slicedToArray(_Didact$useState, 2),\n    state = _Didact$useState2[0],\n    setState = _Didact$useState2[1];\n  return _didact_Didact_js__WEBPACK_IMPORTED_MODULE_0__.Didact.createElement(\"h1\", {\n    onClick: function onClick() {\n      return setState(function (c) {\n        return c + 1;\n      });\n    }\n  }, \"Count: \", state);\n}\nvar element = _didact_Didact_js__WEBPACK_IMPORTED_MODULE_0__.Didact.createElement(Counter, null);\nvar container = document.getElementById(\"root\");\n_didact_Didact_js__WEBPACK_IMPORTED_MODULE_0__.Didact.render(element, container);\n\n// function App(props) {\n//   const [state, setState] = Didact.useState(1);\n//   return Didact.createElement(\n//     \"h1\",\n//     null,\n//     Didact.createElement(\n//       \"button\",\n//       { onclick: () => setState((c) => c + 1) },\n//       \"Increase count\"\n//     ),\n//     state\n//   );\n// }\n\n// const element = Didact.createElement(App, { name: \"foo\" });\n\n// const container = document.getElementById(\"root\");\n\n// Didact.render(element, container);\n\n//# sourceURL=webpack://my-esm-project/./src/index.jsx?");

/***/ }),

/***/ "./src/didact/Didact.js":
/*!******************************!*\
  !*** ./src/didact/Didact.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Didact: () => (/* binding */ Didact)\n/* harmony export */ });\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/didact/createElement.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/didact/render.js\");\n/* harmony import */ var _useState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useState.js */ \"./src/didact/useState.js\");\n\n\n\nvar Didact = {\n  createElement: _createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElement,\n  render: _render_js__WEBPACK_IMPORTED_MODULE_1__.render,\n  useState: _useState_js__WEBPACK_IMPORTED_MODULE_2__.useState\n};\n\n//# sourceURL=webpack://my-esm-project/./src/didact/Didact.js?");

/***/ }),

/***/ "./src/didact/createDom.js":
/*!*********************************!*\
  !*** ./src/didact/createDom.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDom: () => (/* binding */ createDom),\n/* harmony export */   updateDom: () => (/* binding */ updateDom)\n/* harmony export */ });\nfunction createDom(fiber) {\n  var dom = fiber.type == \"TEXT_ELEMENT\" ? document.createTextNode(\"\") : document.createElement(fiber.type);\n  updateDom(dom, {}, fiber.props);\n  return dom;\n}\nvar isEvent = function isEvent(key) {\n  return key.startsWith(\"on\");\n};\nvar isProperty = function isProperty(key) {\n  return key !== \"children\" && !isEvent(key);\n};\nvar isNew = function isNew(prev, next) {\n  return function (key) {\n    return prev[key] !== next[key];\n  };\n};\nvar isGone = function isGone(prev, next) {\n  return function (key) {\n    return !(key in next);\n  };\n};\nfunction updateDom(dom, prevProps, nextProps) {\n  Object.keys(prevProps).filter(isEvent).filter(function (key) {\n    return !(key in nextProps) || isNew(prevProps, nextProps)(key);\n  }).forEach(function (name) {\n    var eventType = name.toLowerCase().substring(2);\n    dom.removeEventListener(eventType, prevProps[name]);\n  });\n  Object.keys(prevProps).filter(isProperty).filter(isGone(prevProps, nextProps)).forEach(function (name) {\n    dom[name] = \"\";\n  });\n  Object.keys(nextProps).filter(isProperty).filter(isNew(prevProps, nextProps)).forEach(function (name) {\n    dom[name] = nextProps[name];\n  });\n  Object.keys(nextProps).filter(isEvent).filter(isNew(prevProps, nextProps)).forEach(function (name) {\n    var eventType = name.toLowerCase().substring(2);\n    dom.addEventListener(eventType, nextProps[name]);\n  });\n}\n\n//# sourceURL=webpack://my-esm-project/./src/didact/createDom.js?");

/***/ }),

/***/ "./src/didact/createElement.js":
/*!*************************************!*\
  !*** ./src/didact/createElement.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction createElement(type, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  return {\n    type: type,\n    props: _objectSpread(_objectSpread({}, props), {}, {\n      children: children.map(function (child) {\n        return _typeof(child) === \"object\" ? child : createTextElement(child);\n      })\n    })\n  };\n}\nfunction createTextElement(text) {\n  return {\n    type: \"TEXT_ELEMENT\",\n    props: {\n      nodeValue: text,\n      children: []\n    }\n  };\n}\n\n//# sourceURL=webpack://my-esm-project/./src/didact/createElement.js?");

/***/ }),

/***/ "./src/didact/reconcileChildren.js":
/*!*****************************************!*\
  !*** ./src/didact/reconcileChildren.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reconcileChildren: () => (/* binding */ reconcileChildren)\n/* harmony export */ });\nfunction reconcileChildren(wipFiber, elements) {\n  var index = 0;\n  var oldFiber = wipFiber.alternate && wipFiber.alternate.child;\n  var prevSibling = null;\n  while (index < elements.length || oldFiber != null) {\n    var element = elements[index];\n    var newFiber = null;\n    var sameType = oldFiber && element && element.type == oldFiber.type;\n    if (sameType) {\n      newFiber = {\n        type: oldFiber.type,\n        props: element.props,\n        dom: oldFiber.dom,\n        parent: wipFiber,\n        alternate: oldFiber,\n        effectTag: \"UPDATE\"\n      };\n    }\n    if (element && !sameType) {\n      newFiber = {\n        type: element.type,\n        props: element.props,\n        dom: null,\n        parent: wipFiber,\n        alternate: null,\n        effectTag: \"PLACEMENT\"\n      };\n    }\n    if (oldFiber && !sameType) {\n      oldFiber.effectTag = \"DELETION\";\n      deletions.push(oldFiber);\n    }\n    if (oldFiber) {\n      oldFiber = oldFiber.sibling;\n    }\n    if (index === 0) {\n      wipFiber.child = newFiber;\n    } else if (element) {\n      prevSibling.sibling = newFiber;\n    }\n    prevSibling = newFiber;\n    index++;\n  }\n}\n\n//# sourceURL=webpack://my-esm-project/./src/didact/reconcileChildren.js?");

/***/ }),

/***/ "./src/didact/render.js":
/*!******************************!*\
  !*** ./src/didact/render.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/didact/createElement.js\");\n/* harmony import */ var _createDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDom.js */ \"./src/didact/createDom.js\");\n/* harmony import */ var _reconcileChildren_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reconcileChildren.js */ \"./src/didact/reconcileChildren.js\");\n/* harmony import */ var _updateFunctionComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateFunctionComponent.js */ \"./src/didact/updateFunctionComponent.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state.js */ \"./src/didact/state.js\");\n\n\n\n\n\nfunction commitRoot() {\n  _state_js__WEBPACK_IMPORTED_MODULE_4__.deletions.forEach(commitWork);\n  commitWork(_state_js__WEBPACK_IMPORTED_MODULE_4__.wipRoot.child);\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentRoot)(_state_js__WEBPACK_IMPORTED_MODULE_4__.wipRoot);\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_4__.setWipRoot)(null);\n}\nfunction commitWork(fiber) {\n  if (!fiber) {\n    return;\n  }\n  var domParentFiber = fiber.parent;\n  while (!domParentFiber.dom) {\n    domParentFiber = domParentFiber.parent;\n  }\n  var domParent = domParentFiber.dom;\n  if (fiber.effectTag === \"PLACEMENT\" && fiber.dom != null) {\n    domParent.appendChild(fiber.dom);\n  } else if (fiber.effectTag === \"UPDATE\" && fiber.dom != null) {\n    (0,_createDom_js__WEBPACK_IMPORTED_MODULE_1__.updateDom)(fiber.dom, fiber.alternate.props, fiber.props);\n  } else if (fiber.effectTag === \"DELETION\") {\n    commitDeletion(fiber, domParent);\n  }\n  commitWork(fiber.child);\n  commitWork(fiber.sibling);\n}\nfunction commitDeletion(fiber, domParent) {\n  if (fiber.dom) {\n    domParent.removeChild(fiber.dom);\n  } else {\n    commitDeletion(fiber.child, domParent);\n  }\n}\nfunction render(element, container) {\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_4__.setWipRoot)({\n    dom: container,\n    props: {\n      children: [element]\n    },\n    alternate: _state_js__WEBPACK_IMPORTED_MODULE_4__.currentRoot\n  });\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_4__.setDeletions)([]);\n  (0,_state_js__WEBPACK_IMPORTED_MODULE_4__.setNextUnitOfWork)(_state_js__WEBPACK_IMPORTED_MODULE_4__.wipRoot);\n}\nfunction workLoop(deadline) {\n  var shouldYield = false;\n  while (_state_js__WEBPACK_IMPORTED_MODULE_4__.nextUnitOfWork && !shouldYield) {\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_4__.setNextUnitOfWork)(performUnitOfWork(_state_js__WEBPACK_IMPORTED_MODULE_4__.nextUnitOfWork));\n    shouldYield = deadline.timeRemaining() < 1;\n  }\n  if (!_state_js__WEBPACK_IMPORTED_MODULE_4__.nextUnitOfWork && _state_js__WEBPACK_IMPORTED_MODULE_4__.wipRoot) {\n    commitRoot();\n  }\n  requestIdleCallback(workLoop);\n}\nrequestIdleCallback(workLoop);\nfunction performUnitOfWork(fiber) {\n  var isFunctionComponent = fiber.type instanceof Function;\n  if (isFunctionComponent) {\n    (0,_updateFunctionComponent_js__WEBPACK_IMPORTED_MODULE_3__.updateFunctionComponent)(fiber);\n  } else {\n    updateHostComponent(fiber);\n  }\n  if (fiber.child) {\n    return fiber.child;\n  }\n  var nextFiber = fiber;\n  while (nextFiber) {\n    if (nextFiber.sibling) {\n      return nextFiber.sibling;\n    }\n    nextFiber = nextFiber.parent;\n  }\n}\nfunction updateHostComponent(fiber) {\n  if (!fiber.dom) {\n    fiber.dom = (0,_createDom_js__WEBPACK_IMPORTED_MODULE_1__.createDom)(fiber);\n  }\n  (0,_reconcileChildren_js__WEBPACK_IMPORTED_MODULE_2__.reconcileChildren)(fiber, fiber.props.children);\n}\n\n//# sourceURL=webpack://my-esm-project/./src/didact/render.js?");

/***/ }),

/***/ "./src/didact/state.js":
/*!*****************************!*\
  !*** ./src/didact/state.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentRoot: () => (/* binding */ currentRoot),\n/* harmony export */   deletions: () => (/* binding */ deletions),\n/* harmony export */   nextUnitOfWork: () => (/* binding */ nextUnitOfWork),\n/* harmony export */   setCurrentRoot: () => (/* binding */ setCurrentRoot),\n/* harmony export */   setDeletions: () => (/* binding */ setDeletions),\n/* harmony export */   setNextUnitOfWork: () => (/* binding */ setNextUnitOfWork),\n/* harmony export */   setWipRoot: () => (/* binding */ setWipRoot),\n/* harmony export */   wipRoot: () => (/* binding */ wipRoot)\n/* harmony export */ });\nvar nextUnitOfWork = null;\nvar currentRoot = null;\nvar wipRoot = null;\nvar deletions = null;\nfunction setNextUnitOfWork(newNextUnitOfWork) {\n  nextUnitOfWork = newNextUnitOfWork;\n}\nfunction setCurrentRoot(newCurrentRoot) {\n  currentRoot = newCurrentRoot;\n}\nfunction setWipRoot(newWipRoot) {\n  wipRoot = newWipRoot;\n}\nfunction setDeletions(newDeletions) {\n  deletions = newDeletions;\n}\n\n//# sourceURL=webpack://my-esm-project/./src/didact/state.js?");

/***/ }),

/***/ "./src/didact/updateFunctionComponent.js":
/*!***********************************************!*\
  !*** ./src/didact/updateFunctionComponent.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHookIndex: () => (/* binding */ getHookIndex),\n/* harmony export */   getWipFiber: () => (/* binding */ getWipFiber),\n/* harmony export */   incrementHookIndex: () => (/* binding */ incrementHookIndex),\n/* harmony export */   updateFunctionComponent: () => (/* binding */ updateFunctionComponent)\n/* harmony export */ });\n/* harmony import */ var _reconcileChildren_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reconcileChildren.js */ \"./src/didact/reconcileChildren.js\");\n\nvar wipFiber = null;\nvar hookIndex = null;\nfunction updateFunctionComponent(fiber) {\n  wipFiber = fiber;\n  hookIndex = 0;\n  wipFiber.hooks = [];\n  var children = [fiber.type(fiber.props)];\n  (0,_reconcileChildren_js__WEBPACK_IMPORTED_MODULE_0__.reconcileChildren)(fiber, children);\n}\nfunction getWipFiber() {\n  return wipFiber;\n}\nfunction getHookIndex() {\n  return hookIndex;\n}\nfunction incrementHookIndex() {\n  hookIndex++;\n}\n\n//# sourceURL=webpack://my-esm-project/./src/didact/updateFunctionComponent.js?");

/***/ }),

/***/ "./src/didact/useState.js":
/*!********************************!*\
  !*** ./src/didact/useState.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useState: () => (/* binding */ useState)\n/* harmony export */ });\n/* harmony import */ var _updateFunctionComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateFunctionComponent.js */ \"./src/didact/updateFunctionComponent.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ \"./src/didact/state.js\");\n// src/Didact/useState.js\n\n\nfunction useState(initial) {\n  var wipFiber = (0,_updateFunctionComponent_js__WEBPACK_IMPORTED_MODULE_0__.getWipFiber)();\n  var hookIndex = (0,_updateFunctionComponent_js__WEBPACK_IMPORTED_MODULE_0__.getHookIndex)();\n  var oldHook = wipFiber.alternate && wipFiber.alternate.hooks && wipFiber.alternate.hooks[hookIndex];\n  var hook = {\n    state: oldHook ? oldHook.state : initial,\n    queue: []\n  };\n  var actions = oldHook ? oldHook.queue : [];\n  actions.forEach(function (action) {\n    hook.state = action(hook.state);\n  });\n  var setState = function setState(action) {\n    hook.queue.push(action);\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setWipRoot)({\n      dom: _state_js__WEBPACK_IMPORTED_MODULE_1__.currentRoot.dom,\n      props: _state_js__WEBPACK_IMPORTED_MODULE_1__.currentRoot.props,\n      alternate: _state_js__WEBPACK_IMPORTED_MODULE_1__.currentRoot\n    });\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setNextUnitOfWork)(_state_js__WEBPACK_IMPORTED_MODULE_1__.wipRoot);\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setDeletions)([]);\n  };\n  wipFiber.hooks.push(hook);\n  (0,_updateFunctionComponent_js__WEBPACK_IMPORTED_MODULE_0__.incrementHookIndex)();\n  return [hook.state, setState];\n}\n\n//# sourceURL=webpack://my-esm-project/./src/didact/useState.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.jsx");
/******/ 	
/******/ })()
;