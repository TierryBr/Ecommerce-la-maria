import React from 'react';
import Head from 'next/head';
import NavBar from '../NavBar';
import Footer from '../Footer';

import styles from './Layout.module.css';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>La-Maria</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className={styles.main_container}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
