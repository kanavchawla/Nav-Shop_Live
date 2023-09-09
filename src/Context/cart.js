import { createContext, useContext, useEffect, useState } from "react";
export const Cart = createContext();

function CartContext(props) {
  var car = { 1: 0, 2: 0, 3: 0,4: 0, 5: 0,6: 0, 7: 0, 8: 0,9: 0, 10: 0, 11: 0,12: 0 };
  const [cartItems, setCart] = useState(car);
  return (
    <Cart.Provider value={{ cartItems, setCart }}>
      {props.children}
    </Cart.Provider>
  );
}

export default CartContext;
