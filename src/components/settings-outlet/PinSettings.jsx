import React, { useState } from "react";
import Toaster from "../Inputs/Toasters";
import UpdateSuccess from "./UpdateSuccess";
import PinInput from "react-pin-input";

const PinSettings = () => {
  const [currentPin, setCurrentPin] = useState("");
  const [error, setError] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmNewPin, setConfirmNewin] = useState("");
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);

  return (
    <>
      <div className="w-[556px]">
        <p className="text-gray-400 text-base font-medium leading-[19px]">
          Pin
        </p>
        <div className="h-8"></div>
        <p className="text-slate-500 text-[15px] font-normal leading-snug">
          Enter your current pin to continue.
        </p>
        <div className="h-6"></div>
        <div className="flex">
          <PinInput
            length={6}
            focus
            initialValue=""
            // secret
            onChange={(value, index) => {}}
            type="numeric"
            secret={true}
            inputMode="number"
            style={{ fontFamily: "Clash Display" }}
            inputStyle={{
              backgroundColor: "#F2F7FA",
              borderWidth: 2,
              borderColor: "transparent",
              borderRadius: "5px",
              fontFamily: "Clash Display",
              fontWeight: 500,
            }}
            inputFocusStyle={{
              borderColor: "#5DADEC",
              backgroundColor: "#F2F7FA",
            }}
            onComplete={(value, index) => {
              setCurrentPin(value);
            }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </div>
        <div className="h-6"></div>
        {error ? (
          <Toaster
            error={error}
            onClose={() => {
              setError("");
            }}
          />
        ) : null}

        {currentPin ? <div className="w-full h-[1px] bg-neutral200" /> : null}

        {currentPin ? (
          <>
            <div className="h-6" />
            <p className="text-gray-400 text-base font-medium leading-[19px]">
              Type new pin
            </p>
            <div className="h-6" />
            <PinInput
              length={6}
              focus
              initialValue=""
              // secret
              onChange={(value, index) => {}}
              type="numeric"
              secret={true}
              inputMode="number"
              style={{ fontFamily: "Clash Display" }}
              inputStyle={{
                backgroundColor: "#F2F7FA",
                borderWidth: 2,
                borderColor: "transparent",
                borderRadius: "5px",
                fontFamily: "Clash Display",
                fontWeight: 500,
              }}
              inputFocusStyle={{
                borderColor: "#5DADEC",
                backgroundColor: "#F2F7FA",
              }}
              onComplete={(value, index) => {
                setNewPin(value);
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
            <div className="h-6" />
            <p className="text-gray-400 text-base font-medium leading-[19px]">
              Re-Type new pin
            </p>
            <div className="h-6" />
            <PinInput
              length={6}
              focus
              initialValue=""
              // secret
              onChange={(value, index) => {}}
              type="numeric"
              secret={true}
              inputMode="number"
              style={{ fontFamily: "Clash Display" }}
              inputStyle={{
                backgroundColor: "#F2F7FA",
                borderWidth: 2,
                borderColor: "transparent",
                borderRadius: "5px",
                fontFamily: "Clash Display",
                fontWeight: 500,
              }}
              inputFocusStyle={{
                borderColor: "#5DADEC",
                backgroundColor: "#F2F7FA",
              }}
              onComplete={(value, index) => {
                setConfirmNewin(value);
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
            <div className="h-6" />
            {
              <button
                disabled={
                  !(newPin && confirmNewPin && newPin === confirmNewPin)
                }
                className="bg-[#00AA61] text-white hover:bg-green-500 transition-all duration-300 font-clash font-medium text-lg rounded-full disabled:bg-grey200 disabled:cursor-not-allowed px-8 py-2.5 w-[129px]"
                onClick={async (e) => {
                  e.preventDefault();
                  // let response = await ChangePassword({
                  //   currentPassword: currentPin,
                  //   newPassword: newPin,
                  // });
                }}
              >
                Update
              </button>
            }
          </>
        ) : null}
      </div>

      <UpdateSuccess
        isOpen={isOpenSuccess}
        onClose={() => {
          setIsOpenSuccess(!isOpenSuccess);
        }}
        onDone={() => {
          setIsOpenSuccess(!isOpenSuccess);
          window.location.reload();
        }}
      />
    </>
  );
};

export default PinSettings;
