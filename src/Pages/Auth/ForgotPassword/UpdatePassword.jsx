import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Spinner } from "../../../components/Spinner";
import { updatePassword } from "./ForgotPasswordApi";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  // Input Formation

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // Visibility State
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Password Validation
  const [validationLength, setValidationLength] = useState(false);
  const [validationUpperCase, setValidationUpperCase] = useState(false);
  const [validationSpecialCharacter, setValidationSpecialCharacter] =
    useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    password.length >= 8
      ? setValidationLength(true)
      : setValidationLength(false);

    password.match(/[A-Z]/)
      ? setValidationUpperCase(true)
      : setValidationUpperCase(false);

    password.match(/[#?!@$%^&*-]/)
      ? setValidationSpecialCharacter(true)
      : setValidationSpecialCharacter(false);
  }, [password]);

  // Toggle Visibility
  const toggleVisibility = (inputId) => {
    let x = document.getElementById(inputId);
    if (x.type === "password") {
      x.type = "text";
      setPasswordVisible(true);
    } else {
      x.type = "password";
      setPasswordVisible(false);
    }
  };

  return (
    <>
      <p className="text-2xl font-semibold text-[#1B1B1B] font-clash text-center">
        New Password
      </p>
      <div className="h-9" />
      <div className="border border-[#E5ECF5] rounded-[8px] py-[64px] min-h-[534px]">
        <div className="max-w-[353px] mx-auto">
          <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
            <label
              htmlFor="password"
              className="text-xs text-[#71879C] font-inter"
            >
              Password
            </label>
            <br />
            <div className="h-[2px]" />
            <div className="flex items-center gap-2 ">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div
                onClick={() => {
                  toggleVisibility("password");
                }}
              >
                {passwordVisible ? (
                  <EyeSlashIcon className="h-6 text-[#A6B0BF]" />
                ) : (
                  <EyeIcon className="h-6 text-[#A6B0BF]" />
                )}
              </div>
            </div>
          </div>
          <div className="h-6" />
          {/* Password Validation Session */}
          <div className="space-y-3">
            <div className="flex space-x-2 items-center">
              <div
                className={`h-4 w-4 border flex items-center justify-center  ${
                  validationLength ? "border-[#00aa61]" : "border-[#F26969]"
                } rounded-full`}
              >
                {validationLength && (
                  <div className="h-2 w-2 rounded-full bg-[#00aa61]" />
                )}
              </div>
              <p className="text-xs leading-tight text-gray-500">
                Minimum of 8 characters
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <div
                className={`h-4 w-4 border flex items-center justify-center  ${
                  validationUpperCase ? "border-[#00aa61]" : "border-[#F26969]"
                } rounded-full`}
              >
                {validationUpperCase && (
                  <div className="h-2 w-2 rounded-full bg-[#00aa61]" />
                )}
              </div>
              <p className="text-xs leading-tight text-gray-500">
                at least one UPPERCASE letter
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <div
                className={`h-4 w-4 border flex items-center justify-center  ${
                  validationSpecialCharacter
                    ? "border-[#00aa61]"
                    : "border-[#F26969]"
                } rounded-full`}
              >
                {validationSpecialCharacter && (
                  <div className="h-2 w-2 rounded-full bg-[#00aa61]" />
                )}
              </div>
              <p className="text-xs leading-tight text-gray-500">
                One special character (e.g: !@#$%^&*?)
              </p>
            </div>
          </div>
          <div className="h-6" />
          {error && (
            <>
              <p className="text-[#EF4444] mt-4 text-sm">{error}</p>
              <div className="h-6" />
            </>
          )}

          <button
            disabled={
              !validationLength ||
              !validationUpperCase ||
              !validationSpecialCharacter
            }
            className="w-full flex items-center justify-center bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
            onClick={(e) => {
              e.preventDefault();
              updatePassword(password, setLoading, setError, navigate);
            }}
          >
            {loading ? <Spinner color="#ffffff" /> : "Continue"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
