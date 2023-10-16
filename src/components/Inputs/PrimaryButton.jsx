import React from "react";

const PrimaryButton = ({ label, onClick, disabled, width = "w-auto" }) => {
  return (
    <button
      disabled={disabled}
      className={`bg-[#00AA61] text-white hover:bg-green-500 transition-all duration-300 font-clash font-semibold text-lg py-3 px-6  rounded-full disabled:bg-grey200  disabled:cursor-not-allowed ${width} `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
