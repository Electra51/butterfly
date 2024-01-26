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
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import createJWT from "@/utils/createJWT";
import { useRouter, useSearchParams } from "next/navigation";
const SignUp = () => {
  const { createUser, profileUpdate, googleLogin } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();
  const [show, setShow] = useState({ password: false, correctPass: false });
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();
  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image uploading...");
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();
      toast.dismiss(toastId);
      toast.success("Image uploaded successfully!");
      setValue("photo", data.data.url);
    } catch (error) {
      toast.error("Image not uploaded!");
      toast.dismiss(toastId);
    }
  };

  const onSubmit = async (data, event) => {
    const { name, email, password, photo } = data;
    console.log(name, email, password, photo);
    const toastId = toast.loading("Loading...");
    try {
      await createUser(email, password);
      await createJWT({ email });

      await profileUpdate({
        displayName: name,
        photoURL: photo,
      });
      // replace(from);
      // toast.dismiss(toastId);
      // toast.success("User signed in successfully");
      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User signed in successfully");
      });
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };
  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const { user } = await googleLogin();
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
        backgroundImage: `url(${registerCover.src})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 space-y-2 gap-3 items-center">
          {/* <div className="flex flex-col mt-3">
            <label>UserName</label>
            <input
              type="userName"
              placeholder="your Name"
              className="input input-bordered rounded-none w-full"
            />
          </div> */}
          <div className="form-control">
            <label htmlFor="name" className="label label-text">
              Name
            </label>
            <input
              type="text"
              placeholder="name"
              id="name"
              name="name"
              className="input input-bordered rounded-none w-full"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-base mt-1">
                Please enter your name.
              </span>
            )}
          </div>
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
          {/* <div className="flex flex-col mt-3">
            <label>Email</label>
            <input
              type="email"
              placeholder="your email"
              className="input input-bordered rounded-none w-full"
            />
          </div> */}
          <div className="form-control relative">
            <label htmlFor="password" className="label label-text">
              Password
            </label>
            <input
              type={`${show.password ? "text" : "password"}`}
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
          {/* <div className="flex flex-col mt-3">
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
          </div> */}
          {/* <div className="flex flex-col mt-3">
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
          </div> */}
          <div className="form-control relative">
            <label htmlFor="confirmPassword" className="label label-text">
              Confirm Password
            </label>
            <input
              type={`${show.correctPass ? "text" : "password"}`}
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              className="input input-bordered rounded-none w-full"
              autoComplete="new-password"
              {...register("confirmPassword", {
                required: true,
                minLength: 6,
                validate: (value) =>
                  value === getValues("password") ||
                  "The passwords do not match.",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-base mt-1">
                {errors.confirmPassword.message ||
                  "Please confirm your password."}
              </span>
            )}
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
          <div className="form-control col-span-2">
            <label htmlFor="photo" className="label label-text">
              Photo
            </label>
            <input
              type="file"
              id="photo"
              onChange={uploadImage}
              className="file-input file-input-bordered file-input-primary rounded-none w-full"
            />
          </div>
          <button className="buttonSign b3 mt-7" type="submit">
            Sign Up
          </button>
        </form>
        <div className="flex justify-center items-center gap-6">
          <button className="buttons bs mt-7 text-[14px]" type="submit">
            Login with Github <AiOutlineGithub className="text-2xl" />
          </button>
          <button
            className="buttons bs mt-7 text-[14px]"
            type="submit"
            onClick={handleGoogleLogin}>
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
