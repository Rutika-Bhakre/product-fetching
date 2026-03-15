import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartData, setCartData] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);

  return (
    <CartContext.Provider value={{ cartData, setCartData, shippingAddress, setShippingAddress }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
