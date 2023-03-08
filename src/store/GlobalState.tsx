import { createContext, useReducer, useEffect, useRef } from 'react';
import reducers from './Reducers';
import { getData } from '@/utils/fetchData';

export const DataContext = createContext({});

export const DataProvider = ({ children }: any) => {
  const initialState = { auth: {}, cart: [], modal: {} };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
      getData('auth/accessToken').then((resp) => {
        if (resp.error) return localStorage.removeItem('firstLogin');

        dispatch({
          type: 'AUTH',
          payload: {
            token: resp.access_token,
            user: resp.user,
          },
        });
      });
    }
  }, []);

  const getCartHistory = async () => {
    const persistCart = await localStorage.getItem('next_cart01');
    const next_cart01 = JSON.parse(persistCart);
    if (next_cart01) {
      dispatch({ type: 'ADD_CART', payload: next_cart01 });
    }
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getCartHistory();
  }, []);

  useEffect(() => {
    localStorage.setItem('next_cart01', JSON.stringify(cart));
  }, [cart]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
