"use client";

import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddToCardBtn = ({ id }) => {
  const { cart, isLoading, mutate } = useCart();

  const isAlready = cart.findIndex((pd) => pd._id === id);
  const handleAddToCart = async (id) => {
    try {
      const res = await fetch(`/api/cart?id=${id}`, {
        method: "POST",
      });
      const result = await res.json();
      if (result.added) {
        toast.success(result.message);
        mutate();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="an border bg-[#F88E1A] rounded-none !px-3 py-1  ml-3 hover:bg-[#bf680a] !text-white my-3 flex items-center gap-3"
      onClick={() => handleAddToCart(id)}
      disabled={isAlready !== -1 || isLoading}
    >
      {isAlready !== -1 ? "Already added" : "Add To Cart"}{" "}
      <AiOutlineShoppingCart />
    </button>
  );
};

export default AddToCardBtn;
