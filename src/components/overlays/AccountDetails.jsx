import {
  DocumentDuplicateIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import OverlayWrapper from "../OvelayWrapper";
import { X } from "phosphor-react";
import { copyText } from "../../utils/copyText";

const BankCard = () => {
  // const virtualAccount = useSelector((state) => state.virtualAccount.data);

  return (
    <div className="w-full bg-neutral100 rounded-lg font-inter">
      <div className="p-6 space-y-2.5 rounded-lg border border-neutral200 bg-white">
        <div className="space-y-1">
          <p className="text-sm font-medium text-neutral300 font-inter">
            Bank Name
          </p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-inter text-grey-600">Wema Bank</p>
            <div
              className="cursor-pointer"
              onClick={() => {
                copyText("");
              }}
            >
              <DocumentDuplicateIcon className=" h-[20px] text-blue25" />
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-neutral300 font-inter">
            Account number
          </p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-inter text-grey-600">0159955102</p>
            <div
              className="cursor-pointer"
              onClick={() => {
                copyText("");
              }}
            >
              <DocumentDuplicateIcon className=" h-[20px] text-blue25" />
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-neutral300 font-inter">
            Bank Name
          </p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-inter text-grey-600">Leye Ogunsanya</p>
            <div
              className="cursor-pointer"
              onClick={() => {
                copyText("");
              }}
            >
              <DocumentDuplicateIcon className=" h-[20px] text-blue25" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 flex text-orange500 gap-3">
        <InformationCircleIcon className="h-5" />
        <p>Transaction fee of ₦5</p>
      </div>
    </div>
  );
};

const AccountDetails = ({ toggle, setToggle }) => {
  return (
    <OverlayWrapper toggle={toggle}>
      {/* Header */}
      <div className="p-6 space-y-5">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="text-xl font-clash font-medium">Your account</p>
            <p className="text-sm font-inter leading-normal text-grey150">
              Fund your wallet with any of these banks
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
          <BankCard />
          <BankCard />
          <BankCard />
        </div>
      </div>
    </OverlayWrapper>
  );
};

export default AccountDetails;