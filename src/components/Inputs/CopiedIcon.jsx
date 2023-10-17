import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const CopiedIcon = ({ copyMethod, iconColor = "text-blue25" }) => {
  const [toggleTooltip, setToggleTooltip] = useState(false);
  return (
    <span className="relative">
      <p
        className=" rounded-full bg-white center cursor-pointer"
        onClick={() => {
          copyMethod();
          setToggleTooltip(true);
          setTimeout(() => {
            setToggleTooltip(false);
          }, 1500);
        }}
      >
        <DocumentDuplicateIcon
          className={` h-[20px] ${iconColor} hover:text-green-500`}
        />
      </p>
      {toggleTooltip && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2">
          <div
            className={`px-3 ${"py-2"} rounded-lg relative font-inter bg-green-500 `}
          >
            <p className="text-xs font-medium text-white">Copied</p>

            {/* top Center */}
            <div className="w-3 h-3 bg-green-500 rotate-45 absolute rounded-[1px] -bottom-[5px] left-1/2 -translate-x-1/2" />
          </div>
        </div>
      )}
    </span>
  );
};

export default CopiedIcon;
