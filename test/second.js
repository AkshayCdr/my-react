import { Didact } from "../React.js";

const container = document.getElementById("root");

const updateValue = (e) => reRender(e.target.value);

const reRender = (value) => {
  const element = Didact.createElement(
    "div",
    { id: "foo" },
    Didact.createElement("input", {
      onInput: updateValue,
      value: value,
    }),
    Didact.createElement("h2", null, value)
  );
  Didact.render(element, container);
};

reRender("Hello");
