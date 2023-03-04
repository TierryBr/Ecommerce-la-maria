import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { postData } from '@/utils/fetchData';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { DataContext } from '@/store/GlobalState';

const Signin = () => {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await postData('auth/login', userData);

    if (response.error) return toast.error(response.error);

    dispatch({
      type: 'AUTH',
      payload: {
        token: response.access_token,
        user: response.user,
      },
    });

    Cookie.set('refreshtoken', response.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7,
    });
    localStorage.setItem('firstLogin', true);
    return toast.success(response.msg, { duration: 5000 });
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/');
  }, [auth]);

  return (
    <div>
      <Head>
        <title>Entrar</title>
      </Head>

      <form
        className="mx-auto my-4"
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <div id="emailHelp" className="form-text">
            Nunca compartilharemos seu e-mail com mais ninguém.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>

        <button type="submit" className="btn_login">
          Entrar
        </button>
        <p className="my-2">
          Ainda não tem uma conta?
          <Link href="/register" className="link_register">
            Registrar
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
