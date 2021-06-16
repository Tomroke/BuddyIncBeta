import React from 'react';
import { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return <textarea>TEST</textarea>;
}

export default CustomApp;
