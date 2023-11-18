"use client";

import Star from "@/components/shared/Star";
import Link from "next/link";
import { FaRegEye, FaHeart, FaRegHeart } from "react-icons/fa";

const ServiceCard = ({ item }) => {
  return (
    <div
      className="group bg-base-100 shadow-xl transform group-hover:-translate-y-1 duration-300 relative"
      style={{
        boxShadow: "rgb(193 165 73 / 44%) 0px 7px 29px 0px",
      }}
    >
      <div
        className="w-full h-full absolute top-0 left-0 bg-[#c2a74e] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ zIndex: -2 }}
      ></div>
      <div
        className="invisible group-hover:visible absolute bottom-[50%] left-2"
        style={{ zIndex: 1 }}
      >
        <div className="bg-[#c2a74e] text-white p-2">
          <Link href={`/services/${item._id}`}>
            <FaRegEye />
          </Link>
        </div>

        <div className="bg-[#c2a74e] text-white p-2 mt-1">
          {/* <FaHeart /> */}
          <FaRegHeart />
        </div>
      </div>

      <div className="relative pt-12">
        {/* <div className="border border-[#C2A74E] text-[#C2A74E] px-1 py-0 absolute right-2 top-2 text-[12px] flex items-center gap-2">
            {item?.rating}
            <FaStar className="text-orange-500" />
          </div> */}
        <div className="bg-[#C2A74E] text-white px-1 py-0 absolute right-2 top-2 text-[12px] flex items-center gap-2">
          {item?.availability}
        </div>

        <div className="w-20 h-20 bg-[#C2A74E] rounded-full absolute top-5 left-9 z-10">
          <img
            src={item?.icon}
            className="h-full w-full object-contain rounded-full border"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[165px] h-[165px] hover:bg-[#C2A74E] border border-[#C2A74E] rounded-full relative">
            <div className="w-[150px] h-[150px] rounded-full absolute left-0 right-0 bottom-0 top-0 m-auto">
              <img
                src={item?.img}
                className="h-full w-full object-cover rounded-full border border-[#C2A74E]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-body text-center">
        <h2 className="font-semibold text-center">{item?.name}</h2>
        <p>Price: ${item?.price}</p>
        <div className="mx-auto">
          <Star ratingPoint={item?.rating} />
        </div>
        {item.detail[0].ans1?.length > 50 ? (
          <p className="text-[14px]">
            {item.detail[0].ans1.slice(0, 50) + "..."}
          </p>
        ) : (
          <p className="text-[14px]">{item.detail[0].ans1}</p>
        )}

        <button className="buttonNLog1 bNLog1">Book Now</button>
      </div>
    </div>
  );
};

export default ServiceCard;
