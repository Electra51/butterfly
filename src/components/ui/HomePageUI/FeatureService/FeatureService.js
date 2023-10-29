"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import project1 from "../../../../assets/bannerLogo/project-1.jpg";
import Image from "next/image";
import Slider from "react-slick";

const FeatureService = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="mt-32 flex flex-col justify-center max-w-6xl mx-auto">
      <SectionTitle heading={"Featured Services"}></SectionTitle>
      <div className="mt-5">
        <Slider {...settings}>
          <div>
            <Image src={project1} alt="" />
          </div>
          <div>
            <Image src={project1} alt="" />
          </div>
          <div>
            <Image src={project1} alt="" />
          </div>
          <div>
            <Image src={project1} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FeatureService;
