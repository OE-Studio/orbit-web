import { Spinner } from "./../Spinner";
import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { updateUserInput } from "../../features/auth/authSlice";

const SignupGeneral = () => {
  const dispatch = useDispatch();
  // const { userInput } = useSelector((state) => state.auth);
  
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState(true);
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    d_o_b: "",
  });

  const [usernameError, setUsernameError] = useState(false);
  const [username, setUsername] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  // Debounce Input to Check Username
  React.useEffect(() => {
    const getData = setTimeout(() => {
      if (username) {
        console.log(username);
        axios.post(`/v1/users/checkUsername`, { username }).then((response) => {
          if (response.data.success) {
            console.log(response.data.success);
            setUsernameError(false);
            setUsernameAvailable(true);
          } else {
            setUsernameError(true);
            setUsernameAvailable(false);
          }
        });
      } else {
        setUsernameAvailable(false);
        setUsernameError(false);
      }
    }, 500);

    return () => clearTimeout(getData);
    // eslint-disable-next-line
  }, [username]);

  // Check object input to determing submit state
  useEffect(() => {
    let state = Object.values(formDetails).filter((d) => d === "");
    if (state.length > 0) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }, [formDetails]);

  // Save input to objects
  const handleClick = (item_id, e) => {
    let copiedFormInputs = { ...formDetails };
    copiedFormInputs[item_id] = e;
    setFormDetails((formDetails) => ({
      ...copiedFormInputs,
    }));
  };

  React.useEffect(() => {
    const userInput = JSON.parse(sessionStorage.getItem("userInput"));
    if(userInput){
      let copiedInput = { ...formDetails };
      const inputs = Object.values(userInput);
  
      if (inputs.length > 0 && !inputs.includes("")) {
        copiedInput = {...userInput};
        setFormDetails((formDetails) => (
          {...copiedInput}
        ));
      }
    }
    
    // eslint-disable-next-line
  }, []);

  return (
    <form action="" className="w-full">
      <div className="focus-within:border-[#5DADEC] border-transparent border-2 p-2.5 rounded-[10px] bg-[#F2F7FA]">
        <label
          htmlFor="firstName"
          className="text-xs text-[#71879C] font-inter"
        >
          Legal first name
        </label>
        <br />
        <div className="h-[2px]" />
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          id="firstName"
          value={formDetails?.firstName}
          className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
          onChange={(e) => {
            handleClick("firstName", e.target.value);
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
          name="lastName"
          id="lastName"
          value={formDetails?.lastName}
          placeholder="Last Name"
          className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
          onChange={(e) => {
            handleClick("lastName", e.target.value);
          }}
        />
      </div>
      <div className="h-6" />
      <div
        className={` ${
          usernameError
            ? "focus-within:-[#F26969]"
            : "focus-within:border-[#5DADEC]"
        } ${
          usernameError ? "border-[#F26969]" : "border-transparent"
        } border-2 px-2.5 py-1.5 rounded-[10px] bg-[#F2F7FA]`}
      >
        <label htmlFor="username" className="text-xs text-[#71879C] font-inter">
          Username
        </label>
        <br />
        <div className="h-[2px]" />
        <div className="flex items-center gap-2 ">
          <div className="flex-1 flex gap-2 items-center">
            <p className="text-sm text-[#71879C] font-inter">@</p>
            <input
              type="text"
              name="username"
              id="username"
              value={formDetails?.username}
              placeholder="username"
              className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
              onChange={(e) => {
                handleClick("username", e.target.value);
                setUsername(e.target.value);
                setUsernameAvailable(false);
                setUsernameError(false);
              }}
            />
          </div>

          {username.length > 0 && !usernameError && !usernameAvailable && (
            <Spinner color="#A6B0BF" />
          )}

          {username.length > 0 && usernameAvailable && (
            <CheckBadgeIcon className="text-[#00AA61] h-6" size="16px" />
          )}

          {username.length > 0 && usernameError && (
            <ExclamationTriangleIcon
              className="text-[#EF4444] h-6"
              size="16px"
            />
          )}
        </div>
      </div>
      {usernameError && (
        <p className="text-[#EF4444] mt-1 text-sm">
          username is taken try another
        </p>
      )}
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
            value={formDetails?.d_o_b}
            className="text-[#3D3D3D] placeholder:text-[#71879C] focus:outline-none font-inter text-lg bg-transparent w-full"
            onChange={(e) => {
              handleClick("d_o_b", e.target.value);
            }}
          />
        </div>
      </div>
      <div className="h-6" />
      <button
        className="w-full bg-green-600 py-4 rounded-full font-clash font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-[#D1D1D1] "
        disabled={usernameError || !buttonState}
        onClick={(e) => {
          e.preventDefault();
          dispatch(updateUserInput(formDetails));
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
