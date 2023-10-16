import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import axios from "../../api/axios";
import SuccessToasters from "../Inputs/SuccessToasters";
import Toasters from "../Inputs/Toasters";
import { Spinner } from "../Spinner";
import PrimaryButton from "../Inputs/PrimaryButton";

const SignupPin = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  // eslint-disable-next-line
  const [confirmPin, setConfirmPin] = useState("");
  const [displayConfirmPin, setDisplayConfirmPin] = useState(false);
  const [success, setSuccess] = useState(false);
  const [presentError, setPresentError] = useState("");
  const [loading, setLoading] = useState(false);

  // const [inputSet, setInputSet] = useState(false);

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
      <div>
        <div className="h-6" />
        {!displayConfirmPin && (
          <div>
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
                  setPin(value);
                }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
            </div>
            <div className="h-7"></div>
            <div className="flex justify-end">
              <PrimaryButton
                disabled={pin.length < 6}
                className="bg-[#00AA61] text-white hover:bg-green-500 transition-all duration-300 font-clash font-medium text-lg rounded-full disabled:bg-grey200 disabled:cursor-not-allowed px-8 py-2.5 "
                onClick={(e) => {
                  console.log("here");
                  setDisplayConfirmPin(true);
                }}
                label={"Continue"}
              />
            </div>
          </div>
        )}
        {displayConfirmPin && (
          <div>
            <p className="text-base leading-snug text-[#71879C] font-inter">
              Enter pin again, you’ll need this PIN to sign in and confirm your
              transactions.
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
                onComplete={async (value, index) => {
                  setConfirmPin((prev) => value);
                }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
            </div>
            <div className="h-7"></div>
            <div className="flex justify-end">
              {loading ? (
                <Spinner />
              ) : (
                <PrimaryButton
                  disabled={confirmPin.length < 6}
                  onClick={async (e) => {
                    setLoading(true);
                    setPresentError("");
                    if (pin !== confirmPin) {
                      setPresentError(
                        "The pin entered do not match, please try again."
                      );
                      setLoading(false);
                      return;
                    }
                    await axios({
                      url: `v1/users/setPin?token=${JSON.parse(
                        sessionStorage.getItem("loginToken")
                      )}`,
                      method: "PUT",
                      data: { pin: pin },
                    })
                      .then((res) => {
                        setLoading(false);
                        console.log(res);
                        if (res.data.success) {
                          setSuccess(res.data.message);
                          setTimeout(() => {
                            setSuccess("");
                            // sessionStorage.removeItem("userInfo");
                            // sessionStorage.removeItem("userInput");
                            // localStorage.clear();
                            navigate("/signup/referral");
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
                        console.log(err);
                        setLoading(false);
                      });
                  }}
                  label={"Continue"}
                />
              )}
            </div>
          </div>
        )}

        <div></div>
      </div>
    </>
  );
};

export default SignupPin;
