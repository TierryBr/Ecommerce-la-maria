import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Signin = () => {
  return (
    <div>
      <Head>
        <title>Entrar</title>
      </Head>

      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
