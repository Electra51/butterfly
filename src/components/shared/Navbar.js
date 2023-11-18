"use client";

import Image from "next/image";
import logo from "../../assets/logo/new.png";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import useCart from "@/hooks/useCart";
import "./navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggole, setToggole] = useState(false);
  const toggleHandle = () => {
    setToggole(!toggole);
  };
  const { user, logout } = useAuth();
  const { uid, displayName, photoURL } = user || {};

  const { replace, refresh } = useRouter();
  const path = usePathname();

  const [navToggle, setNavToggle] = useState(false);
  const { cart } = useCart();
  const total = useMemo(
    () => cart.reduce((pre, cur) => cur.price * cur.quantity + pre, 0),
    [cart]
  );

  const handleLogout = async () => {
    const toastId = toast.loading("Loading...");
    try {
      await logout();
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });
      await res.json();
      if (path.includes("/dashboard") || path.includes("/profile")) {
        replace(`/login?redirectUrl=${path}`);
      }
      toast.dismiss(toastId);
      toast.success("Successfully logout!");
      startTransition(() => {
        refresh();
      });
    } catch (error) {
      toast.error("Successfully not logout!");
      toast.dismiss(toastId);
    }
  };

  //for scroll navbar color change
  useEffect(() => {
    const changeNavbarbg = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeNavbarbg);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeNavbarbg);
    };
  }, []);

  const navData = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/services",
      title: "Services",
    },
    {
      path: "/shop",
      title: "Shop",
    },
    {
      path: "/about-us",
      title: "About Us",
    },
    {
      path: "/dashboard",
      title: "DashBoard",
    },
  ];

  return (
    <nav
      style={{
        boxShadow: "0px 3px 18px #c2a74e2e;",
      }}
      className={`navbar fixed top-0 z-10 ${
        navbar ? "bg-black shadow-lg" : "bg-black bg-opacity-5"
      } text-white lg:pr-3`}
    >
      <div className="flex-1">
        <Link href="/">
          <Image src={logo} alt="logo" width={140} priority />
        </Link>
      </div>
      <div
        className={`absolute ${
          navToggle ? "left-0" : "left-[-120%]"
        } top-[4.5rem] flex w-full flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0`}
      >
        <ul className="flex flex-col px-1 gap-5 lg:flex-row mr-3">
          {navData.map(({ path, title }) => (
            <li key={path} className={`mx-auto text-white text-[15px]`}>
              <NavLink
                className="a"
                onClick={() => setNavToggle(false)}
                href={path}
                activeClassName={`${
                  navbar
                    ? "font-bold text-[#C2A74E]"
                    : "font-bold text-[#C2A74E]"
                }`}
                exact={path === "/"}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {toggole && (
          <div className="absolute top-14 right-0">
            <div className="relative flex items-center w-full h-12 mr-2 focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <AiOutlineSearch className="" />
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
        <AiOutlineSearch
          onClick={toggleHandle}
          className="cursor-pointer text-2xl"
        />
        <div className="dropdown-end dropdown lg:mr-2">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-primary text-white dark:text-gray-300">
                {cart.length}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {cart.length}
                Items
              </span>
              <span className="text-info">Total: ${total.toFixed(2)}</span>
              <div className="card-actions">
                <Link href="/checkout" className="block w-full">
                  <button className="btn-primary btn-block btn">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {uid ? (
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <Image
                  alt="user-logo"
                  title={displayName}
                  src={
                    photoURL ||
                    "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                  }
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li className="mb-2 mt-1 text-center font-semibold">
                {displayName}
              </li>
              <div className="divider my-0"></div>
              <li className="mb-2">
                <NavLink
                  href="/profile"
                  className="text-lg"
                  activeClassName="text-blue-500"
                >
                  Profile
                </NavLink>
              </li>
              <li className="">
                <button
                  onClick={handleLogout}
                  className="btn-warning btn content-center text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center cursor-pointer border border-gray-700 px-2 py-1 buttonNLog bNLog"
          >
            <AiOutlineUser />
            <p className="text-[14px]">Login/Register</p>
          </Link>
        )}
      </div>
      <label className="swap-rotate swap btn-ghost btn-circle btn ml-2 bg-white lg:hidden">
        <input
          checked={navToggle}
          onChange={() => setNavToggle((pre) => !pre)}
          type="checkbox"
        />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </nav>

    // <div className="navbar fixed top-0 z-10 left-auto bg-black bg-opacity-20 text-white">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <AiOutlineMenu className="text-2xl" />
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         {navMenu}
    //       </ul>
    //     </div>
    //     <Image src={logo} alt="logo" width={90} priority />
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">{navMenu}</ul>
    //   </div>
    //   <div className="navbar-end">
    //     {toggole && (
    //       <div className="absolute top-14 right-0">
    //         <div className="relative flex items-center w-full h-12 mr-2 focus-within:shadow-lg bg-white overflow-hidden">
    //           <div className="grid place-items-center h-full w-12 text-gray-300">
    //             <AiOutlineSearch />
    //           </div>

    //           <input
    //             className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
    //             type="text"
    //             id="search"
    //             placeholder="Search something.."
    //           />
    //         </div>
    //       </div>
    //     )}
    //     <AiOutlineSearch onClick={toggleHandle} className="cursor-pointer" />
    //     <Link href="/" className=" mx-5">
    //       <div className="indicator">
    //         <span className="indicator-item w-5 flex justify-center items-center h-5 rounded-full bg-[#EA3F82]">
    //           7
    //         </span>

    //         <AiOutlineShoppingCart className="text-2xl" />
    //       </div>{" "}
    //     </Link>
    //     {session?.user ? (
    //       <Link href="/logout" className="flex items-center cursor-pointer">
    //         <AiOutlineUser />
    //         <p className="text-[14px]">LogOut</p>
    //       </Link>
    //     ) : (
    //       <Link href="/login" className="flex items-center cursor-pointer">
    //         <AiOutlineUser />
    //         <p className="text-[14px]">Login/Register</p>
    //       </Link>
    //     )}
    //   </div>
    // </div>
  );
};

export default Navbar;
