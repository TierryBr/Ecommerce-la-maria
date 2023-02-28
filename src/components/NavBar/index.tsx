import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbar_container}>
      <p className={styles.logo}>
        <Link href="/">La Maria Laços</Link>
      </p>

      <button type="button" className={styles.cart_icon} onClick={() => {}}>
        <AiOutlineShopping />
        <span className={styles.cart_item_qty}>1</span>
      </button>
    </div>
  );
};

export default NavBar;
