import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { Spinner } from "../Spinner";
import SuccessToasters from "../Inputs/SuccessToasters";
import Toasters from "../Inputs/Toasters";
import PrimaryButton from "../Inputs/PrimaryButton";
import SecondaryButton from "../Inputs/SecondaryButton";

const SignupReferral = () => {
  const navigate = useNavigate();
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [presentError, setPresentError] = useState("");
  const [inputError, setInputError] = useState(false);

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
        className={`  focus-within:border-[#5DADEC]
        border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]`}
      >
        <label
          htmlFor="referralCode"
          className="text-xs text-[#71879C] font-inter"
        >
          Referral code
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <input
            type="tel"
            name="referralCode"
            id="referralCode"
            placeholder="Enter referral code"
            value={referralCode}
            className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
            onChange={(e) => {
              setReferralCode(e.target.value);
              setInputError(false);
            }}
          />
        </div>
      </div>

      <div className="h-6" />
      <div className="flex gap-8">
        <SecondaryButton
          disabled={inputError}
          className="w-full border border-grey15 py-4 rounded-full font-clash font-medium text-grey600 text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] flex items-center justify-center "
          onClick={async (e) => {
            e.preventDefault();
            navigate("/");
          }}
          label={"Skip"}
          width="flex-1"
        />

        <PrimaryButton
          disabled={referralCode === ""}
          width="flex-1"
          className="w-full bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] flex items-center justify-center "
          onClick={async (e) => {
            e.preventDefault();

            setLoading(true);
            setPresentError("");

            await axios
              .post(
                `/v1/users/referral/submit?token=${JSON.parse(
                  sessionStorage.getItem("loginToken")
                )}`,
                { referralCode }
              )
              .then((res) => {
                setLoading(false);

                if (!res.data.success) {
                  setPresentError(res.data.message);
                  if (res.data.message === "User has already been referred") {
                    setTimeout(() => {
                      setPresentError("");
                      navigate("/");
                      return;
                    }, 1000);
                  }
                }
                if (res.data.success) {
                  console.log(res.data);
                  setSuccess(res.data.message);
                  setTimeout(() => {
                    setSuccess("");
                    navigate("/");
                    return;
                  }, 1000);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          label={loading ? <Spinner /> : " Continue"}
        />
      </div>
    </>
  );
};

export default SignupReferral;
