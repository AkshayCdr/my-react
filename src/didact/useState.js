// src/Didact/useState.js
import {
  getWipFiber,
  getHookIndex,
  incrementHookIndex,
} from "./updateFunctionComponent.js";
import {
  setWipRoot,
  setNextUnitOfWork,
  setDeletions,
  currentRoot,
  wipRoot,
} from "./state.js";

export function useState(initial) {
  const wipFiber = getWipFiber();
  const hookIndex = getHookIndex();

  const oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex];
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  };

  const actions = oldHook ? oldHook.queue : [];
  actions.forEach((action) => {
    hook.state = action(hook.state);
  });

  const setState = (action) => {
    hook.queue.push(action);
    setWipRoot({
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    });
    setNextUnitOfWork(wipRoot);
    setDeletions([]);
  };

  wipFiber.hooks.push(hook);
  incrementHookIndex();
  return [hook.state, setState];
}
