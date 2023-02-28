import { CalendarIcon } from "@heroicons/react/24/outline";
import {
  ChevronRightIcon,
  InformationCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Container from "./Container";

const Transaction = ({ type }) => {
  return (
    <div className="flex justify-between items-center border-t border-neutral100 py-4">
      <div className="flex gap-4 items-center">
        <div
          className={`${
            type === "credit" ? " bg-teal50" : "bg-orange50"
          } p-3 rounded-full `}
        >
          <PaperAirplaneIcon
            className={`${
              type === "credit"
                ? "-rotate-[60deg] text-oldblue500"
                : "rotate-[120deg] text-orange500"
            } h-5 `}
          />
        </div>
        <p className="text-sm font-medium  text-grey400">
          Personal Wallet transfer to card.
        </p>
      </div>
      <p className="text-sm font-semibold text-gray-500">$715.00</p>
    </div>
  );
};

const CardBody = () => {
  return (
    <Container>
      <div className="flex mt-[42px] gap-8">
        <div className="w-[353px]">
          <div className="bg-neutral100 rounded-[12px]">
            <div className=" bg-white border border-[#E5ECF5] rounded-[12px] p-3">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                  <p className="text-sm font-medium leading-normal text-grey500">
                    Card spending limit
                  </p>
                  <div className="flex px-2 bg-neutral100 rounded">
                    <p className="text-xs font-medium text-blue200">Monthly</p>
                  </div>
                </div>
                <div className="gap-2 flex items-center">
                  <CalendarIcon className="w-4 h-4 text-grey300" />
                  <p className="text-sm font-medium  text-grey150">Jan 2023</p>
                </div>
              </div>
              <div className="my-4 bg-red400 w-full h-2 rounded" />
              <div className="flex space-x-3 items-start justify-between">
                <p className="text-sm font-medium leading-normal text-grey500">
                  100%
                </p>
                <div className="flex space-x-1 items-start justify-start">
                  <p className="text-sm font-medium leading-normal text-grey500">
                    $10,000
                  </p>
                  <p className="text-sm font-medium leading-normal text-grey150">
                    {" "}
                    /
                  </p>
                  <p className="text-sm font-medium leading-normal text-grey150">
                    {" "}
                    $10,000
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 flex items-center gap-4 ">
              <InformationCircleIcon className="h-10  text-orange500" />
              <p className="text-sm font-medium leading-normal font-inter text-[#41494F]">
                Spending limit reached, card activities are currently suspended
                until <span className="text-teal500">Feb 01, 2023</span>
              </p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className=" bg-white border border-[#E5ECF5] rounded-[20px] p-7 flex-1">
          <div className="flex  items-center justify-between">
            <p className="text-base font-medium leading-normal">
              Recent transactions
            </p>
            <div className="flex space-x-1 items-center justify-start">
              <p className="text-base font-medium leading-tight text-grey150">
                See all
              </p>
              <ChevronRightIcon className="h-[20px] text-green600 " />
            </div>
          </div>
          <div className="h-6 w-full" />

          <div>
            <p className="text-sm font-medium text-grey150 pb-4">
              9 NOV 2022
            </p>
            <Transaction/>
            <Transaction type="credit"/>
            <Transaction/>
            <Transaction type="credit"/>
            <Transaction/>
            <Transaction type="credit"/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardBody;
