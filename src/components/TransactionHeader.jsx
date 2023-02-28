import {
  CalendarIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import HeaderCardLayout from "./HeaderCardLayout";

import Referral from "./overlays/Referral";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const TransactionHeader = () => {
  const [toggleReferral, setToggleReferral] = useState(false);
  const [toggleOptions, setToggleOptions] = useState(false)
  const [filter, setFilter] = useState("all");
  const activeStyle =
    "rounded-full text-sm font-medium leading-tight text-white bg-[#5DADEC] font-inter py-2.5 px-[14px]";
  const inActiveStyle =
    "rounded-full text-sm font-medium leading-tight text-neutral300 bg-neutral100 font-inter py-2.5 px-[14px]";

  return (
    <>
      <Referral setToggle={setToggleReferral} toggle={toggleReferral} />
      <HeaderCardLayout>
        {/* buttons */}
        <div className="flex justify-between" onClick={()=>{
          setToggleOptions(!toggleOptions)
        }}>
          <div className="flex space-x-2 items-center px-6 py-2.5 border rounded-full border-neutral200 relative">
            <p className="text-sm font-medium text-grey200">Today</p>

            <CalendarIcon class=" h-[20px] text-blue25" />

            {toggleOptions && (
              <div className="absolute left-full top-0 bg-white shadow-[10px_40px_100px_0px_#00000014] rounded-lg p-2 w-[180px]">
                <div className="hover:bg-neutral100  flex space-x-3 items-center justify-between px-3 py-2 rounded-full w-full cursor-pointer">
                  <p className="text-sm font-medium font-inter text-grey200">
                  Today
                  </p>
                </div>
                <div className="hover:bg-neutral100  flex space-x-3 items-center justify-between px-3 py-2 rounded-full w-full mt-2 cursor-pointer">
                  <p className="text-sm text-grey200 font-medium font-inter">
                  Last 7 days
                  </p>
                </div>
                <div className="hover:bg-neutral100  flex space-x-3 items-center justify-between px-3 py-2 rounded-full w-full mt-2 cursor-pointer">
                  <p className="text-sm text-grey200 font-medium font-inter">
                  This month
                  </p>
                </div>
                <div className="hover:bg-neutral100  flex space-x-3 items-center justify-between px-3 py-2 rounded-full w-full mt-2 cursor-pointer">
                  <p className="text-sm text-grey200 font-medium font-inter">
                  Last 3 months
                  </p>
                </div>
                <div className="hover:bg-neutral100  flex space-x-3 items-center justify-between px-3 py-2 rounded-full w-full mt-2 cursor-pointer">
                  <p className="text-sm text-grey200 font-medium font-inter">
                  All time
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-2 items-center px-6 py-2.5 border rounded-full border-neutral200 w-[40%] justify-between">
            <input
              className="text-sm leading-normal text-grey200 focus:outline-none"
              placeholder="Search transaction"
            />

            <MagnifyingGlassIcon class=" h-[20px] text-blue25" />
          </div>
        </div>

        <div className="h-[64px]" />

        <div className="flex items-center mt-8 justify-between">
          <div className="gap-2 flex items-center">
            <FunnelIcon class=" h-[20px] text-[#7FBBF8]" />
            <p className="text-sm font-medium leading-normal text-grey200">
              Filter search
            </p>
          </div>

          <div className="inline-flex space-x-6 items-center justify-start">
            <button className={filter === "all" ? activeStyle : inActiveStyle} onClick={()=>{
              setFilter('all');
            }}>
              All transactions
            </button>
            <button
              className={filter === "transfers" ? activeStyle : inActiveStyle}
              onClick={()=>{
                setFilter('transfers');
              }}
            >
              Transfers
            </button>
            <button
              className={filter === "electricity" ? activeStyle : inActiveStyle}
              onClick={()=>{
                setFilter('electricity');
              }}
            >
              Electricity
            </button>
            <button
              className={filter === "airtime" ? activeStyle : inActiveStyle}
              onClick={()=>{
                setFilter('airtime');
              }}
            >
              Airtime
            </button>
            <button
              className={filter === "data" ? activeStyle : inActiveStyle}
              onClick={()=>{
                setFilter('data');
              }}
            >
              Data
            </button>
            <button
              className={filter === "cable" ? activeStyle : inActiveStyle}
              onClick={()=>{
                setFilter('cable');
              }}
            >
              Cable subscription
            </button>
          </div>
        </div>
      </HeaderCardLayout>
    </>
  );
};

export default TransactionHeader;
