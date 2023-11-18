import Link from "next/link";
import "./videoPage.css";
import { BsArrowRightShort } from "react-icons/bs";
const VideoPage = () => {
  return (
    <div className="about-cover flex justify-center items-center h-[600px] mt-32 py-8 text-white">
      <div className="max-w-xl mx-auto">
        <p className=" font-bold text-4xl text-center tracking-[0.03rem]">
          BOOK & FEEL OUR INCREDIBLE MAKEUP & SPA.
        </p>

        <Link href="/services" className="flex justify-center mt-3">
          {" "}
          <button className="button7 b7 mt-10 text-white">
            Discover More <BsArrowRightShort className="arrow1 text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoPage;
