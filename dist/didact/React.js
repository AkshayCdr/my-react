"use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true,
// });
const _Didact = void 0;
// export { _Didact as Didact };
const _render = render;
export { _render as render };
import { createElement as __createElement } from "./createElement.js";
import { updateDom, createDom } from "./createDom.js";
import { reconcileChildren } from "./reconcileChildren.js";
// import { render } from "./renderElement.js";

function commitRoot() {
  deletions.forEach(commitWork);
  commitWork(wipRoot.child);
  currentRoot = wipRoot;
  wipRoot = null;
}
function commitWork(fiber) {
  if (!fiber) {
    return;
  }
  var domParentFiber = fiber.parent;
  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent;
  }
  var domParent = domParentFiber.dom;

  // const domParent = fiber.parent.dom;
  if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    (0, updateDom)(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === "DELETION") {
    // domParent.removeChild(fiber.dom);
    commitDeletion(fiber, domParent);
  }
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}
function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom);
  } else {
    commitDeletion(fiber.child, domParent);
  }
}
function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot,
  };
  deletions = [];
  nextUnitOfWork = wipRoot;
}
var nextUnitOfWork = null;
var currentRoot = null;
//work in progress root - to avoid incomlete rendering when there is interrupt from browser
var wipRoot = null;
var deletions = null;

//process unit of work untill browser need yield controll
function workLoop(deadline) {
  var shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    //perform work untill deadline
    shouldYield = deadline.timeRemaining() < 1;
  }

  //after finish all  the work fiber tree then add to dom
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }
  requestIdleCallback(workLoop);
}

// to call during browser idle period -
//without impacting latency-critical events
//such as animation and input response
requestIdleCallback(workLoop);
function performUnitOfWork(fiber) {
  var isFunctionComponent = fiber.type instanceof Function;
  if (isFunctionComponent) {
    updateFunctionComponent(fiber);
  } else {
    updateHostComponent(fiber);
  }
  if (fiber.child) {
    return fiber.child;
  }
  var nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}
var wipFiber = null;
var hookIndex = null;
function updateFunctionComponent(fiber) {
  wipFiber = fiber;
  hookIndex = 0;
  wipFiber.hooks = [];
  var children = [fiber.type(fiber.props)];
  (0, reconcileChildren)(fiber, children);
}
function useState(initial) {
  var oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex];
  var hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  };
  var actions = oldHook ? oldHook.queue : [];
  actions.forEach(function (action) {
    hook.state = action(hook.state);
  });
  var setState = function setState(action) {
    hook.queue.push(action);
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    };
    nextUnitOfWork = wipRoot;
    deletions = [];
  };
  wipFiber.hooks.push(hook);
  hookIndex++;
  return [hook.state, setState];
}
function updateHostComponent(fiber) {
  if (!fiber.dom) {
    fiber.dom = (0, createDom)(fiber);
  }
  (0, reconcileChildren)(fiber, fiber.props.children);
}
// export var Didact =() => {
//   createElement: __createElement,
//   render: render,
//   useState: useState,
// };

export const Didact = {
  createElement: __createElement,
  render,
  useState,
};
