"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
import Link from "next/link";

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop showIndicators={false}>
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <Image
          src={img3}
          alt="banner"
          priority
          className="w-full lg:h-full h-[320px]"
        />
        <div className="absolute top-[10%] lg:top-[27%] right-[10%] lg:right-[20%]">
          <div className="flex flex-col justify-center items-center my-auto mt-20">
            <p className="text-[#100C08] tracking-[0.3rem]">
              Make Nail Gorgeous
            </p>
            <p className="font-bold text-xl lg:text-4xl mt-3 tracking-[0.1rem] text-[#100C08]">
              NAIL SHINE MADE SMILE
            </p>

            <button className="button b1 mt-7 text-[#100C08]">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <Image
          src={img1}
          alt="banner"
          priority
          className="w-full lg:h-full h-[320px]"
        />
        <div className="backdrop-blur-sm absolute top-[27%] right-[7%] lg:right-[5%] bg-white bg-opacity-30 h-48 lg:h-72 w-[340px] lg:w-[510px]">
          <div className="flex flex-col justify-center items-center my-auto mt-8 lg:mt-20">
            <p className="text-[#100C08] tracking-[0.3rem]">You Look Good</p>
            <p className="font-bold text-xl lg:text-3xl mt-3 tracking-[0.1rem] text-[#100C08]">
              THEN YOU FEEL GOOD
            </p>

            <button className="button b1 mt-7 text-[#100C08]">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <Image
          src={img2}
          alt="banner"
          priority
          className="w-full lg:h-full h-[320px]"
        />
        <div className="backdrop-blur-sm absolute top-[10%] lg:top-[27%] left-[16%] lg:left-[10%]">
          <div className="flex flex-col justify-start items-center lg:items-start my-auto mt-20 text-white">
            <p className="text-gray-300 tracking-[0.3rem]">We Make Best Spa</p>
            <p className="font-bold text-xl lg:text-3xl mt-3 tracking-[0.1rem]">
              BEAUTY SPA & SALON
            </p>

            <button className="button b2 mt-7">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <Image
          src={img4}
          alt="banner"
          priority
          className="w-full lg:h-full h-[320px]"
        />
        <div className="absolute top-[10%] lg:top-[27%] left-[12%] lg:left-[10%]">
          <div className="flex flex-col justify-start items-center lg:items-start my-auto mt-20">
            <p className="text-[#100C08] tracking-[0.3rem]">
              We Make Best Makeup
            </p>
            <p className="font-bold text-xl lg:text-3xl mt-3 tracking-[0.1rem] text-[#100C08]">
              BEAUTY MAKEUP & SALON
            </p>

            <button className="button6 b1 mt-7 text-[#100C08]">
              Booking <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <Image
          src={img5}
          alt="banner"
          priority
          className="w-full lg:h-full h-[320px]"
        />
        <div className="absolute top-[10%] lg:top-[27%] left-[25%] lg:left-[10%]">
          <div className="flex flex-col justify-start items-center lg:items-start my-auto mt-20">
            <p className="text-[#100C08] tracking-[0.3rem]">Silky Hair</p>
            <p className="font-bold text-xl lg:text-3xl mt-3 tracking-[0.1rem] text-[#100C08]">
              HAIR SHINNING
            </p>

            <button className="button6 b1 mt-7 text-[#100C08]">
              Booking <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
            {/* <button className="mt-7 font-semibold border border-black px-5 py-2 text-black hover:bg-black hover:text-white transition-width duration-300 ease-in-out">Get Appointment</button> */}
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <Image
          src={img6}
          alt="banner"
          priority
          className="w-full lg:h-full h-[320px]"
        />
        <div className="absolute top-[27%] right-[26%] lg:right-[10%]">
          <div className="flex flex-col justify-start items-center lg:items-start my-auto mt-6 lg:mt-20">
            <p className="text-[#100C08] tracking-[0.3rem]">Products For</p>
            <p className="font-bold text-xl lg:text-3xl mt-3 tracking-[0.1rem] text-[#100C08]">
              SPA TREATMENT
            </p>
            <Link href="/shop">
              {" "}
              <button className="button6 b1 mt-7 text-[#100C08]">
                Shop Now <BsArrowRightShort className="arrow1 text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <Image
          src={img7}
          alt="banner"
          priority
          className="w-full lg:h-full h-[320px]"
        />
        <div className="backdrop-blur-sm absolute top-[30%] left-[6%] lg:left-[30%] bg-white bg-opacity-30  h-48 lg:h-72 w-[340px] lg:w-[510px]">
          <div className="flex flex-col justify-center items-center my-auto mt-[6%] lg:mt-20">
            <p className="text-[#100C08] tracking-[0.3rem]">
              Make Hair shining
            </p>
            <p className="font-bold text-xl lg:text-3xl mt-3 tracking-[0.1rem] text-[#100C08]">
              BEAUTIFUL & HEALTHY HAIR
            </p>

            <button className="button b1 mt-7 text-[#100C08]">
              Get Appointment <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
