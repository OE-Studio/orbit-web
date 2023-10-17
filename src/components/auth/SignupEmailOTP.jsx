import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import { Spinner } from "../Spinner";
import axios from "../../api/axios";

import SuccessToasters from "../Inputs/SuccessToasters";
import Toasters from "../Inputs/Toasters";
import PrimaryButton from "../Inputs/PrimaryButton";

const SignupEmailOTP = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [presentError, setPresentError] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("userInfo")) {
      const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (Object.keys(userInfo).length > 0) {
        setEmail(userInfo.email);
      }
    }
  }, []);

  return (
    <>
      {success ? (
        <SuccessToasters
          value={success}
          onClose={() => {
            setSuccess("");
          }}
          customStyle="absolute"
        />
      ) : null}
      {presentError ? (
        <Toasters
          value={presentError}
          onClose={() => {
            setPresentError("");
          }}
          customStyle="absolute "
        />
      ) : null}
      <div className="focus-within:border-['transparent'] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
        <label htmlFor="phoneNo" className="text-xs text-[#71879C] font-inter">
          Email
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <input
            value={email || ""}
            readOnly="readonly"
            type="text"
            name="phoneNo"
            id="phoneNo"
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
              setOtp(value);
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

        <div className="h-7" />
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex justify-end">
            {!loading ? (
              <PrimaryButton
                disabled={otp.length < 6}
                // className="bg-[#00AA61] text-white hover:bg-green-500 transition-all duration-300 font-clash font-medium text-lg rounded-full disabled:bg-grey200 disabled:cursor-not-allowed px-8 py-2.5 "
                onClick={async (e) => {
                  setLoading(true);
                  await axios
                    .put("/v1/users/verifyEmail", {
                      otp: otp,
                      accountId: JSON.parse(sessionStorage.getItem("userInfo"))
                        .userId,
                    })
                    .then((res) => {
                      setLoading(false);
                      if (res.data.success) {
                        setSuccess(res.data.message);
                        setTimeout(() => {
                          setSuccess("");
                          navigate("/signup/phone-no");
                          return;
                        }, 1000);
                      } else {
                        setPresentError(res.data.message);
                        setTimeout(() => {
                          setPresentError("");
                          return;
                        }, 3000);
                      }
                    })
                    .catch((err) => {
                      setLoading(false);
                      setPresentError(err.message);
                      setTimeout(() => {
                        setPresentError("");
                        return;
                      }, 3000);
                    });
                }}
                label={"Submit OTP"}
              />
            ) : (
              <Spinner />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SignupEmailOTP;
