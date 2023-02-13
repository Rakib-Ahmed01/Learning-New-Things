import '@/styles/globals.css';
import { Provider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
