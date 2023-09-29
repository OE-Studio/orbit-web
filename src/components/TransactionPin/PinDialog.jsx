import React from "react";
import PinInput from "react-pin-input";
import { XMarkIcon } from "@heroicons/react/24/outline";

const PinDialog = ({
  pin,
  setPin,
  onClick,
  isOpen,
  onClose,
  pinError,
  setPinError,
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
                <p className="text-2xl font-medium text-[#001428] font-clash">
                  Enter Pin
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

              <p className="w-80 text-base leading-snug text-center text-gray-600 mx-auto">
                {pinError ? (
                  <span className="text-red500">
                    Invalid transaction pin, kindly try again
                  </span>
                ) : (
                  "Enter your current pin to continue."
                )}
              </p>

              <div className="flex center">
                <PinInput
                  length={6}
                  focus
                  initialValue=""
                  // secret
                  onChange={(value, index) => {
                    setPin(value);
                  }}
                  type="numeric"
                  secret={true}
                  inputMode="number"
                  style={{ fontFamily: "Clash Display" }}
                  inputStyle={{
                    backgroundColor: "#F2F7FA",
                    borderWidth: 2,
                    borderColor: pinError ? "#ff9c9c" : "transparent",
                    borderRadius: "5px",
                    fontFamily: "Clash Display",
                    fontWeight: 500,
                  }}
                  inputFocusStyle={{
                    borderColor: "#5DADEC",
                    backgroundColor: "#F2F7FA",
                  }}
                  onComplete={(value, index) => {
                    setPinError(false);
                  }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>

              <div className="bg-neutral100 p-4">
                <button
                  type="submit"
                  className="flex items-center px-4 py-2.5 bg-green700 text-white font-clash font-semibold rounded-full gap-3 w-full justify-center disabled:bg-gray-200 disabled:cursor-not-allowed transition-all duration-500"
                  disabled={pin?.length < 6}
                  onClick={onClick}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PinDialog;

// // PINEntry.js
// import React, { useContext } from 'react';
// import { PINContext } from './PINContext';

// const PINEntry = () => {
//   const { pin, setPIN, verifyPIN } = useContext(PINContext);

//   const handlePINChange = (e) => {
//     setPIN(e.target.value);
//   };

//   const handlePINSubmit = (e) => {
//     e.preventDefault();
//     verifyPIN(pin);
//   };

//   return (
//     <form onSubmit={handlePINSubmit}>
//       <input type="password" value={pin} onChange={handlePINChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default PINEntry;
