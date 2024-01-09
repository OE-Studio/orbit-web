import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/auth/authActions";
import { updateUserInput } from "../../features/auth/authSlice";
import { Spinner } from "../Spinner";
import PrimaryButton from "../Inputs/PrimaryButton";

const SignupEmail = () => {
  // eslint-disable-next-line
  const navigate = useNavigate();

  const { error, loading } = useSelector((state) => state.auth);

  // Input Formation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Visibility State
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Password Validation
  const [validationLength, setValidationLength] = useState(false);
  const [validationUpperCase, setValidationUpperCase] = useState(false);
  const [validationSpecialCharacter, setValidationSpecialCharacter] =
    useState(false);

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

  // Email Validation
  const [emailError, setEmailError] = useState(false);
  useEffect(() => {
    const getData = setTimeout(() => {
      if (email) {
        email.match(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
        )
          ? setEmailError(false)
          : setEmailError(true);
      } else {
        setEmailError(false); // Reset the email error state if the email is empty
      }
    }, 500);
    return () => clearTimeout(getData);
  }, [email]);

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

  const dispatch = useDispatch();

  const registerUserFunc = async () => {
    dispatch(
      updateUserInput({
        email: email.toLowerCase().trim(),
        password,
      })
    );
    const userInput = sessionStorage.getItem("userInput");

    await dispatch(registerUser(userInput));
  };

  return (
    <>
      <div
        className={` ${
          emailError
            ? "focus-within:-[#F26969]"
            : "focus-within:border-[#5DADEC]"
        } ${
          emailError ? "border-[#F26969]" : "border-transparent"
        } border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]`}
      >
        <label htmlFor="email" className="text-xs text-[#71879C] font-inter">
          Email
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="emeksmoney@mail.com"
            className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full  box-shadow: 0 0 #0000;"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
          />
        </div>
      </div>
      {emailError && (
        <p className="text-[#EF4444] mt-1 text-sm">enter a valid email</p>
      )}
      <div className="h-6" />
      <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
        <label htmlFor="password" className="text-xs text-[#71879C] font-inter">
          Password
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div
          className="cursor-pointer"
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
      <div className="flex justify-end">
        <PrimaryButton
          disabled={
            !validationLength ||
            !validationUpperCase ||
            !validationSpecialCharacter ||
            !email
          }
          className="w-full flex items-center justify-center bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
          onClick={(e) => {
            e.preventDefault();
            registerUserFunc();
          }}
          label={loading ? <Spinner color="#ffffff" /> : "Continue"}
        />
      </div>

      {error && <p className="text-[#EF4444] mt-4 text-sm">{error}</p>}
    </>
  );
};

export default SignupEmail;
