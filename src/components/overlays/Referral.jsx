import {
  
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import SideBarWrapper from "../SideBarWrapper";
import empty from "../../assets/empty-state/emptyReferrals.svg";
import { useEffect, useState } from "react";
import { GetAllReferrals } from "../settings-outlet/SettingsApi";
import { useSelector } from "react-redux";
import { copyText } from "../../utils/copyText";
import CloseButton from "../Inputs/CloseButton";
import CopiedIcon from "../Inputs/CopiedIcon";

export const EmptyReferrals = () => {
  return (
    <div className="h-[350px] center flex-col">
      <img src={empty} alt="" />
      <div className="h-4"></div>
      <p className="text-neutral300">No referrals yet</p>
    </div>
  );
};

const Referral = ({ toggle, setToggle }) => {
  const [allReferrals, setAllReferrals] = useState(null);
  const user = useSelector((state) => state.user.user);

  const getAllRefferrals = async () => {
    const response = await GetAllReferrals();

    setAllReferrals(response.myReferrals);
  };

  useEffect(() => {
    getAllRefferrals();
  }, []);

  return (
    <SideBarWrapper toggle={toggle}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <p className="text-sm font-medium leading-normal text-grey400">
            My Referrals
          </p>
          <UserGroupIcon className=" h-[20px] text-blue25" />
        </div>
        <CloseButton
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      <div className="h-9" />
      <div className="h-full overflow-y-scroll pb-14 ">
        {/* box */}
        <div className="bg-white  rounded-[8px] p-6">
          <p className="text-grey150">Total referral bonus earned: </p>
          <div className="inline-flex space-x-1 justify-start font-clash mt-2.5">
            <p className="text-4xl font-semibold text-gray-900 font-clash">₦</p>
            <p className="font-semibold text-gray-900 text-4xl">0.00</p>
          </div>
        </div>
        <div className="h-9" />
        {/* Referral Link */}
        <div className="inline-flex space-x-4 items-center justify-center px-4 py-2.5 border rounded-full border-neutral200">
          <p className="text-sm font-medium leading-normal text-blue25">
            Referral Code
          </p>
          <p className="text-base font-medium leading-normal text-neutral200">
            |
          </p>
          <p className="text-sm font-medium leading-normal text-grey500">
            {user.referralCode ? (
              user.referralCode
            ) : (
              <span className="text-grey100">no referral code</span>
            )}
          </p>
          <CopiedIcon
            copyMethod={() => {
              let referralCode =
                user.referralCode !== null ? user.referralCode : "";
              copyText(referralCode);
            }}
          />
        </div>
        <div className="h-[42px]" />
        {/* Table */}
        <div className="mr-5">
          <div className="border border-[#E5ECF5] rounded-[8px] w-full overflow-hidden ">
            <table className="w-full ">
              <thead className="bg-neutral100 w-full">
                <td className="w-1/4 py-[17.5px] px-3 text-left font-medium text-grey400 text-sm">
                  Username
                </td>
                <td className="w-1/2 py-[17.5px] px-3 text-left font-medium text-grey400 text-sm">
                  Date Joined
                </td>
                <td className="w-1/4 py-[17.5px] px-3 text-right font-medium text-grey400 text-sm">
                  Bonus
                </td>
              </thead>
              <tbody>
                {allReferrals && allReferrals.length > 0 ? (
                  allReferrals.map((item, index) => {
                    return (
                      <tr key={index} className="text-grey200 text-sm">
                        <td className="w-1/4 py-4 px-3 text-left">
                          {item.username}
                        </td>
                        <td className="w-1/2 py-4 px-3 text-left">
                          {item.date_joined}
                        </td>
                        <td className="w-1/4 py-4 px-3 text-right">
                          {item.bonus}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="w-[100%] relative h-[350px]">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 ">
                      <EmptyReferrals />
                    </div>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SideBarWrapper>
  );
};

export default Referral;
