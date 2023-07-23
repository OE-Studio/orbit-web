import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import { Spinner } from "../Spinner";
import axios from "../../api/axios";

const SignupEmailOTP = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [email, setEmail] = useState("");

  // const [inputSet, setInputSet] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [presentError, setPresentError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (Object.keys(userInfo).length > 0) {
      setEmail(userInfo.email);
    }
  }, []);

  return (
    <>
      <div className="focus-within:border-['transparent'] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
        <label htmlFor="phoneNo" className="text-xs text-[#71879C] font-inter">
          Email
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <input
            value={email}
            readOnly="readonly"
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

      <div>
        <div className="h-6" />
        <p className="text-base leading-snug text-[#71879C] font-inter">
          Enter your confirmation pin sent to the above email to continue
        </p>
        <div className="h-4" />
        <div>
          <PinInput
            length={6}
            focus
            initialValue=""
            // secret
            onChange={(value, index) => {}}
            type="numeric"
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
            onComplete={async (value, index) => {
              console.log(value);
               await axios
                .put("/v1/users/verifyEmail", {
                  otp: value,
                  accountId: JSON.parse(sessionStorage.getItem("userInfo"))
                    .userId,
                })
                .then((res) => {
                  console.log(res);
                  console.log(res.data.success);
                  if (res.data.success) {
                    setSuccess(res.data.message);
                    setTimeout(() => {
                      setSuccess("");
                      navigate("/signup/pin");
                      return;
                    }, 2000);
                  } else {
                    setErrorMsg(res.data.message);
                    setPresentError(true);
                    setTimeout(() => {
                      setPresentError(false);
                      setErrorMsg("");
                      return;
                    }, 3000);
                  }
                })
                .catch((err) => {
                  setErrorMsg(err.message);
                  setPresentError(true);
                  setTimeout(() => {
                    setPresentError(false);
                    setErrorMsg("");
                    return;
                  }, 3000);
                });
            }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </div>
        <div className="h-4" />
        <div className="text-sm font-medium text-[#1B1B1B] flex items-center gap-1">
          <p>I didn’t get code.</p>
          <span
            className="text-[#5DADEC] cursor-pointer "
            onClick={async () => {
              setResendLoading(true);
               await axios
                .put("/v1/users/resendEmailOTP", {
                  accountId: JSON.parse(sessionStorage.getItem("userInfo"))
                    .userId,
                })
                .then((res) => {
                  console.log(res);
                  console.log(res.data.success);
                  setResendLoading(false);
                  if (res.data.success) {
                    setSuccess(res.data.message);
                    setTimeout(() => {
                      setSuccess("");
                      return;
                    }, 3000);
                  }
                })
                .catch((err) => {});
            }}
          >
            {resendLoading ? <Spinner /> : " Resend"}
          </span>
        </div>
      </div>
      {success && (
        <p className="text-[#226523] rounded-lg mt-4 text-sm px-4 py-3">
          {success}
        </p>
      )}
      {presentError && (
        <p className="text-[#ff4646] rounded-lg mt-4 text-sm px-4 py-3">
          {errorMsg}
        </p>
      )}
    </>
  );
};

export default SignupEmailOTP;
