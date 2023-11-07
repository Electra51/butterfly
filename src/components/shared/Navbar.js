"use client";

import Image from "next/image";
import logo from "../../assets/logo/logo.png";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggole, setToggole] = useState(false);
  const toggleHandle = () => {
    setToggole(!toggole);
  };
  return (
    <div className="navbar fixed top-0 z-10 left-auto bg-black bg-opacity-20 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Image src={logo} alt="logo" width={90} />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {toggole && (
          <div className="absolute top-14 right-0">
            <div className="relative flex items-center w-full h-12 mr-2 focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>
        )}
        <AiOutlineSearch onClick={toggleHandle} className="cursor-pointer" />
        <Link href="/" className=" mx-5">
          <div className="indicator">
            <span className="indicator-item w-5 flex justify-center items-center h-5 rounded-full bg-[#EA3F82]">
              7
            </span>

            <AiOutlineShoppingCart className="text-2xl" />
          </div>{" "}
        </Link>
        <Link href="/login">
          {" "}
          <div className="flex items-center cursor-pointer">
            <AiOutlineUser />
            <a className="text-[14px]">Login/Register</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
