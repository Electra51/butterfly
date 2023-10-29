"use client";

import Link from "next/link";

const BreadCrumb = ({ bread, link }) => {
  return (
    <div className="text-sm breadcrumbs flex justify-center  text-[#242424]">
      <ul>
        <li className="text-gray-700">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[#242424] font-medium">
          <Link href={link}>{bread}</Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
