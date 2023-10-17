import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const SignupForm = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    // Use location.pathname to determine the progress value based on the current route
    switch (location.pathname) {
      case "/signup":
        setProgress(0);
        break;
      case "/signup/email":
        setProgress(20);
        break;
      case "/signup/email-otp":
        setProgress(40);
        break;
      case "/signup/phone-no":
        setProgress(60);
        break;
      case "/signup/pin":
        setProgress(80);
        break;
      case "/signup/referral":
        setProgress(100);
        break;
      default:
        setProgress(0); // Handle other routes as needed
    }
  }, [location.pathname]);

  console.log(progress);

  return (
    <div>
      <p className="text-2xl font-semibold text-[#1B1B1B] font-clash text-center">
        Sign up
      </p>
      <div className="my-9 gap-[6px] flex max-w-[353px] mx-auto">
        <div className="flex-1 h-[4px]  bg-[#E5ECF5] rounded-full flex overflow-hidden">
          <div
            className={`h-full transition-all duration-300
            ${
              progress === 0
                ? "bg-[#7FBBF8] w-4/5"
                : progress >= 20
                ? "bg-[#7FBBF8] w-full"
                : ""
            }
               `}
          />
        </div>
        <div className="flex-1 h-[4px]  bg-[#E5ECF5] rounded-full">
          <div
            className={`h-full transition-all duration-300 delay-300
            ${
              progress === 40
                ? "bg-[#7FBBF8] w-4/5"
                : progress >= 60
                ? "bg-[#7FBBF8] w-full"
                : ""
            }
               `}
          />
        </div>
        <div className="flex-1 h-[4px] bg-[#E5ECF5]  rounded-full">
          <div
            className={`h-full transition-all duration-300 delay-[600]
            ${
              progress === 80
                ? "bg-[#7FBBF8] w-4/5"
                : progress >= 80
                ? "bg-[#7FBBF8] w-full"
                : ""
            }
               `}
          />
        </div>
        <div className="flex-1 h-[4px]  bg-[#E5ECF5] rounded-full">
          <div
            className={`h-full transition-all duration-300 delay-[900]
            ${progress >= 100 ? "bg-[#7FBBF8] w-full" : ""}
               `}
          />
        </div>
      </div>
      <div className=" rounded-[8px] h-[534px]">
        <div className="max-w-[353px] mx-auto relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
