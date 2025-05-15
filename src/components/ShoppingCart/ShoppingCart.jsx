import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../../store/store";

export default function ShoppingCart() {
  const openCart = useCart((state) => state.openCart);

  return (
    <div
      onClick={openCart}
      className="fixed w-[50px] rounded z-30 h-[50px] bg-amber-400 bottom-[50%] right-0 flex justify-center items-center cursor-pointer hover:text-white hover:bg-black transition-all duration-[400ms]"
    >
      <CiShoppingCart />
    </div>
  );
}
