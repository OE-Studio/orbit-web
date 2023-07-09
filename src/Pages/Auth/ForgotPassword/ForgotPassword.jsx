import React from "react";

import orbitLogo from "../../../assets/onboarding/orbitLogo.svg";
import { Outlet } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex h-[100vh]">
      <section className=" w-[50vw] h-full bg-[#04274B] overflow-y-hidden transition duration-500 ease-in-out disable-scrollbars">
        <img src={orbitLogo} alt="" className="mx-auto mt-[94px]" />
      </section>
      <section className="w-1/2">
        <div className="max-w-[609px] mx-auto mt-24">
          <div>
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
