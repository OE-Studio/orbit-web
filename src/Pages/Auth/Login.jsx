import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import orbitLogo from "../../assets/onboarding/orbitLogo.svg";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { loginUser } from "../../features/loginActions";
import ErrorMsg from "../../components/generalUtility/ErrorMsg";

const Login = () => {
  const [buttonState, setButtonState] = useState(true);
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    identity: "",
    password: "",
  });

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

  const { error, isLoading } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const loginUserFunc = async () => {
    const userInput = { ...formDetails };
    await dispatch(loginUser(userInput)).then((payload) => {
      if (payload.error) {
        return;
      } else {
        let user = JSON.parse(sessionStorage.getItem("user"));
        if (user) {
          navigate("/");
        }
      }
    });

    // ../../
  };

  return (
    <div className="flex h-[100vh]">
      <section className=" w-[50vw] h-full bg-[#04274B] overflow-y-hidden transition duration-500 ease-in-out disable-scrollbars">
        <img src={orbitLogo} alt="" className="mx-auto mt-[94px]" />
      </section>
      <section className="w-1/2">
        <div className="max-w-[609px] mx-auto mt-24">
          <div>
            <p className="text-2xl font-semibold text-[#1B1B1B] font-clash text-center">
              Sign in
            </p>
            <div className="h-9" />
            <div className="border border-[#E5ECF5] rounded-[8px] py-[64px] min-h-[534px]">
              <div className="max-w-[353px] mx-auto">
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
                      type="text"
                      placeholder="ogunsleye123@gmail.com"
                      name="username"
                      id="username"
                      className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
                      onChange={(e) => {
                        handleClick("identity", e.target.value);
                      }}
                    />
                  </div>
                  <div className="h-6" />
                  <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
                    <label
                      htmlFor="password"
                      className="text-xs text-[#71879C] font-inter"
                    >
                      Password
                    </label>
                    <br />
                    <div className="h-[2px]" />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="* * * * * *"
                      className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full placeholder:font-clash"
                      onChange={(e) => {
                        handleClick("password", e.target.value);
                      }}
                    />
                  </div>
                  <div className="h-6" />
                  <button
                    className="w-full bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
                    disabled={buttonState}
                    onClick={(e) => {
                      e.preventDefault();
                      loginUserFunc();
                    }}
                  >
                    {isLoading ? <Spinner color="#ffffff" /> : "Continue"}
                  </button>
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
                  <div className="h-[100px]" />
                  <button
                    className="w-full border border-[#D0D5DD] py-4 rounded-full font-clash font-medium  text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("../../signup");
                    }}
                  >
                    {" "}
                    Create account{" "}
                  </button>
                  <div className="h-4"></div>
                  {/* {success && (
                    <p className="text-[#226523] rounded-lg mt-4 text-sm px-4 py-3 bg-[#c7ffc5]">
                      {success}
                    </p>
                  )} */}
                  {error && <ErrorMsg>{error}</ErrorMsg>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
