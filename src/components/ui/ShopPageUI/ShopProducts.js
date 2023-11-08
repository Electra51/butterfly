"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import ShopCard from "./ShopCard";
import { useEffect, useState } from "react";
import Pagination from "@/components/shared/Pagination";

const ShopProducts = () => {
  const [shopProducts, setShopProducts] = useState([]);
  const [producType, setProducType] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setShopProducts(data));
  }, []);
  const [page, setPage] = useState(0);
  // console.log(shopProducts);

  useEffect(() => {
    let typeArray = [];
    shopProducts?.map((e, i) => typeArray.push(e?.product_type));
    const removeDuplicate = (typeArray) => {
      return typeArray?.filter(
        (value, index) => typeArray.indexOf(value) === index
      );
    };
    setProducType(removeDuplicate(typeArray));
  }, [shopProducts]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-32">
        <SectionTitle heading={"Our Products"} />
      </div>
      <div className="grid grid-cols-5 gap-10">
        <div className=" border">
          <div className="relative flex items-center w-full h-12 mr-2 focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>

          {/* price filter */}
          <p className="mb-1">Filter by Price :</p>
          <div className="flex flex-row items-center">
            <input
              className="input w-28 mr-1 input-bordered p-1 my-0 h-6"
              type="number"
              placeholder="Min Price"
              // value={minPrice}
              // onChange={(e) => setMinPrice(e.target.value)}
            />
            <span className="mr-1">To</span>
            <input
              className="input w-28 mr-1 input-bordered p-1 my-0 h-6"
              type="number"
              placeholder="Max Price"
              // value={maxPrice}
              // onChange={(e) => setMaxPrice(e.target.value)}
            />

            <button
              className={`bg-[#EF8E33] mr-1 hover:bg-[#bf680a] text-[14px] text-white !px-2 py-0.5 rounded-none`}
              // onClick={handleFilter}
            >
              Filter
            </button>
            <button
              className={`bg-[#EF8E33] mr-1 hover:bg-[#bf680a] text-[14px] text-white !px-2 py-0.5 rounded-none`}
              // onClick={handleReset}
            >
              Reset
            </button>
          </div>
          {/* price filter end */}
          <div>
            <p>Stock</p>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
              />
              In Stock{" "}
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
              />
              Out of Stock{" "}
            </div>
          </div>
          {/* product type */}

          <div>
            <p>Product Type</p>
            <div className="flex w-32 flex-wrap gap-2">
              {producType?.map((e, index) => (
                <div className="badge badge-primary" key={index}>
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-4 border-red-500">
          <div className="grid grid-cols-3 gap-4">
            {shopProducts
              ?.slice(6 * page, 6 * (page + 1))
              .map((product, index) => (
                <ShopCard product={product} key={index} />
              ))}
          </div>
          <Pagination
            length={shopProducts?.length}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
