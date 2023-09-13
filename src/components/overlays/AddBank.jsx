import {
  ChevronDownIcon,
  ChevronLeftIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { MdAccountBalance } from "react-icons/md";

import SideBarWrapper from "../SideBarWrapper";

const AddBank = ({ toggle, setToggle }) => {
  return (
    <SideBarWrapper toggle={toggle}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div
          className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <ChevronLeftIcon className=" w-6 h-6" />
        </div>
        <div className="flex gap-2">
          <MdAccountBalance className=" h-[20px] text-blue25" />
          <p className="text-sm font-medium leading-normal text-grey400">
            Add Bank
          </p>
        </div>
      </div>
      <div className="h-9" />
      <div className="h-full overflow-y-scroll pb-14">
        {/* box */}
        <div className="bg-white border border-[#E5ECF5] rounded-[8px] p-6 space-y-8">
          {/* Input */}

          <div className="border-[2px] focus-within:border-[#5DADEC] border-transparent w-full bg-neutral100 rounded-lg p-2.5 flex justify-between items-center">
            <div>
              <label htmlFor="bank-name" className="text-xs text-text100">
                Bank name
              </label>
              <input
                type="text"
                name="bank-name"
                id="bank-name"
                className="w-full text-neutral300 text-base bg-transparent outline-none"
                placeholder="Select bank name"
              />
            </div>

            <div className="h-7 w-7 rounded-lg flex items-center justify-center">
              <ChevronDownIcon className="h-5" />
            </div>
          </div>

          <div className="border-[2px] focus-within:border-[#5DADEC] border-transparent w-full bg-neutral100 rounded-lg p-2.5">
            <label htmlFor="account-number" className="text-xs text-text100">
              Account number
            </label>
            <input
              type="text"
              name="account-number"
              id="account-number"
              className="w-full text-neutral300 text-base bg-transparent outline-none"
              placeholder="0000000000"
            />
          </div>

          <div className="border-[2px] focus-within:border-[#5DADEC] border-transparent w-full bg-neutral100 rounded-lg p-2.5">
            <label htmlFor="account-name" className="text-xs text-text100">
              Account name
            </label>
            <input
              type="text"
              name="account-name"
              id="account-name"
              className="w-full text-neutral300 text-base bg-transparent outline-none"
              placeholder="John Doe"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex items-center px-8 py-2.5 bg-green700 text-white font-clash rounded-full gap-3 font-medium"
          >
            Add bank
          </button>

          {/* Toaster */}

          <div className="rounded-lg bg-teal50 p-2.5 w-full flex space-x-2.5 items-center">
            <InformationCircleIcon className="h-6 text-teal500" />
            <p className="text-sm text-gray-500">
              Account name and bank beneficiary name must be the same.
            </p>
          </div>
        </div>
      </div>
    </SideBarWrapper>
  );
};

export default AddBank;
