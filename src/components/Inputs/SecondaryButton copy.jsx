import React from "react";

const SecondaryButton = ({ label, onClick, width = "w-full" }) => {
  return (
    <button
      className={`border border-grey15 hover:border-grey50 transition-all duration-300 font-clash font-semibold text-lg py-4 ${width} rounded-full text-grey600`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
