import React, { useState } from "react";
import kycImg from "../../assets/images/kycImage.svg";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import KycWrapper from "./KycWrapper"



const KycStatus = () => {
  const [toggleKycFrame, setToggleKycFrame] = useState(false);


  return (
    <>
    <KycWrapper
        setToggle={setToggleKycFrame}
        toggle={toggleKycFrame}
      />
    <div className="h-[150px] w-full bg-blue50 relative p-5 rounded-lg overflow-hidden">
      <p className="w-[200px] font-inter font-semibold text-[#41494F]">
        Experience Orbit
      </p>
      <div className="h-2"></div>
      <p className="w-[200px] font-inter text-xs text-[#41494F] tracking-wide leading-[150%]">
        Verify your identity to access secure financial services.
      </p>
      <div className="h-4"></div>
      <button className="bg-white px-3 py-1.5 gap-1.5 flex items-center rounded-full"
       onClick={()=>{
        setToggleKycFrame(true)
      }}
      >
        <p className="text-blue400 text-xs">Start Verification</p>
        <ChevronRightIcon className="h-[14px] text-[#669DD5]" />
      </button>

      <div className="absolute -top-5 -right-6">
        <img src={kycImg} alt="" />
      </div>
    </div>
    </>
  );
};

export default KycStatus;
