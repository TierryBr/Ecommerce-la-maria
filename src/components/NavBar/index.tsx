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

      <div>
        <button type="button" className={styles.cart_icon}>
          <Link href="/cart">
            <div className={styles.button_container}>
              <AiOutlineShopping />
              <span className={styles.cart_item_qty}>1</span>
            </div>
          </Link>
        </button>
        <button type="button" className={styles.cart_icon}>
          <Link href="/signin">
            <div className={styles.button_container}>
              <AiOutlineUser />
              <p className={styles.nameLogin}>Logar</p>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
