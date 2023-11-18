import Image from "next/image";
import { LiaCheckSolid } from "react-icons/lia";
import imgC from "../../../assets/coverLogo/hotStoneTherapy.jpg";
const WhyChoose = () => {
  return (
    <div className="text-white text-justify relative mt-32">
      <div className="bg-[#C2A74E] max-w-5xl">
        <div className="max-w-lg px-5 py-14 ml-32">
          <p className="text-white">Our Benefit</p>
          <p className="text-4xl mt-1 font-bold text-white tracking-[0.2rem]">
            Why Choose Us?
          </p>
          <p className="text-white mt-2">
            Book and enjoy your special treatment
          </p>
          <p className="mt-3 text-white">
            Beyond physical health, cosmetics can help to improve our mood,
            enhance our appearance and boost our self-esteem
          </p>

          <div className="flex items-center justify-center gap-3 divide-x-2 divide-white mt-5">
            <div className="flex items-center gap-5">
              <div className="h-8 w-8 bg-white flex justify-center items-center p-2 rounded-full">
                <LiaCheckSolid className="text-black" />
              </div>
              <p className="text-[16px]">EXPERTS ARTISTSs</p>
            </div>
            <p className="pl-3">
              Makeup is the perfect tool to elevate your look. It can enhance
              your natural features.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 divide-x-2 divide-white mt-5">
            <div className="flex items-center gap-5">
              <div className="h-8 w-8 bg-white flex justify-center items-center p-2 rounded-full">
                <LiaCheckSolid className="text-black" />
              </div>
              <p className="text-[16px]">GOOD SERVICE</p>
            </div>
            <p className="pl-3">
              The look of effortless beauty, or it can completely change your
              appearance.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-12 right-0 h-80 w-1/2">
        <Image src={imgC} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default WhyChoose;
