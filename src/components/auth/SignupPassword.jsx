import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";

const SignupPassword = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [input, setInput] = useState("");

  // eslint-disable-next-line
  const [inputSet, setInputSet] = useState(false);

  return (
    <>
      <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
        <label htmlFor="password" className="text-xs text-[#71879C] font-inter">
          Password
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <input
            type="text"
            name="password"
            id="password"
            placeholder="08136143995"
            className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="h-6" />

      <div className="space-y-3">
        <div className="flex space-x-2 items-center">
          <div className="h-4 w-4 border border-[#00aa61] rounded-full"></div>
          <p className="text-xs leading-tight text-gray-500">
            Minimum of 8 characters
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="h-4 w-4 border border-[#00aa61] rounded-full"></div>
          <p className="text-xs leading-tight text-gray-500">
            at least one UPPERCASE letter
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="h-4 w-4 border border-[#00aa61] rounded-full"></div>
          <p className="text-xs leading-tight text-gray-500">
            One special character (e.g: !@#$%^&*?)
          </p>
        </div>
      </div>
      <div className="h-6" />
      {!inputSet && (
        <button
          className="w-full bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup/pin");
          }}
        >
          {" "}
          Continue{" "}
        </button>
      )}

      {inputSet && (
        <div>
          <div className="h-6" />
          <p className="text-base leading-snug text-[#71879C] font-inter">
            Enter your confirmation pin sent to the above Phone number to
            continue
          </p>
          <div className="h-4" />
          <div>
            <PinInput
              length={6}
              initialValue=""
              secret
              onChange={(value, index) => {}}
              type="numeric"
              inputMode="number"
              style={{ fontFamily: "ClashDisplay" }}
              inputStyle={{
                backgroundColor: "#F2F7FA",
                borderWidth: 2,
                borderColor: "transparent",
                borderRadius: "5px",
              }}
              inputFocusStyle={{
                borderColor: "#5DADEC",
                backgroundColor: "#F2F7FA",
              }}
              onComplete={(value, index) => {
                navigate("/signup/phone-no");
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
          <div className="h-4" />
          <p className="text-sm font-medium text-[#1B1B1B]">
            I didn’t get code. <span className="text-[#5DADEC]">Resend</span>
          </p>
        </div>
      )}
    </>
  );
};

export default SignupPassword;
