import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import axios from "../../api/axios";

const SignupPin = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [displayConfirmPin, setDisplayConfirmPin] = useState(false);
  const [success, setSuccess] = useState(false);
  const [presentError, setPresentError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // const [inputSet, setInputSet] = useState(false);

  return (
    <>
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
                  setDisplayConfirmPin(true);
                }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
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

                  if (pin !== value) {
                    setPresentError(true);
                    setErrorMsg(
                      "The pin entered do not match, please try again."
                    );
                    return;
                  }

                  const setPin = await axios(
                    {

                      url:`v1/users/setPin?token=${JSON.parse(
                        sessionStorage.getItem("loginToken")
                      )}`,
                      method:'PUT',
                      data:
                      { pin: pin }
                    }
                    )
                    .then((res) => {
                      console.log(res);
                      if (res.data.success) {
                        setSuccess(res.data.message);
                        setTimeout(() => {
                          setSuccess("");
                          navigate("/login");
                          return;
                        }, 3000);
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
                      console.log(err);
                    });
                }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
            </div>
          </div>
        )}
        {success && (
          <p className="text-[#226523] rounded-lg mt-4 text-sm px-4 py-3 bg-[#c7ffc5]">
            {success}
          </p>
        )}
        {presentError && (
          <p className="text-red400 text-[13px] rounded-lg mt-4 text-sm px-4 py-3  font-dmsans">
            {errorMsg}
          </p>
        )}

        <div></div>
      </div>
    </>
  );
};

export default SignupPin;
