import React from "react";
import img from "../assets/mobileImg.png";
import PrimaryButton from "../components/Inputs/PrimaryButton";

const MobileLayout = () => {
  return (
    <section className="center h-screen flex-col p-6">
      <img src={img} alt="" className="md:w-1/2" />
      <p className="font-inter text-center max-w-[450px]">
        We are currently available on desktop view. Do not worry the mobile app
        is underway
      </p>
      <div className="py-4"></div>
      <PrimaryButton label={"Be notified when it drops"} />
    </section>
  );
};

export default MobileLayout;
