"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { useEffect, useState } from "react";

const FeatureService = () => {
  const [shopServices, setShopServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setShopServices(data));
  }, []);
  const featuredServices = shopServices?.filter(
    (item) => item?.featured === "featured"
  );

  return (
    <div className="mt-32 flex flex-col justify-center max-w-6xl mx-auto">
      <SectionTitle heading={"Featured Services"}></SectionTitle>
      <div className="mt-5 grid grid-cols-3">
        {featuredServices?.map(
          (e, i) => (
            <div>{e?.name}</div>
          )
          // console.log(e?.img)
          // {
          //   <Image src={e?.img} alt="" width={300} />;
          // }
        )}
      </div>
    </div>
  );
};

export default FeatureService;
