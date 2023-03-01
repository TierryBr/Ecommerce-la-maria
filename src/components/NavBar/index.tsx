import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';

import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbar_container}>
      <p className={styles.logo}>
        <Link href="/">La Maria Laços</Link>
      </p>

      <button type="button" className={styles.cart_icon}>
        <Link href="/cart">
          <AiOutlineShopping />
          <span className={styles.cart_item_qty}>1</span>
        </Link>
      </button>
      <button type="button" className={styles.cart_icon}>
        <Link href="/signin">
          <div className={styles.button_container_login}>
            <AiOutlineUser />
            <p className={styles.nameLogin}>Logar</p>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default NavBar;
