"use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true,
// });
const _createDom = createDom;
export { _createDom as createDom };
const _updateDom = updateDom;
export { _updateDom as updateDom };
function createDom(fiber) {
  var dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);
  updateDom(dom, {}, fiber.props);
  return dom;
}
var isEvent = function isEvent(key) {
  return key.startsWith("on");
};
var isProperty = function isProperty(key) {
  return key !== "children" && !isEvent(key);
};
var isNew = function isNew(prev, next) {
  return function (key) {
    return prev[key] !== next[key];
  };
};
var isGone = function isGone(prev, next) {
  return function (key) {
    return !(key in next);
  };
};
function updateDom(dom, prevProps, nextProps) {
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(function (key) {
      return !(key in nextProps) || isNew(prevProps, nextProps)(key);
    })
    .forEach(function (name) {
      var eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(function (name) {
      dom[name] = "";
    });
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(function (name) {
      dom[name] = nextProps[name];
    });
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(function (name) {
      var eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}
