import { AppProps } from "next/app";

import React from "react";
import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';
import { Theme } from '@radix-ui/themes';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />

    </Theme>
    
  );
}

export default MyApp;
