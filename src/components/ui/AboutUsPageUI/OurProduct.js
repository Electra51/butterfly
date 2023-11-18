"use client";

import Image from "next/image";
import productLogo from "../../../assets/bannerLogo/productsLogo.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
const OurProduct = () => {
  return (
    <div className="mt-32 grid grid-cols-2 gap-10 items-center max-w-6xl mx-auto my-20">
      <div>
        <p className="tracking-[0.2rem] text-xl border-b font-bold">
          Our Products
        </p>
        <p className="text-justify tracking-[0.01rem] mt-5">
          All our products are cruelty-free, it’s a category containing all
          cosmetics that have not been tested on animals. Each cosmetic is
          subject to strict control by independent inspection bodies chosen by
          the Coalition for Consumer Information in Cosmetics (CCIC), which is
          an NGO founded by 8 international animal protection groups such as:
          American Anti-Vivisection Society, Animal Alliance of Canada, Doris
          Day Animal League, etc.
        </p>
        <Link href="/shop">
          <button className="button b1 mt-10">
            Shop Now <BsArrowRightShort className="arrow1 text-2xl" />
          </button>
        </Link>
      </div>
      <div>
        {" "}
        <Image src={productLogo} alt="about Image" priority />
      </div>
    </div>
  );
};

export default OurProduct;
