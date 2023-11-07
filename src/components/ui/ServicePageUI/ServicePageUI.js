"use client";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ServiceCard from "./ServiceCard";
import Image from "next/image";
const ServicePageUI = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [shopServices, setShopServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setShopServices(data));
  }, []);
  const Hair = shopServices?.filter((item) => item.category === "Hair");
  const Nail = shopServices?.filter((item) => item.category === "Nail");
  const Therapy = shopServices?.filter(
    (item) => item.category === "Spa & Therapy"
  );
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* tab */}
      <div className="flex justify-center items-center gap-5">
        <div
          className={
            toggleState == 1
              ? "bg-gray-300 text-gray-900 px-4 py-1 rounded cursor-pointer"
              : " text-gray-800 px-4 py-1 border border-gray-400 rounded cursor-pointer"
          }
          onClick={() => toggleTab(1)}
        >
          All
        </div>

        <div
          className={
            toggleState == 2
              ? "bg-gray-300 text-gray-900 px-4 py-1 rounded cursor-pointer"
              : "text-gray-800 px-4 py-1 border border-gray-400 rounded cursor-pointer"
          }
          onClick={() => toggleTab(2)}
        >
          Hair
        </div>

        <div
          className={
            toggleState == 3
              ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded cursor-pointer"
              : "text-gray-800 px-2 py-1 border border-gray-400 rounded cursor-pointer"
          }
          onClick={() => toggleTab(3)}
        >
          Nail
        </div>
        <div
          className={
            toggleState == 4
              ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded cursor-pointer"
              : "text-gray-800 px-2 py-1 border border-gray-400 rounded cursor-pointer"
          }
          onClick={() => toggleTab(4)}
        >
          Spa & Therapy
        </div>
      </div>
      {/* content */}

      <div className={toggleState == 1 ? "text-gray-900" : "hidden"}>
        {" "}
        <div className="grid grid-cols-3 gap-3 my-7 justify-items-center">
          {shopServices?.map((e, i) => (
            <ServiceCard item={e} key={i} />
          ))}
        </div>
      </div>
      <div className={toggleState == 2 ? "text-gray-900" : "hidden"}>
        <div className="grid grid-cols-3 gap-3 my-7 justify-items-center">
          {Hair?.map((e, i) => (
            <ServiceCard item={e} key={i} />
          ))}
        </div>
      </div>
      <div
        className={
          toggleState == 3
            ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded"
            : "hidden"
        }
      >
        <div className="grid grid-cols-3 gap-3 my-7 justify-items-center">
          {Nail?.map((e, i) => (
            <ServiceCard item={e} key={i} />
          ))}
        </div>
      </div>
      <div
        className={
          toggleState == 4
            ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded"
            : "hidden"
        }
      >
        <div className="grid grid-cols-3 gap-3 my-7 justify-items-center">
          {Therapy?.map((e, i) => (
            <ServiceCard item={e} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePageUI;
