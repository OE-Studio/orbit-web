import React, { useState } from "react";
import PrimaryButton from "../Inputs/PrimaryButton";
import SecondaryButton from "../Inputs/SecondaryButton";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { deleteUser } from "./SettingsApi";
import { Spinner } from "../Spinner";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
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
  return (
    <>
      {isOpen ? (
        <div
          className={`transition duration-1000 ease-in-out flex z-[80] fixed  w-full border   bg-[#0014284D] h-screen top-0 left-0 font-inter items-center justify-center`}
        >
          <div className="absolute  w-[393px] bg-white rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center px-4 mt-5">
              <div />
              <p className="text-2xl font-medium text-[#001428] font-clash">
                Delete account
              </p>
              <div
                className="flex items-center justify-center bg-grey5 h-8 w-8 rounded-full cursor-pointer"
                onClick={() => {
                  onClose();
                }}
              >
                <XMarkIcon className="h-5 text-[#1C1B1F]" />
              </div>
            </div>
            <div className=" p-5 pb-5">
              <div className="w-full max-w-[400px] bg-neutral100 p-6 rounded-t-2xl">
                <p className="text-text100 font-inter text-[13px] text-center ">
                  Transfer out all money in your wallet and card before deleting
                  account.
                </p>
              </div>
              <div className="w-full max-w-[400px] bg-red50 py-3 px-6 rounded-b-2xl">
                <p className="text-red600 font-inter text-[13px] text-center  ">
                  Please note that this action cannot be reversed. account.
                </p>
              </div>
            </div>

            <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA] flex items-center mx-5">
              <div className="flex-1 gap-2">
                <label
                  htmlFor="password"
                  className="text-xs text-[#71879C] font-inter"
                >
                  Enter your password to confirm action
                </label>
                <br />
                <div className="h-[2px]" />
                <div className="flex items-center gap-2 ">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    id="newpassword"
                    placeholder="********"
                    className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
                    onChange={(e) => {
                      setPassword(e.target.value);
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
            <div className="h-4"></div>

            <div className="bg-neutral100 p-4 justify-center flex gap-6">
              <SecondaryButton
                width="flex-1"
                label={"Cancel"}
                onClick={() => {
                  onClose();
                  setLoading(false);
                }}
              />
              {!loading ? (
                <PrimaryButton
                  disabled={!password}
                  width="flex-1 bg-red500 hover:bg-red600"
                  label={"Continue"}
                  onClick={async () => {
                    setLoading(true);
                    const userInput = {
                      password,
                    };
                    const result = await deleteUser(userInput);
                    setLoading(false);
                    if (!result.success) {
                      toast.error(result.message, {
                        position: "top-center",
                        autoClose: 15000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }
                    if (result.success) {
                      sessionStorage.clear();
                      navigate("/login");
                    }
                    console.log(result);
                  }}
                />
              ) : (
                <div className="flex-1 px-8 py-2.5 bg-red500 hover:bg-red600 text-white  rounded-full flex center">
                  <Spinner color="white" />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const DeleteAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DeleteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="w-[400px]">
        <p className="text-gray-400 text-base font-medium leading-[19px]">
          Delete account
        </p>
        <div className="h-8"></div>
        <div className="w-full max-w-[400px] bg-neutral100 p-6 rounded-t-2xl">
          <p className="text-text100 font-inter text-[13px] text-center ">
            Transfer out all money in your wallet and card before deleting
            account.
          </p>
        </div>
        <div className="w-full max-w-[400px] bg-red50 py-3 px-6 rounded-b-2xl">
          <p className="text-red600 font-inter text-[13px] text-center  ">
            Please note that this action cannot be reversed. account.
          </p>
        </div>
        <div className="h-8"></div>
        <div className="flex justify-end">
          <PrimaryButton
            className="bg-red500 text-white hover:bg-red600 transition-all duration-300 font-clash font-semibold text-lg py-4 w-full rounded-full disabled:bg-grey200 disabled:cursor-not-allowed"
            onClick={() => {
              setIsOpen(true);
            }}
            label={"Continue"}
            width="bg-red500 hover:bg-red600"
          />
        </div>

        <div className="flex"></div>
        <div className="h-6"></div>
      </div>
    </>
  );
};

export default DeleteAccount;
