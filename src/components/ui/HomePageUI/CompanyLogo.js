"use client";
import Slider from "react-slick";
import logo1 from "../../../assets/company/logo1.png";
import logo2 from "../../../assets/company/logo2.png";
import logo3 from "../../../assets/company/logo3.png";
import logo4 from "../../../assets/company/logo4.png";
import logo5 from "../../../assets/company/logo5.png";
import logo6 from "../../../assets/company/logo6.png";
import logo7 from "../../../assets/company/logo7.png";
import logo8 from "../../../assets/company/logo8.png";
import logo9 from "../../../assets/company/logo9.png";
import logo10 from "../../../assets/company/logo10.png";
import logo11 from "../../../assets/company/logo11.png";
import logo12 from "../../../assets/company/logo12.png";
import Image from "next/image";
const CompanyLogo = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mx-7">
      <Slider {...settings}>
        <div>
          <div className="h-32 w-32 flex justify-center items-center mt-5 mb-0">
            <Image
              src={logo1}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo2}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo3}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo4}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo5}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          {" "}
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo6}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          {" "}
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo7}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          {" "}
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo8}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          {" "}
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo9}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          {" "}
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo10}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          {" "}
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo11}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
        <div>
          {" "}
          <div className="h-32 w-32 flex justify-center items-center mt-5">
            <Image
              src={logo12}
              alt=""
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CompanyLogo;
