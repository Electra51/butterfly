"use client";
import Star from "@/components/shared/Star";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const RelatedProduct = ({ e }) => {
  console.log(e);
  return (
    <PhotoProvider>
      <div className="w-80 h-96 bg-base-100 shadow-xl relative mt-2 overflow-y-hidden">
        <div className="h-56">
          <PhotoView src={e?.img}>
            <img
              src={e?.img}
              alt="Shoes"
              className="w-full h-full object-contain p-5"
            />
          </PhotoView>
        </div>
        <div className="flex-grow-0 px-3 py-2 ">
          <div className="flex justify-between">
            {" "}
            {e?.name?.length > 26 ? (
              <p className="text-[18px]">{e?.name.slice(0, 26) + "..."}</p>
            ) : (
              <p className="text-[18px]">{e?.name}</p>
            )}
            {/* {e?.name} */}
          </div>
          <div className="flex justify-between text-center">
            <div className="flex align-middle justify-items-center">
              <Star ratingPoint={e?.rating} />
            </div>
            {e?.stock == "Out of Stock" ? (
              <div className="badge bg-red-600 text-white">{e?.stock}</div>
            ) : (
              <div className="badge bg-green-600 text-white">{e?.stock}</div>
            )}
          </div>
          <p className="font-semibold text-[#F88E1A]">Price: $ {e?.price}</p>

          {/* {description.length > 70 ? (
            <p className="text-[14px]">{description.slice(0, 70) + "..."}</p>
          ) : (
            <p className="text-[14px]">{description}</p>
          )} */}

          <div className="card-actions justify-between">
            <Link href={`/shop/${e?._id}`}>
              <button className="an border bg-[#F88E1A] rounded-none !px-3 py-1  ml-3 hover:bg-[#bf680a] !text-white my-3">
                View Detail
              </button>
            </Link>
            <button className="an border bg-[#F88E1A] rounded-none !px-3 py-1  ml-3 hover:bg-[#bf680a] !text-white my-3 flex items-center gap-3">
              Add Cart <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default RelatedProduct;
