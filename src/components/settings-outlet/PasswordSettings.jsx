import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/loginActions";
import { Spinner } from "../Spinner";
import Toaster from "../Inputs/Toasters";
import { ChangePassword } from "./SettingsApi";
import UpdateSuccess from "./UpdateSuccess";
import { useSelector } from "react-redux";

const PasswordSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  // Visibility State
  const [loginLoading, setLoginLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [error, setError] = useState("");

  const [passwordConfirmed, setPasswordConfirmed] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Toggle Visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
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
  const user = useSelector((state) => state.user.user);

  const loginUserFunc = async () => {
    setLoginLoading(true);
    setError("");
    const userInput = {
      identity: user?.username,
      password: currentPassword,
    };
    await dispatch(loginUser(userInput)).then((payload) => {
      setLoginLoading(false);
      if (payload.error) {
        
        setError("Invalid Credential");
      } else {
        
        setPasswordConfirmed(true);
      }
    });
  };
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);

  return (
    <>
      <div className="w-[556px]">
        <p className="text-gray-400 text-base font-medium leading-[19px]">
          Password
        </p>
        <div className="h-8"></div>
        <p className="text-slate-500 text-[15px] font-normal leading-snug">
          Enter your current password to continue.
        </p>
        <div className="h-6"></div>
        <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA] flex items-center">
          <div className="flex-1 gap-2">
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
                value={currentPassword}
                id="password"
                placeholder="********"
                className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            className=""
            onClick={() => {
              toggleVisibility("password");
            }}
          >
            {passwordVisible ? (
              <EyeSlashIcon className="h-6 text-green600" />
            ) : (
              <EyeIcon className="h-6 text-green600" />
            )}
          </div>
        </div>
        <div className="h-6"></div>
        {error ? (
          <Toaster
            error={error}
            onClose={() => {
              setError("");
            }}
          />
        ) : null}

        {passwordConfirmed ? (
          <div className="w-full h-[1px] bg-neutral200" />
        ) : loginLoading ? (
          <div className="w-[129px] px-8 py-2.5 bg-[#00AA61] text-white hover:bg-green-500 rounded-full flex center">
            <Spinner color="white" />
          </div>
        ) : (
          <button
            // disabled={disabled}
            className="bg-[#00AA61] text-white hover:bg-green-500 transition-all duration-300 font-clash font-medium text-lg rounded-full disabled:bg-grey200 disabled:cursor-not-allowed px-8 py-2.5 w-[129px]"
            onClick={(e) => {
              e.preventDefault();
              loginUserFunc();
            }}
          >
            Confirm
          </button>
        )}

        {passwordConfirmed ? (
          <>
            <div className="h-6" />
            <p className="text-gray-400 text-base font-medium leading-[19px]">
              Type new password
            </p>
            <div className="h-6" />
            <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA] flex items-center">
              <div className="flex-1 gap-2">
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
                    value={newPassword}
                    id="newpassword"
                    placeholder="********"
                    className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                className=""
                onClick={() => {
                  toggleVisibility("newpassword");
                }}
              >
                {passwordVisible ? (
                  <EyeSlashIcon className="h-6 text-green600" />
                ) : (
                  <EyeIcon className="h-6 text-green600" />
                )}
              </div>
            </div>
            <div className="h-6" />
            <p className="text-gray-400 text-base font-medium leading-[19px]">
              Re-Type new password
            </p>
            <div className="h-6" />
            <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA] flex items-center">
              <div className="flex-1 gap-2">
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
                    value={confirmNewPassword}
                    id="confirmNewPassword"
                    placeholder="********"
                    className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
                    onChange={(e) => {
                      setConfirmNewPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                className=""
                onClick={() => {
                  toggleVisibility("confirmNewPassword");
                }}
              >
                {passwordVisible ? (
                  <EyeSlashIcon className="h-6 text-green600" />
                ) : (
                  <EyeIcon className="h-6 text-green600" />
                )}
              </div>
            </div>
            <div className="h-6" />
            {updateLoading ? (
              <div className="w-[129px] px-8 py-2.5 bg-[#00AA61] text-white hover:bg-green-500 rounded-full flex center">
                <Spinner color="white" />
              </div>
            ) : (
              <button
                disabled={
                  !(
                    newPassword &&
                    confirmNewPassword &&
                    newPassword === confirmNewPassword
                  )
                }
                className="bg-[#00AA61] text-white hover:bg-green-500 transition-all duration-300 font-clash font-medium text-lg rounded-full disabled:bg-grey200 disabled:cursor-not-allowed px-8 py-2.5 w-[129px]"
                onClick={async (e) => {
                  e.preventDefault();
                  
                  setUpdateLoading(true);
                  let response = await ChangePassword({
                    currentPassword: currentPassword,
                    newPassword: newPassword,
                  });
                  setUpdateLoading(false);
                  if (response.success) {
                    setIsOpenSuccess(true);
                  } else {
                    
                  }
                }}
              >
                Update
              </button>
            )}
          </>
        ) : null}
      </div>

      <UpdateSuccess
        isOpen={isOpenSuccess}
        onClose={() => {
          setIsOpenSuccess(!isOpenSuccess);
        }}
        onDone={() => {
          setIsOpenSuccess(!isOpenSuccess);
          window.location.reload();
        }}
      />
    </>
  );
};

export default PasswordSettings;
