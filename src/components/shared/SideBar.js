"use client";

import Link from "next/link";
import NavLink from "./NavLink";

const SideBar = () => {
  const navLinks = [
    {
      path: "/dashboard",
      title: "User's Activity",
    },
    {
      path: "/dashboard/booking",
      title: "Booking",
    },
    {
      path: "/dashboard/cart",
      title: "Cart",
    },
    {
      path: "/dashboard/wishlist",
      title: "Wishlist",
    },
    {
      path: "/dashboard/payment",
      title: "Payment",
    },
    {
      path: "/dashboard/setting",
      title: "Setting",
    },
    {
      path: "/dashboard/profile",
      title: "Profile",
    },
  ];
  return (
    <aside className=" bg-gray-200 min-h-screen">
      <ul className="block gap-16 p-4">
        {navLinks.map(({ path, title }) => (
          <li key={path}>
            <NavLink exact activeClassName="text-green-600" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
