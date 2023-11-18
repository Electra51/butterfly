"use client";
import Image from "next/image";
import img2 from "../../assets/logo/new.png";
import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <Image src={img2} alt="" width={200} />
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#c2a74e"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
