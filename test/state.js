import { Didact } from "../React.js";

function App(props) {
  const [state, setState] = Didact.useState(1);
  return Didact.createElement(
    "h1",
    null,
    Didact.createElement(
      "button",
      { onclick: () => setState((c) => c + 1) },
      "Increase count"
    ),
    state
  );
}

const element = Didact.createElement(App, { name: "foo" });

const container = document.getElementById("root");

Didact.render(element, container);
