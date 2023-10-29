"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import { FiCheck } from "react-icons/fi";
const PricingPlan = () => {
  return (
    <div className="mt-32 max-w-6xl mx-auto">
      <SectionTitle heading={"Our Pricing"} />
      <div className="grid grid-cols-3 gap-3 justify-center justify-items-center items-center my-12">
        <div className="flex flex-col justify-center items-center bg-gray-300 shadow-md w-[300px] px-5 py-8">
          <p className="text-xl font-semibold">Comfort Relax</p>
          <p className=" mt-5 mb-3">
            <span className="text-2xl font-bold text-pink-700 ">$29.99</span> /
            Monthly
          </p>
          <p className="text-center text-[14px]">
            Improve your look with our professional hairstyling services.
          </p>
          <div className="h-[1px] w-full px-3 bg-white my-7"></div>
          <div className="mx-6">
            <div className="grid grid-cols-3 justify-start items-center gap-2 ">
              <p className="col-span-2 text-[15px]">Hair Cutting </p>
              <FiCheck className="text-pink-600 mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 my-2">
              <p className="col-span-2 text-[15px]">Clinical massage </p>
              <FiCheck className="text-pink-600  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 ">
              <p className="col-span-2 text-[15px]">Updo and Stylings </p>
              <FiCheck className="text-pink-600  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 my-2">
              <p className="col-span-2 text-[15px]">
                {" "}
                Coloring and Highlights{" "}
              </p>
              <FiCheck className="text-pink-600  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 ">
              <p className="col-span-2 text-[15px]"> Chemical Peels </p>
              <FiCheck className="text-pink-600  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 my-2">
              {" "}
              <p className="col-span-2 text-[15px]">Spa Manicure</p>
              <FiCheck className="text-pink-600  mx-auto" />
            </div>
          </div>
          <button className="bg-pink-600 px-5 py-2 text-white mt-5">
            Choose Plan
          </button>
        </div>
        {/* 2 */}
        <div className="flex flex-col justify-center items-center bg-gray-300 shadow-md w-[300px] px-5 py-8">
          <p className="text-xl font-semibold">Premium Spa</p>
          <p className=" mt-5 mb-3">
            <span className="text-2xl font-bold text-violet-700 ">$39.99</span>{" "}
            / Monthly
          </p>
          <p className="text-center text-[14px]">
            Our manicures and pedicures are expertly.
          </p>
          <div className="h-[1px] w-full px-3 bg-white my-7"></div>
          <div className="mx-6">
            <div className="grid grid-cols-3 justify-start items-center gap-2 mb-1">
              <p className="col-span-2 text-[15px]">MicroDreambrasion </p>
              <FiCheck className="text-violet-700 mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 ">
              <p className="col-span-2 text-[15px]">Hair Cutting </p>
              <FiCheck className="text-violet-700 mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 my-2">
              <p className="col-span-2 text-[15px]">Clinical massage </p>
              <FiCheck className="text-violet-700  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 ">
              <p className="col-span-2 text-[15px]">Updo and Stylings </p>
              <FiCheck className="text-violet-700  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 my-2">
              <p className="col-span-2 text-[15px]"> AromaTherapy </p>
              <FiCheck className="text-violet-700  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 ">
              <p className="col-span-2 text-[15px]"> Chemical Peels </p>
              <FiCheck className="text-violet-700  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 my-2">
              {" "}
              <p className="col-span-2 text-[15px]">Classic Massage</p>
              <FiCheck className="text-violet-700  mx-auto" />
            </div>
          </div>
          <button className="bg-violet-700 px-5 py-2 text-white mt-5">
            Choose Plan
          </button>
        </div>
        {/* 3 */}
        <div className="flex flex-col justify-center items-center bg-gray-300 shadow-md w-[300px] px-5 py-8">
          <p className="text-xl font-semibold">Luxury Retreat</p>
          <p className=" mt-5 mb-3">
            <span className="text-2xl font-bold text-yellow-600 ">$49.99</span>{" "}
            / Monthly
          </p>
          <p className="text-center text-[14px]">
            Our manicures and pedicures are expertly carried out .
          </p>
          <div className="h-[1px] w-full px-3 bg-white my-7"></div>
          <div className="mx-6">
            <div className="grid grid-cols-3 justify-start items-center gap-2 ">
              <p className="col-span-2 text-[15px]">Hot Stones </p>
              <FiCheck className="text-yellow-600 mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 my-2">
              <p className="col-span-2 text-[15px]">Hand massage </p>
              <FiCheck className="text-yellow-600  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 ">
              <p className="col-span-2 text-[15px]">Padicure Spa </p>
              <FiCheck className="text-yellow-600  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 my-2">
              <p className="col-span-2 text-[15px]"> Aroma Therapy</p>
              <FiCheck className="text-yellow-600  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 ">
              <p className="col-span-2 text-[15px]"> Chemical Peels </p>
              <FiCheck className="text-yellow-600  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 my-2">
              {" "}
              <p className="col-span-2 text-[15px]">Spa Manicure</p>
              <FiCheck className="text-yellow-600  mx-auto" />
            </div>
            <div className="grid grid-cols-3 justify-start items-center gap-2 my-2">
              {" "}
              <p className="col-span-2 text-[15px]">Waxing</p>
              <FiCheck className="text-yellow-600  mx-auto" />
            </div>
          </div>
          <button className="bg-yellow-600 px-5 py-2 text-white mt-5">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
