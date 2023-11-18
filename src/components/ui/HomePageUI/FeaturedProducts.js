import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import ShopCard from "../ShopPageUI/ShopCard";
import getProducts from "@/utils/getProducts";

const FeaturedProducts = async () => {
  const allProducts = await getProducts();
  console.log(allProducts);
  return (
    <div className="mt-32 flex flex-col justify-center max-w-6xl mx-auto">
      <SectionTitle heading={"Our Products"}></SectionTitle>
      <div className="grid grid-cols-4 gap-8 mt-10">
        {allProducts.slice(0, 4)?.map((e, i) => (
          <ShopCard product={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
