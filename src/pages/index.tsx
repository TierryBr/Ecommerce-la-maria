import React from 'react';

const Home = () => {
  return (
    <>
      HeoBanner
      <div className="products-heading">
        <h2>Produtos mais vendidos</h2>
        <p>Laços de muitas variações</p>
      </div>
      <div className="products-container">
        {['Laço 1', 'Laço 2', 'Laço 3'].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
