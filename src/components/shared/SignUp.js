"use client";

import Image from "next/image";
import registerCover from "../../assets/coverLogo/registerCover.webp";
import butterfly from "../../assets/logo/butterfly.png";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import BreadCrumb from "./BreadCrumb";

const SignUp = () => {
  const [show, setShow] = useState({ password: false, correctPass: false });
  return (
    <div
      style={{
        backgroundImage: `url(${registerCover.src})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-lg mx-auto pt-10 relative">
        <div className="pb-4 text-center">
          <h3 className="text-5xl font-bold text-black ">SIGN UP</h3>
          <BreadCrumb link={"/register"} bread={"Sign Up"} />
        </div>
        <Image
          src={butterfly}
          alt="butterfly"
          className="absolute right-10 top-[-3px] w-32"
        />

        <form className="grid grid-cols-2 space-y-2 gap-3 items-center">
          <div className="flex flex-col mt-3">
            <label>UserName</label>
            <input
              type="userName"
              placeholder="your Name"
              className="input input-bordered rounded-none w-full"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label>Email</label>
            <input
              type="email"
              placeholder="your email"
              className="input input-bordered rounded-none w-full"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label>Password</label>
            <div className="relative">
              {" "}
              <input
                type={`${show.password ? "text" : "password"}`}
                placeholder="password"
                name="password"
                className="input input-bordered rounded-none w-full"
              />
              {show.password ? (
                <AiOutlineEye
                  className="absolute top-4 right-3 text-xl text-gray-600 cursor-pointer"
                  onClick={() => setShow({ ...show, password: !show.password })}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute top-4 text-xl right-3 text-gray-400 cursor-pointer"
                  onClick={() => setShow({ ...show, password: !show.password })}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <label>Confirm Password</label>
            <div className="relative">
              {" "}
              <input
                type={`${show.correctPass ? "text" : "password"}`}
                name="correctPass"
                placeholder="password"
                className="input input-bordered rounded-none w-full"
              />
              {show.correctPass ? (
                <AiOutlineEye
                  className="absolute top-4 right-3 text-xl text-gray-600 cursor-pointer"
                  onClick={() =>
                    setShow({ ...show, correctPass: !show.correctPass })
                  }
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute top-4 text-xl right-3 text-gray-400 cursor-pointer"
                  onClick={() =>
                    setShow({ ...show, correctPass: !show.correctPass })
                  }
                />
              )}
            </div>
          </div>
          <button className="buttonSign b3 mt-7" type="submit">
            Sign Up
          </button>
        </form>
        <div className="flex justify-center items-center gap-6">
          <button className="buttons bs mt-7 text-[14px]" type="submit">
            Login with Github <AiOutlineGithub className="text-2xl" />
          </button>
          <button className="buttons bs mt-7 text-[14px]" type="submit">
            Login with Google <FcGoogle className="text-2xl " />
          </button>
        </div>
        <div className="flex items-start justify-normal gap-1 mt-4 text-[14px]">
          <input type="checkbox" className="mt-1" />{" "}
          <p>
            By Creating your account you agree the{" "}
            <Link href="/terms">
              {" "}
              <span className="font-medium text-black underline hover:cursor-pointer hover:text-blue-500">
                Terms of Service
              </span>{" "}
            </Link>
            and{" "}
            <Link href="/policy">
              {" "}
              <span className="font-medium text-black underline hover:cursor-pointer hover:text-blue-500">
                Privacy Policy.
              </span>
            </Link>
          </p>
        </div>
        <p className="text-center mt-5 text-[14px]">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-blue-500 font-semibold cursor-pointer underline hover:font-bold">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SignUp), { ssr: false });
