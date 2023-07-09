import React from "react";

const PrimaryButton = ({ label, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="bg-[#00AA61] text-white hover:bg-green-500 transition-all duration-300 font-clash font-semibold text-lg py-4 w-full rounded-full disabled:bg-grey200 disabled:cursor-not-allowed"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
