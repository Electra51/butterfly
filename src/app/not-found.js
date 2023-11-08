import Link from "next/link";
import img1 from "../assets/bannerLogo/404.jpg";
import { BsArrowRightShort } from "react-icons/bs";
const NotFoundPage = () => {
  return (
    <div
      className="backdrop-blur-sm bg-white/70"
      style={{
        backgroundImage: `url(${img1.src})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-start pt-[90px] pl-48 relative">
        <p className="font-black text-[230px] text-black">404</p>
        <p className="absolute bottom-[80px] text-xl">Page Not Found</p>
        <p className="absolute bottom-[50px] text-xl">
          The page you are looking for does not exist.
        </p>

        {/* <Link href="/" className="absolute bottom-[20px] text-xl">
          Go back to the home page
        </Link> */}
        <Link href="/">
          <button className="button b1 mt-7">
            Back HomePage <BsArrowRightShort className="arrow1 text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
