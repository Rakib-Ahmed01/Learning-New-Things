import { createRoot } from 'react-dom/client';

function render(reactElement, containerDOMElement) {
  // createRoot(containerDOMElement).render(
  //   createElement(
  //     reactElement.type,
  //     { ...reactElement.props },
  //     reactElement.children
  //   )
  // );
  createRoot(containerDOMElement).render(reactElement);
}

const items = ['mango', 'pineapple', 'jackfruit'];

// const reactElement = {
//   type: 'div',
//   props: {
//     className: 'elem',
//   },
//   children: `Itmes left to purchase: ${items.length}`,
// };

// const reactElement = createElement(
//   'div',
//   null,
//   'Itmes left to purchase: ',
//   items.length
// );

const reactElement = (
  <div>Items left to purchase: {items.length} items left</div>
);

const containerDOMElement = document.getElementById('root');

render(reactElement, containerDOMElement);
