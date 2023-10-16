import React from "react";

import { Outlet } from "react-router-dom";
import { SideCard } from "../Login";

const ForgotPassword = () => {
  return (
    <div className="flex h-[100vh]">
      <SideCard />
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
