import '../styles/global.scss';
import { ReactElement } from 'react';

export default function App({ Component, pageProps }): ReactElement {
  return <Component {...pageProps} />;
}
