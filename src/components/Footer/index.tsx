import React from 'react';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <p>La Maria 2023 | Todos os direitos reservados</p>
      <p className={styles.icons}>
        <Link href="https://instagram.com/lamariaoficiall?igshid=MDM4ZDc5MmU=">
          <AiFillInstagram />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
