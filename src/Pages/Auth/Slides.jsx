import React from "react";
import logoMark from "../../assets/onboarding/logoMark.svg";

const Slides = ({ slide, index }) => {
  return (
    <div className="flex-1">
      <div
        className={`h-1/2 w-full ${
          index === 0
            ? "bg-[#6AC5B9]"
            : index === 0
            ? "bg-[#F5C08F]"
            : "bg-[#DC99FF]"
        } bg-[url('./assets/onboarding.svg')] relative overflow-hidden`}
      >
        <img
          src={slide.image}
          alt=""
          className={`w-[50%] left-1/2  relative 2xl:top-[20%] ${
            index === 0 ? "-translate-x-[40%]" : "-translate-x-1/2"
          }`}
        />
      </div>
      <div className="mx-auto flex gap-[9px] mt-[50px] mb-[32px] justify-center">
        <div
          className={`${
            index === 0 ? "w-[18px] bg-[#001428]" : "w-[6px] bg-[#D0D5DD]"
          } w-[6px] h-[6px]  rounded-full`}
        />
        <div
          className={`${
            index === 1 ? "w-[18px] bg-[#001428]" : "w-[6px] bg-[#D0D5DD]"
          } w-[6px] h-[6px]  rounded-full`}
        />
        <div
          className={`${
            index === 2 ? "w-[18px] bg-[#001428]" : "w-[6px] bg-[#D0D5DD]"
          } w-[6px] h-[6px]  rounded-full`}
        />
      </div>

      <p className="text-[42px] font-medium leading-10 text-center mb-6 text-[#3D3D3D] font-clash mx-auto w-[415px]">
        {slide.title}
      </p>

      <p className="w-80 text-base leading-snug text-center mx-auto text-[#1B1B1B] font-dmsans mb-[56.6px]">
        {slide.description}
      </p>
      <img src={logoMark} alt="" className="mx-auto" />
    </div>
  );
};

export default Slides;
