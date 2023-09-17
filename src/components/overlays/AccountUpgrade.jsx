import OverlayWrapper from "../OvelayWrapper";
import { X } from "phosphor-react";
import { Tier1Card, Tier2Card, Tier3Card } from "../kyc/KycStatus";
import { useSelector } from "react-redux";
import { useState } from "react";
import Tier2Verification from "../kyc/Tier2Verification";

const AccountUpgrade = ({ toggle, setToggle }) => {
  const [toggleTier2Verification, setToggleTier2Verification] = useState(false);
  const user = useSelector((state) => state.user.user);

  const level = user.title;

  return (
    <>
      {toggleTier2Verification && (
        <Tier2Verification
          setToggle={setToggleTier2Verification}
          toggle={toggleTier2Verification}
        />
      )}

      {toggle && (
        <OverlayWrapper toggle={toggle} customStyle={"w-[633px]"}>
          {/* Header */}
          <div className="p-6 space-y-5">
            <div className="flex justify-between items-center">
              <div className="">
                <p className="text-xl font-clash font-medium">
                  Upgrade your Limit
                </p>
                <p className="text-sm font-inter leading-normal text-grey150">
                  Answer a few question, submit your ID and get verified.
                </p>
              </div>
              <div
                className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <X className=" w-6 h-6" />
              </div>
            </div>
            <div className="h-full overflow-y-scroll max-h-[600px] space-y-6">
              <div className={`${level === "tier1" && "opacity-50"}   `}>
                <Tier1Card />
              </div>
              <div
                className={`${level === "tier2" && "opacity-50"} ${
                  level === "tier1" ? "cursor-pointer" : "cursor-not-allowed"
                }`}
                onClick={() => {
                  setToggleTier2Verification(true);
                  setToggle(!toggle);
                }}
              >
                <Tier2Card />
              </div>
              <div
                className={`${level === "tier3" && "opacity-50"} ${
                  level === "tier2" ? "cursor-pointer" : "cursor-not-allowed"
                }`}
              >
                <Tier3Card />
              </div>
            </div>
          </div>
        </OverlayWrapper>
      )}
    </>
  );
};

export default AccountUpgrade;
