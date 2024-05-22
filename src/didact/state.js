export let nextUnitOfWork = null;
export let currentRoot = null;
export let wipRoot = null;
export let deletions = null;

export function setNextUnitOfWork(newNextUnitOfWork) {
  nextUnitOfWork = newNextUnitOfWork;
}

export function setCurrentRoot(newCurrentRoot) {
  currentRoot = newCurrentRoot;
}

export function setWipRoot(newWipRoot) {
  wipRoot = newWipRoot;
}

export function setDeletions(newDeletions) {
  deletions = newDeletions;
}
