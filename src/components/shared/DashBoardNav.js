"use client";

import BreadCrumb from "./BreadCrumb";

const DashBoardNav = () => {
  return (
    <div className=" bg-black text-white w-full flex justify-between items-center container mx-auto">
      <BreadCrumb bread={"User's Dashboard"} link={"/dashboard"} />
      <ul className="flex justify-center items-center">
        <li className="mx-3">Notification</li>
        <li className="mx-3">Pic</li>
      </ul>
    </div>
  );
};

export default DashBoardNav;
