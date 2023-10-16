import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import orbitLogo from "../../assets/authLogo.svg";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { loginUser } from "../../features/loginActions";
// import ErrorMsg from "../../components/generalUtility/ErrorMsg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import SuccessToasters from "../../components/Inputs/SuccessToasters";
import Toasters from "../../components/Inputs/Toasters";
import PrimaryButton from "../../components/Inputs/PrimaryButton";
import SecondaryButton from "../../components/Inputs/SecondaryButton";
import authImg from "../../assets/authImg.png";
import orangeBlur from "../../assets/orangeBlur.png";
import greenBlur from "../../assets/greenBlur.png";

export const SideCard = () => {
  return (
    <section className=" w-1/2 h-full bg-blue600 overflow-hidden disable-scrollbars relative">
      <img src={orbitLogo} alt="" className="mx-auto mt-[94px]" />
      <div>
        <p className="text-[40px] font-medium leading-10 text-center mb-6 text-[#73ACE7] font-clash mx-auto max-w-[415px] mt-[65px]">
          Your everyday needs in one place
        </p>

        <p className="w-80 text-base leading-snug text-center mx-auto text-[#5A8FC4] font-dmsans mb-[56.6px]">
          We move around your orbit, your daily needs now in on place, designed
          for ease.
        </p>
      </div>

      <img
        src={authImg}
        alt=""
        className=" absolute  w-3/4 right-0 z-10 bottom-0 "
      />

      <img src={orangeBlur} alt="" className="absolute -top-1/2 -right-1/2" />
      <img src={greenBlur} alt="" className="absolute -bottom-[12vh] " />
    </section>
  );
};

const Login = () => {
  const [buttonState, setButtonState] = useState(true);
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    identity: "",
    password: "",
  });

  const [success, setSuccess] = useState("");
  const [presentError, setPresentError] = useState("");
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

  useEffect(() => {
    let state = Object.values(formDetails).filter((d) => d === "");

    if (state.length > 0) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [formDetails]);

  const handleClick = (item_id, e) => {
    let copiedFormInputs = { ...formDetails };
    copiedFormInputs[item_id] = e;
    setFormDetails((formDetails) => ({
      ...copiedFormInputs,
    }));
  };

  const { isLoading } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const loginUserFunc = async () => {
    setSuccess("");
    setPresentError("");
    const userInput = { ...formDetails };
    await dispatch(loginUser(userInput)).then((payload) => {
      if (payload.error) {
        setPresentError(payload.payload);
        return;
      } else {
        let user = JSON.parse(sessionStorage.getItem("loginToken"));
        if (user) {
          navigate("/");
        }
      }
    });
  };

  return (
    <>
      <div className="flex h-screen">
        <SideCard />
        
        <section className="w-1/2 h-screen">
          <div className="max-w-[609px] mx-auto mt-24">
            <div>
              <p className="text-2xl font-semibold text-[#1B1B1B] font-clash text-center">
                Sign in
              </p>
              <div className="h-9" />
              <div className=" rounded-[8px] py-[64px] min-h-[534px]">
                <div className="max-w-[353px] mx-auto relative">
                  {success ? (
                    <SuccessToasters
                      value={success}
                      onClose={() => {
                        setSuccess("");
                      }}
                      customStyle="absolute -top-16"
                    />
                  ) : null}
                  {presentError ? (
                    <Toasters
                      value={presentError}
                      onClose={() => {
                        setPresentError("");
                      }}
                      customStyle="absolute -top-16"
                    />
                  ) : null}

                  <form action="" className="w-full">
                    <div className="focus-within:border-[#5DADEC] border-transparent border-2 p-2.5 rounded-[10px] bg-[#F2F7FA]">
                      <label
                        htmlFor="username"
                        className="text-xs text-[#71879C] font-inter"
                      >
                        Username/email
                      </label>
                      <br />
                      <div className="h-[2px]" />
                      <input
                        autoFocus={true}
                        type="text"
                        placeholder="email or username"
                        name="username"
                        id="username"
                        className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
                        onChange={(e) => {
                          handleClick("identity", e.target.value);
                        }}
                      />
                    </div>
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
                        <div className="flex items-center gap-2">
                          <input
                            type="password"
                            name="password"
                            value={formDetails.password}
                            id="newpassword"
                            placeholder="********"
                            className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent flex-1 "
                            onChange={(e) => {
                              handleClick("password", e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          console.log("login");
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
                    <div className="flex justify-between flex-row-reverse">
                      <PrimaryButton
                        className=" bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
                        disabled={buttonState}
                        onClick={(e) => {
                          e.preventDefault();
                          loginUserFunc();
                        }}
                        label={
                          isLoading ? <Spinner color="#ffffff" /> : "Continue"
                        }
                      ></PrimaryButton>
                      <div className="h-6" />
                      <button
                        className="text-sm font-medium text-center text-gray-400"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/forgot-password");
                        }}
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="h-[100px]" />
                    <div className="flex justify-center">
                      <SecondaryButton
                        className="w-full border border-[#D0D5DD] py-4 rounded-full font-clash font-medium  text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("../../signup");
                        }}
                        label={"Create account"}
                        width="auto"
                      ></SecondaryButton>
                    </div>
                    <div className="h-4"></div>
                    {/* {success && (
                    <p className="text-[#226523] rounded-lg mt-4 text-sm px-4 py-3 bg-[#c7ffc5]">
                      {success}
                    </p>
                  )} */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
