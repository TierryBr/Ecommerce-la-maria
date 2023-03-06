import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';
import { Product } from '../../@types/sanity';

import styles from './Product.module.css';

interface ProductProps {
  product: Product;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div>
      <Link href={`/product/${product._id}`}>
        <div className={styles.product_card}>
          <img
            src={product.images[0].url}
            alt="Laço"
            width={250}
            height={250}
            className={styles.product_image}
          />
          <p className={styles.product_name}>{product.title}</p>
          <div className={styles.price_stock}>
            <p className={styles.product_price}>R$ {product.price}</p>
            {product.inStock > 0 ? (
              <p className={styles.product_stock}>
                Em estoque: {product.inStock}
              </p>
            ) : (
              <p className={styles.product_not_stock}>Fora de estoque</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
