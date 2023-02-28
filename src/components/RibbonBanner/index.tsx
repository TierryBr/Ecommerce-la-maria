import React from 'react';
import Link from 'next/link';

import styles from './RibbonBanner.module.css';

const RibbonBanner = () => {
  return (
    <div className={styles.ribbon_banner_container}>
      <div>
        <p className={styles.ribbon_solo}>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src="" alt="Laço" className={styles.ribbon_banner_image} />

        <div>
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className={styles.desc}>
            <h5>Description</h5>
            <p>descriptions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RibbonBanner;
