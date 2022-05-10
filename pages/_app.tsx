import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "@store/.";
import "@styles/index.scss";

interface MyAppI extends AppProps {
  Component: any;
}

function MyApp({ Component, pageProps }: MyAppI) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
