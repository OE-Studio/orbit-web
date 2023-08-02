import React from "react";

const SwitchInput = ({ value, setValue }) => {
  const bgColor = value ? "bg-green600" : "bg-gray-100";
  const switchPosition = value ? "translate-x-[20px]" : "";

  return (
    <label
      htmlFor="switchInput"
      className={`relative ${bgColor} inline-block w-[44px] h-[24px] rounded-full transition-all duration-300`}
    >
      <input
        id="switchInput"
        hidden
        type="checkbox"
        onChange={(e) => {
          setValue(!value);
        }}
      />
      <span
        className={`absolute left-[2px] ${switchPosition} transition-all duration-500 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]`}
      />
    </label>
  );
};

export default SwitchInput;
