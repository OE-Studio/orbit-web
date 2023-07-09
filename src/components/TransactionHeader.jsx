import { CalendarIcon, FunnelIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import HeaderCardLayout from "./HeaderCardLayout";

import Referral from "./overlays/Referral";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const TransactionHeader = ({
  transactionFilter,
  setTransactionFilter,
  dateFilter,
  setDateFilter,
  searchFilter,
  setSearchFilter,
}) => {
  const [toggleReferral, setToggleReferral] = useState(false);

  const [toggleOptions, setToggleOptions] = useState(false);
  const activeStyle =
    "rounded-full text-sm font-medium leading-tight text-white bg-[#5DADEC] font-inter py-2.5 px-[14px]";
  const inActiveStyle =
    "rounded-full text-sm font-medium leading-tight text-neutral300 bg-neutral100 font-inter py-2.5 px-[14px]";

  const dateFilters = [
    "Today",
    "Last 7 Days",
    "This Month",
    "Last 3 months",
    "All Time",
  ];

  const transactionFilters = [
    "All Transactions",
    "Transfers",
    "Electricity",
    "Airtime",
    "Data",
    "Cable",
  ];

  return (
    <>
      <Referral setToggle={setToggleReferral} toggle={toggleReferral} />
      <HeaderCardLayout>
        {/* buttons */}
        <div className="flex justify-between">
          <div
            className="flex space-x-2 items-center px-6 py-2.5 border rounded-full border-neutral200 relative"
            onClick={() => {
              setToggleOptions(!toggleOptions);
            }}
          >
            <p className="text-sm font-medium text-grey200">{dateFilter}</p>

            <CalendarIcon class=" h-[20px] text-blue25" />

            {toggleOptions && (
              <div className="absolute left-full top-0 bg-white shadow-[10px_40px_100px_0px_#00000014] rounded-lg p-2 w-[180px] space-y-2">
                {dateFilters.map((item) => {
                  return (
                    <div
                      className={`hover:bg-neutral100  flex space-x-3 items-center justify-between px-3 py-2 rounded-full w-full cursor-pointer ${
                        dateFilter === item ? "bg-neutral100" : ""
                      }`}
                      onClick={() => {
                        setDateFilter(item);
                      }}
                    >
                      <p className="text-sm font-medium font-inter text-grey200">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex space-x-2 items-center px-6 py-2.5 border rounded-full border-neutral200 w-[40%] justify-between focus-within:border-[#7FBBF8]">
            <input
              className="text-sm leading-normal text-grey200 focus:outline-none flex-1"
              type="search"
              value={searchFilter}
              onChange={(e) => {
                setSearchFilter(e.target.value);
              }}
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

          <div className="inline-flex space-x-4 items-center justify-start">
            {transactionFilters.map((item, i) => {
              return (
                <button
                  className={
                    transactionFilter === item ? activeStyle : inActiveStyle
                  }
                  onClick={() => {
                    setTransactionFilter(item);
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </HeaderCardLayout>
    </>
  );
};

export default TransactionHeader;
