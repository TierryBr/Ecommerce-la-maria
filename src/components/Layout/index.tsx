import React from 'react';
import Head from 'next/head';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Modal from '../Modal';

import styles from './Layout.module.css';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>La Maria Laços</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <Modal />
      <main className={styles.main_container}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
