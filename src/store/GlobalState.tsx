import { createContext, useReducer, useEffect } from 'react';
import reducers from './Reducers';
import { getData } from '@/utils/fetchData';

export const DataContext = createContext({});

export const DataProvider = ({ children }: any) => {
  const initialState = { auth: {} };
  const [state, dispatch] = useReducer(reducers, initialState);

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

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
