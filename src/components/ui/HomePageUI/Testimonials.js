"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "@/components/shared/SectionTitle";
import man1 from "../../../assets/logo/man1.jpg";
import man2 from "../../../assets/logo/man2.jpg";
import woman3 from "../../../assets/logo/woman3.jpg";
import Slider from "react-slick";
import Image from "next/image";
import "./testimonial.css";
import { BsArrowRightShort } from "react-icons/bs";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="mt-32 lg:mt-36">
      {/* <SectionTitle heading={"Our Client Review"} /> */}
      <div className="mt-10 bg-[#c2a74e] py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10">
          <div className="px-5 py-2 text-white">
            <h3 className="text-3xl font-bold tracking-[0.2rem]">
              Reviews From Our Customers
            </h3>
            <p className="mr-5 mt-6 text-justify">
              Book & Feel Our Incredible Spa Experience. True Wellness & Beauty.
              There are many variations of passages the majority have suffered
              alteration in some fo injected humour, or randomised words
              believable.
            </p>

            <button className="button7 b7 mt-10 text-white">
              Explore More <BsArrowRightShort className="arrow1 text-2xl" />
            </button>
          </div>
          <Slider {...settings}>
            <div
              style={{ border: "1px solid red" }}
              className="h-[208px] relative"
            >
              <div
                className="w-[145px] h-[145px] hover:bg-white bg-[#c2a74e] border border-[#C2A74E] rounded-full relative"
                style={{ zIndex: 9 }}
              >
                <div
                  className="w-[130px] h-[130px] rounded-full absolute left-0 right-0 bottom-0 top-0 m-auto"
                  style={{ zIndex: 9 }}
                >
                  <Image
                    src={man2}
                    className="h-full w-full object-cover rounded-full border border-[#C2A74E]"
                  />
                </div>
              </div>
              <div className="absolute top-12 !left-[3.25rem] w-[85%] bg-white pl-32 h-[200px]">
                <p className="pt-10">Name Me</p>
                <p>Rating</p>
                <p>The value of the product. The same product</p>
              </div>
            </div>

            <div className="relative">
              <div
                className="w-[145px] h-[145px] hover:bg-white bg-[#c2a74e] border border-[#C2A74E] rounded-full relative"
                style={{ zIndex: 9 }}
              >
                <div
                  className="w-[130px] h-[130px] rounded-full absolute left-0 right-0 bottom-0 top-0 m-auto"
                  style={{ zIndex: 9 }}
                >
                  <Image
                    src={man1}
                    className="h-full w-full object-cover rounded-full border border-[#C2A74E]"
                  />
                </div>
              </div>
              <div className="absolute top-12 !left-[3.25rem] w-[85%] bg-white pl-32 h-[200px]">
                <p className="pt-10">Name Me</p>
                <p>Rating</p>
                <p>
                  Comparisons to similar products; and the value of the product.
                  The same product
                </p>{" "}
              </div>
            </div>

            {/* <div>
              <div className="flex justify-center items-center mt-5 mb-0">
                <Image
                  src={man1}
                  alt=""
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mt-5 mb-0">
                <Image
                  src={man1}
                  alt=""
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
