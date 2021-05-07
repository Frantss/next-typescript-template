import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import React from 'react';

import '@/styles/setup.scss';
import store from '@/modules/app/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
