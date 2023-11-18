"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import ShopCard from "./ShopCard";
import { useEffect, useState } from "react";
import Pagination from "@/components/shared/Pagination";
import { IoMdSearch } from "react-icons/io";
import { RxShadowNone } from "react-icons/rx";

const ShopProducts = ({ allProducts }) => {
  console.log("object", allProducts);

  const [priceFilter, setPriceFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [stockFilter, setStockFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [page, setPage] = useState(0);

  const productTypes = Array.from(
    new Set(allProducts?.map((e) => e?.product_type))
  );

  const filteredProducts = allProducts
    ?.filter((product) => {
      // Filter by search query
      const matchesSearch = product?.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Filter by price
      const matchesPrice =
        priceFilter === "all" || product?.price <= parseInt(priceFilter);

      // Filter by stock status
      const matchesStock =
        stockFilter === "all" ||
        (stockFilter === "inStock" && product?.stock == "In Stock") ||
        (stockFilter === "outOfStock" && product?.stock == "Out of Stock");

      // Filter by product type
      const matchesType =
        typeFilter === "all" || product?.product_type === typeFilter;

      return matchesSearch && matchesPrice && matchesStock && matchesType;
    })
    .slice(6 * page, 6 * (page + 1));

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mt-28 mb-5">
        <div className="relative flex items-center h-9 mr-2 bg-white overflow-hidden border border-[#C2A74E]">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <IoMdSearch className="text-[#C2A74E] font-medium text-xl" />
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-[#C2A74E] pr-2"
            type="text"
            id="search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(0); // Reset page when the search query changes
            }}
            placeholder="Search Service.."
          />
        </div>
        <Pagination
          length={allProducts?.length}
          page={page}
          setPage={setPage}
        />
      </div>
      <div className="grid grid-cols-5 gap-12">
        <div>
          {/* price filter */}
          <div className="flex flex-col justify-start h-12">
            <p className="mb-0 pb-0">Filter by Price :</p>
            <select
              id=""
              name=""
              className="border border-[#C2A74E] rounded-none"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="40">Less Than 40</option>
              <option value="20">Less Than 20</option>
              <option value="10">Less Than 10</option>
            </select>
          </div>
          <div className="flex flex-col justify-start h-12 mt-5">
            <p className="mb-0 pb-0">Filter by Stock :</p>
            <select
              id=""
              name=""
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="border border-[#C2A74E] rounded-none"
            >
              <option value="all">All</option>
              <option value="inStock">In Stock</option>
              <option value="outOfStock">Out Of Stock</option>
            </select>
          </div>
          <div className="mt-3">
            <p>Product Type</p>
            <div className="flex flex-wrap gap-2 justify-stretch items-center">
              {productTypes?.map((type, index) => (
                <div
                  className={`px-2 py-1 rounded-full text-black border border-[#C2A74E] cursor-pointer text-[12px] ${
                    typeFilter === type ? "bg-[#C2A74E] text-white" : "bg-white"
                  }`}
                  onClick={() => setTypeFilter(type)}
                  key={index}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-4 border-red-500 max-w-4xl mx-auto mb-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-3 gap-14 mt-1">
              {filteredProducts.map((product, index) => (
                <ShopCard product={product} key={index} />
              ))}
            </div>
          ) : (
            <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
              <RxShadowNone />
              No products found with the current filters and search criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
