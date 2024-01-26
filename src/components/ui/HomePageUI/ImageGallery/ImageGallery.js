"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import PhotoAlbum from "react-photo-album";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
const ImageGallery = () => {
  const photos = [
    { src: "/images/images0.jpg", width: 1080, height: 800 },
    { src: "/images/images1.jpg", width: 1080, height: 1620 },
    { src: "/images/images2.jpg", width: 1080, height: 720 },
    { src: "/images/images3.jpg", width: 1080, height: 721 },
    { src: "/images/images4.jpg", width: 1080, height: 1620 },
    { src: "/images/images5.jpg", width: 1080, height: 607 },
    { src: "/images/images6.jpg", width: 1080, height: 608 },
    { src: "/images/images7.jpg", width: 1080, height: 720 },
    { src: "/images/images8.webp", width: 1080, height: 1549 },
    { src: "/images/images9.jpg", width: 1080, height: 720 },
  ];
  return (
    <div className="mt-32 max-w-[20rem] lg:max-w-6xl mx-auto">
      <SectionTitle heading={"Image Gallery"} />
      <div className="mt-12">
        <PhotoAlbum layout="columns" photos={photos} />
      </div>
    </div>
  );
};

export default ImageGallery;
