"use client";
import Star from "@/components/shared/Star";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const RelatedProduct = ({ e }) => {
  return (
    // <PhotoProvider>
    //   <div className="group bg-base-100 shadow-xl transform group-hover:-translate-y-1 duration-300 relative w-69 h-96" style={{
    //   boxShadow: "rgb(193 165 73 / 44%) 0px 7px 29px 0px",
    // }}
    // >
    //     <div className="h-56">
    //       <PhotoView src={e?.img}>
    //         <img
    //           src={e?.img}
    //           alt="Shoes"
    //           className="w-full h-full object-contain p-5"
    //         />
    //       </PhotoView>
    //     </div>
    //     <div className="flex-grow-0 px-3 py-2 ">
    //       <div className="flex justify-between">
    //         {" "}
    //         {e?.name?.length > 26 ? (
    //           <p className="text-[18px]">{e?.name.slice(0, 26) + "..."}</p>
    //         ) : (
    //           <p className="text-[18px]">{e?.name}</p>
    //         )}
    //         {/* {e?.name} */}
    //       </div>
    //       <div className="flex justify-between text-center">
    //         <div className="flex align-middle justify-items-center">
    //           <Star ratingPoint={e?.rating} />
    //         </div>
    //         {e?.stock == "Out of Stock" ? (
    //           <div className="badge bg-red-600 text-white">{e?.stock}</div>
    //         ) : (
    //           <div className="badge bg-green-600 text-white">{e?.stock}</div>
    //         )}
    //       </div>
    //       <p className="font-semibold text-[#F88E1A]">Price: $ {e?.price}</p>

    //       {/* {description.length > 70 ? (
    //         <p className="text-[14px]">{description.slice(0, 70) + "..."}</p>
    //       ) : (
    //         <p className="text-[14px]">{description}</p>
    //       )} */}

    //       <div className="card-actions justify-between">
    //         <Link href={`/shop/${e?._id}`}>
    //           <button className="an border bg-[#F88E1A] rounded-none !px-3 py-1  ml-3 hover:bg-[#bf680a] !text-white my-3">
    //             View Detail
    //           </button>
    //         </Link>
    //         <button className="an border bg-[#F88E1A] rounded-none !px-3 py-1  ml-3 hover:bg-[#bf680a] !text-white my-3 flex items-center gap-3">
    //           Add Cart <AiOutlineShoppingCart />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </PhotoProvider>

    <PhotoProvider>
      <div
        // className="w-80 h-96 bg-base-100 shadow-xl relative mt-2 overflow-y-hidden"
        className="group w-[263px] bg-base-100 shadow-xl transform group-hover:-translate-y-1 duration-300 relative my-12"
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
            <Link href={`/services/${e._id}`}>
              <AiOutlineShoppingCart />
            </Link>
          </div>

          <div className="bg-[#c2a74e] text-white p-2 mt-1">
            {/* <FaHeart /> */}
            <FaRegHeart />
          </div>
        </div>
        <div className="border border-[#C2A74E] text-[#C2A74E] px-1 py-0 absolute right-2 top-2 text-[12px] flex items-center gap-1 rounded-sm">
          {e?.rating}
          <FaStar className="text-[#ecdb3bf3]" />
        </div>
        <div className="h-56">
          <PhotoView src={e?.img}>
            <Image
              src={e?.img}
              width={500}
              height={500}
              alt="Shoes"
              className="w-full h-full object-contain p-5"
            />
          </PhotoView>
        </div>
        <div className="flex-grow-0">
          <div className="card-body">
            {" "}
            {e?.name?.length > 26 ? (
              <p className="text-[18px]">{e?.name.slice(0, 26) + "..."}</p>
            ) : (
              <p className="text-[18px]">{e?.name}</p>
            )}
            <div className="flex justify-between items-center">
              {/* <div className="flex align-middle justify-items-center">
              <Star ratingPoint={product?.rating} />
            </div> */}
              <p className="font-semibold text-[#aa9d28fd] text-[14px]">
                Price: $ {e?.price}
              </p>
              {/* {e?.stock == "Out of Stock" ? (
                <div className="badge bg-red-600 text-white text-[12px]">
                  {e?.stock}
                </div>
              ) : (
                <div className="badge bg-green-600 text-white text-[11px]">
                  {e?.stock}
                </div>
              )} */}
            </div>
            <Link href={`/shop/${e?._id}`}>
              <button className="buttonNLog1 bNLog1">View Details</button>
            </Link>
          </div>

          {/* {description.length > 70 ? (
            <p className="text-[14px]">{description.slice(0, 70) + "..."}</p>
          ) : (
            <p className="text-[14px]">{description}</p>
          )} */}

          {/* <AddToCardBtn id={product._id} /> */}
        </div>
      </div>
    </PhotoProvider>
  );
};

export default RelatedProduct;
