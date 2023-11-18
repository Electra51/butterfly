"use client";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <div className="text-white text-justify relative mt-32 max-w-8xl mx-auto">
      <div className="care max-w-5xl relative">
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="overlay overlay_2">
          <div className="max-w-lg px-5 py-14 ml-32 ">
            <p className="text-white mb-2 ">Contact With Us</p>
            <p className="text-4xl mt-1 font-bold text-white tracking-[0.2rem]">
              Get in Touch !
            </p>

            <p className="mt-3 text-white">
              Cosmetics can help to improve our mood, enhance our appearance and
              boost our self-esteem
            </p>

            <div className="flex items-center justify-start gap-3 mt-5">
              <div className="flex items-center gap-5">
                <div className="h-9 w-9 bg-white flex justify-center items-center p-2 rounded-full">
                  <MdPhoneInTalk className="text-[#C2A74E]" />
                </div>
                <p className="text-[16px]">
                  Have question? <br /> +92 (8800) - 8960
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3 mt-5">
              <div className="flex items-center gap-5">
                <div className="h-9 w-9 bg-white flex justify-center items-center p-2 rounded-full">
                  <FaLocationDot className="text-[#C2A74E]" />
                </div>
                <p className="text-[16px]">
                  Write Email <br /> butterfly@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3 mt-5">
              <div className="flex items-center gap-5">
                <div className="h-9 w-9 bg-white flex justify-center items-center p-2 rounded-full">
                  <MdEmail className="text-[#C2A74E]" />
                </div>
                <p className="text-[16px]">
                  Our Location <br /> Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[-35px] right-0 w-[40%] bg-[#C2A74E]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="px-10 py-10">
          <div className="form-control">
            <label htmlFor="email" className="label label-text">
              Name
            </label>
            <input
              type="text"
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
          <div className="form-control mt-2">
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
          <div className="form-control mt-2">
            <label htmlFor="email" className="label label-text">
              Subject
            </label>
            <input
              type="text"
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
          <div className="form-control mt-2">
            <label htmlFor="email" className="label label-text">
              Message
            </label>
            <input
              type="text"
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

          <button className="button7 b7 mt-10 text-white" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
