import {
  CheckBadgeIcon,
  CreditCardIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { MdAccountBalance } from "react-icons/md";
import React, { useState } from "react";
import DeleteCard from "../popup/DeleteCard";
import CardAddedSuccess from "../popup/CardAddedSuccess";
import AddCard from "../overlays/AddCard";
import AddBank from "../overlays/AddBank";

const BankSettings = () => {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [toggleCardSuccess, setToggleCardSuccess] = useState(false);
  const [toggleAddCard, setToggleAddCard] = useState(false);
  const [toggleAddBank, setToggleAddBank] = useState(false);

  return (
    <>
      <DeleteCard toggle={toggleDelete} setToggle={setToggleDelete} />
      <CardAddedSuccess
        toggle={toggleCardSuccess}
        setToggle={setToggleCardSuccess}
      />

      <AddCard toggle={toggleAddCard} setToggle={setToggleAddCard} />

      <AddBank toggle={toggleAddBank} setToggle={setToggleAddBank} />

      <div className="w-[556px] space-y-8">
        <p className="text-base font-medium leading-tight text-gray-400">
          Card Information
        </p>

        {/* Cards Section */}
        <div className="space-y-4">
          {/* Master Card */}
          <div
            className="w-[353px] h-[173px] rounded-[16px] p-3 border border-neutral200 cursor-pointer"
            onClick={() => {
              setToggleDelete(true);
            }}
          >
            <div className="flex w-full justify-between items-center mb-3">
              <div className="flex gap-3 items-center">
                <div className="px-1 py-2 rounded-[6px] bg-neutral200">
                  <svg
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2370_407615)">
                      <path
                        d="M18.5392 9.393V9.17969H18.4836L18.4193 9.32608L18.3554 9.17969H18.2997V9.393H18.3392V9.23231L18.3993 9.37096H18.4401L18.5002 9.23195V9.393H18.5393H18.5392ZM18.1867 9.393V9.21622H18.2578V9.18022H18.0762V9.21622H18.1473V9.393H18.1864H18.1867Z"
                        fill="#F79410"
                      />
                      <path
                        d="M12.2252 10.3073H7.41797V1.66797H12.2253L12.2252 10.3073Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M7.72417 5.9866C7.72417 4.23412 8.54472 2.673 9.82249 1.66694C8.85529 0.904292 7.659 0.490374 6.42729 0.492193C3.39313 0.492193 0.933594 2.95209 0.933594 5.9866C0.933594 9.02112 3.39313 11.481 6.42729 11.481C7.65903 11.4829 8.85535 11.0689 9.82258 10.3063C8.5449 9.30038 7.72417 7.73917 7.72417 5.9866Z"
                        fill="#EB001B"
                      />
                      <path
                        d="M18.7117 5.9866C18.7117 9.02112 16.2522 11.481 13.218 11.481C11.9861 11.4828 10.7897 11.0689 9.82227 10.3063C11.1004 9.30021 11.9209 7.73917 11.9209 5.9866C11.9209 4.23403 11.1004 2.673 9.82227 1.66694C10.7897 0.904314 11.9861 0.490405 13.2179 0.492193C16.2521 0.492193 18.7116 2.95209 18.7116 5.9866"
                        fill="#F79E1B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2370_407615">
                        <rect
                          width="19"
                          height="11"
                          fill="white"
                          transform="translate(0.0625 0.492188)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-base leading-normal text-gray-500 font-inter">
                  ****8844
                </p>
              </div>
              <CreditCardIcon className="h-5 text-neutral200" />
            </div>
            <div className="py-[14px]">
              <p className="text-sm font-medium text-[#64748B] uppercase">
                Ogunsanya Oyeleye Gbenga
              </p>
              <p className="text-sm font-medium text-[#A0ABBB]">09/26</p>
            </div>
            <div className="flex w-full justify-between items-center mt-3">
              <div className="p-2 rounded-full items-center bg-grey5 flex gap-1.5">
                <p className="text-xs font-medium leading-none text-purple500">
                  Verified
                </p>
                <CheckBadgeIcon className="h-[14px] text-purple500" />
              </div>
              <div className="bg-[#F2F7FA] h-6 w-6 rounded-full flex items-center justify-center">
                <PencilIcon className="h-[15px] text-[#73ACE7]" />
              </div>
            </div>
          </div>

          {/* Visa Card */}
          <div
            className="w-[353px] h-[173px] rounded-[16px] p-3 border border-neutral200 cursor-pointer"
            onClick={() => {
              setToggleDelete(true);
            }}
          >
            <div className="flex w-full justify-between items-center mb-3">
              <div className="flex gap-3 items-center">
                <div className="px-1 py-2 rounded-[6px] bg-neutral200">
                  <svg
                    width="17"
                    height="6"
                    viewBox="0 0 17 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.45316 5.60783H6.09072L6.94222 0.374758H8.30481L7.45316 5.60783ZM4.94455 0.374758L3.64566 3.97411L3.49196 3.19903L3.4921 3.19931L3.03366 0.845936C3.03366 0.845936 2.97822 0.374758 2.38736 0.374758H0.24004L0.214844 0.463366C0.214844 0.463366 0.871498 0.599988 1.64 1.06151L2.82368 5.60797H4.24324L6.41085 0.374758H4.94455ZM15.6608 5.60783H16.9119L15.8211 0.374618H14.7259C14.2202 0.374618 14.097 0.764607 14.097 0.764607L12.065 5.60783H13.4852L13.7693 4.83051H15.5013L15.6608 5.60783ZM14.1616 3.75672L14.8775 1.79837L15.2802 3.75672H14.1616ZM12.1715 1.63319L12.366 0.50942C12.366 0.50942 11.766 0.28125 11.1406 0.28125C10.4644 0.28125 8.85885 0.576751 8.85885 2.01366C8.85885 3.36561 10.7433 3.3824 10.7433 4.09253C10.7433 4.80266 9.05301 4.67542 8.49518 4.22761L8.29263 5.40262C8.29263 5.40262 8.90099 5.69812 9.83047 5.69812C10.7602 5.69812 12.1628 5.21672 12.1628 3.9065C12.1628 2.54587 10.2615 2.41919 10.2615 1.82763C10.2616 1.23593 11.5885 1.31193 12.1715 1.63319Z"
                      fill="#2566AF"
                    />
                  </svg>
                </div>
                <p className="text-base leading-normal text-gray-500 font-inter">
                  ****5846
                </p>
              </div>
              <CreditCardIcon className="h-5 text-neutral200" />
            </div>
            <div className="py-[14px]">
              <p className="text-sm font-medium text-[#64748B] uppercase">
                Ogunsanya Oyeleye Gbenga
              </p>
              <p className="text-sm font-medium text-[#A0ABBB]">09/26</p>
            </div>
            <div className="flex w-full justify-between items-center mt-3">
              <div className="p-2 rounded-full items-center bg-grey5 flex gap-1.5">
                <p className="text-xs font-medium leading-none text-purple500">
                  Verified
                </p>
                <CheckBadgeIcon className="h-[14px] text-purple500" />
              </div>
              <div className="bg-[#F2F7FA] h-6 w-6 rounded-full flex items-center justify-center">
                <PencilIcon className="h-[15px] text-[#73ACE7]" />
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="flex items-center px-4 py-2.5 bg-green700 text-white font-clash rounded-full gap-3 cursor-pointer"
          onClick={() => {
            setToggleAddCard(true);
          }}
        >
          <PlusIcon className="h-[20px]" />
          <p>Add Card</p>
        </button>

        {/* Divider */}
        <div className="h-[1px] w-full bg-neutral200" />

        <p className="text-base font-medium leading-tight text-gray-400">
          Bank Information
        </p>

        {/* Banks Section */}
        <div className="space-y-4">
          {/* GtBank Account*/}
          <div className="w-[353px] h-[173px] rounded-[16px] p-3 border border-neutral200">
            <div className="flex w-full justify-between items-center mb-3">
              <div className="flex gap-3 items-center">
                <div className="px-1 py-2 rounded-[6px] bg-neutral200 h-7 w-7 flex items-center justify-center">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2370_407688)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.201172 1.82048C0.201172 1.10846 0.77838 0.53125 1.4904 0.53125H15.6325C16.3445 0.53125 16.9217 1.10846 16.9217 1.82048V16.164C16.9217 16.876 16.3445 17.4532 15.6325 17.4532H1.4904C0.77838 17.4532 0.201172 16.876 0.201172 16.164V1.82048Z"
                        fill="#D94F00"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.71383 3.8125H14.0002V8.10746H9.71383V3.8125ZM4.5319 10.28V10.7002H5.27065V12.923H5.78004V10.6832H6.46785V10.263L4.5319 10.2803V10.28ZM4.15144 10.8009V10.3807C3.74278 10.1959 3.27282 10.1401 2.79164 10.3807C2.00252 10.7335 1.97432 12.4807 2.76372 12.8223C3.21699 13.052 4.16238 12.9455 4.25763 12.7437V11.3606H3.31772V11.7247H3.73156V12.4528C2.37175 13.1136 2.11994 9.93838 4.15144 10.8009ZM7.2964 11.7022H7.78305C8.18595 11.7192 8.29244 12.4807 7.76636 12.4749H7.2964V11.7022ZM7.2964 10.6328H7.78305C8.18595 10.7056 8.04062 11.3048 7.76636 11.3215H7.2964V10.6328ZM6.79277 10.2242V12.9006H8.13012C8.81276 12.6542 8.84096 11.596 8.13012 11.4838C8.78484 11.4113 8.81851 10.2072 7.68808 10.2072L6.79277 10.2242ZM9.15408 10.9744V11.3719C9.51209 11.2711 10.29 10.9911 10.2172 11.5848C9.53453 11.5399 9.07004 11.6631 8.99176 12.0884C8.86312 13.0071 9.84794 13.0966 10.2621 12.643V12.8614H10.732V11.2487C10.6146 10.7278 9.837 10.6607 9.15408 10.9744ZM9.55123 12.0105C9.65771 11.8703 9.99903 11.8758 10.2284 11.9431V12.2959C9.85369 12.6988 9.24934 12.5144 9.55151 12.0102L9.55123 12.0105ZM11.7059 11.4504C11.8291 11.316 12.4838 11.0639 12.5845 11.4504V12.8727H13.1103V11.3664C12.9984 10.739 12.3995 10.6271 11.6722 11.0527V10.8176H11.1744V12.8839H11.7001L11.7059 11.4504ZM14.7611 10.7951L14.073 11.7189L14.8005 12.8557L15.4328 12.839L14.6327 11.7471L15.3545 10.8118L14.7614 10.7951H14.7611ZM13.5023 10.1174H14.0226V12.8557H13.502V10.1177L13.5023 10.1174Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.71484 3.8125H14.0012V8.10746H9.71484V3.8125Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2370_407688">
                        <rect
                          width="16.7205"
                          height="16.922"
                          fill="white"
                          transform="translate(0.201172 0.53125)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-base leading-normal text-gray-500 font-inter">
                  Guaranty Trust Bank
                </p>
              </div>
              <MdAccountBalance className="h-5 text-neutral200" />
            </div>
            <div className="py-[14px]">
              <p className="text-sm font-medium text-[#64748B] uppercase">
                Ogunsanya Oyeleye Gbenga
              </p>
              <p className="text-sm font-medium text-[#A0ABBB]">09/26</p>
            </div>
            <div className="flex w-full justify-between items-center mt-3">
              <div className="p-2 rounded-full items-center bg-grey5 flex gap-1.5">
                <p className="text-xs font-medium leading-none text-purple500">
                  Verified
                </p>
                <CheckBadgeIcon className="h-[14px] text-purple500" />
              </div>
              <div className="bg-[#F2F7FA] h-6 w-6 rounded-full flex items-center justify-center">
                <PencilIcon className="h-[15px] text-[#73ACE7]" />
              </div>
            </div>
          </div>

          {/* Access Account*/}
          <div className="w-[353px] h-[173px] rounded-[16px] p-3 border border-neutral200">
            <div className="flex w-full justify-between items-center mb-3">
              <div className="flex gap-3 items-center">
                <div className="px-1 py-2 rounded-[6px] bg-neutral200 h-7 w-7p a">
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2370_407717)">
                      <path
                        d="M18.2837 10.5319L8.4549 0.703125V2.21173L16.7751 10.5319L16.7783 10.5351L9.57137 17.742L9.56269 17.7333L2.36052 10.5319L2.35421 10.5256L5.8898 6.99003H4.35516L0.816406 10.5288L0.819562 10.5319L9.55953 19.2719L9.56269 19.2688L18.2916 10.5398L18.2837 10.5319Z"
                        fill="#FE6309"
                      />
                      <path
                        d="M8.45196 3.25391V4.76251L14.2284 10.5389L9.57474 15.1926L4.91716 10.5358L4.91085 10.5295L8.44644 6.99386H6.9118L3.37305 10.5326L3.3762 10.5358L8.80387 15.9634L9.5629 16.7225L10.3346 15.9516L15.7417 10.5437L8.45196 3.25391Z"
                        fill="#FE6309"
                      />
                      <path
                        d="M13.1953 10.5352L10.313 7.64974L9.54611 6.88281L8.79181 7.63712L5.89453 10.532L8.79339 13.4309L9.55243 14.1899L10.3225 13.4191L13.2032 10.5431L13.1953 10.5352ZM9.56584 12.6655L7.43549 10.5352L7.42917 10.5289L9.554 8.40404L11.6844 10.5344L9.56584 12.6655Z"
                        fill="#FE6309"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2370_407717">
                        <rect
                          width="17.5951"
                          height="18.6209"
                          fill="white"
                          transform="translate(0.765625 0.679688)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-base leading-normal text-gray-500 font-inter">
                  ****5846
                </p>
              </div>
              <CreditCardIcon className="h-5 text-neutral200" />
            </div>
            <div className="py-[14px]">
              <p className="text-sm font-medium text-[#64748B] uppercase">
                Ogunsanya Oyeleye Gbenga
              </p>
              <p className="text-sm font-medium text-[#A0ABBB]">09/26</p>
            </div>
            <div className="flex w-full justify-between items-center mt-3">
              <div className="p-2 rounded-full items-center bg-grey5 flex gap-1.5">
                <p className="text-xs font-medium leading-none text-purple500">
                  Verified
                </p>
                <CheckBadgeIcon className="h-[14px] text-purple500" />
              </div>
              <div className="bg-[#F2F7FA] h-6 w-6 rounded-full flex items-center justify-center">
                <PencilIcon className="h-[15px] text-[#73ACE7]" />
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="flex items-center px-4 py-2.5 bg-green700 text-white font-clash rounded-full gap-3 cursor-pointer"
          onClick={() => {
            setToggleAddBank(true);
          }}
        >
          <PlusIcon className="h-[20px]" />
          <p>Add Bank</p>
        </button>

        <div className="h-20" />
      </div>
    </>
  );
};

export default BankSettings;
