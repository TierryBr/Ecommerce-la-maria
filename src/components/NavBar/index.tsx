import React, { useContext } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import toast from 'react-hot-toast';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import { DataContext } from '@/store/GlobalState';

import styles from './NavBar.module.css';

const NavBar = () => {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const handleLogout = () => {
    Cookie.remove('refreshToken', { path: 'api/auth/accessToken' });
    localStorage.removeItem('firstLogin');
    dispatch({
      type: 'AUTH',
      payload: {},
    });
    return toast.success('Usuário deslogado!');
  };

  const loggedRouter = () => {
    return (
      <li
        className="nav-item dropdown"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <img
          src={auth.user.avatar}
          alt={auth.user.avatar}
          className={styles.avatar_logo}
        />
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {auth.user.name}
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Perfil
            </a>
          </li>
          <li>
            <button className="dropdown-item" onClick={handleLogout}>
              Sair
            </button>
          </li>
        </ul>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          La Maria Laços
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li
              className="nav-item"
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <button type="button" className={styles.cart_icon}>
                <div className={styles.button_container}>
                  <AiOutlineShopping />
                  <span className={styles.cart_item_qty}>1</span>
                </div>
              </button>
              <Link
                href="/signin"
                className="nav-link"
                style={{ marginLeft: 5 }}
              >
                Carrinho
              </Link>
            </li>

            {Object.keys(auth).length === 0 ? (
              <li
                className="nav-item"
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <button type="button" className={styles.cart_icon}>
                  <div className={styles.button_container}>
                    <AiOutlineUser />
                  </div>
                </button>
                <Link href="/signin" className="nav-link">
                  Logar
                </Link>
              </li>
            ) : (
              loggedRouter()
            )}
          </ul>
        </div>
      </div>
    </nav>
    // <div className={styles.navbar_container}>
    //   <p className={styles.logo}>
    //     <Link href="/">La Maria Laços</Link>
    //   </p>

    //   <div>
    //     <button type="button" className={styles.cart_icon}>
    //       <Link href="/cart">
    //         <div className={styles.button_container}>
    //           <AiOutlineShopping />
    //           <span className={styles.cart_item_qty}>1</span>
    //         </div>
    //       </Link>
    //     </button>
    //     <button type="button" className={styles.cart_icon}>
    //       <Link href="/signin">
    //         <div className={styles.button_container}>
    //           <AiOutlineUser />
    //           <p className={styles.nameLogin}>Logar</p>
    //         </div>
    //       </Link>
    //     </button>
    //   </div>
    // </div>
  );
};

export default NavBar;
