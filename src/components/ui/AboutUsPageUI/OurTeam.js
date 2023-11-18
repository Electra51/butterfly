"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import img1 from "../../../assets/profileLogo/man1.jpg";
import img2 from "../../../assets/profileLogo/man2.jpg";
import img3 from "../../../assets/profileLogo/man3.jpg";
import img4 from "../../../assets/profileLogo/man4.jpg";
import img5 from "../../../assets/profileLogo/man5.jpg";
import img6 from "../../../assets/profileLogo/man6.jpg";
import img7 from "../../../assets/profileLogo/man7.jpg";
import img8 from "../../../assets/profileLogo/man8.jpg";
import img9 from "../../../assets/profileLogo/man9.jpg";
import img10 from "../../../assets/profileLogo/man10.jpg";
import img11 from "../../../assets/profileLogo/man11.jpg";
import img12 from "../../../assets/profileLogo/man12.jpg";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
const OurTeam = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-6xl mx-auto mt-32">
      <SectionTitle heading={"Our Team Member"} />
      <Slider {...settings} className="mt-12">
        <div>
          <div
            className="flex flex-col justify-start gap-5 items-center border bg-[#C2A74E] py-10 mx-7"
            style={{ boxShadow: "#c2a74e 0px 5px 15px" }}
          >
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image src={img1} alt="" className="w-full" />
              </div>
            </div>
            <div className="text-center mt-4 text-white">
              <p className="font-semibold">David Michael</p>
              <p className="font-medium text-[15px]">CEO & Founder</p>
              <p className="flex justify-center items-center gap-2 font-normal text-[14px]">
                david@gmail.com
              </p>
              <div className="flex justify-center items-center gap-3 mt-3">
                <FaLinkedin className="text-xl text-white" />
                <FaFacebook className="text-xl text-white" />
                <FaInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col justify-start gap-5 items-center border bg-[#C2A74E] py-10 mx-7"
            style={{ boxShadow: "#c2a74e 0px 5px 15px" }}
          >
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image src={img12} alt="" className="w-full" />
              </div>
            </div>
            <div className="text-center mt-4 text-white">
              <p className="font-semibold">Charles Daniel</p>
              <p className="font-medium text-[15px]">CEO & Founder</p>
              <p className="flex justify-center items-center gap-2 font-normal text-[14px]">
                charles@gmail.com
              </p>
              <div className="flex justify-center items-center gap-3 mt-3">
                <FaLinkedin className="text-xl text-white" />
                <FaFacebook className="text-xl text-white" />
                <FaInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col justify-start gap-5 items-center border bg-[#C2A74E] py-10 mx-7"
            style={{ boxShadow: "#c2a74e 0px 5px 15px" }}
          >
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image src={img7} alt="" className="w-full" />
              </div>
            </div>
            <div className="text-center mt-4 text-white">
              <p className="font-semibold">Anthony Mark</p>
              <p className="font-medium text-[15px]">COO & Co-Founder</p>
              <p className="flex justify-center items-center gap-2 font-normal text-[14px]">
                anthony@gmail.com
              </p>
              <div className="flex justify-center items-center gap-3 mt-3">
                <FaLinkedin className="text-xl text-white" />
                <FaFacebook className="text-xl text-white" />
                <FaInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col justify-start gap-5 items-center border bg-[#C2A74E] py-10 mx-7"
            style={{ boxShadow: "#c2a74e 0px 5px 15px" }}
          >
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image src={img4} alt="" className="w-full" />
              </div>
            </div>
            <div className="text-center mt-4 text-white">
              <p className="font-semibold">Kevin Brian</p>
              <p className="font-medium text-[15px]">CPO</p>
              <p className="flex justify-center items-center gap-2 font-normal text-[14px]">
                kevin@gmail.com
              </p>
              <div className="flex justify-center items-center gap-3 mt-3">
                <FaLinkedin className="text-xl text-white" />
                <FaFacebook className="text-xl text-white" />
                <FaInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col justify-start gap-5 items-center border bg-[#C2A74E] py-10 mx-7"
            style={{ boxShadow: "#c2a74e 0px 5px 15px" }}
          >
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image src={img10} alt="" className="w-full" />
              </div>
            </div>
            <div className="text-center mt-4 text-white">
              <p className="font-semibold">Timothy Jason</p>
              <p className="font-medium text-[15px]">Advisor</p>
              <p className="flex justify-center items-center gap-2 font-normal text-[14px]">
                timothy@gmail.com
              </p>
              <div className="flex justify-center items-center gap-3 mt-3">
                <FaLinkedin className="text-xl text-white" />
                <FaFacebook className="text-xl text-white" />
                <FaInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col justify-start gap-5 items-center border bg-[#C2A74E] py-10 mx-7"
            style={{ boxShadow: "#c2a74e 0px 5px 15px" }}
          >
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image src={img3} alt="" className="w-full" />
              </div>
            </div>
            <div className="text-center mt-4 text-white">
              <p className="font-semibold">Nicholas Eric</p>
              <p className="font-medium text-[15px]">Senior MakeUp Artist</p>
              <p className="flex justify-center items-center gap-2 font-normal text-[14px]">
                nicholas@gmail.com
              </p>
              <div className="flex justify-center items-center gap-3 mt-3">
                <FaLinkedin className="text-xl text-white" />
                <FaFacebook className="text-xl text-white" />
                <FaInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col justify-start gap-5 items-center border bg-[#C2A74E] py-10 mx-7"
            style={{ boxShadow: "#c2a74e 0px 5px 15px" }}
          >
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image src={img5} alt="" className="w-full" />
              </div>
            </div>
            <div className="text-center mt-4 text-white">
              <p className="font-semibold">Scott Justin</p>
              <p className="font-medium text-[15px]">Senior Spa Artist</p>
              <p className="flex justify-center items-center gap-2 font-normal text-[14px]">
                scott@gmail.com
              </p>
              <div className="flex justify-center items-center gap-3 mt-3">
                <FaLinkedin className="text-xl text-white" />
                <FaFacebook className="text-xl text-white" />
                <FaInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col justify-start gap-5 items-center border bg-[#C2A74E] py-10 mx-7"
            style={{ boxShadow: "#c2a74e 0px 5px 15px" }}
          >
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image src={img11} alt="" className="w-full" />
              </div>
            </div>
            <div className="text-center mt-4 text-white">
              <p className="font-semibold">Raymond Jack</p>
              <p className="font-medium text-[15px]">Executive</p>
              <p className="flex justify-center items-center gap-2 font-normal text-[14px]">
                rymond@gmail.com
              </p>
              <div className="flex justify-center items-center gap-3 mt-3">
                <FaLinkedin className="text-xl text-white" />
                <FaFacebook className="text-xl text-white" />
                <FaInstagram className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OurTeam;
