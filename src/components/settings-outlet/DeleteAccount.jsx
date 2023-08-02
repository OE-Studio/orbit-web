import React from "react";

const DeleteAccount = () => {
  return (
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
      <button
        className="bg-red500 text-white hover:bg-red600 transition-all duration-300 font-clash font-semibold text-lg py-4 w-full rounded-full disabled:bg-grey200 disabled:cursor-not-allowed"
        onClick={() => {}}
      >
        Continue
      </button>

      <div className="flex"></div>
      <div className="h-6"></div>
    </div>
  );
};

export default DeleteAccount;
