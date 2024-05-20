// const element = <h1 title="foo">Hello</h1>;

// const element = React.createElement("h1", { title: "foo" }, "Hello");

function createElement(type, props, ...childern) {
  return {
    type,
    props: {
      ...props,
      children: childern.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      childern: [],
    },
  };
}

const Didact = {
  createElement,
};

const element = Didact.createElement(
  "div",
  { id: "foo" },
  Didact.createElement("a", null, "bar"),
  Didact.createElement("b")
);

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
