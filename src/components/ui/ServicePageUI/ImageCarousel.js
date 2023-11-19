"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/servicesBanner/1carSol.jpg";
import img2 from "../../../assets/servicesBanner/2carSol.jpg";
import img3 from "../../../assets/servicesBanner/3carSol.jpg";
import img4 from "../../../assets/servicesBanner/4carSol.jpg";
import img5 from "../../../assets/servicesBanner/5carSol.jpg";
import img6 from "../../../assets/servicesBanner/6carSol.jpg";
import img7 from "../../../assets/servicesBanner/7carSol.jpg";
import Image from "next/image";
const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="mt-8">
      <Slider {...settings}>
        <div>
          <Image src={img1} alt="" width={500} />
        </div>
        <div>
          <Image src={img2} alt="" width={500} />
        </div>
        <div>
          <Image src={img3} alt="" width={500} />
        </div>
        <div>
          <Image src={img4} alt="" width={500} />
        </div>
        <div>
          <Image src={img5} alt="" width={500} />
        </div>
        <div>
          <Image src={img6} alt="" width={500} />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
