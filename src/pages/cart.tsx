import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../images/cart_empty.jpg';
import { DataContext } from '@/store/GlobalState';
import CartItem from '@/components/CartItem';
import { getData } from '@/utils/fetchData';

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem('next_cart01'));
    if (cartLocal && cartLocal.length > 0) {
      let newArray = [];
      const updateCart = async () => {
        for (const item of cartLocal) {
          const res = await getData(`product/${item._id}`);
          const { _id, title, images, price, inStock } = res.product;
          if (inStock > 0) {
            newArray.push({
              _id,
              title,
              images,
              price,
              inStock,
              quantity: item.quantity > inStock ? 1 : item.quantity,
            });
          }
        }
        dispatch({
          type: 'ADD_CART',
          payload: newArray,
        });
      };
      updateCart();
    }
  }, []);

  if (cart.length === 0)
    return (
      <div className="img_cart">
        <h2 style={{ marginTop: 50 }}>Carrinho vazio</h2>
        <Link href="/">
          <button type="button" className="btn">
            Continue comprando
          </button>
        </Link>
        <Image src={profilePic} alt="" />
      </div>
    );
  return (
    <div className="container_cart">
      <Head>
        <title>Carrinho</title>
      </Head>

      <div className="product-container">
        <h2>Carrinho de compras</h2>
        {cart.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            dispatch={dispatch}
            cart={cart}
          />
        ))}
      </div>

      <div className="product-address">
        <form>
          <h2>Endereço</h2>
          <label
            htmlFor="address"
            className="form-label"
            style={{ marginTop: 15 }}
          >
            Endereço
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control"
          />

          <label
            htmlFor="mobile"
            className="form-label"
            style={{ marginTop: 15 }}
          >
            Telefone
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="form-control"
          />
        </form>

        <h3>Total: R$ {total}</h3>

        <Link href={auth.user ? '#' : '/signin'}>
          <button className="btn_login">Processar pagamento</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
