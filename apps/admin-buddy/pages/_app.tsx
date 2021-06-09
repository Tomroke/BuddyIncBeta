import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';
import { Header } from '@buddy-inc-beta/shared-components'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
      <Header title="Admin Buddy"/>
  );
}

export default CustomApp;
