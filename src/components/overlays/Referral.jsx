import {
  DocumentDuplicateIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import referralsData from "../../data/ReferralData";
import SideBarWrapper from "../SideBarWrapper";

const Referral = ({ toggle, setToggle }) => {
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
        <div
          className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <XMarkIcon className=" w-6 h-6" />
        </div>
      </div>
      <div className="h-9" />
      <div className="h-full overflow-y-scroll pb-14 ">
        {/* box */}
        <div className="bg-white border border-[#E5ECF5] rounded-[8px] p-6">
          <p className="text-grey150">Total referral bonus earned: </p>
          <div className="inline-flex space-x-1 justify-start font-clash mt-2.5">
            <p className="text-4xl font-semibold text-gray-900 font-clash">₦</p>
            <p className="font-semibold text-gray-900 text-4xl">5,000.00</p>
          </div>
        </div>
        <div className="h-9" />
        {/* Referral Link */}
        <div className="inline-flex space-x-4 items-center justify-center px-4 py-2.5 border rounded-full border-neutral200">
          <p className="text-sm font-medium leading-normal text-blue25">
            Referral link
          </p>
          <p className="text-base font-medium leading-normal text-neutral200">
            |
          </p>
          <p className="text-sm font-medium leading-normal text-grey500">
            www.egcmart.com/ref/1YGH2456
          </p>
          <DocumentDuplicateIcon className=" h-[20px] text-blue25" />
        </div>
        <div className="h-[42px]" />
        {/* Table */}
        <div className="mr-5">
        <div className="border border-[#E5ECF5] rounded-[8px] w-full overflow-hidden ">
          <table className="w-full ">
            <tr className="bg-neutral100 w-full">
              <th className="w-1/4 py-[17.5px] px-3 text-left font-medium text-grey400 text-sm">
                Username
              </th>
              <th className="w-1/2 py-[17.5px] px-3 text-left font-medium text-grey400 text-sm">
                Date Joined
              </th>
              <th className="w-1/4 py-[17.5px] px-3 text-right font-medium text-grey400 text-sm">
                Bonus
              </th>
            </tr>

            {referralsData.map((item, index) => {
              return (
                <tr className="text-grey200 text-sm">
                  <td className="w-1/4 py-4 px-3 text-left">{item.username}</td>
                  <td className="w-1/2 py-4 px-3 text-left">{item.date}</td>
                  <td className="w-1/4 py-4 px-3 text-right">{item.bonus}</td>
                </tr>
              );
            })}
          </table>
        </div>
        </div>
      
      </div>
    </SideBarWrapper>
  );
};

export default Referral;
