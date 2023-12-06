/* eslint-disable react/prop-types */
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

function Button({ children, status }) {
  const themeColor = status === 'cancel' ? 'pink' : 'blue';
  return (
    <button
      style={{
        color: themeColor,
        borderColor: themeColor,
        border: '2px solid',
        padding: '5px 10px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

export function App() {
  return (
    <div>
      <Button status="cancel">Cancel</Button>
      <div style={{ marginTop: '10px' }}></div>
      <Button status="confirm">Confirm</Button>
    </div>
  );
}

root.render(createElement(App));
