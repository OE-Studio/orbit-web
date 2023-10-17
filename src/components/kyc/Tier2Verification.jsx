import { UserGroupIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import SideBarWrapper from "../SideBarWrapper";
import { updateIdentity, verifyBVN } from "./KycApi";
import PrimaryButton from "../Inputs/PrimaryButton";
import { Spinner } from "../Spinner";

import SuccessToasters from "../Inputs/SuccessToasters";
import Toaster from "../Inputs/Toasters";
import PinInput from "react-pin-input";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../features/profile/userAction";
import CloseButton from "../Inputs/CloseButton";

const Tier2Verification = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();
  const [BVN, setBVN] = useState("");
  const [err, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [presentError, setPresentError] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  return (
    <>
      <SideBarWrapper toggle={toggle}>
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p className="text-sm font-medium leading-normal text-grey400">
              Tier 2 Verification
            </p>
            <UserGroupIcon className=" h-[20px] text-blue25" />
          </div>
          <CloseButton
            onClick={() => {
              setToggle(!toggle);
            }}
        />
        </div>
        <div className="h-9" />
        <div className="h-full overflow-y-scroll pb-14 font-inter ">
          {/* box */}
          <div className="bg-white  rounded-[8px] p-10">
            <div className="mx-auto w-[353px] space-y-6">
              <AnimatePresence>
                <motion.div
                  key={"step-1"}
                  initial={{ x: "-20%", opacity: 0 }}
                  animate={{ x: "0%", opacity: "100%" }}
                  transition={{ ease: "easeInOut", duration: 0.25 }}
                  exit={{ x: "-20%", opacity: 0 }}
                  className="space-y-[26px] font-inter"
                >
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
                    <Toaster
                      value={presentError}
                      onClose={() => {
                        setPresentError("");
                      }}
                      customStyle="absolute -top-14"
                    />
                  ) : null}
                  <div className="space-y-[26px] font-inter">
                    <p className="text-2xl font-semibold font-clash text-grey600">
                      BVN verification
                    </p>
                    <p className="w-full text-[15px] leading-snug text-[#71879C]">
                      Enter your BVN, dial *565*0# on your BVN-registered line
                      to get your BVN code.
                    </p>
                    <div>
                      <div
                        className={`focus-within:border-[#5DADEC]  border-2 px-4 py-2 space-y-1 rounded-[10px] bg-[#F2F7FA] ${
                          err !== "" && err.bvn
                            ? "border-[#EF4444]"
                            : "border-transparent"
                        }`}
                      >
                        <label
                          htmlFor="username"
                          className="text-xs text-[#71879C] font-inter"
                        >
                          bvn
                        </label>
                        <br />
                        <div className="h-[2px]" />
                        <input
                          type="text"
                          placeholder=""
                          name="bvn"
                          id="bvn"
                          value={BVN}
                          className={`text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full `}
                          onChange={(e) => {
                            setError("");
                            setBVN(e.target.value);
                          }}
                        />
                      </div>
                      {err && err.bvn && (
                        <>
                          <div className="h-2"></div>
                          <p className="text-center text-[#EF4444]">
                            {err.bvn}
                          </p>
                        </>
                      )}
                    </div>

                    {!otpSent && (
                      <>
                        <div className="flex gap-3">
                          <PrimaryButton
                            disabled={BVN.length !== 11}
                            label={loading ? <Spinner /> : "Confirm"}
                            onClick={async (e) => {
                              e.preventDefault();
                              setLoading(true);
                              setPresentError("");
                              setSuccess("");
                              try {
                                const result = await updateIdentity(BVN);
                                setLoading(false);
                                if (!result.success) {
                                  setPresentError(result.message);
                                }
                                if (result.success) {
                                  setSuccess(
                                    "An OTP has been sent to your bvn phone number"
                                  );
                                  setTimeout(() => {
                                    setSuccess("");
                                    setOtpSent(true);
                                  }, 1000);
                                }
                              } catch (error) {}
                            }}
                          />
                        </div>
                        {loading && (
                          <p className="text-xs text-grey300">
                            This may take a while we are verifying...
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {otpSent && (
                    <div>
                      <div className="h-6" />
                      <p className="text-base leading-snug text-[#71879C] font-inter">
                        Enter your confirmation otp sent to the Phone number
                        linked to the BVN
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
                            setSuccess("");
                            setPresentError("");
                            try {
                              const result = await updateIdentity(BVN);
                              setLoading(false);
                              setPresentError("");
                              setSuccess("");
                              if (result.success) {
                                setSuccess(
                                  "An OTP has been sent to your bvn phone number"
                                );
                                setTimeout(() => {
                                  setSuccess("");
                                  setOtpSent(true);
                                }, 1000);
                              }
                            } catch (error) {}
                          }}
                        >
                          {resendLoading ? <Spinner /> : " Resend"}
                        </span>
                      </div>
                      <div className="h-7" />
                      {loading ? (
                        <Spinner />
                      ) : (
                        <button
                          disabled={otp.length < 6 && loading}
                          className="bg-[#00AA61] text-white hover:bg-green-500 transition-all duration-300 font-clash font-medium text-lg rounded-full disabled:bg-grey200 disabled:cursor-not-allowed px-8 py-2.5 "
                          onClick={async (e) => {
                            setPresentError("");
                            setSuccess("");
                            const result = await verifyBVN(BVN, otp);

                            if (!result.success) {
                              setPresentError(result.message);
                              setTimeout(() => {
                                setPresentError("");
                              }, 1000);
                            }
                            if (result.success) {
                              setSuccess(result.message);
                              setTimeout(() => {
                                setSuccess("");
                                setOtpSent(false);
                                setToggle(false);
                                dispatch(getUserProfile());
                              }, 1000);
                            }
                          }}
                        >
                          Submit OTP
                        </button>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="h-9" />

          <div className="h-[42px]" />
        </div>
      </SideBarWrapper>
    </>
  );
};

export default Tier2Verification;
