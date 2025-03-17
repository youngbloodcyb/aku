/**
 * Part 1:
 * Vanilla JS version of:
 *
 * const element = <h1 title="foo">Hello</h1>
 * const container = document.getElementById("root")
 * ReactDOM.render(element, container)
 *
 */

const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
};

const container = document.getElementById("root");

const node = document.createElement(element.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);

/**
 * Part 2:
 * Vanilla JS version of React.createElement
 *
 */

const Aku = {
  createElement,
};

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
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
      children: [],
    },
  };
}
