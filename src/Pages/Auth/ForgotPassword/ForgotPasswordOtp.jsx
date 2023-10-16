import React, { useState } from "react";
import { Spinner } from "../../../components/Spinner";
import { confirmPin, getCode } from "./ForgotPasswordApi";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";

const ForgotPasswordOtp = () => {
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resend, setResend] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <p className="text-2xl font-semibold text-[#1B1B1B] font-clash text-center">
        Confirm Pin
      </p>
      <div className="h-9" />
      <div className="rounded-[8px] py-[64px] min-h-[534px]">
        <div className="max-w-[353px] mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getCode(email, setError, navigate);
            }}
          >
            <p className="text-base leading-snug text-[#71879C] font-inter">
              Enter your confirmation pin sent to your email to continue.
            </p>
            <div className="h-[26px]" />
            {loading ? (
              <Spinner />
            ) : (
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
                    let email = sessionStorage.getItem("email");
                    confirmPin(email, value, setError, navigate, setLoading);
                  }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>
            )}
            <div className="h-4" />
            <div className="text-sm font-medium text-[#1B1B1B] flex items-center gap-1">
              <p>I didn’t get code.</p>
              <span
                className="text-[#5DADEC] cursor-pointer "
                onClick={async () => {
                  let email = sessionStorage.getItem("email");
                  getCode(email, setError, navigate, setResend);
                }}
              >
                {resend ? <Spinner /> : " Resend"}
              </span>
            </div>

            {error && <p className="text-[#EF4444] mt-4 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordOtp;
