import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import axios from "../../api/axios";
import { Spinner } from "../Spinner";
import SuccessToasters from "../Inputs/SuccessToasters";
import Toasters from "../Inputs/Toasters";
import PrimaryButton from "../Inputs/PrimaryButton";

const SignupPhone = () => {
  const navigate = useNavigate();

  const [phoneNumber, setphoneNumber] = useState("");
  const [inputSet, setInputSet] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [presentError, setPresentError] = useState("");
  const [inputError, setInputError] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    const getData = setTimeout(() => {
      if (phoneNumber) {
        phoneNumber.length === 11 ? setInputError(false) : setInputError(true);
      } else {
      }
    }, 500);
    return () => clearTimeout(getData);
  }, [phoneNumber]);

  return (
    <>
      {success ? (
        <SuccessToasters
          value={success}
          onClose={() => {
            setSuccess("");
          }}
          customStyle="absolute -top-14"
        />
      ) : null}
      {presentError ? (
        <Toasters
          value={presentError}
          onClose={() => {
            setPresentError("");
          }}
          customStyle="absolute -top-14"
        />
      ) : null}
      <div
        className={` ${
          inputError ? "focus-within:-[#F26969]" : "border-transparent"
        } ${
          inputError ? "border-[#F26969]" : "border-transparent"
        } border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]
        ${!inputSet ? "focus-within:border-[#5DADEC]" : ""}
        `}
      >
        <label htmlFor="phoneNo" className="text-xs text-[#71879C] font-inter">
          Phone Number
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <input
            readOnly={inputSet}
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Your phone number"
            className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
            onChange={(e) => {
              setphoneNumber(e.target.value);
              setInputError(false);
            }}
          />
        </div>
      </div>
      {inputError && (
        <p className="text-[#EF4444] mt-1 text-sm">
          Enter a valid phone number
        </p>
      )}
      <div className="h-6" />

      {!inputSet && (
        <div className="flex justify-end">
          <PrimaryButton
            disabled={inputError || phoneNumber === ""}
            className="w-full bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] flex items-center justify-center "
            onClick={async (e) => {
              e.preventDefault();
              setLoading(true);
              // eslint-disable-next-line
              const setPhoneNumber = await axios
                .patch(
                  `/v1/users/setPhoneNumber?token=${JSON.parse(
                    sessionStorage.getItem("loginToken")
                  )}`,
                  { phoneNumber: phoneNumber }
                )
                .then((res) => {
                  setLoading(false);

                  setSuccess("Check your phone for the OTP");
                  setInputSet(true);
                  setTimeout(() => {
                    setSuccess("");
                    return;
                  }, 3000);
                })
                .catch((err) => {});
            }}
            label={loading ? <Spinner /> : " Continue"}
          />
        </div>
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
              // secret
              onChange={(value, index) => {}}
              type="numeric"
              inputMode="number"
              style={{ fontFamily: "ClashDisplay" }}
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
                setOtp(value);
                // navigate("/signup/password");
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
                  .put("/v1/users/resendSMSotp", {
                    accountId: JSON.parse(sessionStorage.getItem("userInfo"))
                      .userId,
                    phoneNumber: phoneNumber,
                  })
                  .then((res) => {
                    setResendLoading(false);
                    if (res.data.success) {
                      setSuccess(res.data.message);
                      setTimeout(() => {
                        setSuccess("");
                        return;
                      }, 3000);
                    } else {
                      setPresentError("Unable to re-send SMS");
                    }
                  })
                  .catch((err) => {});
              }}
            >
              {resendLoading ? <Spinner /> : " Resend"}
            </span>
          </div>
          <div className="h-7" />
          <div className="flex justify-end">
            {loading ? (
              <Spinner />
            ) : (
              <PrimaryButton
                disabled={!(otp.length === 6 && loading)}
                className="bg-[#00AA61] text-white hover:bg-green-500 transition-all duration-300 font-clash font-medium text-lg rounded-full disabled:bg-grey200 disabled:cursor-not-allowed px-8 py-2.5 "
                onClick={async (e) => {
                  e.preventDefault();

                  setLoading(true);

                  await axios
                    .put(
                      `/v1/users/verifyPhoneNumber?token=${JSON.parse(
                        sessionStorage.getItem("loginToken")
                      )}`,
                      {
                        otp: otp,
                        phoneNumber: phoneNumber,
                      }
                    )
                    .then((res) => {
                      setLoading(false);

                      if (res.data.success) {
                        setSuccess(res.data.message);
                        setTimeout(() => {
                          setSuccess("");
                          navigate("/signup/pin");
                          return;
                        }, 1000);
                      } else {
                        setPresentError(res.data.message);
                        setTimeout(() => {
                          setLoading(false);
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
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPhone;
