import { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store';

import '../styles/global.scss';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
