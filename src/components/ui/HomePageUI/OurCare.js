"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import careImage from "../../../assets/bannerLogo/new.png";
import logo1 from "../../../assets/logo/logo1.png";
import logo2 from "../../../assets/logo/logo2.png";
import logo3 from "../../../assets/logo/logo3.png";
import logo4 from "../../../assets/logo/logo4.png";
import logo5 from "../../../assets/logo/logo5.png";
import logo6 from "../../../assets/logo/logo6.png";
import "./button.css";
const OurCare = () => {
  return (
    <div className="mt-32 py-12">
      <SectionTitle heading={"Our Philoshophy"} />

      <div className="hidden lg:grid grid-cols-3 justify-center items-center gap-2 mt-16">
        <div className="lg:ml-auto relative">
          <div className="w-80 p-3 shadow-md border flex justify-center items-center rounded-md gap-2 absolute right-[-18px] lg:right-[-43px] top-[-46px] lg:top-[-80px] bg-white hover:shadow-lg">
            <Image src={logo1} alt="" width={40} priority />
            <div>
              <p className="font-bold">Clinical Treatments</p>
              <p className="text-[12px]">
                We do care about you and our best specialists.
              </p>
            </div>
          </div>
          <div className="group w-80 p-3 shadow-md  border flex justify-center items-center bg-white rounded-md gap-2 my-14 lg:my-5 mx-auto lg:mx-0 transform group-hover:-translate-y-1 duration-300">
            <Image src={logo5} alt="" width={60} priority />

            <div>
              <p className="font-bold">Green Beauty</p>
              <p className="text-[12px]">
                All cosmetic forumulas are organic. No compromises.
              </p>
            </div>
          </div>
          <div className="bg-white w-80 p-3 shadow-md  border flex justify-center items-center rounded-md gap-2  absolute  right-[-18px] lg:right-[-43px] bottom-[-80px]">
            <Image src={logo3} alt="" width={40} priority />
            <div>
              <p className="font-bold">No Side Effect</p>
              <p className="text-[12px]">
                Even nowadays some cosmetic products are tested on animals.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={careImage} alt="" width={500} priority />
        </div>
        <div className="mr-auto relative">
          <div className="bg-white w-80 p-3 shadow-md  border flex justify-center items-center rounded-md gap-2 absolute left-[-43px] top-[-80px]">
            <Image src={logo4} alt="" width={40} priority />
            <div>
              <p className="font-bold">Professional Care</p>
              <p className="text-[12px]">
                All products we use are professional and have proven effeciency.
              </p>
            </div>
          </div>
          <div className="bg-white w-80 p-3 shadow-md  border flex justify-center items-center rounded-md gap-2 my-5">
            <Image src={logo6} alt="" width={40} priority />

            <div>
              <p className="font-bold">Non-Toxic Formula</p>
              <p className="text-[12px]">
                Don’t worry, all our nails polishes and other products are
                non-toxic.
              </p>
            </div>
          </div>
          <div className="bg-white w-80 p-3 shadow-md  border flex justify-center items-center rounded-md gap-2  absolute left-[-43px] bottom-[-80px]">
            <Image src={logo2} alt="" width={40} priority />
            <div>
              <p className="font-bold">Personalized Experience</p>
              <p className="text-[12px]">
                Come and make sure that our service is exceptional.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 lg:hidden">
        <div className="w-80 p-3 shadow-md border flex justify-center items-center rounded-md gap-2 bg-white hover:shadow-lg mx-auto">
          <Image src={logo1} alt="" width={40} priority />
          <div>
            <p className="font-bold">Clinical Treatments</p>
            <p className="text-[12px]">
              We do care about you and our best specialists.
            </p>
          </div>
        </div>
        <div className="group mx-auto mt-6 w-80 p-3 shadow-md  border flex justify-center items-center bg-white rounded-md gap-2 transform group-hover:-translate-y-1 duration-300">
          <Image src={logo5} alt="" width={60} priority />

          <div>
            <p className="font-bold">Green Beauty</p>
            <p className="text-[12px]">
              All cosmetic forumulas are organic. No compromises.
            </p>
          </div>
        </div>
        <div className="bg-white mx-auto w-80 p-3 shadow-md  border flex justify-center items-center rounded-md gap-2 mt-6">
          <Image src={logo3} alt="" width={40} priority />
          <div>
            <p className="font-bold">No Side Effect</p>
            <p className="text-[12px]">
              Even nowadays some cosmetic products are tested on animals.
            </p>
          </div>
        </div>
        <div className="bg-white w-80 mx-auto p-3 shadow-md  border flex justify-center items-center rounded-md gap-2 mt-6">
          <Image src={logo4} alt="" width={40} priority />
          <div>
            <p className="font-bold">Professional Care</p>
            <p className="text-[12px]">
              All products we use are professional and have proven effeciency.
            </p>
          </div>
        </div>
        <div className="bg-white w-80 mx-auto p-3 shadow-md  border flex justify-center items-center rounded-md gap-2 my-6">
          <Image src={logo6} alt="" width={40} priority />

          <div>
            <p className="font-bold">Non-Toxic Formula</p>
            <p className="text-[12px]">
              Don’t worry, all our nails polishes and other products are
              non-toxic.
            </p>
          </div>
        </div>
        <div className="bg-white w-80 mx-auto p-3 shadow-md  border flex justify-center items-center rounded-md gap-2 ">
          <Image src={logo2} alt="" width={40} priority />
          <div>
            <p className="font-bold">Personalized Experience</p>
            <p className="text-[12px]">
              Come and make sure that our service is exceptional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCare;
