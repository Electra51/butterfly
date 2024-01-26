"use client";

import React from "react";
import aboutImage from "../../../assets/bannerLogo/about.png";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
const About = () => {
  return (
    <div className="care py-12 bg-fixed mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-[19rem] lg:max-w-6xl mx-auto ">
        <div>
          <Image
            src={aboutImage}
            alt=""
            width={500}
            priority
            className="lg:flex hidden transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="overlay overlay_2 p-10">
          <p className="tracking-[0.1rem] text-2xl border-b w-40 lg:w-80 text-start font-bold text-white">
            About us
          </p>
          <p className="text-justify tracking-[0.01rem] mt-5 text-white">
            The top three occupations in the Beauty salons Industry Group are
            Hairdressers, hairstylists, & cosmetologists, Manicurists and
            pedicurists, Receptionists & information clerks, Supervisors of
            personal care and service workers, and Skincare specialists.We
            started as a small beauty studio in Islington, London. Our main idea
            was to create the best beauty studio in the world. Can there be
            compromises in the best studio in the world? Our answer is always
            no, we care about the best quality, we hire the best specialists and
            provide the best customer service.
          </p>
          <Link href="/about-us">
            {" "}
            <button className="button7 b7 mt-10 text-white">
              Explore More <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
