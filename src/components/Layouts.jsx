"use client";

import CartProvider from "@/context/CartContext";
import Header from "./Header";
import CartModal from "@/features/cart/CartModal";
import { useState } from "react";

const Layouts = ({ children }) => {
  const [isOpenModalCart, setIsOpenModalCart] = useState([]);

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };

  const handleHideModalCart = () => {
    setIsOpenModalCart(false);
  };

  return (
    <>
      <CartProvider>
        <main>
          <Header handleOpenModalCart={handleOpenModalCart} />
          <section>{children}</section>
        </main>
      </CartProvider>
    </>
  );
};

export default Layouts;
