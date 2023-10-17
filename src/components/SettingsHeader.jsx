import {
  CheckBadgeIcon,
  ChevronRightIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import HeaderCardLayout from "./HeaderCardLayout";
import Referral from "./overlays/Referral";
import { useSelector } from "react-redux";
import { copyText } from "../utils/copyText";
import CopiedIcon from "./Inputs/CopiedIcon";
import convertToSentenceCase from "../utils/convertToSentence";
import { UserCircle } from "phosphor-react";

const SettingsHeader = () => {
  const [toggleReferral, setToggleReferral] = useState(false);
  const user = useSelector((state) => state.user.user);
  const virtualAccount = useSelector((state) => state.virtualAccount.data);
  return (
    <>
      <Referral setToggle={setToggleReferral} toggle={toggleReferral} />
      <HeaderCardLayout>
        {/* buttons */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-5">
              <div className="h-[72px] w-[72px] rounded-full bg-white border-2 border-green600 p-1.5">
                <div className="rounded-full w-full h-full bg-[#FAD5CC]"></div>
              </div>

              <div>
                <p className="text-2xl font-semibold font-clash">
                  {user?.firstName} {user?.lastName}
                </p>
                <div className="flex gap-2 items-center">
                  <p className="text-xl font-semibold font-inter">
                    {user.username}
                  </p>
                  <CheckBadgeIcon className="h-5 text-green700" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 items-center px-3 py-1 border rounded-full border-neutral200 h-fit">
            <p className="text-sm font-medium text-grey200">
              {convertToSentenceCase(user?.title)}
            </p>
            <UserCircle weight="fill" className="text-xl text-blue25" />
          </div>
        </div>

        {/* Final Breadcrumb */}
        <div className="flex items-center mt-8 justify-between">
          <div className="flex gap-4 font-inter items-center">
            <div className="text-blue25 gap-1.5 flex items-center">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_2243_44430"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="19"
                  height="19"
                >
                  <rect
                    x="0.5"
                    y="0.976562"
                    width="18"
                    height="18"
                    fill="#EFF7FD"
                  />
                </mask>
                <g mask="url(#mask0_2243_44430)">
                  <path
                    d="M4.60969 14.3828C4.37876 14.3828 4.18506 14.3108 4.02858 14.1668C3.87264 14.0233 3.79467 13.8453 3.79467 13.6328V9.86406C3.79467 9.65156 3.87264 9.47656 4.02858 9.33906C4.18506 9.20156 4.37876 9.13281 4.60969 9.13281C4.84061 9.13281 5.03431 9.20456 5.19079 9.34806C5.34673 9.49206 5.4247 9.67031 5.4247 9.88281V13.6516C5.4247 13.8641 5.34673 14.0391 5.19079 14.1766C5.03431 14.3141 4.84061 14.3828 4.60969 14.3828ZM9.4998 14.3828C9.26888 14.3828 9.07545 14.3108 8.91951 14.1668C8.76302 14.0233 8.68478 13.8453 8.68478 13.6328V9.86406C8.68478 9.65156 8.76302 9.47656 8.91951 9.33906C9.07545 9.20156 9.26888 9.13281 9.4998 9.13281C9.73072 9.13281 9.92442 9.20456 10.0809 9.34806C10.2368 9.49206 10.3148 9.67031 10.3148 9.88281V13.6516C10.3148 13.8641 10.2368 14.0391 10.0809 14.1766C9.92442 14.3141 9.73072 14.3828 9.4998 14.3828ZM2.14425 17.3828C1.91333 17.3828 1.72316 17.3108 1.57374 17.1668C1.42432 17.0233 1.34961 16.8453 1.34961 16.6328C1.34961 16.4203 1.42785 16.2423 1.58433 16.0988C1.74028 15.9548 1.93371 15.8828 2.16463 15.8828H16.8553C17.0863 15.8828 17.2764 15.9548 17.4259 16.0988C17.5753 16.2423 17.65 16.4203 17.65 16.6328C17.65 16.8453 17.5717 17.0233 17.4153 17.1668C17.2593 17.3108 17.0659 17.3828 16.835 17.3828H2.14425ZM14.3899 14.3828C14.159 14.3828 13.9656 14.3108 13.8096 14.1668C13.6531 14.0233 13.5749 13.8453 13.5749 13.6328V9.86406C13.5749 9.65156 13.6531 9.47656 13.8096 9.33906C13.9656 9.20156 14.159 9.13281 14.3899 9.13281C14.6208 9.13281 14.8143 9.20456 14.9702 9.34806C15.1267 9.49206 15.2049 9.67031 15.2049 9.88281V13.6516C15.2049 13.8641 15.1267 14.0391 14.9702 14.1766C14.8143 14.3141 14.6208 14.3828 14.3899 14.3828ZM10.2333 2.72031L17.0999 5.87031C17.2764 5.95781 17.4123 6.07956 17.5074 6.23556C17.6024 6.39206 17.65 6.56406 17.65 6.75156C17.65 7.00156 17.5516 7.21081 17.355 7.37931C17.1577 7.54831 16.9233 7.63281 16.6516 7.63281H2.36838C2.09671 7.63281 1.859 7.54831 1.65524 7.37931C1.45149 7.21081 1.34961 7.00156 1.34961 6.75156C1.34961 6.57656 1.39389 6.40781 1.48246 6.24531C1.57048 6.08281 1.70958 5.96406 1.89975 5.88906L8.76628 2.72031C8.9972 2.62031 9.24171 2.57031 9.4998 2.57031C9.75789 2.57031 10.0024 2.62031 10.2333 2.72031Z"
                    fill="#7FBBF8"
                  />
                </g>
              </svg>

              <p className="text-base font-medium font-inter ">
                Account details
              </p>

              <ChevronRightIcon className="h-5 w-5 " />
            </div>
            <p className="text-base font-medium leading-normal text-neutral300">
              {virtualAccount.data && virtualAccount.data.accountNumber}
            </p>
            <p className="text-base font-medium leading-normal text-neutral300">
              {virtualAccount.data && virtualAccount.data.bank_name}
            </p>
          </div>

          <div className="inline-flex space-x-4 items-start justify-start">
            <div className="flex space-x-4 items-center justify-center px-4 py-2.5 border rounded-full border-neutral200">
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
            <div
              className="flex space-x-2 items-center justify-center px-4 py-2.5 border rounded-full border-neutral200 cursor-pointer"
              onClick={() => {
                setToggleReferral(!toggleReferral);
              }}
            >
              <p className="text-sm font-medium leading-normal text-grey400">
                See referrals
              </p>
              <UserGroupIcon className=" h-[20px] text-blue25" />
            </div>
          </div>
        </div>
      </HeaderCardLayout>
    </>
  );
};

export default SettingsHeader;
