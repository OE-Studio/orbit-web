import React from "react";
import { useNavigate } from "react-router-dom";
import "@lottiefiles/lottie-player";
import PrimaryButton from "../../../components/Inputs/PrimaryButton";
import passwordImg from "../../../assets/PasswordSuccess.svg"
const UpdateSuccess = () => {
  // Input Formation
  const navigate = useNavigate();

  return (
    <>
      <p className="text-2xl font-semibold text-[#1B1B1B] font-clash text-center">
        New Password
      </p>
      <div className="h-9" />
      <div className=" rounded-[8px] py-10 min-h-[534px]">
        <div className="max-w-[353px] mx-auto h-[60vh] flex flex-col">
          <div className="w-[250px] mx-auto">
            <div className="mx-auto">
              {/* <lottie-player
                autoplay="true"
                loop="true"
                mode="normal"
                style={{ width: "200px", height: "200px" }}
                src="https://assets9.lottiefiles.com/packages/lf20_R09JykuodG.json"
              /> */}
              <img src={passwordImg} alt="" />
            </div>
            <div className="h-4"></div>
            <p className="text-2xl font-medium text-[#001428] font-clash text-center">
              Password Changed Successfully
            </p>
            <div className="h-1 5"></div>
            <p className="text-center text-[#71879C]">
              You have successfully changed your password
            </p>
          </div>
          <div className="flex justify-center mt-20"> 
          <PrimaryButton
            className="w-full flex items-center justify-center bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] my-auto"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            label={"Done"}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateSuccess;
