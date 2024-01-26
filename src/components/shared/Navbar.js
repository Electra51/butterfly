"use client";

import Image from "next/image";
import logo from "../../assets/logo/new.png";
import { AiOutlineUser } from "react-icons/ai";
import { startTransition, useContext, useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import "./navbar.css";
import CartContext from "@/contexts/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggole, setToggole] = useState(false);

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;
  const toggleHandle = () => {
    setToggole(!toggole);
  };
  const { user, logout } = useAuth();
  const { uid, displayName, photoURL } = user || {};

  const { replace, refresh } = useRouter();
  const path = usePathname();

  const [navToggle, setNavToggle] = useState(false);

  const handleLogout = async () => {
    const toastId = toast.loading("Loading...");
    try {
      // Step 1: Call the logout function
      await logout();

      // Step 2: Send a POST request to /api/auth/logout
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      // Step 3: Check the current path and redirect if necessary
      if (path.includes("/dashboard") || path.includes("/profile")) {
        replace(`/login?redirectUrl=${path}`);
      }

      // Step 4: Show a success message
      toast.dismiss(toastId);
      toast.success("Successfully logout!");

      // Step 5: Refresh the UI
      startTransition(() => {
        refresh();
      });
    } catch (error) {
      console.log("error", error);
      // Step 5 (alternative): Handle errors and show an error message
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

  const amountWithoutTax = cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);

  const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);
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
      } text-white lg:pr-3`}>
      <div className="flex-1">
        <div className="w-[92px] lg:w-[140px]">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={140}
              className="w-full h-full object-fill"
              priority
            />
          </Link>
        </div>
      </div>
      <div
        className={`absolute ${
          navToggle ? "left-0" : "left-[-120%]"
        } top-[4.5rem] flex w-full flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0`}>
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
                exact={path === "/"}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* <FaRegHeart className="cursor-pointer text-xl" /> */}
        <div className="indicator">
          <FaRegHeart className="cursor-pointer text-[22px] font-medium" />
          <span className="badge badge-sm indicator-item bg-red-500 text-white dark:text-gray-300">
            60
          </span>
        </div>

        <div className="dropdown-end dropdown lg:mr-2 mt-2 px-2">
          <label tabIndex={0} className="mx-2 mt-1">
            <div className="indicator">
              <AiOutlineShoppingCart className="cursor-pointer text-[22px] font-medium" />
              {cartItems?.length > 0 && (
                <span className="badge badge-sm indicator-item bg-red-500 text-white dark:text-gray-300">
                  {cartItems?.length}
                </span>
              )}
            </div>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card-compact mt-3 w-72 bg-base-100 relative"
            style={{ boxShadow: "rgb(193 165 73 / 44%) 0px 7px 29px 0px" }}>
            <div className="card-body overflow-hidden h-96">
              <span className="text-[16px] font-bold text-black text-center border-b">
                Total {cartItems?.length} Items in Cart
              </span>
              <div className="overflow-y-auto h-64">
                {cartItems?.length > 0 ? (
                  <>
                    {" "}
                    {cartItems?.map((e, i) => {
                      console.log("e", e);
                      return (
                        <div
                          key={i}
                          className="grid grid-cols-4 gap-2 border-b py-1">
                          <div>
                            <Image src={e?.img} alt="" width={50} height={30} />
                          </div>
                          <div className="text-black col-span-3">
                            <p className="text-[12px] font-medium">{e?.name}</p>
                            <p className="text-[12px]">Price: ${e?.price}</p>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <p className="text-black text-center font-medium mt-24 text-xl">
                    No item in your cart ...
                  </p>
                )}
              </div>

              <div className="card-action absolute bottom-2 right-4 left-4">
                {cartItems?.length < 0 ? (
                  ""
                ) : (
                  <div className="flex justify-center items-center w-24 ml-20 pb-2 text-[16px] font-bold text-black">
                    <p>Total:</p>
                    <p className="text-left mr-auto">${totalAmount}</p>
                  </div>
                )}

                <Link href="/cart" className="block w-full">
                  <button className="bg-[#C2A74E] px-2 py-1 w-full">
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
              className="menu-compact dropdown-content menu rounded-none mt-3 w-48 bg-base-100 p-2 shadow">
              <li className="mb-2 mt-1 text-center font-semibold">
                {displayName}
              </li>
              <div className="divider my-0"></div>
              <li className="mb-2 mx-auto">
                <NavLink
                  href="/profile"
                  className="button7 b7  text-white rounded-none"
                  activeClassName="text-blue-500">
                  <CgProfile className="text-[18px]" /> Profile
                </NavLink>
              </li>
              <li className="mx-auto">
                <button
                  onClick={handleLogout}
                  className="buttonNLog bNLog w-full text-white rounded-none">
                  <MdOutlineLogout className="text-[18px]" /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center cursor-pointer border border-gray-700 px-2 py-1 buttonNLog bNLog">
            <AiOutlineUser />
            <p className="text-[14px]">Login/Register</p>
          </Link>
        )}
      </div>
      <label className="swap-rotate swap rounded-full h-8 w-8 bg-[#C2A74E] lg:hidden">
        <input
          checked={navToggle}
          onChange={() => setNavToggle((pre) => !pre)}
          type="checkbox"
        />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 480 480">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 480 480">
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
