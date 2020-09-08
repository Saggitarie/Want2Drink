import { ReactElement, FC } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { wrapper } from '../store';

import '../styles/global.scss';

// function App({ Component, pageProps }): ReactElement {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// export default App;

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
