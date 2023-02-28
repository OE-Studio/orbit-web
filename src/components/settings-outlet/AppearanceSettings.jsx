import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import bgData from "../../data/backgroundData";

const AppearanceItem = ({ url }) => {
  return (
    <div
      className={`border-[3px] border-green600 rounded-full flex h-16 w-16 items-center justify-center ${
        "bg-[url('" + url + "')]"
      } bg-contain bg-center`}
    >
      <CheckCircleIcon className="h-5 text-green600" />
    </div>
  );
};

const AppearanceSettings = () => {
  return (
    <div>
      <p className="text-base font-medium  text-neutral300">Appearance</p>
      <div className="h-8" />
      <div className="w-[556px] space-y-8">
        <div className="w-full bg-neutral100 h-[246px] rounded-[16px] flex-col px-9 pt-[75px]">
          <div className="bg-[url('./assets/backgrounds/bricks.svg')] bg-cover w-full h-full rounded-t-[5px] flex items-end justify-center px-[52.5px] ">
            <div classname="">
              <div className="flex justify-between items-center">
                <div className="flex gap-2.5">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D456E]" />
                    <div className="w-9 h-[3px] rounded-full bg-[#1D456E]" />
                  </div>
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D456E]" />
                    <div className="w-9 h-[3px] rounded-full bg-[#1D456E]" />
                  </div>
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D456E]" />
                    <div className="w-9 h-[3px] rounded-full bg-[#1D456E]" />
                  </div>
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D456E]" />
                    <div className="w-9 h-[3px] rounded-full bg-[#1D456E]" />
                  </div>
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1D456E]" />
                    <div className="w-9 h-[3px] rounded-full bg-[#1D456E]" />
                  </div>
                </div>

                <div className="w-12 h-2.5 rounded-full bg-green700" />
              </div>
              <div className="h-2" />
              <div className="w-full h-[54px] bg-blue400 rounded-t-lg" />
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-neutral200" />

        <div className="inline-flex flex-col space-y-1 items-start justify-start">
          <p className=" font-medium leading-tight text-gray-600">
            Select your pattern
          </p>
          <p className="w-full text-sm leading-snug text-[#71879C]">
            Pattern selected will appear on the app.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-[18px] gap-y-[10px]">
          {bgData.map((bg, index) => {
            return <AppearanceItem url={bg.bgLink} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;
