import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const CloseButton = ({ onClick }) => {
  return (
    <div
      className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <XMarkIcon className=" w-6 h-6" />
    </div>
  );
};

export default CloseButton;
