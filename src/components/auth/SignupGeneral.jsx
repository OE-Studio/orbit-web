import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupGeneral = () => {
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState(true);
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    dob: "",
  });

  useEffect(() => {
    console.log(formDetails);
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

  return (
    <form action="" className="w-full">
      <div className="focus-within:border-[#5DADEC] border-transparent border-2 p-2.5 rounded-[10px] bg-[#F2F7FA]">
        <label
          htmlFor="firstname"
          className="text-xs text-[#71879C] font-inter"
        >
          Legal first name
        </label>
        <br />
        <div className="h-[2px]" />
        <input
          type="text"
          placeholder="Oluwatobi"
          name="firstname"
          id="firstname"
          className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
          onChange={(e) => {
            handleClick("firstname", e.target.value);
          }}
        />
      </div>
      <div className="h-6" />
      <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
        <label htmlFor="lastname" className="text-xs text-[#71879C] font-inter">
          Legal last name
        </label>
        <br />
        <div className="h-[2px]" />
        <input
          type="text"
          name="lasttname"
          id="lasttname"
          placeholder="Bamigbade"
          className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
          onChange={(e) => {
            handleClick("lastname", e.target.value);
          }}
        />
      </div>
      <div className="h-6" />
      <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
        <label htmlFor="username" className="text-xs text-[#71879C] font-inter">
          Username
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <p className="text-sm text-[#71879C] font-inter">@</p>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="leyeconnect"
            className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
            onChange={(e) => {
              handleClick("username", e.target.value);
            }}
          />
        </div>
      </div>
      <div className="h-6" />
      <div className="focus-within:border-[#5DADEC] border-transparent border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]">
        <label htmlFor="dob" className="text-xs text-[#71879C] font-inter">
          Date of birth
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <input
            type="date"
            name="dob"
            id="dob"
            placeholder="Bamigbade"
            className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
            onChange={(e) => {
              handleClick("dob", e.target.value);
            }}
          />
        </div>
      </div>
      <div className="h-6" />
      <button
        className="w-full bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
        disabled={buttonState}
        onClick={(e) => {
          e.preventDefault();
          navigate("/signup/email");
        }}
      >
        {" "}
        Continue{" "}
      </button>
    </form>
  );
};

export default SignupGeneral;
