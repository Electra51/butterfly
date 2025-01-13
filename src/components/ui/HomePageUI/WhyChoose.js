import Image from "next/image";
import { LiaCheckSolid } from "react-icons/lia";
import imgC from "../../../assets/coverLogo/hotStoneTherapy.jpg";
const WhyChoose = () => {
  return (
    <div className="text-white text-justify relative mt-[180px] max-w-[18rem] lg:max-w-6xl mx-auto border">
      <div className="bg-[#C2A74E] max-w-full lg:max-w-[900px]">
        <div className="max-w-[18rem] lg:max-w-lg pl-24 py-14 mr-auto">
          <p className="text-white tracking-[1px] text-[14px] font-medium">
            Our Benefit
          </p>
          <p className="text-4xl mt-1 font-bold text-white tracking-[1px]">
            Why Choose Us?
          </p>
          <p className="text-white mt-2 tracking-[1px] text-[14px] font-medium">
            Book and enjoy your special treatment
          </p>
          <p className="mt-3 text-white tracking-[1px] text-[14px] font-medium">
            Beyond physical health, cosmetics can help to improve our mood,
            enhance our appearance and boost our self-esteem
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 divide-x-2 divide-white mt-5">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 bg-white flex justify-center items-center p-2 rounded-full">
                <LiaCheckSolid className="text-black" />
              </div>
              <p className="font-medium text-[14px]">EXPERTS ARTISTS</p>
            </div>
            <p className="pl-3 font-medium text-[14px]">
              Makeup is the perfect tool to elevate your look. It can enhance
              your natura.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 divide-x-2 divide-white mt-5">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 bg-white flex justify-center items-center p-2 rounded-full">
                <LiaCheckSolid className="text-black" />
              </div>
              <p className="font-medium text-[14px]">GOOD SERVICE</p>
            </div>
            <p className="pl-3 font-medium text-[14px]">
              The look of effortless beauty, or it can completely change your
              appearance.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex absolute top-12 right-0 h-80 w-1/2">
        <Image src={imgC} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default WhyChoose;
