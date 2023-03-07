import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import { increase, decrease } from '@/store/Actions';

const CartItem = ({ key, item, dispatch, cart }) => {
  const handleIncreaseCart = () => {
    const data = increase(cart, item._id);

    dispatch({
      type: 'ADD_CART',
      payload: data,
    });
  };

  const handleDecreaseCart = () => {
    const data = decrease(cart, item._id);

    dispatch({
      type: 'ADD_CART',
      payload: data,
    });
  };
  return (
    <div className="product" key={key}>
      <img
        src={item.images[0].url}
        alt={item.title}
        className="cart-product-image"
      />
      <div className="item-desc">
        <div className="flex top">
          <Link href={`/product/${item._id}`}>
            <h5>{item.title}</h5>
          </Link>
          <h3>R$ {item.quantity * item.price}</h3>
        </div>
        {item.inStock > 0 ? (
          <p>Em estoque: {item.inStock}</p>
        ) : (
          <p>Fora de estoque</p>
        )}

        <div className="flex bottom">
          <div>
            <p className="quantity-desc">
              <button
                className="minus"
                onClick={() => handleDecreaseCart()}
                disabled={item.quantity === 1 ? true : false}
              >
                <AiOutlineMinus />
              </button>
              <span className="num">{item.quantity}</span>
              <button
                className="plus"
                onClick={() => handleIncreaseCart()}
                disabled={item.quantity === item.inStock ? true : false}
              >
                <AiOutlinePlus />
              </button>
            </p>
          </div>
          <button type="button" className="remove-item">
            <IoMdTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
