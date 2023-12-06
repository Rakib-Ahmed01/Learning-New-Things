import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

function render(reactElement, containerDOMElement) {
  createRoot(containerDOMElement).render(
    createElement(
      reactElement.type,
      { ...reactElement.props },
      reactElement.children
    )
  );
}

const items = ['mango', 'apple', 'carrot'];

const reactElement = {
  type: 'div',
  props: {
    className: 'elem',
  },
  children: `Itmes left to purchase: ${items.length}`,
};

const containerDOMElement = document.getElementById('root');

render(reactElement, containerDOMElement);
