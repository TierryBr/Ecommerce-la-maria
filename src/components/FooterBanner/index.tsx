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
          <p>{footerBanner.largeText1}</p>
          <h3>{footerBanner.smallText}</h3>
          <p>{footerBanner.saleTIme}</p>
        </div>
        <div className={styles.right}>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>

        <img
          src={urlFor(footerBanner.image)}
          alt="Laço"
          className={styles.footer_banner_image}
        />
      </div>
    </div>
  );
};

export default FooterBanner;
