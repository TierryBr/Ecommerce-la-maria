import React from 'react';

import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.products_heading}>
        <h2>Produtos mais vendidos</h2>
        <p>Laços de muitas variações</p>
      </div>
      <div className={styles.products_container}>
        {['Laço 1', 'Laço 2', 'Laço 3'].map((product) => product)}
      </div>
    </>
  );
};

export default Home;
