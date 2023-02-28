import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";

const SignupPin = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [email, setEmail] = useState("");

  // const [inputSet, setInputSet] = useState(false);

  return (
    <>
      <div>
        <div className="h-6" />
        <p className="text-base leading-snug text-[#71879C] font-inter">
          You’ll need this PIN to sign in and confirm your transactions.
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
              localStorage.setItem("isLogged", true);
              navigate("../../", { replace: true });
            }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </div>
      </div>
    </>
  );
};

export default SignupPin;
