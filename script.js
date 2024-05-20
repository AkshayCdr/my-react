// const element = <h1 title="foo">Hello</h1>;

// const element = React.createElement("h1", { title: "foo" }, "Hello");

import { React } from "./React.js";

const element = new React("h1", { title: "foo" }, "Hello").createElement();

console.log(element);

// const element = {
//   type: "h1",
//   props: {
//     title: "foo",
//     children: "Hello",
//   },
// };

const container = document.getElementById("root");

// ReactDom.render(element, container);

console.log(element.props.title);
console.log(element.props.children);

const node = document.createElement(element.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);
