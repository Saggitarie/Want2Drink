import { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import '../styles/global.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default wrapper.withRedux(WrappedApp);
