import React, { useState } from "react";

import { useSelector } from "react-redux";
import { CaretRight, UserCircle } from "phosphor-react";
import AccountUpgrade from "../overlays/AccountUpgrade";

export const Tier1Card = () => {
  return (
    <div className="bg- py-3 px-5 rounded-xl flex gap-4 bg-newGreen600 items-center relative overflow-hidden">
      <div className="relative w-fit h-fit">
        <div className="bg-green50 flex py-1.5 px-3 gap-1.5 rounded-full relative z-[1]">
          <p className="text-sm font-semibold font-inter text-green700">
            Tire 1
          </p>
          <UserCircle weight="fill" className="text-xl text-green700 " />
        </div>
        <div className="bg-green700 absolute w-full h-full rounded-full -rotate-[15deg] top-0"></div>
      </div>

      <div className="flex items-center gap-4">
        <div className="">
          <p className="font-bold font-inter text-2xl text-white">
            10,000 daily
          </p>
          <p className="font-medium font-inter text-white">
            Upgrade your tier to get a higher limit.
          </p>
        </div>
        <CaretRight className="text-[32px] text-white" />
      </div>

      <div className="absolute -right-2.5 -top-2.5 opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={106}
          height={87}
          fill="none"
        >
          <path
            fill="#000"
            fillOpacity={0.2}
            d="M64.41 49.345v3.994c10.229 0 18.617 8.397 18.617 18.638h3.989c0-10.24 8.388-18.638 18.616-18.638v-3.994c-10.228 0-18.616-8.397-18.616-18.638h-3.99c0 10.24-8.387 18.638-18.616 18.638ZM.41 72.997v2.42c6.204 0 11.29 5.087 11.29 11.29h2.42c0-6.203 5.087-11.29 11.29-11.29v-2.42c-6.203 0-11.29-5.087-11.29-11.29H11.7c0 6.203-5.086 11.29-11.29 11.29ZM6.41 30.965v6.484c16.625 0 30.258 13.633 30.258 30.258h6.484c0-16.625 13.633-30.258 30.258-30.258v-6.484c-16.625 0-30.258-13.633-30.258-30.258h-6.484c0 16.625-13.633 30.258-30.258 30.258Z"
          />
        </svg>
      </div>
    </div>
  );
};

export const Tier2Card = () => {
  return (
    <div className="bg- py-3 px-5 rounded-xl flex gap-4 bg-purple500 items-center relative overflow-hidden">
      <div className="relative w-fit h-fit">
        <div className="bg-green50 flex py-1.5 px-3 gap-1.5 rounded-full relative z-[1] text-purple500">
          <p className="text-sm font-semibold font-inter ">Tier 2</p>
          <UserCircle weight="fill" className="text-xl  " />
        </div>
        <div className="bg-[#8100C6] absolute w-full h-full rounded-full -rotate-[15deg] top-0"></div>
      </div>

      <div className="flex items-center gap-4">
        <div className="">
          <p className="font-bold font-inter text-2xl text-white">
            50,000 daily
          </p>
          <p className="font-medium font-inter text-white">
            Upgrade your tier to get a higher limit.
          </p>
        </div>
        <CaretRight className="text-[32px] text-white" />
      </div>

      <div className="absolute -right-2.5 -top-2.5 opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={106}
          height={87}
          fill="none"
        >
          <path
            fill="#000"
            fillOpacity={0.2}
            d="M64.41 49.345v3.994c10.229 0 18.617 8.397 18.617 18.638h3.989c0-10.24 8.388-18.638 18.616-18.638v-3.994c-10.228 0-18.616-8.397-18.616-18.638h-3.99c0 10.24-8.387 18.638-18.616 18.638ZM.41 72.997v2.42c6.204 0 11.29 5.087 11.29 11.29h2.42c0-6.203 5.087-11.29 11.29-11.29v-2.42c-6.203 0-11.29-5.087-11.29-11.29H11.7c0 6.203-5.086 11.29-11.29 11.29ZM6.41 30.965v6.484c16.625 0 30.258 13.633 30.258 30.258h6.484c0-16.625 13.633-30.258 30.258-30.258v-6.484c-16.625 0-30.258-13.633-30.258-30.258h-6.484c0 16.625-13.633 30.258-30.258 30.258Z"
          />
        </svg>
      </div>
    </div>
  );
};
export const Tier3Card = () => {
  return (
    <div className="bg- py-3 px-5 rounded-xl flex gap-4 bg-orange500 items-center relative overflow-hidden">
      <div className="relative w-fit h-fit">
        <div className="bg-green50 flex py-1.5 px-3 gap-1.5 rounded-full relative z-[1] text-orange500">
          <p className="text-sm font-semibold font-inter ">Tier 3</p>
          <UserCircle weight="fill" className="text-xl  " />
        </div>
        <div className="bg-[#BC5F09] absolute w-full h-full rounded-full -rotate-[15deg] top-0"></div>
      </div>

      <div className="flex items-center gap-4">
        <div className="">
          <p className="font-bold font-inter text-2xl text-white">Unlimited!</p>
          <p className="font-medium font-inter text-white">
            Transact on the platform without limit.
          </p>
        </div>
        <CaretRight className="text-[32px] text-white" />
      </div>

      <div className="absolute -right-2.5 -top-2.5 opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={106}
          height={87}
          fill="none"
        >
          <path
            fill="#000"
            fillOpacity={0.2}
            d="M64.41 49.345v3.994c10.229 0 18.617 8.397 18.617 18.638h3.989c0-10.24 8.388-18.638 18.616-18.638v-3.994c-10.228 0-18.616-8.397-18.616-18.638h-3.99c0 10.24-8.387 18.638-18.616 18.638ZM.41 72.997v2.42c6.204 0 11.29 5.087 11.29 11.29h2.42c0-6.203 5.087-11.29 11.29-11.29v-2.42c-6.203 0-11.29-5.087-11.29-11.29H11.7c0 6.203-5.086 11.29-11.29 11.29ZM6.41 30.965v6.484c16.625 0 30.258 13.633 30.258 30.258h6.484c0-16.625 13.633-30.258 30.258-30.258v-6.484c-16.625 0-30.258-13.633-30.258-30.258h-6.484c0 16.625-13.633 30.258-30.258 30.258Z"
          />
        </svg>
      </div>
    </div>
  );
};

const KycStatus = () => {
  
  const [upgrade, setUpgrade] = useState(false);
  const user = useSelector((state) => state.user.user);

  return (
    <>
      
      <AccountUpgrade toggle={upgrade} setToggle={setUpgrade} />
      <div
        className="cursor-pointer"
        onClick={() => {
          setUpgrade(true);
        }}
      >
        {user.title === "tier1" && <Tier1Card />}
        {user.title === "tier2" && <Tier2Card />}
      </div>
    </>
  );
};

export default KycStatus;
