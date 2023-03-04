import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DataProvider } from '@/store/GlobalState';
import { Toaster } from 'react-hot-toast';

import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}
