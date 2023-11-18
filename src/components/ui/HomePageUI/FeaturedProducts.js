import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import ShopCard from "../ShopPageUI/ShopCard";
import getProducts from "@/utils/getProducts";
import Link from "next/link";

const FeaturedProducts = async () => {
  const allProducts = await getProducts();
  console.log(allProducts);
  return (
    <div className="mt-32 flex flex-col justify-center max-w-6xl mx-auto relative">
      <SectionTitle heading={"Our Products"}></SectionTitle>
      <Link
        href="/shop"
        className="absolute right-2 top-0 text-[#c2a74e] text-[15px] underline hover:text-blue-700 cursor-pointer"
      >
        See More
      </Link>
      <div className="grid grid-cols-4 gap-8 mt-10">
        {allProducts.slice(0, 4)?.map((e, i) => (
          <ShopCard product={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
