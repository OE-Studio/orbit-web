import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SecondaryButton from "../Inputs/SecondaryButton";
import PrimaryButton from "../Inputs/PrimaryButton";
import success from "../../assets/success.svg";

const SuccessPage = ({
  isOpen,
  onClose,
  onDone,
  onReceipt,
  type = "Purchase",
}) => {
  return (
    <>
      {isOpen ? (
        <div
          id="pin-dialog"
          className={`transition duration-1000 ease-in-out flex z-[80] fixed  w-full border   bg-[#0014284D] h-screen top-0 left-0 font-inter items-center justify-center`}
        >
          <div className="absolute  w-[393px] bg-white rounded-2xl overflow-hidden">
            <div className="pt-4 space-y-5">
              <div className="flex justify-between items-center px-4">
                <div />
                <div
                  className="flex items-center justify-center bg-grey5 h-8 w-8 rounded-full cursor-pointer"
                  onClick={() => {
                    onClose();
                  }}
                >
                  <XMarkIcon className="h-5 text-[#1C1B1F]" />
                </div>
              </div>
              <div className="flex center">
                <img src={success} alt="" />
              </div>
              <div>
                <p className="text-2xl font-medium text-[#001428] font-clash text-center">
                  {type} processing
                </p>
                <div className="h-1 5" />
                <p className="w-[80%] text-base leading-snug text-center text-gray-600 mx-auto">
                  {`You ${type.toLowerCase()} is being processed`}
                </p>
              </div>

              <div className="bg-neutral100 p-4 flex gap-4">
                <SecondaryButton width="flex-1" label="Done" onClick={onDone} />
                <PrimaryButton
                  width="flex-1"
                  label="Receipt"
                  onClick={onReceipt}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SuccessPage;
