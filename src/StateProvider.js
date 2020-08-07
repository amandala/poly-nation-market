import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const initialState = {
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_IS_CART_OPEN": {
        return {
          ...state,
          isCartOpen: action.data,
        };
      }

      case "SET_CHECKOUT":
        return {
          ...state,
          checkout: action.data,
        };

      case "SET_PRODUCTS":
        return {
          ...state,
          products: action.data,
        };

      case "SET_SHOP":
        return {
          ...state,
          shop: action.data,
        };

      default:
        return state;
    }
  };

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
