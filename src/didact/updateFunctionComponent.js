import { reconcileChildren } from "./reconcileChildren.js";

let wipFiber = null;
let hookIndex = null;

export function updateFunctionComponent(fiber) {
  wipFiber = fiber;
  hookIndex = 0;
  wipFiber.hooks = [];
  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}

export function getWipFiber() {
  return wipFiber;
}

export function getHookIndex() {
  return hookIndex;
}

export function incrementHookIndex() {
  hookIndex++;
}
