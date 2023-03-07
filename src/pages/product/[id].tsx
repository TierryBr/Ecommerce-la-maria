import React, { useState, useContext } from 'react';
import Head from 'next/head';
import toast from 'react-hot-toast';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { getData } from '@/utils/fetchData';
import { Product, ProductProps } from '@/@types/sanity';
import { Product as ProductList } from '../../components';
import { DataContext } from '@/store/GlobalState';
import { addToCart, increase, decrease } from '@/store/Actions';

interface Props {
  product: Product;
  products: ProductProps;
}

const ProductDetails = ({ product, products }: Props) => {
  const [index, setIndex] = useState(0);
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const isActive = (indexPhoto: number) => {
    if (index === indexPhoto) return 'active';
    return '';
  };

  const handleAddToCart = async () => {
    const data = await addToCart(product, cart);

    dispatch({
      type: 'ADD_CART',
      payload: data,
    });
  };

  return (
    <div>
      <Head>
        <title>Detalhes do produto</title>
      </Head>
      <div className="product-detail-container">
        <div>
          <div>
            <img
              src={product.images[index].url}
              alt={product.title}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {product.images.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt={product.title}
                className={`small-image ${isActive(index)}`}
                onMouseEnter={() => setIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{product.title}</h1>
          <h4>Detalhes: </h4>
          <p>{product.description}</p>
          <p className="price">R$ {product.price}</p>
          {/* <div className="quantity">
            <h3>Quantidade: </h3>
            <p className="quantity-desc">
              <span className="minus" onClick={() => handleDecreaseCart()}>
                <AiOutlineMinus />
              </span>
              <span className="num">0</span>
              <span className="plus" onClick={() => handleIncreaseCart()}>
                <AiOutlinePlus />
              </span>
            </p>
          </div> */}
          <div className="product-detail-items">
            {product.inStock > 0 ? (
              <h6>Restantes: {product.inStock}</h6>
            ) : (
              <h6>Fora de estoque</h6>
            )}
            <h6>Vendidos: {product.sold}</h6>
          </div>
          <h4>Conteúdo: </h4>
          <p>{product.content}</p>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              disabled={product.inStock === 0 ? true : false}
              onClick={() => handleAddToCart()}
            >
              Carrinho
            </button>
            <button type="button" className="buy-now">
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>Você também pode gostar</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <ProductList key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params: { id } }) => {
  const res = await getData(`product/${id}`);
  const resProducts = await getData('product');

  return {
    props: { product: res.product, products: resProducts.products },
  };
};

export default ProductDetails;
