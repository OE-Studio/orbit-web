import React from "react";

const ErrorMsg = ({ children }) => {
  return (
    <p className="text-red400 text-[13px] rounded-lg mt-4 text-sm px-4 py-3  font-dmsans">
      {children}
    </p>
  );
};

export default ErrorMsg;
