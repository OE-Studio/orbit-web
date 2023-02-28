import { BackspaceIcon } from "@heroicons/react/24/outline";
import React from "react";

const NumericKeypad = () => {
  return (
    <div className="border border-grey10 rounded-2xl w-[353px] mx-auto overflow-hidden text-[24px] font-clash font-medium text-[#1C232B]">
      <div className="flex border-b border-grey10">
        <div className="w-1/3 text-center p-[22.5px] border-r border-grey10">
          1
        </div>
        <div className="w-1/3 text-center p-[22.5px] border-r border-grey10">
          2
        </div>
        <div className="w-1/3 text-center p-[22.5px]">3</div>
      </div>
      <div className="flex border-b border-grey10">
        <div className="w-1/3 text-center p-[22.5px] border-r border-grey10">
          4
        </div>
        <div className="w-1/3 text-center p-[22.5px] border-r border-grey10">
          5
        </div>
        <div className="w-1/3 text-center p-[22.5px]">6</div>
      </div>
      <div className="flex border-b border-grey10">
        <div className="w-1/3 text-center p-[22.5px] border-r border-grey10">
          7
        </div>
        <div className="w-1/3 text-center p-[22.5px] border-r border-grey10">
          8
        </div>
        <div className="w-1/3 text-center p-[22.5px]">9</div>
      </div>
      <div className="flex">
        <div className="w-1/3 text-center p-[22.5px] border-r border-grey10">
          .
        </div>
        <div className="w-1/3 text-center p-[22.5px] border-r border-grey10">
          0
        </div>
        <div className="w-1/3 p-[22.5px] flex items-center justify-center">
            <BackspaceIcon className="h-6"/>
        </div>
      </div>
    </div>
  );
};

export default NumericKeypad;
