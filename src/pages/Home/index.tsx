import React from 'react';
import { ProductProps } from '../../@types/sanity';
import { Product } from '../../components';

import styles from './Home.module.css';

const Home = ({ products }: ProductProps) => {
  return (
    <>
      <div className={styles.products_heading}>
        <h2>Nossos produtos</h2>
        <p>Laços de muitas variações</p>
      </div>
      <div className={styles.products_container}>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
