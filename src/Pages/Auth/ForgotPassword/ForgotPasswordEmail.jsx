import React, { useState } from "react";
import { Spinner } from "../../../components/Spinner";
import { getCode } from "./ForgotPasswordApi";
import { useNavigate } from "react-router-dom";

const ForgotPasswordEmail = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
const navigate = useNavigate()
  return (
    <>
      <p className="text-2xl font-semibold text-[#1B1B1B] font-clash text-center">
        Recover Password
      </p>
      <div className="h-9" />
      <div className="border border-[#E5ECF5] rounded-[8px] py-[64px] min-h-[534px]">
        <div className="max-w-[353px] mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getCode(email, setError, navigate, setLoading);
            }}
          >
            <p className="text-base leading-snug text-[#71879C] font-inter">
              Enter your email address, and we will send you a link to reset
              your password.
            </p>
            <div className="h-[26px]" />
            <div className="focus-within:border-['transparent'] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
              <label
                htmlFor="email"
                className="text-xs text-[#71879C] font-inter"
              >
                Email
              </label>
              <br />
              <div className="h-[2px]" />
              <div className="flex items-center gap-2 ">
                <input
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@email.com"
                  className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />
              </div>
            </div>
            <div className="h-[26px]" />
            <button
              disabled={!email}
              type="submit"
              className="w-full flex items-center justify-center bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
            >
              {loading ? <Spinner color="#ffffff" /> : "Continue"}
            </button>
            {error && <p className="text-[#EF4444] mt-4 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordEmail;
