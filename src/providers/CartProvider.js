// import CartProvider from "@/contexts/CartContext";

"use client";

import { useEffect, useState } from "react";
import CartContext from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
// const GlobalProvider = ({ children }) => {
//   return <CartProvider>{children}</CartProvider>;
// };

// export default GlobalProvider;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  const addItemToCart = async ({
    product,
    name,
    price,
    rating,
    img,
    stock,
    quantity = 1,
  }) => {
    const item = {
      product,
      name,
      price,
      rating,
      quantity,
      img,
      stock,
    };

    const isItemExist = cart?.cartItems?.find(
      (i) => i.product === item.product
    );

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.product === isItemExist.product ? item : i
      );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.product !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
