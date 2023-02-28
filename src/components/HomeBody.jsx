import React from "react";
import Container from "./Container";
import friends from "../assets/images/friends.svg";
import friendsHover from "../assets/images/friendsHover.svg";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckBadgeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import { MdAccountBalance } from "react-icons/md";

import airtel from "../assets/images/airtel.svg";
import glo from "../assets/images/glo.svg";
import etisalat from "../assets/images/9mobile.svg";
import mtn from "../assets/images/MTN.svg";
import electricity from "../assets/images/electricity.svg";
import comingSoon from "../assets/images/coming-soon.svg";
import RecentTransactions from "./RecentTransactions";

const BgCard = ({ iconBg, icon, title, desc, product, tag }) => {
  return (
    <div className="inline-flex items-center justify-center w-[190px] h-[46px] py-2.5 pl-2.5 pr-4 bg-white shadow-[2px_30px_50px_0px_#0000000D] rounded-lg gap-2.5 font-inter">
      <div
        className={`h-7 w-7 rounded-full flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>

      <div className="flex-1 flex justify-between">
        <div className="space-y-1">
          <p className="text-[7.5px] font-medium leading-3">{title}</p>
          <p className="text-[8px] font-bold text-gray-500">{desc}</p>
        </div>
        <div className="space-y-1 flex flex-col items-end">
          <p className="text-[7.5px] font-semibold leading-3 text-[#8D8D8D]">
            {product}
          </p>

          <p className="bg-[#45B6A8] px-2 py-[2px] text-white uppercase text-[6px] rounded-full">
            {tag}
          </p>
        </div>
      </div>
    </div>
  );
};

const HomeBody = () => {
  return (
    <Container>
      <div className="h-[24px]" />
      <div className="flex w-full gap-6">
        <div className="w-[42%] self-start bg-white border border-[#E5ECF5] rounded-[20px] p-7 space-y-6">
          <p className="text-base font-medium leading-normal">Quick action</p>

          <div className="w-full bg-blue50 rounded-lg p-5 group cursor-pointer relative overflow-hidden">
            <div
              className="
            transition duration-500 ease-in-out
            flex opacity-0 group-hover:opacity-100 absolute w-full h-full bg-blue150 left-0 top-0 justify-between items-center pr-4 pl-6 z-10"
            >
              <img src={friendsHover} alt="" className="relative w-3/4 " />

              <div
                className="shadow-[10px_5px_20px_0px_#74747433] 
              h-[42px] w-[42px] rounded-full bg-[#5DADEC] justify-center items-center flex "
              >
                <ArrowRightIcon className="h-6 text-white" />
              </div>
            </div>
            <img
              src={friends}
              alt=""
              className="relative -left-[30px] -top-[15px]"
            />

            <div className="h-4" />
            <div className="flex gap-2.5">
              <p className="text-base font-medium leading-normal text-grey500">
                Transfer to friends
              </p>
              <div className="rounded-full flex bg-green500 gap-1 px-2 py-1 items-center">
                <p className="text-xs  font-semibold italic text-white font-inter">
                  {" "}
                  NEW{" "}
                </p>
                <CheckBadgeIcon className="h-4 text-green150" />
              </div>
            </div>
          </div>

          {/* First Row  */}
          <div className="flex w-full gap-5">
            {/* Data */}
            <div className="flex-1 p-4 bg-purple25 rounded-[6px] cursor-pointer relative group overflow-hidden">
              <div
                className="transition duration-500 ease-in-out
            flex opacity-0 group-hover:opacity-100 absolute w-full h-full bg-purple100 left-0 top-0 justify-between items-center "
              >
                <div className="relative w-full h-full p-4">
                  <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-purple300 rounded-full relative z-20">
                    <ArrowRightIcon className="h-5 text-white font-bold" />
                  </div>
                  <div className="absolute rotate-[3.8deg] left-[15%] z-10">
                    <BgCard
                      iconBg="bg-orange50"
                      icon={<img src={airtel} alt="" />}
                      tag="corporate"
                      title="080 4615 7180"
                      product="Airtel"
                      desc="10gb"
                    />
                  </div>
                  <div className="absolute -rotate-[5.95deg] top-[60%] left-[30%]">
                    <BgCard
                      iconBg="bg-green50"
                      icon={<img src={glo} alt="" />}
                      tag="SME"
                      title="080 4615 7180"
                      product="Glo"
                      desc="40gb"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-purple300 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4437 12.0099C20.4437 14.2438 19.5563 16.3863 17.9766 17.9659C16.397 19.5455 14.2546 20.4329 12.0207 20.4329M20.4437 12.0099C20.4437 9.776 19.5563 7.63358 17.9766 6.05396C16.397 4.47434 14.2546 3.58691 12.0207 3.58691M20.4437 12.0099H3.59766M12.0207 20.4329C9.78674 20.4329 7.64432 19.5455 6.0647 17.9659C4.48508 16.3863 3.59766 14.2438 3.59766 12.0099M12.0207 20.4329C13.5714 20.4329 14.8283 16.6613 14.8283 12.0099C14.8283 7.35855 13.5714 3.58691 12.0207 3.58691M12.0207 20.4329C10.4699 20.4329 9.213 16.6613 9.213 12.0099C9.213 7.35855 10.4699 3.58691 12.0207 3.58691M3.59766 12.0099C3.59766 9.776 4.48508 7.63358 6.0647 6.05396C7.64432 4.47434 9.78674 3.58691 12.0207 3.58691"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="h-12" />
              <p className="text-sm font-medium leading-normal text-grey500">
                Purchase Data
              </p>
            </div>

            {/* Airtime */}
            <div className="flex-1 p-4 bg-[#EDFEF7] rounded-[6px] cursor-pointer relative group overflow-hidden">
              <div
                className="transition duration-500 ease-in-out
            flex opacity-0 group-hover:opacity-100 absolute w-full h-full bg-[#CCFFE9] left-0 top-0 justify-between items-center "
              >
                <div className="relative w-full h-full p-4">
                  <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-[#00CC74] rounded-full relative z-20">
                    <ArrowRightIcon className="h-5 text-white font-bold" />
                  </div>
                  <div className="absolute rotate-[3.8deg] left-[15%] z-10">
                    <BgCard
                      iconBg="bg-[#E3EFDC]"
                      icon={<img src={etisalat} alt="" />}
                      tag="corporate"
                      title="080 4615 7180"
                      product="9mobile"
                      desc="₦5000"
                    />
                  </div>
                  <div className="absolute -rotate-[5.95deg] top-[60%] left-[30%]">
                    <BgCard
                      iconBg="bg-[#FEBB01]"
                      icon={<img src={mtn} alt="" />}
                      tag="SME"
                      title="081 3615 3100"
                      product="Glo"
                      desc="₦3000"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-[#00CC74] rounded-full">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_2795_359426"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="25"
                  >
                    <rect
                      x="0.015625"
                      y="0.00976562"
                      width="24"
                      height="24"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_2795_359426)">
                    <path
                      d="M20.0156 16.5098C19.8656 16.3598 19.7866 16.1638 19.7786 15.9218C19.77 15.6804 19.8323 15.4681 19.9656 15.2848C20.3156 14.8181 20.5823 14.3054 20.7656 13.7468C20.949 13.1888 21.0406 12.6098 21.0406 12.0098C21.0406 11.4098 20.949 10.8304 20.7656 10.2718C20.5823 9.71377 20.3156 9.20143 19.9656 8.73477C19.8323 8.55143 19.7656 8.3431 19.7656 8.10977C19.7656 7.87643 19.849 7.67643 20.0156 7.50977C20.249 7.27643 20.5196 7.1681 20.8276 7.18477C21.1363 7.20143 21.3823 7.32643 21.5656 7.55977C22.049 8.1931 22.4156 8.88877 22.6656 9.64677C22.9156 10.4054 23.0406 11.1931 23.0406 12.0098C23.0406 12.8264 22.9156 13.6141 22.6656 14.3728C22.4156 15.1308 22.049 15.8264 21.5656 16.4598C21.3823 16.6931 21.1363 16.8181 20.8276 16.8348C20.5196 16.8514 20.249 16.7431 20.0156 16.5098ZM17.4906 13.9848C17.3573 13.8514 17.2783 13.6764 17.2536 13.4598C17.2283 13.2431 17.2656 13.0181 17.3656 12.7848C17.4156 12.6514 17.4573 12.5221 17.4906 12.3968C17.524 12.2721 17.5406 12.1431 17.5406 12.0098C17.5406 11.8764 17.524 11.7471 17.4906 11.6218C17.4573 11.4971 17.4156 11.3681 17.3656 11.2348C17.2656 11.0014 17.2283 10.7764 17.2536 10.5598C17.2783 10.3431 17.3573 10.1681 17.4906 10.0348C17.7573 9.7681 18.0533 9.65577 18.3786 9.69777C18.7033 9.7391 18.9406 9.90143 19.0906 10.1848C19.2406 10.4681 19.3533 10.7598 19.4286 11.0598C19.5033 11.3598 19.5406 11.6764 19.5406 12.0098C19.5406 12.3431 19.5033 12.6598 19.4286 12.9598C19.3533 13.2598 19.2406 13.5514 19.0906 13.8348C18.9406 14.1181 18.7033 14.2804 18.3786 14.3218C18.0533 14.3638 17.7573 14.2514 17.4906 13.9848ZM7.01562 23.0098C6.46563 23.0098 5.99496 22.8141 5.60362 22.4228C5.21162 22.0308 5.01562 21.5598 5.01562 21.0098V3.00977C5.01562 2.45977 5.21162 1.98877 5.60362 1.59677C5.99496 1.20543 6.46563 1.00977 7.01562 1.00977H17.0156C17.5656 1.00977 18.0366 1.20543 18.4286 1.59677C18.82 1.98877 19.0156 2.45977 19.0156 3.00977V7.00977H17.0156V6.00977H7.01562V18.0098H17.0156V17.0098H19.0156V21.0098C19.0156 21.5598 18.82 22.0308 18.4286 22.4228C18.0366 22.8141 17.5656 23.0098 17.0156 23.0098H7.01562Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="h-12" />
              <p className="text-sm font-medium leading-normal text-grey500">
                Purchase Airtime
              </p>
            </div>

            {/* Electricity */}
            <div className="flex-1 p-4 bg-[#EFF7FD] rounded-[6px] cursor-pointer relative group overflow-hidden">
              <div
                className="transition duration-500 ease-in-out
            flex opacity-0 group-hover:opacity-100 absolute w-full h-full bg-[#CEE6F9] left-0 top-0 justify-between items-center "
              >
                <div className="relative w-full h-full p-4">
                  <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-[#5DADEC] rounded-full relative z-20">
                    <ArrowRightIcon className="h-5 text-white font-bold" />
                  </div>
                  <div className="absolute w-full scale-[200%] -bottom-[25%] left-0">
                    <img src={electricity} alt="" />
                  </div>
                </div>
              </div>
              <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-[#5DADEC] rounded-full">
                <BoltIcon className="h-5 text-white" />
              </div>
              <div className="h-12" />
              <p className="text-sm font-medium leading-normal text-grey500">
                Electricity
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className="flex w-full gap-5">
            {/* Send Money */}
            <div className="flex-1 p-4 bg-[#ECF8F6] rounded-[6px] cursor-pointer relative group overflow-hidden">
              <div
                className="transition duration-500 ease-in-out
            flex opacity-0 group-hover:opacity-100 absolute w-full h-full bg-[#C7E9E5] left-0 top-0 justify-between items-center "
              >
                <div className="relative w-full h-full p-4">
                  <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-[#45B6A8] rounded-full relative z-20">
                    <ArrowRightIcon className="h-5 text-white font-bold" />
                  </div>
                  <div className="absolute left-[35%] z-10">
                    <BgCard
                      iconBg="bg-purple25"
                      icon={<MdAccountBalance className="text-purple300" />}
                      tag="Successful"
                      title="0159955102"
                      product="₦100,000"
                      desc={<span className="text-[#EF9645]">GTB</span>}
                    />
                  </div>
                  <div className="absolute -rotate-[5.95deg] top-[60%] left-[15%]">
                    <BgCard
                      iconBg="bg-purple25"
                      icon={<MdAccountBalance className="text-purple300" />}
                      tag="Successful"
                      title="2120039012"
                      product="₦100,000"
                      desc={<span className="text-[#EF9645]">UBA</span>}
                    />
                  </div>
                </div>
              </div>
              <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-[#45B6A8] rounded-full">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.25 12.4922V20.2422M5.75 20.2422V12.4922M9.75 20.2422V12.4922M14.25 20.2422V12.4922"
                    stroke="#F2F7FA"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0012 3.46191L20.9243 11.4619H3.07812L12.0012 3.46191Z"
                    fill="#F2F7FA"
                    stroke="#F2F7FA"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.42969 20.2422H20.573"
                    stroke="#F2F7FA"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="h-12" />
              <p className="text-sm font-medium leading-normal text-grey500">
                Send money
              </p>
            </div>

            {/* Cable Subscription */}
            <div className="flex-1 p-4 bg-[#FDF4EC] rounded-[6px] cursor-pointer relative group overflow-hidden">
              <div
                className="transition duration-500 ease-in-out
            flex opacity-0 group-hover:opacity-100 absolute w-full h-full bg-[#FADFC7] left-0 top-0 justify-between items-center "
              >
                <div className="relative w-full h-full p-4">
                  <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-[#F2AB6A] rounded-full relative z-20">
                    <ArrowRightIcon className="h-5 text-white font-bold" />
                  </div>
                  <div className="absolute  left-[15%] z-10">
                    <BgCard
                      iconBg="bg-[#EFF7FD]"
                      icon={
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.21354 11.556C0.892708 11.556 0.617958 11.4419 0.389292 11.2136C0.161014 10.9849 0.046875 10.7102 0.046875 10.3893V8.05599C0.046875 7.73516 0.161014 7.46041 0.389292 7.23174C0.617958 7.00346 0.892708 6.88932 1.21354 6.88932H7.04687V5.13932C7.04687 4.97404 7.10287 4.83541 7.21487 4.72341C7.32649 4.61179 7.46493 4.55599 7.63021 4.55599C7.79549 4.55599 7.93393 4.61179 8.04554 4.72341C8.15754 4.83541 8.21354 4.97404 8.21354 5.13932V6.88932H9.38021C9.70104 6.88932 9.97579 7.00346 10.2045 7.23174C10.4327 7.46041 10.5469 7.73516 10.5469 8.05599V10.3893C10.5469 10.7102 10.4327 10.9849 10.2045 11.2136C9.97579 11.4419 9.70104 11.556 9.38021 11.556H1.21354ZM2.96354 9.22266C2.96354 9.05738 2.90774 8.91893 2.79612 8.80732C2.68412 8.69532 2.54549 8.63932 2.38021 8.63932C2.21493 8.63932 2.07629 8.69532 1.96429 8.80732C1.85268 8.91893 1.79687 9.05738 1.79687 9.22266C1.79687 9.38793 1.85268 9.52638 1.96429 9.63799C2.07629 9.74999 2.21493 9.80599 2.38021 9.80599C2.54549 9.80599 2.68412 9.74999 2.79612 9.63799C2.90774 9.52638 2.96354 9.38793 2.96354 9.22266ZM5.00521 9.22266C5.00521 9.05738 4.9494 8.91893 4.83779 8.80732C4.72579 8.69532 4.58715 8.63932 4.42187 8.63932C4.2566 8.63932 4.11815 8.69532 4.00654 8.80732C3.89454 8.91893 3.83854 9.05738 3.83854 9.22266C3.83854 9.38793 3.89454 9.52638 4.00654 9.63799C4.11815 9.74999 4.2566 9.80599 4.42187 9.80599C4.58715 9.80599 4.72579 9.74999 4.83779 9.63799C4.9494 9.52638 5.00521 9.38793 5.00521 9.22266ZM6.46354 9.80599C6.62882 9.80599 6.76746 9.74999 6.87946 9.63799C6.99107 9.52638 7.04687 9.38793 7.04687 9.22266C7.04687 9.05738 6.99107 8.91893 6.87946 8.80732C6.76746 8.69532 6.62882 8.63932 6.46354 8.63932C6.29826 8.63932 6.15982 8.69532 6.04821 8.80732C5.93621 8.91893 5.88021 9.05738 5.88021 9.22266C5.88021 9.38793 5.93621 9.52638 6.04821 9.63799C6.15982 9.74999 6.29826 9.80599 6.46354 9.80599ZM6.18646 3.69557C6.06979 3.57891 6.01399 3.43793 6.01904 3.27266C6.02371 3.10738 6.0941 2.98585 6.23021 2.90807C6.43438 2.78168 6.65565 2.68446 6.89404 2.61641C7.13204 2.54835 7.37743 2.51432 7.63021 2.51432C7.88299 2.51432 8.12857 2.54835 8.36696 2.61641C8.60496 2.68446 8.82604 2.78168 9.03021 2.90807C9.16632 2.98585 9.23924 3.10485 9.24896 3.26507C9.25868 3.42568 9.20035 3.56918 9.07396 3.69557C8.96701 3.80252 8.8309 3.86338 8.66562 3.87816C8.50035 3.89254 8.33021 3.86085 8.15521 3.78307C8.07743 3.74418 7.99479 3.71735 7.90729 3.70257C7.81979 3.68818 7.72743 3.68099 7.63021 3.68099C7.53299 3.68099 7.44062 3.68818 7.35312 3.70257C7.26562 3.71735 7.18299 3.74418 7.10521 3.78307C6.93021 3.86085 6.76007 3.89254 6.59479 3.87816C6.42951 3.86338 6.2934 3.80252 6.18646 3.69557ZM4.74271 2.25182C4.62604 2.13516 4.56771 1.99905 4.56771 1.84349C4.56771 1.68793 4.6309 1.56155 4.75729 1.46432C5.1559 1.15321 5.59826 0.910156 6.08438 0.735156C6.57049 0.560156 7.08576 0.472656 7.63021 0.472656C8.17465 0.472656 8.68993 0.560156 9.17604 0.735156C9.66215 0.910156 10.1045 1.15321 10.5031 1.46432C10.6295 1.56155 10.6927 1.68793 10.6927 1.84349C10.6927 1.99905 10.6344 2.13516 10.5177 2.25182C10.4108 2.35877 10.2772 2.4171 10.117 2.42682C9.95635 2.43655 9.80799 2.3928 9.67187 2.29557C9.38021 2.09141 9.0619 1.93099 8.71696 1.81432C8.37163 1.69766 8.00937 1.63932 7.63021 1.63932C7.25104 1.63932 6.88879 1.69766 6.54346 1.81432C6.19851 1.93099 5.88021 2.09141 5.58854 2.29557C5.45243 2.3928 5.30426 2.43655 5.14404 2.42682C4.98343 2.4171 4.84965 2.35877 4.74271 2.25182Z"
                            fill="#5DADEC"
                          />
                        </svg>
                      }
                      tag="Jinja"
                      title="117654328"
                      product="GoTV"
                      desc="₦5000"
                    />
                  </div>
                  <div className="absolute  top-[60%] left-[30%]">
                    <BgCard
                      iconBg="bg-[#EFF7FD]"
                      icon={
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.21354 11.556C0.892708 11.556 0.617958 11.4419 0.389292 11.2136C0.161014 10.9849 0.046875 10.7102 0.046875 10.3893V8.05599C0.046875 7.73516 0.161014 7.46041 0.389292 7.23174C0.617958 7.00346 0.892708 6.88932 1.21354 6.88932H7.04687V5.13932C7.04687 4.97404 7.10287 4.83541 7.21487 4.72341C7.32649 4.61179 7.46493 4.55599 7.63021 4.55599C7.79549 4.55599 7.93393 4.61179 8.04554 4.72341C8.15754 4.83541 8.21354 4.97404 8.21354 5.13932V6.88932H9.38021C9.70104 6.88932 9.97579 7.00346 10.2045 7.23174C10.4327 7.46041 10.5469 7.73516 10.5469 8.05599V10.3893C10.5469 10.7102 10.4327 10.9849 10.2045 11.2136C9.97579 11.4419 9.70104 11.556 9.38021 11.556H1.21354ZM2.96354 9.22266C2.96354 9.05738 2.90774 8.91893 2.79612 8.80732C2.68412 8.69532 2.54549 8.63932 2.38021 8.63932C2.21493 8.63932 2.07629 8.69532 1.96429 8.80732C1.85268 8.91893 1.79687 9.05738 1.79687 9.22266C1.79687 9.38793 1.85268 9.52638 1.96429 9.63799C2.07629 9.74999 2.21493 9.80599 2.38021 9.80599C2.54549 9.80599 2.68412 9.74999 2.79612 9.63799C2.90774 9.52638 2.96354 9.38793 2.96354 9.22266ZM5.00521 9.22266C5.00521 9.05738 4.9494 8.91893 4.83779 8.80732C4.72579 8.69532 4.58715 8.63932 4.42187 8.63932C4.2566 8.63932 4.11815 8.69532 4.00654 8.80732C3.89454 8.91893 3.83854 9.05738 3.83854 9.22266C3.83854 9.38793 3.89454 9.52638 4.00654 9.63799C4.11815 9.74999 4.2566 9.80599 4.42187 9.80599C4.58715 9.80599 4.72579 9.74999 4.83779 9.63799C4.9494 9.52638 5.00521 9.38793 5.00521 9.22266ZM6.46354 9.80599C6.62882 9.80599 6.76746 9.74999 6.87946 9.63799C6.99107 9.52638 7.04687 9.38793 7.04687 9.22266C7.04687 9.05738 6.99107 8.91893 6.87946 8.80732C6.76746 8.69532 6.62882 8.63932 6.46354 8.63932C6.29826 8.63932 6.15982 8.69532 6.04821 8.80732C5.93621 8.91893 5.88021 9.05738 5.88021 9.22266C5.88021 9.38793 5.93621 9.52638 6.04821 9.63799C6.15982 9.74999 6.29826 9.80599 6.46354 9.80599ZM6.18646 3.69557C6.06979 3.57891 6.01399 3.43793 6.01904 3.27266C6.02371 3.10738 6.0941 2.98585 6.23021 2.90807C6.43438 2.78168 6.65565 2.68446 6.89404 2.61641C7.13204 2.54835 7.37743 2.51432 7.63021 2.51432C7.88299 2.51432 8.12857 2.54835 8.36696 2.61641C8.60496 2.68446 8.82604 2.78168 9.03021 2.90807C9.16632 2.98585 9.23924 3.10485 9.24896 3.26507C9.25868 3.42568 9.20035 3.56918 9.07396 3.69557C8.96701 3.80252 8.8309 3.86338 8.66562 3.87816C8.50035 3.89254 8.33021 3.86085 8.15521 3.78307C8.07743 3.74418 7.99479 3.71735 7.90729 3.70257C7.81979 3.68818 7.72743 3.68099 7.63021 3.68099C7.53299 3.68099 7.44062 3.68818 7.35312 3.70257C7.26562 3.71735 7.18299 3.74418 7.10521 3.78307C6.93021 3.86085 6.76007 3.89254 6.59479 3.87816C6.42951 3.86338 6.2934 3.80252 6.18646 3.69557ZM4.74271 2.25182C4.62604 2.13516 4.56771 1.99905 4.56771 1.84349C4.56771 1.68793 4.6309 1.56155 4.75729 1.46432C5.1559 1.15321 5.59826 0.910156 6.08438 0.735156C6.57049 0.560156 7.08576 0.472656 7.63021 0.472656C8.17465 0.472656 8.68993 0.560156 9.17604 0.735156C9.66215 0.910156 10.1045 1.15321 10.5031 1.46432C10.6295 1.56155 10.6927 1.68793 10.6927 1.84349C10.6927 1.99905 10.6344 2.13516 10.5177 2.25182C10.4108 2.35877 10.2772 2.4171 10.117 2.42682C9.95635 2.43655 9.80799 2.3928 9.67187 2.29557C9.38021 2.09141 9.0619 1.93099 8.71696 1.81432C8.37163 1.69766 8.00937 1.63932 7.63021 1.63932C7.25104 1.63932 6.88879 1.69766 6.54346 1.81432C6.19851 1.93099 5.88021 2.09141 5.58854 2.29557C5.45243 2.3928 5.30426 2.43655 5.14404 2.42682C4.98343 2.4171 4.84965 2.35877 4.74271 2.25182Z"
                            fill="#5DADEC"
                          />
                        </svg>
                      }
                      tag="Compact plus"
                      title="117654328"
                      product="DsTV"
                      desc="₦3500"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-[#F2AB6A] rounded-full">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_2795_359447"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="25"
                  >
                    <rect
                      x="0.015625"
                      y="0.00976562"
                      width="24"
                      height="24"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_2795_359447)">
                    <path
                      d="M5.01562 21.0098C4.46563 21.0098 3.99462 20.8141 3.60262 20.4228C3.21129 20.0308 3.01562 19.5598 3.01562 19.0098V15.0098C3.01562 14.4598 3.21129 13.9888 3.60262 13.5968C3.99462 13.2054 4.46563 13.0098 5.01562 13.0098H15.0156V9.00977H17.0156V13.0098H19.0156C19.5656 13.0098 20.0366 13.2054 20.4286 13.5968C20.82 13.9888 21.0156 14.4598 21.0156 15.0098V19.0098C21.0156 19.5598 20.82 20.0308 20.4286 20.4228C20.0366 20.8141 19.5656 21.0098 19.0156 21.0098H5.01562ZM8.01562 17.0098C8.01562 16.7264 7.91996 16.4891 7.72862 16.2978C7.53662 16.1058 7.29896 16.0098 7.01562 16.0098C6.73229 16.0098 6.49463 16.1058 6.30263 16.2978C6.11129 16.4891 6.01562 16.7264 6.01562 17.0098C6.01562 17.2931 6.11129 17.5304 6.30263 17.7218C6.49463 17.9138 6.73229 18.0098 7.01562 18.0098C7.29896 18.0098 7.53662 17.9138 7.72862 17.7218C7.91996 17.5304 8.01562 17.2931 8.01562 17.0098ZM11.5156 17.0098C11.5156 16.7264 11.42 16.4891 11.2286 16.2978C11.0366 16.1058 10.799 16.0098 10.5156 16.0098C10.2323 16.0098 9.99496 16.1058 9.80363 16.2978C9.61163 16.4891 9.51562 16.7264 9.51562 17.0098C9.51562 17.2931 9.61163 17.5304 9.80363 17.7218C9.99496 17.9138 10.2323 18.0098 10.5156 18.0098C10.799 18.0098 11.0366 17.9138 11.2286 17.7218C11.42 17.5304 11.5156 17.2931 11.5156 17.0098ZM14.0156 18.0098C14.299 18.0098 14.5366 17.9138 14.7286 17.7218C14.92 17.5304 15.0156 17.2931 15.0156 17.0098C15.0156 16.7264 14.92 16.4891 14.7286 16.2978C14.5366 16.1058 14.299 16.0098 14.0156 16.0098C13.7323 16.0098 13.495 16.1058 13.3036 16.2978C13.1116 16.4891 13.0156 16.7264 13.0156 17.0098C13.0156 17.2931 13.1116 17.5304 13.3036 17.7218C13.495 17.9138 13.7323 18.0098 14.0156 18.0098ZM14.2656 8.25977L12.8156 6.80977C13.249 6.40977 13.7323 6.0931 14.2656 5.85977C14.799 5.62643 15.3823 5.50977 16.0156 5.50977C16.649 5.50977 17.2323 5.62643 17.7656 5.85977C18.299 6.0931 18.7823 6.40977 19.2156 6.80977L17.7656 8.25977C17.5323 8.02643 17.27 7.8431 16.9786 7.70977C16.6866 7.57643 16.3656 7.50977 16.0156 7.50977C15.6656 7.50977 15.345 7.57643 15.0536 7.70977C14.7616 7.8431 14.499 8.02643 14.2656 8.25977ZM11.7656 5.75977L10.3656 4.35977C11.099 3.62643 11.949 3.05143 12.9156 2.63477C13.8823 2.2181 14.9156 2.00977 16.0156 2.00977C17.1156 2.00977 18.149 2.2181 19.1156 2.63477C20.0823 3.05143 20.9323 3.62643 21.6656 4.35977L20.2656 5.75977C19.7156 5.20977 19.078 4.78077 18.3526 4.47277C17.628 4.1641 16.849 4.00977 16.0156 4.00977C15.1823 4.00977 14.4033 4.1641 13.6786 4.47277C12.9533 4.78077 12.3156 5.20977 11.7656 5.75977Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="h-12" />
              <p className="text-sm font-medium leading-normal text-grey500">
                Cable Subscription
              </p>
            </div>

            {/* Invest */}
            <div className="flex-1 p-4 bg-[#F1F7EE] rounded-[6px] cursor-not-allowed relative group overflow-hidden">
              <div
                className="transition duration-500 ease-in-out
            flex opacity-0 group-hover:opacity-100 absolute w-full h-full bg-[#D5E7CB] left-0 top-0 justify-between items-center "
              >
                <div className="relative w-full h-full p-4">
                  <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-[#73B051] rounded-full relative z-20">
                    <LockClosedIcon className="h-5 text-white font-bold" />
                  </div>
                  <div className="absolute w-full  bottom-[10%] left-3">
                    <img src={comingSoon} alt="" />
                  </div>
                </div>
              </div>
              <div className="h-[42px] w-[42px] self-start inline-flex items-center justify-center bg-[#73B051] rounded-full">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1953 8.49219C11.5986 8.49219 11.0263 8.72924 10.6043 9.1512C10.1824 9.57315 9.94531 10.1455 9.94531 10.7422C9.94531 11.3389 10.1824 11.9112 10.6043 12.3332C11.0263 12.7551 11.5986 12.9922 12.1953 12.9922C12.792 12.9922 13.3643 12.7551 13.7863 12.3332C14.2083 11.9112 14.4453 11.3389 14.4453 10.7422C14.4453 10.1455 14.2083 9.57315 13.7863 9.1512C13.3643 8.72924 12.792 8.49219 12.1953 8.49219Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69531 5.86719C1.69531 4.83119 2.53531 3.99219 3.57031 3.99219H20.8203C21.8553 3.99219 22.6953 4.83219 22.6953 5.86719V15.6172C22.6953 16.6532 21.8553 17.4922 20.8203 17.4922H3.57031C3.32408 17.4922 3.08027 17.4437 2.85278 17.3495C2.6253 17.2552 2.4186 17.1171 2.24449 16.943C2.07038 16.7689 1.93227 16.5622 1.83804 16.3347C1.74381 16.1072 1.69531 15.8634 1.69531 15.6172V5.86719ZM8.44531 10.7422C8.44531 9.74763 8.8404 8.7938 9.54366 8.09054C10.2469 7.38728 11.2008 6.99219 12.1953 6.99219C13.1899 6.99219 14.1437 7.38728 14.847 8.09054C15.5502 8.7938 15.9453 9.74763 15.9453 10.7422C15.9453 11.7367 15.5502 12.6906 14.847 13.3938C14.1437 14.0971 13.1899 14.4922 12.1953 14.4922C11.2008 14.4922 10.2469 14.0971 9.54366 13.3938C8.8404 12.6906 8.44531 11.7367 8.44531 10.7422ZM18.9453 9.99219C18.7464 9.99219 18.5556 10.0712 18.415 10.2119C18.2743 10.3525 18.1953 10.5433 18.1953 10.7422V10.7502C18.1953 11.1642 18.5313 11.5002 18.9453 11.5002H18.9533C19.1522 11.5002 19.343 11.4212 19.4836 11.2805C19.6243 11.1399 19.7033 10.9491 19.7033 10.7502V10.7422C19.7033 10.5433 19.6243 10.3525 19.4836 10.2119C19.343 10.0712 19.1522 9.99219 18.9533 9.99219H18.9453ZM4.69531 10.7422C4.69531 10.5433 4.77433 10.3525 4.91498 10.2119C5.05563 10.0712 5.2464 9.99219 5.44531 9.99219H5.45331C5.65222 9.99219 5.84299 10.0712 5.98364 10.2119C6.12429 10.3525 6.20331 10.5433 6.20331 10.7422V10.7502C6.20331 10.9491 6.12429 11.1399 5.98364 11.2805C5.84299 11.4212 5.65222 11.5002 5.45331 11.5002H5.44531C5.2464 11.5002 5.05563 11.4212 4.91498 11.2805C4.77433 11.1399 4.69531 10.9491 4.69531 10.7502V10.7422Z"
                    fill="white"
                  />
                  <path
                    d="M2.44531 18.9922C2.2464 18.9922 2.05563 19.0712 1.91498 19.2119C1.77433 19.3525 1.69531 19.5433 1.69531 19.7422C1.69531 19.9411 1.77433 20.1319 1.91498 20.2725C2.05563 20.4132 2.2464 20.4922 2.44531 20.4922C7.84531 20.4922 13.0753 21.2142 18.0453 22.5672C19.2353 22.8912 20.4453 22.0092 20.4453 20.7472V19.7422C20.4453 19.5433 20.3663 19.3525 20.2256 19.2119C20.085 19.0712 19.8942 18.9922 19.6953 18.9922H2.44531Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="h-12" />
              <div className="flex gap-1">
                <p className="text-sm font-medium leading-normal text-grey500">
                  Invest
                </p>
                <LockClosedIcon className="h-4 text-[#00AA61]" />
              </div>
            </div>
          </div>
        </div>

        <RecentTransactions/>
      </div>
    </Container>
  );
};

export default HomeBody;
