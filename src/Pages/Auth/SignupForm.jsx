import React from "react";
import { Outlet } from "react-router-dom";

const SignupForm = () => {
  return (
    <div>
      <p className="text-2xl font-semibold text-[#1B1B1B] font-clash text-center">
        Sign up
      </p>
      <div className="my-9 gap-[6px] flex">
        <div className="flex-1 h-[4px]  bg-[#E5ECF5] rounded-full">
          <div className="w-1/2 h-full bg-[#7FBBF8] rounded-full" />
        </div>
        <div className="flex-1 h-[4px]  bg-[#E5ECF5] rounded-full"></div>
        <div className="flex-1 h-[4px] bg-[#E5ECF5]  rounded-full"></div>
        <div className="flex-1 h-[4px]  bg-[#E5ECF5] rounded-full"></div>
      </div>
      <div className="border border-[#E5ECF5] rounded-[8px] py-[64px] h-[534px]">
        <div className="max-w-[353px] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
