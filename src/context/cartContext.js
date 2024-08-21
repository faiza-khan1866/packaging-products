import { createContext, useState } from "react";

export const cartContext = createContext({});
export const CartContextProvider = ({ children }) => {
  const [CartItems, setCartItems] = useState([]);
  return (
    <cartContext.Provider value={{ CartItems, setCartItems }}>
      {children}
    </cartContext.Provider>
  );
};
