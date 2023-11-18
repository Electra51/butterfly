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
import { startTransition, useState } from "react";
import BreadCrumb from "./BreadCrumb";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import createJWT from "@/utils/createJWT";
const Login = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, googleLogin } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();
  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(email, password);
    const toastId = toast.loading("Loading...");
    try {
      const user = await signIn(email, password);
      await createJWT({ email });
      toast.dismiss(toastId);
      toast.success("User signed in successfully");

      replace(from);

      // startTransition(() => {
      //   refresh();
      //   replace(from);
      //   toast.dismiss(toastId);
      //   toast.success("User signed in successfully");
      // });
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };
  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const { user } = await googleLogin();
      console.log(user);
      await createJWT({ email: user.email });
      replace(from);
      toast.dismiss(toastId);
      toast.success("User signed in successfully");
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label htmlFor="email" className="label label-text">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              id="email"
              name="email"
              className="input input-bordered rounded-none w-full"
              autoComplete="email"
              {...register("email", {
                required: true,
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-base mt-1">
                Please enter a valid email address.
              </span>
            )}
          </div>
          {/* <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              placeholder="your email"
              className="input input-bordered rounded-none w-full"
            />
          </div> */}
          {/* <div className="flex flex-col mt-4">
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
          </div> */}
          <div className="form-control">
            <label htmlFor="password" className="label label-text">
              Password
            </label>
            <div className="relative">
              <input
                type={`${show ? "text" : "password"}`}
                placeholder="password"
                id="password"
                name="password"
                className="input input-bordered rounded-none w-full"
                autoComplete="new-password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && (
                <span className="text-red-500 text-base mt-1">
                  Please enter a password.
                </span>
              )}
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

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <button className="buttonLog b3 mt-7" type="submit">
            Login
          </button>
          <div className="flex justify-center items-center gap-6">
            <button
              className="button b1 mt-7 text-[14px]"
              type="submit"
              onClick={() => signIn("github")}
            >
              Login with Github <AiOutlineGithub className="text-2xl" />
            </button>
            <button
              className="button b1 mt-7 text-[14px]"
              type="submit"
              onClick={handleGoogleLogin}
            >
              Login with Google <FcGoogle className="text-2xl " />
            </button>
          </div>
        </form>
        <p className="text-center mt-5 text-[14px]">
          Don&apos;t have an account?{" "}
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
