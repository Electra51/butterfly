"use client";

import Image from "next/image";
import imgAbout from "../../../assets/bannerLogo/aboutBanner.jpg";
const AboutUs = () => {
  return (
    <div className="mt-32 grid grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
      <div>
        {" "}
        <Image src={imgAbout} alt="about Image" />
      </div>
      <div>
        <p className="tracking-[0.2rem] text-xl border-b">About us</p>
        <p className="text-justify tracking-[0.01rem] mt-5">
          The top three occupations in the Beauty salons Industry Group are
          Hairdressers, hairstylists, & cosmetologists, Manicurists and
          pedicurists,and Skincare specialists.Dear friends, I would certainly
          love to meet you all in persone, so come and just say hi. If it’s not
          possible at the moment, I would loke to introduce myself‚ I’m Vicky,
          the founder of Cherie Beauty Studio. I’m certain that new haircut,
          professional makup or just getting your easy way to make your day or
          week better. I guarantee that you will appreciate the atmosphere of
          our place. Looking forward to meeting you!
        </p>
        <p className="mt-3 font-medium text-[#242424]">– Emma Underwood</p>
      </div>
    </div>
  );
};

export default AboutUs;
