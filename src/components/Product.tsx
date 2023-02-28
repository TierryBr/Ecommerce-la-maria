import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

import { Product } from '../@types/sanity';

interface ProductProps {
  product: Product;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(product.image && product.image[0])}
            alt=""
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price">R$ {product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
