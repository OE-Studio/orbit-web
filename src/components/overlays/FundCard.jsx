import { CreditCardIcon } from "@heroicons/react/24/solid";
import NumericKeypad from "../NumericKeypad";
import SideBarWrapper from "../SideBarWrapper";
import CloseButton from "../Inputs/CloseButton";

const FundCard = ({ toggle, setToggle }) => {
  return (
    <SideBarWrapper toggle={toggle}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <CreditCardIcon className=" h-[20px] text-blue25" />
          <p className="text-sm font-medium leading-normal text-grey400">
            Fund Card
          </p>
        </div>
        <CloseButton
            onClick={() => {
              setToggle(!toggle);
            }}
        />
        
      </div>
      <div className="h-9" />
      <div className="h-full overflow-y-scroll pb-14">
        {/* box */}
        <div className="bg-white  rounded-[8px] p-6">
          <div className="w-[353px] mx-auto">
          <div className="bg-neutral100 rounded-[16px] space-y-5 pt-6 overflow-hidden">
            <div className="flex justify-center flex-1 text-3xl font-clash gap-2.5 mx-auto font-medium">
              <p className="text-[#64748B]">$ </p> <p>500</p>
            </div>
            <div className="flex items-center">
              <div className="w-[90px] h-[1px] bg-white " />
              <div className="flex space-x-2 items-center py-1 pl-2.5 pr-1 bg-white shadow-[0px_10px_32px_0px_#71879C1A] rounded-full">
                <p className="text-xs font-medium  text-[#333333]">$ = ₦750</p>
                <div className="flex flex-1 items-center justify-center h-full px-4 py-2.5 bg-gray-200 rounded-full">
                  <p className="text-xs text-gray-900">See our rate</p>
                </div>
              </div>
              <div className="flex-1 h-[1px] bg-white " />
            </div>
            <div className="flex justify-center flex-1 text-3xl font-clash gap-2.5 mx-auto font-medium">
              <p className="text-[#64748B]">₦</p> <p>75,000</p>
            </div>
            <div className="bg-neutral200 flex-1 flex p-4 border-t border-white justify-center">
              <p className="text-xs leading-tight text-center text-gray-500">
                Max card balance: $10,000
              </p>
            </div>
          </div>
          <div className="h-6"/>
          <NumericKeypad />
          <div className="h-6"/>
          <button className="rounded-full bg-green700 p-2.5 w-full text-white font-clash font-medium">
            Continue
          </button>
          </div>

        </div>
      </div>
    </SideBarWrapper>
  );
};

export default FundCard;
