"use client";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const DetailsImage = ({ dataImage }) => {
  const [wordData, setWordData] = useState(dataImage[0]);
  const [val, setVal] = useState(0);
  const handleClick = (index) => {
    // console.log(index);
    setVal(index);
    const wordSlider = dataImage[index];
    setWordData(wordSlider);
  };
  const handleNext = () => {
    let index = val < dataImage.length - 1 ? val + 1 : val;
    setVal(index);
    const wordSlider = dataImage[index];
    setWordData(wordSlider);
  };
  const handlePrevious = () => {
    let index = val <= dataImage.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const wordSlider = dataImage[index];
    setWordData(wordSlider);
  };
  return (
    <div className="flex flex-row-reverse justify-center gap-6 items-center">
      <button className="btns" onClick={handlePrevious}>
        <MdKeyboardArrowRight className="text-2xl" />
      </button>
      <div className=" w-[330px] h-[380px] mt-5">
        <img
          src={wordData.img1st}
          className="w-full h-[380px] object-contain object-center"
        />
      </div>
      <button className="btns" onClick={handleNext}>
        <MdKeyboardArrowLeft className="text-2xl" />
      </button>
      <div className="flex flex-col">
        {dataImage.map((data, i) => (
          <div className="h-20 mt-5 w-24 border border-red-500" key={i}>
            <img
              className={`${
                wordData.id == i ? "clicked" : ""
              } object-contain object-center w-full h-20`}
              src={data.img1st}
              onClick={() => handleClick(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsImage;
