import React, { createContext, useContext, useEffect } from 'react';
import { userHook } from '../reducers/reducer';
import { ADD_FAVORITES } from '../reducers/reducer';

const Context = createContext();

const AppProvider = ({ children }) => {
  const [state,  dispatch, fetchDataDetail ] = userHook();

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites'); 
    if (storedFavorites) {
      dispatch({ type: ADD_FAVORITES, payload: JSON.parse(storedFavorites) });
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch, fetchDataDetail}}>
      {children}
    </Context.Provider>
  );
};

const useCustomContext = () => {
  return useContext(Context);
};

export { AppProvider, useCustomContext as useContext };