import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';
import { BannerProps } from '../../@types/sanity';

import styles from './RibbonBanner.module.css';

const RibbonBanner = ({ banner }: BannerProps) => {
  return (
    <div className={styles.ribbon_banner_container}>
      <div>
        <p className={styles.ribbon_solo}>{banner.smallText}</p>
        <h3>{banner.midText}</h3>
        <h1>{banner.largeText1}</h1>
        {/* <img
          src={urlFor(banner.image)}
          alt="Laço"
          className={styles.ribbon_banner_image}
        /> */}

        <div>
          <Link href={`/product/${banner.product}`}>
            <button type="button">{banner.buttonText}</button>
          </Link>
          <div className={styles.desc}>
            <h5>Descrição</h5>
            <p>{banner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RibbonBanner;
