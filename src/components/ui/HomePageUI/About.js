"use client";

import React from "react";
import aboutImage from "../../../assets/bannerLogo/about.png";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
const About = () => {
  return (
    <div className="mt-32 grid grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
      <div>
        <Image
          src={aboutImage}
          alt=""
          width={500}
          priority
          className="transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div>
        <p className="tracking-[0.2rem] text-xl border-b">About us</p>
        <p className="text-justify tracking-[0.01rem] mt-5">
          The top three occupations in the Beauty salons Industry Group are
          Hairdressers, hairstylists, & cosmetologists, Manicurists and
          pedicurists, Receptionists & information clerks, Supervisors of
          personal care and service workers, and Skincare specialists.We started
          as a small beauty studio in Islington, London. Our main idea was to
          create the best beauty studio in the world. Can there be compromises
          in the best studio in the world? Our answer is always no, we care
          about the best quality, we hire the best specialists and provide the
          best customer service.
        </p>
        <Link href="/about-us">
          {" "}
          <button className="button b1 mt-10">
            Explore More <BsArrowRightShort className="arrow1 text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
