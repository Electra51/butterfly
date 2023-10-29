"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img0 from "../../../assets/bannerLogo/image00.png";
import img1 from "../../../assets/bannerLogo/image02.png";
import img2 from "../../../assets/bannerLogo/image01.png";
import img3 from "../../../assets/bannerLogo/image03.png";
import img4 from "../../../assets/bannerLogo/image04.png";
import img5 from "../../../assets/bannerLogo/image05.png";
import img6 from "../../../assets/bannerLogo/image06.png";
import img7 from "../../../assets/bannerLogo/image08.png";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import "./button.css";

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="relative">
        <Image src={img0} alt="banner" className="w-full" />
        <div className="backdrop-blur-sm absolute top-[27%] right-[32%] bg-white bg-opacity-30 h-72 w-[510px]">
          <div className="flex flex-col justify-center items-center my-auto mt-20">
            <p className="text-gray-600 tracking-[0.3rem]">You Look Good</p>
            <p className="font-semibold text-3xl mt-3 tracking-[0.1rem]">
              THEN YOU FEEL GOOD
            </p>
            <button className="button6 b1 mt-7">
              Shop Now <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={img1} alt="banner" className="w-full" />
        <div className="backdrop-blur-sm absolute top-[27%] right-[5%] bg-white bg-opacity-30 h-72 w-[510px]">
          <div className="flex flex-col justify-center items-center my-auto mt-20">
            <p className="text-gray-600 tracking-[0.3rem]">You Look Good</p>
            <p className="font-semibold text-3xl mt-3 tracking-[0.1rem]">
              THEN YOU FEEL GOOD
            </p>

            <button className="button b1 mt-7">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={img2} alt="banner" className="w-full" />
        <div className="backdrop-blur-sm absolute top-[27%] left-[10%]">
          <div className="flex flex-col justify-start items-start my-auto mt-20 text-white">
            <p className="text-gray-300 tracking-[0.3rem]">We Make Best Spa</p>
            <p className="font-semibold text-3xl mt-3 tracking-[0.1rem]">
              BEAUTY SPA & SALON
            </p>

            <button className="button b2 mt-7">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={img3} alt="banner" className="w-full" />
        <div className="absolute top-[27%] right-[20%]">
          <div className="flex flex-col justify-center items-center my-auto mt-20">
            <p className="text-gray-600 tracking-[0.3rem]">
              Make Nail Gorgeous
            </p>
            <p className="font-semibold text-3xl mt-3 tracking-[0.1rem]">
              NAIL SHINE MADE SMILE
            </p>

            <button className="button b1 mt-7">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={img4} alt="banner" className="w-full" />
        <div className="absolute top-[27%] left-[10%]">
          <div className="flex flex-col justify-start items-start my-auto mt-20">
            <p className="text-gray-600 tracking-[0.3rem]">
              We Make Best Makeup
            </p>
            <p className="font-semibold text-3xl mt-3 tracking-[0.1rem]">
              BEAUTY MAKEUP & SALON
            </p>

            <button className="button6 b1 mt-7">
              Booking <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={img5} alt="banner" className="w-full" />
        <div className="absolute top-[27%] left-[10%]">
          <div className="flex flex-col justify-start items-start my-auto mt-20">
            <p className="text-gray-600 tracking-[0.3rem]">Silky Hair</p>
            <p className="font-semibold text-3xl mt-3 tracking-[0.1rem]">
              HAIR SHINNING
            </p>

            <button className="button6 b1 mt-7">
              Booking <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
            {/* <button className="mt-7 font-semibold border border-black px-5 py-2 text-black hover:bg-black hover:text-white transition-width duration-300 ease-in-out">Get Appointment</button> */}
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={img6} alt="banner" className="w-full" />
        <div className="absolute top-[27%] right-[10%]">
          <div className="flex flex-col justify-start items-start my-auto mt-20">
            <p className="text-gray-600 tracking-[0.3rem]">Products For</p>
            <p className="font-semibold text-3xl mt-3 tracking-[0.1rem]">
              SPA TREATMENT
            </p>

            <button className="button6 b1 mt-7">
              Shop Now <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={img7} alt="banner" className="w-full" />
        <div className="backdrop-blur-sm absolute top-[30%] left-[30%] bg-white bg-opacity-30 h-72 w-[510px]">
          <div className="flex flex-col justify-center items-center my-auto mt-20">
            <p className="text-gray-600 tracking-[0.3rem]">Make Hair shining</p>
            <p className="font-semibold text-3xl mt-3 tracking-[0.1rem]">
              BEAUTIFUL & HEALTHY HAIR
            </p>

            <button className="button b1 mt-7">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
