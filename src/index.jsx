import { Didact } from "./didact/Didact.js";

/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1);
  return <h1 onClick={() => setState((c) => c + 1)}>Count: {state}</h1>;
}
const element = <Counter />;

const container = document.getElementById("root");
Didact.render(element, container);

// function App(props) {
//   const [state, setState] = Didact.useState(1);
//   return Didact.createElement(
//     "h1",
//     null,
//     Didact.createElement(
//       "button",
//       { onclick: () => setState((c) => c + 1) },
//       "Increase count"
//     ),
//     state
//   );
// }

// const element = Didact.createElement(App, { name: "foo" });

// const container = document.getElementById("root");

// Didact.render(element, container);
