import React from 'react';
import { ProductProps } from '../../@types/sanity';

import styles from './Home.module.css';

const Home = ({ products }: ProductProps) => {
  return (
    <>
      <div className={styles.products_heading}>
        <h2>Produtos mais vendidos</h2>
        <p>Laços de muitas variações</p>
      </div>
      <div className={styles.products_container}>
        {products?.map((product) => product.name)}
      </div>
    </>
  );
};

export default Home;
