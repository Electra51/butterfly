"use client";

import Image from "next/image";
import img1 from "../../../assets/company/1.png";
import img2 from "../../../assets/company/2.png";
import img3 from "../../../assets/company/3.png";

const ExtraFeature = () => {
  return (
    <div className="mt-[160px] mb-[120px]">
      <div className="max-w-[18rem] lg:max-w-6xl mx-auto">
        <div className="flex justify-center items-center">
          <p className="tracking-[0.1rem] text-2xl border-b w-72 lg:w-[360px] text-center font-bold text-black">
            Making You More Stylish
          </p>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 px-5">
          <div className="flex flex-col justify-center items-center">
            <Image src={img1} alt="" width={300} height={300} />
            <p className="mt-4 text-center font-semibold text-xl tracking-[1px]">
              Aromatherapy
            </p>
            <p className="mt-3 text-gray-800 text-[14px] font-normal text-center px-3 w-[350px] tracking-[1px]">
              Experience the soothing power of essential oils to relax your mind
              and body. Our sessions are designed to reduce stress.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={img2} alt="" width={300} height={300} />
            <p className="mt-4 text-center font-semibold text-xl tracking-[1px]">
              Relax
            </p>
            <p className="mt-3 text-gray-800 text-[14px] font-normal text-center px-3 w-[350px] tracking-[1px]">
              Escape of hustle & bustle of daily life. Let's create a calming
              atmosphere where you can enjoy a moment of pure tranquility.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={img3} alt="" width={300} height={300} />
            <p className="mt-4 text-center font-semibold text-xl tracking-[1px]">
              Massage
            </p>
            <p className="mt-3 text-gray-800 text-[14px] font-normal text-center px-3 w-[350px] tracking-[1px]">
              Relieve tension & restore your body's natural balance with our
              professional massage services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraFeature;
