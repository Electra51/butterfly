"use client";
import butterfly from "../../assets/logo/butterfly.png";
import { FcGoogle } from "react-icons/fc";
import logonCover from "../../assets/coverLogo/loginCover.webp";
import dynamic from "next/dynamic";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGithub,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BreadCrumb from "./BreadCrumb";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        backgroundImage: `url(${logonCover.src})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-sm mx-auto pt-14 relative">
        <div className="pb-8 text-center">
          <h3 className="text-5xl font-bold text-black"> LOG IN </h3>
          <BreadCrumb link={"/login"} bread={"login"} />
        </div>

        <Image
          src={butterfly}
          alt="butterfly"
          className="absolute right-0 top-5 w-32"
        />

        <form>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              placeholder="your email"
              className="input input-bordered rounded-none w-full"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label>Password</label>
            <div className="relative">
              {" "}
              <input
                type={`${show ? "text" : "password"}`}
                placeholder="password"
                className="input input-bordered rounded-none w-full"
              />
              {show ? (
                <AiOutlineEye
                  className="absolute top-4 right-3 text-xl text-gray-600 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute top-4 text-xl right-3 text-gray-400 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
          </div>
          <button className="buttonLog b3 mt-7" type="submit">
            Login
          </button>
          <div className="flex justify-center items-center gap-6">
            <button className="button b1 mt-7 text-[14px]" type="submit">
              Login with Github <AiOutlineGithub className="text-2xl" />
            </button>
            <button className="button b1 mt-7 text-[14px]" type="submit">
              Login with Google <FcGoogle className="text-2xl " />
            </button>
          </div>
        </form>
        <p className="text-center mt-5 text-[14px]">
          Don't have an account?{" "}
          <Link href="/register">
            <span className="text-blue-500 font-semibold cursor-pointer underline hover:font-bold">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
