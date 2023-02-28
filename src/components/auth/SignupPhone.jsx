import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";

const SignupPhone = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [email, setEmail] = useState("");

  const [inputSet, setInputSet] = useState(false);

  return (
    <>
      <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
        <label htmlFor="phoneNo" className="text-xs text-[#71879C] font-inter">
          Phone Number
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <input
            type="text"
            name="phoneNo"
            id="phoneNo"
            placeholder="08136143995"
            className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="h-6" />

      {!inputSet && (
        <button
          className="w-full bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
          onClick={(e) => {
            e.preventDefault();
            setInputSet(true);
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
          Enter your confirmation pin sent to the above Phone number to continue
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
                navigate("/signup/password");
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

export default SignupPhone;
