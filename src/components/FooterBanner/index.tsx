import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';
import { FooterProps } from '../../@types/sanity';

import styles from './FooterBanner.module.css';

const FooterBanner = ({ footerBanner }: FooterProps) => {
  return (
    <div className={styles.footer_banner_container}>
      <div className={styles.banner_desc}>
        <div className={styles.left}>
          <p>{footerBanner.title}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.time}</p>
        </div>
        <div className={styles.right}>
          <h3>{footerBanner.discount}% de desconto</h3>
          <p>{footerBanner.description}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.textButton}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
