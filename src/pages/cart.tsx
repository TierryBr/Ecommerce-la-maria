import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import profilePic from '../images/cart_empty.jpg';
import { DataContext } from '@/store/GlobalState';
import CartItem from '@/components/CartItem';
import { getData } from '@/utils/fetchData';
import getStripe from '@/lib/getStripe';

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const [total, setTotal] = useState(0);

  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');

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

  // PAYMENT IN STRIP
  // const handlePayment = async () => {
  //   if (!address || !mobile) {
  //     return toast.error('Adicione um endereço e número para continuar.');
  //   }
  //   const stripe = await getStripe();

  //   const response = await fetch('/api/stripe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(cart),
  //   });

  //   if (response.status === 500) return;

  //   const data = await response.json();

  //   toast.loading('Processando...');

  //   stripe.redirectToCheckout({ sessionId: data.id });
  // };

  const handlePayment = async () => {};

  if (cart.length === 0)
    return (
      <div className="img_cart">
        <h2 style={{ marginTop: 50 }}>Carrinho vazio</h2>
        <Link href="/">
          <button type="button" className="btn2">
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
          <h2>Envio</h2>
          <label
            htmlFor="address"
            className="form-label"
            style={{ marginTop: 15 }}
          >
            Cidade
          </label>
          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect01">
              <option value="1">Aratuba</option>
              <option value="2">Redenção</option>
              <option value="3">Fortaleza</option>
            </select>
          </div>
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="form-control"
          />
        </form>

        <h3>Total: R$ {total}</h3>

        <Link href={auth.user ? '#' : '/signin'}>
          <button className="btn_login" onClick={handlePayment}>
            Processar pagamento
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
