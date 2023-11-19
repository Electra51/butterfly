"use client";

import { LiaCheckSolid } from "react-icons/lia";

const HowWorks = () => {
  return (
    <div className="text-black">
      <h3 className="mt-8 text-xl font-bold tracking-[0.02rem]">
        How it Works?
      </h3>
      <div className="grid grid-cols-3 justify-normal items-center gap-6 my-6">
        <div>
          <div className="flex items-center justify-start gap-2">
            <div className="h-9 w-9 bg-[#c2a74e] flex justify-center items-center p-2 rounded-full">
              <LiaCheckSolid className="text-white" />
            </div>
            <div>
              {" "}
              <p className="font-semibold">PREPRATION</p>
            </div>
          </div>
          <p className="font-medium text-[15px] mt-1.5">
            take the time to prep your skin with a high-quality moisturizer
          </p>
        </div>
        <div>
          <div className="flex items-center justify-start gap-2">
            <div className="h-9 w-9 bg-[#c2a74e] flex justify-center items-center p-2 rounded-full">
              <LiaCheckSolid className="text-white" />
            </div>
            <div>
              {" "}
              <p className="font-semibold">PREPRATION</p>
            </div>
          </div>
          <p className="font-medium text-[15px] mt-1.5">
            take the time to prep your skin with a high-quality moisturizer
          </p>
        </div>
        <div>
          <div className="flex items-center justify-start gap-2">
            <div className="h-9 w-9 bg-[#c2a74e] flex justify-center items-center p-2 rounded-full">
              <LiaCheckSolid className="text-white" />
            </div>
            <div>
              {" "}
              <p className="font-semibold">PREPRATION</p>
            </div>
          </div>
          <p className="font-medium text-[15px] mt-1.5">
            take the time to prep your skin with a high-quality moisturizer
          </p>
        </div>

        <div>
          <div className="flex items-center justify-start gap-2">
            <div className="h-9 w-9 bg-[#c2a74e] flex justify-center items-center p-2 rounded-full">
              <LiaCheckSolid className="text-white" />
            </div>
            <div>
              {" "}
              <p className="font-semibold">PROCESS</p>
            </div>
          </div>
          <p className="font-medium text-[15px] mt-1.5">
            Whatever time of day you're creating a makeup look
          </p>{" "}
        </div>
        <div>
          {" "}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 bg-[#c2a74e] flex justify-center items-center p-2 rounded-full">
              <LiaCheckSolid className="text-white" />
            </div>

            <div>
              {" "}
              <p className="font-semibold">TREATMENT</p>
            </div>
          </div>
          <p className="font-medium text-[15px] mt-1.5">
            cleansing is the first important step
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
