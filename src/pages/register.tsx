import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import validation from '@/utils/validation';
import { postData } from '@/utils/fetchData';

export interface userDataProps {
  name: string;
  email: string;
  password: string;
  cf_password: string;
}

const Register = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errorMsg = validation({ name, email, password, cf_password });
    if (errorMsg) return toast.error(errorMsg);

    const response = await postData('auth/register', userData);

    if (response.error) return toast.error(response.error);

    return toast.success(response.msg, { duration: 5000 });
  };

  return (
    <div>
      <Head>
        <title>Cadastro</title>
      </Head>

      <Toaster />

      <form
        className="mx-auto my-4"
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirmar senha
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </div>

        <button type="submit" className="btn_login">
          Cadastrar
        </button>
        <p className="my-2">
          Já tem uma conta?
          <Link href="/signin" className="link_register">
            Logar
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
