import {
  BanknotesIcon,
  CalendarIcon,
  CreditCardIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import HeaderCardLayout from "./HeaderCardLayout";
import graph from "../assets/graph.svg";
import cards from "../assets/cards.svg";
import {useState} from 'react'

import FundCard from '../components/overlays/FundCard'

const CardHeader = () => {
  const [toggleFundCard, setToggleFundCard] = useState(false);
  return (
    <>
    <FundCard
    setToggle={setToggleFundCard}
    toggle={toggleFundCard}
    />
    <HeaderCardLayout>
      {/* Balance and Graph */}
      <div className="flex items-center justify-between mt-4">
        {/* Balance */}
        <img src={cards} alt="" />
        {/* Graph */}
        <div className="flex flex-col">
          <div className="flex space-x-2 items-center px-3 py-1 self-end border rounded-full border-neutral200">
            <p className="text-sm font-medium text-grey200 ">Daily Spend</p>
            <CalendarIcon class=" h-[20px] text-blue25" />
          </div>
          <img src={graph} alt="" />
        </div>
      </div>

      {/* Final Breadcrumb */}
      <div className="flex items-center mt-8 justify-between">
        <div className="flex gap-4 font-inter items-center">
          <div className="inline-flex space-x-5 items-start justify-start">
            <div className="flex space-x-2 items-center py-[14px] px-[30px] bg-white border rounded-full border-neutral200">
              <BanknotesIcon className=" h-6 text-neutral300" />
              <p className="text-base font-medium leading-normal text-gray-700 font-clash">
                Withdraw
              </p>
            </div>
            <div className="flex space-x-2 items-center py-[14px] px-[30px] bg-green700 rounded-full cursor-pointer hover:translate-x-[2px] transition duration-1000 ease-in-out" onClick={()=>{
              setToggleFundCard(!toggleFundCard)
            }}>
              <CreditCardIcon className=" h-6 text-neutral100" />
              <p className="text-base font-semibold leading-normal text-neutral100 font-clash">
                Fund card
              </p>
            </div>
          </div>
        </div>

        <div className="inline-flex space-x-4 items-start justify-start">
          <div className="flex space-x-4 items-center justify-center px-4 py-2.5 border rounded-full border-neutral200">
            <p className="text-sm font-medium leading-normal text-blue25">
              Status
            </p>
            <p className="text-base font-medium leading-normal text-neutral200">
              |
            </p>
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-green700 mr-2"></span>
              <p className="text-sm font-medium leading-normal text-grey500">
                Active
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center justify-center px-4 py-2.5 border rounded-full border-neutral200">
            <p className="text-sm font-medium leading-normal text-grey400">
              Card Details
            </p>
            <CreditCardIcon className=" h-[20px] text-blue25" />
          </div>
          <div className="flex space-x-2 items-center justify-center px-4 py-2.5 border rounded-full border-neutral200">
            <p className="text-sm font-medium leading-normal text-grey400">
              Virtual Card
            </p>
            <InformationCircleIcon className=" h-[20px] text-blue25" />
          </div>
        </div>
      </div>
    </HeaderCardLayout>
    </>
  );
};

export default CardHeader;
