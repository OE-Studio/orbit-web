import React, { useState } from "react";
import PrimaryButton from "../Inputs/PrimaryButton";
import SecondaryButton from "../Inputs/SecondaryButton";
import { XMarkIcon } from "@heroicons/react/24/solid";

const DeleteModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen ? (
        <div
          className={`transition duration-1000 ease-in-out flex z-[80] fixed  w-full border   bg-[#0014284D] h-screen top-0 left-0 font-inter items-center justify-center`}
        >
          <div className="absolute  w-[393px] bg-white rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center px-4 mt-5">
              <div />
              <p className="text-2xl font-medium text-[#001428] font-clash">
                Delete account
              </p>
              <div
                className="flex items-center justify-center bg-grey5 h-8 w-8 rounded-full cursor-pointer"
                onClick={() => {
                  onClose();
                }}
              >
                <XMarkIcon className="h-5 text-[#1C1B1F]" />
              </div>
            </div>
            <div className=" p-5 pb-10">
              <div className="w-full max-w-[400px] bg-neutral100 p-6 rounded-t-2xl">
                <p className="text-text100 font-inter text-[13px] text-center ">
                  Transfer out all money in your wallet and card before deleting
                  account.
                </p>
              </div>
              <div className="w-full max-w-[400px] bg-red50 py-3 px-6 rounded-b-2xl">
                <p className="text-red600 font-inter text-[13px] text-center  ">
                  Please note that this action cannot be reversed. account.
                </p>
              </div>
            </div>
            <div className="bg-neutral100 p-4 justify-center flex gap-6">
              <SecondaryButton
                width="flex-1"
                label={"Cancel"}
                onClick={() => {
                  onClose();
                }}
              />
              <PrimaryButton
                width="flex-1 bg-red500 hover:bg-red600"
                label={"Continue"}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const DeleteAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DeleteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="w-[400px]">
        <p className="text-gray-400 text-base font-medium leading-[19px]">
          Delete account
        </p>
        <div className="h-8"></div>
        <div className="w-full max-w-[400px] bg-neutral100 p-6 rounded-t-2xl">
          <p className="text-text100 font-inter text-[13px] text-center ">
            Transfer out all money in your wallet and card before deleting
            account.
          </p>
        </div>
        <div className="w-full max-w-[400px] bg-red50 py-3 px-6 rounded-b-2xl">
          <p className="text-red600 font-inter text-[13px] text-center  ">
            Please note that this action cannot be reversed. account.
          </p>
        </div>
        <div className="h-8"></div>
        <div className="flex justify-end">
          <PrimaryButton
            className="bg-red500 text-white hover:bg-red600 transition-all duration-300 font-clash font-semibold text-lg py-4 w-full rounded-full disabled:bg-grey200 disabled:cursor-not-allowed"
            onClick={() => {
              setIsOpen(true);
            }}
            label={"Continue"}
            width="bg-red500 hover:bg-red600"
          />
        </div>

        <div className="flex"></div>
        <div className="h-6"></div>
      </div>
    </>
  );
};

export default DeleteAccount;
