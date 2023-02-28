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
      <Link href={`/product/${product.slug.current}`}>
        <div className={styles.product_card}>
          <img
            src={urlFor(product.image && product.image[0])}
            alt=""
            width={250}
            height={250}
            className={styles.product_image}
          />
          <p className={styles.product_name}>{product.name}</p>
          <p className={styles.product_price}>R$ {product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
