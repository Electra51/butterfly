"use client";

import CartContext from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { cart, addItemToCart, deleteItemFromCart } = useContext(CartContext);

  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty > Number(cartItem.stock)) return;

    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty <= 0) return;

    addItemToCart(item);
  };

  const amountWithoutTax = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const TotalQuantity = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);

  const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);
  return (
    <div>
      <h3 className="text-xl font-semibold border-b">
        {cart?.cartItems?.length || 0} items in cart
      </h3>

      {cart?.cartItems?.length > 0 && (
        <div className="grid grid-cols-4 mb-10 gap-12">
          <div className="col-span-3 mt-8">
            {cart?.cartItems?.map((e, i) => {
              return (
                <div
                  className="grid grid-cols-6 gap-4 items-center justify-start text-black border-b p-4 hover:shadow-md"
                  key={i}
                >
                  <div>
                    <Image src={e?.img} alt="name" width={80} height={50} />
                  </div>
                  <div className="col-span-2">
                    <h2 className="text-[16px] font-semibold">{e?.name}</h2>
                    <div className="flex items-center justify-start gap-3">
                      <p className="text-[14px] font-medium">
                        Rating: {e?.rating}
                      </p>{" "}
                      <FaStar className="text-[#ecdb3bf3]" />
                    </div>
                  </div>
                  <div className="w-24 mx-2">
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        onClick={() => decreaseQty(e)}
                      >
                        <span className="m-auto text-2xl font-thin">−</span>
                      </button>
                      <input
                        type="number"
                        className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900 custom-input-number"
                        name="custom-input-number"
                        value={e.quantity}
                        readOnly
                      ></input>
                      <button
                        data-action="increment"
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        onClick={() => increaseQty(e)}
                      >
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="text-[14px] font-medium">
                    <p>Price: ${(e?.price * e?.quantity).toFixed(2)}</p>
                    <p className="text-[12px]">${e?.price}/per item</p>
                  </div>
                  <div className="gap-2 text-[14px] font-medium text-red-500 cursor-pointer ml-3">
                    <button
                      className="flex items-center justify-start border border-red-500 px-2 py-0 rounded-sm hover:bg-red-500 hover:text-white"
                      onClick={() => deleteItemFromCart(e?.product)}
                    >
                      <MdDeleteOutline className="text-[16px]" />
                      <p className="font-medium mt-1">Remove</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-black my-8">
            <div className="flex justify-between items-center text-[15px]">
              <p>Price:</p>
              <p>${amountWithoutTax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center text-[15px]">
              <p>Product Count:</p>
              <p>{TotalQuantity}</p>
            </div>
            <div className="flex justify-between items-center text-[15px]">
              <p>Tax:</p>
              <p>${taxAmount}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between items-center font-semibold text-[15px]">
              <p>Total Price:</p>
              <p>${totalAmount}</p>
            </div>
            <div className="flex gap-1 justify-between items-center mt-7 text-[14px]">
              <button className="px-3.5 py-1 bg-[#C2A74E] text-white">
                CheckOut
              </button>
              <Link href="/shop">
                {" "}
                <button className="px-0.5 py-0.5 border border-[#C2A74E] text-black">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
