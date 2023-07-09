import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import axios from "../../api/axios";
import { Spinner } from "../Spinner";
import { useSelector } from "react-redux";

const SignupPhone = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [phoneNumber, setphoneNumber] = useState("");

  const [inputSet, setInputSet] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [presentError, setPresentError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");



  const [inputError, setInputError] = useState(false);
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
      <div
        className={` ${
          inputError
            ? "focus-within:-[#F26969]"
            : "focus-within:border-[#5DADEC]"
        } ${
          inputError ? "border-[#F26969]" : "border-transparent"
        } border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]`}
      >
        <label htmlFor="phoneNo" className="text-xs text-[#71879C] font-inter">
          Phone Number
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="08136143995"
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
        <button
          disabled={inputError}
          className="w-full bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] flex items-center justify-center "
          onClick={async (e) => {
            e.preventDefault();
            const parsedNumber = parseInt(phoneNumber)
            console.log('+234'+parsedNumber)
            setLoading(true);
            const setPhoneNumber = await axios
              .patch(
                `users/setPhoneNumber?token=${JSON.parse(
                  sessionStorage.getItem("loginToken")
                )}`,
                { phoneNumber:'+234'+parsedNumber }
              )
              .then((res) => {
                setLoading(false);
                console.log(res);
                if (res.data.success) {
                  setSuccess(res.data.message);
                  setTimeout(() => {
                    setInputSet(true);
                    setSuccess("");
                    return;
                  }, 3000);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {" "}
          {loading ? <Spinner /> : " Continue"}
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
                navigate("/signup/password");
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
                setLoading(true);
                const newOTP = await axios
                  .put("/users/resendSMSotp", {
                    accountId: JSON.parse(sessionStorage.getItem("userInfo"))
                      .userId,
                  })
                  .then((res) => {
                    console.log(res);
                    console.log(res.data.success);
                    setLoading(false);
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
              {loading ? <Spinner /> : " Resend"}
            </span>
          </div>
        </div>
      )}

      {success && (
        <p className="text-[#226523] rounded-lg mt-4 text-sm px-4 py-3 bg-[#c7ffc5]">
          {success}
        </p>
      )}
      {presentError && (
        <p className="text-[#ff4646] rounded-lg mt-4 text-sm px-4 py-3 bg-[#ffc5c5]">
          {errorMsg}
        </p>
      )}
    </>
  );
};

export default SignupPhone;
